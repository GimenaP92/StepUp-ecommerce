import React from "react";
import { IProduct } from "@/interfaces/interfaces";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${apiUrl}/products/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products'); 
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
}


export async function fetchProductDetail(id:string): Promise<IProduct> {
    try {
        const response = await fetch(`${apiUrl}/products/${id}`, {
            cache: "no-cache"
        });
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Error fetching product detail:', error);
        throw error;
    }
}