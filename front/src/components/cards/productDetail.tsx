import React from "react";
import { IProductDetailProps } from "@/interfaces/interfaces";
import Button from "../buttons/Button";
import AddToCart from "../buttons/AddToCart";
import ImageProduct from "../Images/ImageProducts";



const ProductDetail: React.FC<IProductDetailProps> =  ({ id, src, alt, width, height, description, price }) => {
  return (
      <div className="border shadow-lg border-gray-300 p-4 m-4 rounded-lg max-w-xs">
          <ImageProduct
            src={src}
            alt={alt}
            width={200}
            height={200}
          />
          <p className="text-sm mt-2">{description}</p>
          <p className="text-sm font-semibold mt-2">Price: ${price}</p>
          <AddToCart id={id} />

      </div>
  );
}

export default ProductDetail;