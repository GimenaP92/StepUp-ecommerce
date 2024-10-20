"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Asegúrate de usar el hook correcto
import { fetchProducts } from "../../../../utils/fetchProducts"; // Asegúrate de que la ruta sea correcta
import { IProduct } from "@/interfaces/interfaces"; // Asegúrate de que la ruta sea correcta
import AddToCart from "@/components/buttons/AddToCart";

const CategoryPage: React.FC<{ params: { categoryId: string } }> = ({ params }) => {
  const { categoryId } = params; // Obtener el ID de la categoría desde params
  const [products, setProducts] = useState<IProduct[]>([]); // Especificar el tipo aquí
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts: IProduct[] = await fetchProducts(); 
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (product) => product.categoryId === Number(categoryId)
  );
  
  if (loading) {
    return <div>Loading...</div>; // Mensaje de carga
  }

  return (
    <div className="text-center p-2">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Products 
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Discover our collection of products in this category. You'll find the perfect items to meet your needs.
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <a href={`/products/${product.id}`} className="group block overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {product.name}
                    </h3>
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
                      <span className="tracking-wider text-gray-900"> ${product.price} </span>
                    </p>
                  </div>
                </a>

                {/* Agrega el botón de "Agregar al carrito" aquí */}
                <div className="flex justify-center mt-4">
                  <AddToCart id={product.id} /> {/* Aquí se usa el componente */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
