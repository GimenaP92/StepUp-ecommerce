import React from "react";
import AddToCart from "@/components/buttons/AddToCart";
import ImageProduct from "@/components/Images/ImageProducts";
import { fetchProductDetail } from "../../../../utils/fetchProducts";

async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await fetchProductDetail(params.id);
  const { name, image, description, price } = product;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border shadow-lg border-gray-300 p-4 m-4 rounded-lg max-w-xs md:max-w-3xl w-full">
        <h1 className="text-3xl font-bold bg-customBg text-customText p-4 mb-4 text-center w-full">
          {name}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="flex justify-center md:w-1/2">
            <ImageProduct 
              src={image}
              alt={name}
              width={400}  
              height={400}
            />
          </div>
          <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
            <p className="text-sm">{description}</p>
            <p className="text-sm font-semibold mt-2">Price: ${price}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <AddToCart id={product.id} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
