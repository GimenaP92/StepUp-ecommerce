"use client";
import React from "react";
import Link from "next/link";
import { IProductCategory } from "@/interfaces/interfaces";

export const productsCategory: IProductCategory[] = [
  {
    id: 1,
    name: "T-Shirts",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    name: "Athletic shoes",
    imageUrl: "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729431025/lefteris-kallergis-Wte7upcKIVo-unsplash_xas0kx.jpg",
  },
  {
    id: 3,
    name: "Shorts",
    imageUrl: "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729431209/tim-mossholder-5vh4crJBztg-unsplash_wz5f40.jpg",
  },
  {
    id: 4,
    name: "Tracksuits",
    imageUrl: "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729431897/mike-von-98dyRIKPGK4-unsplash_fnrpmg.webp",
  },
];

const Home: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productsCategory.map((category) => (
            <li key={category.id}>
              <Link href={`/categories/${category.id}`} className="group block overflow-hidden relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="h-[350px] w-full object-cover transition duration-500 opacity-100 group-hover:opacity-80 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white group-hover:underline group-hover:underline-offset-4">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
