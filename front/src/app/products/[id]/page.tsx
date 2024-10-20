import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js
import AddToCart from "@/components/buttons/AddToCart";
import { fetchProductDetail } from "../../../../utils/fetchProducts";

async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await fetchProductDetail(params.id);
  const { name, image, description, price } = product;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen max-w-4xl mx-auto">
      <div className="relative h-[350px] sm:h-[450px] max-w-md">
        <Image
          src={image} // Imagen del producto obtenida desde los detalles del producto
          alt={name} // Usamos el nombre del producto como texto alternativo
          layout="responsive" // Permite que la imagen mantenga su proporción
          width={500} // Ajusta el ancho deseado
          height={500} // Ajusta la altura deseada
          objectFit="cover" // Mantiene la proporción de la imagen
          className="transition-transform duration-300 group-hover:scale-105" // Efecto de zoom
          priority // Carga la imagen de manera prioritaria
        />
      </div>

      <div className="relative bg-white pt-3 md:pl-4 md:w-1/2"> {/* Ajustar espacio en pantallas medianas */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:underline group-hover:underline-offset-4">
          {name} {/* Nombre del producto */}
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-900">${price}</p>
        <p className="mt-1.5 text-gray-600">{description}</p> {/* Descripción del producto */}
        
        <div className="flex justify-center mt-4">
          <AddToCart id={product.id} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
