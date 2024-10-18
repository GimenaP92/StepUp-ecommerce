"use client";
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/user';
import { UserProfile } from '../UserProfile';
import { UserOrder } from '../UserOrders';
import { useRouter } from 'next/navigation'
import ButtonAdvert from '@/components/buttons/ButtonAdvert';

export default function MiAccount() {
  const { user, logOut, getOrders, isLogged} = useContext(UserContext);
  const router = useRouter();
//si no esta logueado ir a loguin

useEffect(() => {
  if(!isLogged) {
    router.push("/userDashboard/login")
  }
}, [])



  useEffect(() => {
    if (user) {
      getOrders();
    }
  }, [user, getOrders]);
  

  const logOutHandler = () => {
    try {
      logOut();
      alert("Has cerrado tu sesión correctamente");
      router.push("/userDashboard/login");
    } catch (error) {
      console.error(error);
      alert("Hubo un error al cerrar sesión");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h1 className="text-2xl font-bold w-full text-center mt-2 mb-4 mr-2 bg-customBgCard border border-gray-300 p-2 md:mb-0">MI CUENTA</h1>
          <div className="mt-2 md:mt-0">
            <ButtonAdvert 
              type="button" 
              text="Cerrar sesión" 
              onClick={logOutHandler} 
            />
          </div>
        </div>
        
        {user ? (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white shadow-md text-center rounded-md border border-gray-300 p-4 w-full md:w-1/2">
              <h2 className="text-xl font-semibold text-customText bg-customBg text-center mb-4">DATOS PERSONALES</h2>
              <UserProfile />
            </div>

            <div className="bg-white text-center shadow-md rounded-md border border-gray-300 p-4 w-full md:w-1/2">
              <h2 className="text-xl font-semibold text-customText bg-customBg text-center mb-4">COMPRAS REALIZADAS</h2>
              <UserOrder/>
            </div>
          </div>
        ) : (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
            No hay datos de usuario disponibles.
          </p>
        )}
      </div>
    </div>
  );
}
