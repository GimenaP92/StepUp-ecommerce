"use client";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/user';


export const UserOrder: React.FC = () => {
  const { orders } = useContext(UserContext);
  return (
    <div className="p-4 mb-5 w-4/6 mx-auto text-center bg-customBgCard shadow rounded-lg">
      <h2 className="text-xl mb-4">Historial de Órdenes</h2>
      {orders.length === 0 ? (
        <p>No has realizado ninguna orden aún.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="mb-4 p-4 text-sm bg-white shadow rounded-md">
            <p><strong>ID de Orden:</strong> {order.id}</p>
            <p><strong>Estado:</strong> {order.status}</p>
            <p><strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}</p>
            <p><strong>Productos:</strong> {order.products.map(product => product.name).join(', ')}</p>
          </div>
        ))
      )}
    </div>
  );
};