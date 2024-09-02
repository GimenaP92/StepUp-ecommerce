import React from "react";
import ProductCard from "../card/index";
import { IProductsGridProps, IProduct } from "@/interfaces/interfaces";



function ProductGridComponent({ products }: IProductsGridProps) {
  return (
    <div className="text-center flex flex-wrap justify-center gap-4">
      {products.map((product: IProduct) => (
        <div key={product.id} className="w-auto max-w-xs">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGridComponent;
