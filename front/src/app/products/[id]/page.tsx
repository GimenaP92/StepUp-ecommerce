import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js
import AddToCart from "@/components/buttons/AddToCart";
import { fetchProductDetail } from "../../../../utils/fetchProducts";

async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await fetchProductDetail(params.id);
  const { name, image, description, price } = product;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <a href="#" className="group block overflow-hidden">
        <div className="relative h-[350px] sm:h-[450px]">
          <Image
            src={image} // Imagen del producto obtenida desde los detalles del producto
            alt={name} // Usamos el nombre del producto como texto alternativo
            layout="fill" // Permite que la imagen llene su contenedor
            objectFit="cover" // Mantiene la proporción de la imagen
            className="absolute inset-0 opacity-100 group-hover:opacity-0"
            priority // Carga la imagen de manera prioritaria
          />
          
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:underline group-hover:underline-offset-4">
            {name} {/* Nombre del producto */}
          </h3>

          <p className="mt-1.5 tracking-wide text-gray-900">${price}</p>
          <p className="mt-1.5 text-gray-600">{description}</p> {/* Descripción del producto */}
        </div>
        <div className="flex justify-center mt-4">
          <AddToCart id={product.id} />
        </div>
      </a>
    </div>
  );
}

export default ProductDetail;
