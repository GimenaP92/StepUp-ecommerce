"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { ICartContextType, IProduct } from "@/interfaces/interfaces";
import { fetchProductDetail } from "../../utils/fetchProducts";
import { UserContext } from "./user";
import { fetchPostUserOrders } from "../../utils/fetchOrders";
import Swal from 'sweetalert2';

const addItem = async (
  cartItems: IProduct[],
  product: number
): Promise<IProduct[]> => {
  const existingProduct = cartItems.find((item) => item.id === product);

  if (existingProduct) {
    await Swal.fire({
      title: 'Producto ya agregado',
      text: 'Este producto ya está en tu carrito.',
      icon: 'info',
      confirmButtonText: 'Entendido',
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'bg-blue-100 rounded-lg shadow-lg',
        confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700',
      },
    });
    return cartItems;
  }

  const data = await fetchProductDetail(product.toString());
  const updatedCartItems = [...cartItems, data];

  await Swal.fire({
    title: 'Producto agregado',
    text: '¡El producto se ha añadido exitosamente!',
    icon: 'success',
    showCancelButton: true,
    cancelButtonText: 'Seguir comprando',
    customClass: {
      popup: 'bg-green-100 rounded-lg shadow-xl',
      confirmButton: 'bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700',
      cancelButton: 'bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-500',
    },
  });

  return updatedCartItems;
};

const removeItem = (cartItems: IProduct[], product: number) => {
  return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
  proceedcheckout: async () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { getOrders } = useContext(UserContext);

  const addToCart = async (product: number) => {
    const updatedCart = await addItem(cartItems, product);
    setCartItems(updatedCart);
  };

  const removeFromCart = (product: number) => {
    const updatedCart = removeItem(cartItems, product);
    setCartItems(updatedCart);
  };

  const checkout = async (cartItems: IProduct[]) => {
    try {
      const products = cartItems.map((item) => item.id);
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (!token) {
        await Swal.fire({
          title: 'Autenticación requerida',
          text: 'Por favor, inicia sesión para completar la compra.',
          icon: 'warning',
          confirmButtonText: 'Entendido',
        });
        return;
      }

      const response = await fetchPostUserOrders(products, token);

      if (response?.ok) {
        await Swal.fire({
          title: 'Compra realizada con éxito',
          text: '¡Gracias por tu compra! Los productos serán enviados pronto.',
          icon: 'success',
          confirmButtonText: 'Entendido',
          customClass: {
            popup: 'bg-green-100 rounded-lg shadow-xl',
            confirmButton: 'bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700',
          },
        });
        await getOrders();
        setCartItems([]);
      } else {
        await Swal.fire({
          title: 'Error en la compra',
          text: 'Hubo un problema al procesar tu pedido.',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo',
        });
      }
    } catch (error) {
      console.error("Error durante el checkout:", error);
      await Swal.fire({
        title: 'Error inesperado',
        text: 'Ocurrió un error al procesar tu compra. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
    }
  };

  const proceedcheckout = async (): Promise<void> => {
    try {
      await checkout(cartItems);
    } catch (error) {
      console.error("Error durante el checkout:", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalAmount);

    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, total, addToCart, removeFromCart, proceedcheckout }}
    >
      {children}
    </CartContext.Provider>
  );
};
