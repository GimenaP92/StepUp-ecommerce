"use client";
import { useContext } from 'react';
import { UserContext } from '@/context/user';
import { IUserResponse } from '@/interfaces/interfaces';

export const UserProfile = () => {
  const { user } = useContext(UserContext);

    return (
        <div className="p-4 bg-white border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Perfil del Usuario</h2>
            <div className="mt-2">
                <p>
                    <strong>Nombre:</strong> {user?.name || "Nombre no disponible"}
                </p>
                <p>
                    <strong>Email:</strong> {user?.email || "Email no disponible"}
                </p>
                <p>
                    <strong>Dirección:</strong> {user?.address || "Dirección no disponible"}
                </p>
                <p>
                    <strong>Contacto:</strong> {user?.phone || "Contacto no disponible"}
                </p>
            </div>
        </div>
    );
};
