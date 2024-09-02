import React from "react";
import ProductGridComponent from "@/components/cards";
import { fetchProducts } from "../../../utils/fetchProducts";


const Home: React.FC = async() => {
  const products = await fetchProducts();
    return (
        <div className="text-center p-2">
            <h1 className="text-2xl mt-2 mb-4 w- bg-customBgCard border border-gray-300 p-2">Bievenido a StepUp</h1>
            <ProductGridComponent products={products}/>
        </div>
    )
}

export default Home;