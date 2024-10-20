import React from 'react'
import { fetchProducts } from '../../../utils/fetchProducts';

const shoes: React.FC = async () =>  {
    const products = await fetchProducts();
  return (
    <div className="text-center p-2">
    <h1 className="text-2xl mt-2 mb-4 bg-customBgCard border border-gray-300 p-2">
      Products
    </h1>

  
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Shoes Collection</h2>

          <p className="mt-4 max-w-md text-gray-500">           
          Discover our new collection of sports sneakers! Designed to offer you comfort and style. You'll find the perfect pair to accompany you every step of the way.
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
  )
}

export default shoes;