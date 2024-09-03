"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { IUserContextType, IUserResponse, IOrderResponse, ILoginUser, IRegisterUSer } from "@/interfaces/interfaces";
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
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<IUserResponse | null>(null);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [orders, setOrders] = useState<IOrderResponse[]>([]);

    const signIn = async (credentials: ILoginUser): Promise<boolean> => {
        try {
            const data = await fetchLoginUser(credentials);
            if (data.login) {
                if (typeof window !== "undefined") {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", data.token);
                }
                setUser({
                    login: data.login,
                    token: data.token,
                    user: data.user,
                });
                setIsLogged(true);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error during sign in:', error);
            return false;
        }
    };

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

    const getOrders = async () => {
        try {
            const token = typeof window !== "undefined" ? localStorage.getItem("token") || "" : "";
            const data = await fetchUserOrders(token);
            setOrders(data);
            localStorage.setItem("orders", JSON.stringify(data));
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
                 }
    };
    

    const logOut = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser(null);
            setIsLogged(false);
        }
    };

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
                logOut
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
