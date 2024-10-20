"use client"
import { IProductCardProp } from "@/interfaces/interfaces";
import ImageProduct from "./Images/ImageProducts";
import { BsFillTrash3Fill } from "react-icons/bs";

function CardCart({ product, remove }: IProductCardProp) {
  return (
    <div className="border shadow-lg border-gray-300 p-4 m-4 rounded-lg w-full md:w-4/5 lg:w-3/4 max-w-full flex flex-col items-center">
      
      <div className="w-full mb-2">
        <h4 className="text-sm font-semibold text-center bg-customBg text-customText w-full p-2">
          {product.name}
        </h4>
      </div>

    
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="flex items-center justify-center md:w-1/2 mb-2 md:mb-0">
          <div className="relative rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden">
            <ImageProduct
              src={product.image}
              alt={product.name}
              width={200}  
              height={200} 
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between md:w-1/2">
          <p className="text-sm font-semibold text-center mb-2 md:mb-0 md:mr-2"> ${product.price}</p>
          <button
            onClick={remove}
            className="bg-red-500 text-white px-3 py-1 rounded flex items-center justify-center"
          >
            <BsFillTrash3Fill className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
