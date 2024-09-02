"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { ICartContextType, IProduct } from "@/interfaces/interfaces";
import { fetchProductDetail } from "../../utils/fetchProducts";
import { UserContext } from "./user";

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
    proceedcheckout:() => {}
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);
    const { isLogged } = useContext(UserContext);


    const checkout = async (cartItems: IProduct[]) => {
        try {
            const products = cartItems.map((item) => item.id);
            const token = localStorage.getItem("token");
    
            const response = await fetch("http://localhost:3000/orders", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ products }),
            });
    
            if (response.ok) {
                alert("Compra realizada con éxito");
            } else {
                alert("Hubo un error al realizar la compra");
            }
        } catch (error) {
            console.error("Error durante el checkout:", error);
            alert("Hubo un error al realizar la compra");
        }
    };
    
    const proceedcheckout = () => {
        checkout(cartItems);
        setCartItems([])
    }

    useEffect(() => {
        
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cartItems");
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        }
    }, []);

    useEffect(() => {
        // Actualizar el total cuando cambien los items del carrito
        const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalAmount);

        // Guardar el carrito actualizado en localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = async (product: number) => {
        const updatedCart = await addItem(cartItems, product);
        setCartItems(updatedCart);
    };

    const removeFromCart = (product: number) => {
        const updatedCart = removeItem(cartItems, product);
        setCartItems(updatedCart);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, total, addToCart, removeFromCart, proceedcheckout }}
        >
            {children}
        </CartContext.Provider>
    );
};
