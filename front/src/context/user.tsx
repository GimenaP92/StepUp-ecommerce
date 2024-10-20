"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import {
    IUserContextType,
    IUserResponse,
    IOrderResponse,
    ILoginUser,
    IRegisterUSer,
    IProduct, // Asegúrate de tener esta interfaz definida
} from "@/interfaces/interfaces";
import { fetchLoginUser, fetchRegisterUser } from "../../utils/fetchUser";
import { fetchUserOrders } from "../../utils/fetchOrders";

export const UserContext = createContext<IUserContextType>({
    user: null,
    setUser: () => {},
    isLogged: false,
    setIsLogged: () => {},
    signIn: async () => false,
    signUp: async () => false,
    getOrders: async () => {},
    setOrders: () => {},
    orders: [],
    logOut: () => {},
    cartItems: [],
    addToCart: () => {}, 
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUserResponse | null>(null);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [orders, setOrders] = useState<IOrderResponse[]>([]);
    const [cartItems, setCartItems] = useState<IProduct[]>([]); // Estado del carrito

    // LOGIN DE USUARIO
    const signIn = async (credentials: ILoginUser): Promise<boolean> => {
        try {
            const data = await fetchLoginUser(credentials);
            if (data.login) {
                const userData = {
                    login: data.login,
                    token: data.token,
                    user: data.user,
                };
                if (typeof window !== "undefined") {
                    localStorage.setItem("user", JSON.stringify(userData));
                    localStorage.setItem("token", data.token);
                }

                setUser(userData);
                setIsLogged(true);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            return false;
        }
    };

    // REGISTRO DE USUARIO
    const signUp = async (user: IRegisterUSer) => {
        try {
            const data = await fetchRegisterUser(user);
            if (data.id) {
                await signIn({ email: user.email, password: user.password });
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // OBTENER ORDENES DE COMPRA
    const getOrders = useCallback(async () => {
        try {
            const token = typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
            const data = await fetchUserOrders(token);
            setOrders(data);
            localStorage.setItem("orders", JSON.stringify(data));
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
        }
    }, [setOrders]);

    // AGREGAR PRODUCTO AL CARRITO
    const addToCart = (item: IProduct) => {
        setCartItems((prevCart) => {
            const updatedCart = [...prevCart, item];
            if (user) {
                localStorage.setItem(`cartItems_${user.user?.id}`, JSON.stringify(updatedCart));
            }
            return updatedCart;
        });
    };

    // CERRAR SESION DE USUARIO
    const logOut = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem(`cartItems_${user?.user?.id}`); 
            setUser(null);
            setIsLogged(false);
            setCartItems([]); 
        }
    };

    // CARGAR CARRITO DESDE LOCAL STORAGE
    useEffect(() => {
        const loadCart = () => {
            if (user) {
                const storedCart = localStorage.getItem(`cartItems_${user.user?.id}`);
                if (storedCart) {
                    setCartItems(JSON.parse(storedCart));
                }
            }
        };

        loadCart();
    }, [user]);

    // PERSISTENCIA DE SESION
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            const token = localStorage.getItem("token");

            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                    setIsLogged(Boolean(token));
                } catch (error) {
                    console.error("Error parsing stored user:", error);
                    setUser(null);
                    setIsLogged(false);
                }
            } else {
                setUser(null);
                setIsLogged(false);
            }
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLogged,
                setIsLogged,
                signIn,
                signUp,
                getOrders,
                setOrders,
                orders,
                logOut,
                cartItems, 
                addToCart, 
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
