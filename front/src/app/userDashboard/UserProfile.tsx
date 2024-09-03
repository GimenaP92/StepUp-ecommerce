"use client";
import { useContext } from 'react';
import { UserContext } from '@/context/user';

export const UserProfile = () => {
    const { user } = useContext(UserContext);
  
    return (
      <div className="p-4 bg-white border rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Perfil del Usuario</h2>
        <div className="mt-2">
          <p>
            <strong>Nombre:</strong> {user?.user?.name || "Nombre no disponible"}
          </p>
          <p>
            <strong>Email:</strong> {user?.user?.email || "Email no disponible"}
          </p>
          <p>
            <strong>Dirección:</strong> {user?.user?.address || "Dirección no disponible"}
          </p>
          <p>
            <strong>Contacto:</strong> {user?.user?.phone || "Contacto no disponible"}
          </p>
        </div>
      </div>
    );
  };