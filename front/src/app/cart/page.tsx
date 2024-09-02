import CartComponent from '@/components/CartComponents';
import React from 'react';

export default function CartPage() {
  return (
    <div className="text-center w-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl mt-2 mb-4 bg-customBgCard border border-gray-300 p-2 ">
        Carrito de productos
      </h1>
      <div className="flex flex-col items-center">
        <CartComponent />
      </div>
    </div>
  );
}
