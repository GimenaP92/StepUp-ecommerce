"use client";
import React from "react";
import { IProductCardProp } from "@/interfaces/interfaces";
import Link from "next/link";
import AddToCart from "../buttons/AddToCart";
import ImageProduct from "../Images/ImageProducts";

function ProductCard({ product }: IProductCardProp) {
  return (
    <div className="border shadow-lg border-gray-300 p-2 rounded-lg max-w-full w-max h-min"> {/* Cambié p-4 a p-2 */}
      <ImageProduct 
        src={product.image}
        alt={product.name}
        width={300} // Ajusta el tamaño de la imagen si es necesario
        height={300} // Ajusta el tamaño de la imagen si es necesario
      />
      <p className="text-sm font-semibold mt-1">Price: ${product.price}</p> {/* Cambié mt-2 a mt-1 */}
      <Link href={`/products/${product.id}`}>
        <button className="w-1/3 mx-auto text-sm border rounded bg-customBg text-customText my-1 py-1 hover:bg-customHoverButton hover:text-customText"> {/* Cambié my-2 a my-1 y py-2 a py-1 */}
          Detalles
        </button>
      </Link>
      <AddToCart id={product.id} />
    </div>
  );
}

export default ProductCard;
