"use client"
import React from "react";
import {IProductCardProp} from "@/interfaces/interfaces";
import Link from "next/link";
import Button from "../buttons/Button";
import AddToCart from "../buttons/AddToCart";
import ImageProduct from "../Images/ImageProducts";



function ProductCard({ product }: IProductCardProp) {
    return (
      <div className="border shadow-lg border-gray-300 p-4 m-4 rounded-lg max-w-xs">
        <ImageProduct 
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
        />
        <p className="text-sm font-semibold mt-2">Price: ${product.price}</p>
        <Link href={`/products/${product.id}`}>
        <button className="w-1/3 mx-auto text-sm border rounded bg-customBg text-customText my-2 py-2 hover:bg-customHoverButton hover:text-customText">
        Detalles
        </button>
        </Link> 
       <AddToCart id={product.id} />
      </div>
    );
  }
  

export default ProductCard;