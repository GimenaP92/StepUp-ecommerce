"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { ICartContextType, IProduct } from "@/interfaces/interfaces";
import { fetchProductDetail } from "../../utils/fetchProducts";
import { UserContext } from "./user";
import { fetchPostUserOrders } from "../../utils/fetchOrders";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const addItem = async (cartItems: IProduct[], product: number): Promise<IProduct[]> => {
    const existingProduct = cartItems.find((item) => item.id === product);
    if (existingProduct) {
        alert("El producto ya se encuentra agregado al carrito");
        return cartItems;
    }
    const data = await fetchProductDetail(product.toString());
    const updatedCartItems = [...cartItems, data];
    alert("Producto agregado al carrito");
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
    proceedcheckout: async () => {}
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const {  getOrders } = useContext(UserContext);
  
  //AGREGAR AL CARRITO
  const addToCart = async (product: number) => {
    const updatedCart = await addItem(cartItems, product);
    setCartItems(updatedCart);
  };
  
  //ELIMINAR DEL CARRITO
  const removeFromCart = (product: number) => {
      const updatedCart = removeItem(cartItems, product);
      setCartItems(updatedCart);
  };


  //COMPRA DE PRODUCTOS EN EL CARRITO
  const checkout = async (cartItems: IProduct[]) => {
    try {
      const products = cartItems.map((item) => item.id);
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  
      if (!token) {
        alert("No se encontró el token de autenticación");
        return;
      }
  
      const response = await fetchPostUserOrders(products, token);
  
      if (response?.ok) {
        alert("Compra realizada con éxito");
        await getOrders();
        setCartItems([]);
      } else {
        alert("Hubo un error al realizar la compra");
      }
    } catch (error) {
      console.error("Error durante el checkout:", error);
      alert("Hubo un error al realizar la compra");
    }
  };
      
    //ENVIA EL CARRITO ACTUAL AL CHECKOUT
    const proceedcheckout = async (): Promise<void> => {
        try {
          await checkout(cartItems);
        } catch (error) {
          console.error("Error durante el checkout:", error);
          alert("Hubo un error al realizar la compra");
        }
      };
      
      
      //PERSISTENCIA DEL CARRITO
    useEffect(() => {
     if (typeof window !== "undefined") {
     const storedCart = localStorage.getItem("cartItems");
              if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        }
    }, []);

    //ACTUALIZAR EL TOTAL
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
