import React from "react";

export interface IProduct {
    id:number;
    name:string;
    description:string;
    price:number;
    stock:number;
    image:string;
    categoryId:number;
}


export interface IProductDetailProps extends IImage {
    id: number;
    description: string;
    price: number;
}
  

export interface ICategory {
    id:number;
    name:string;
    products: IProduct[];
}

export interface IUser {
    id: number;
    name:string;
    email:string;
    address:string;
    phone:string;
    password?:string;
    orders?: IOrderResponse[];
}

export interface ILoginUser {
    email: string;
    password:string;
}

export interface ILoginClientProps {
    setToken: (token: string | null) => void;
  }

export interface IOrderResponse {
    id: number;
    status:string;
    date:Date;
    user:IUser;
    products:IProduct[];
}

export interface ICartComponentProps {
    orders: IOrderResponse[];
}

export interface IRegisterUSer {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export interface ICreateOrder {
    userId: number;
    products: number[];
}

export interface IProductCardProp {
    product: IProduct;
    remove?: () => void;
}

export interface IProductsGridProps {
    products:IProduct[];
}


export interface IButtonProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    disabled?:boolean;
}

export interface ICartContextType {
    addToCart: (product:number) => void,
    removeFromCart: (product: number) => void,
    total: number;
    proceedcheckout: () => void,
    cartItems: IProduct[],
}

export interface IUserResponse {
    login: boolean,
    user: Partial<IUser> | null,
    token:string
}

export interface IUserContextType {
    user: IUserResponse | null;
    setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
    signIn: (credentials: ILoginUser) => Promise<boolean>;
    signUp: (user: IRegisterUSer) => Promise<boolean>;
    getOrders: () => Promise<void>;
    setOrders: (orders: IOrderResponse[]) => void; 
    orders: IOrderResponse[] | [];
    logOut: () => void;
}

export interface IImage {
    src: string,
    alt: string,
    width: number,
    height: number
}
