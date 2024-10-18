"use client"
import React from 'react';
import Link from "next/link";
import { UserContext } from '@/context/user';
import { useContext } from 'react';
import { BsCart2 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
  const { isLogged } = useContext(UserContext);

  return (
    <nav className="bg-customBg text-customText font-mono p-2 py-4 w-full">
      <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          {/* Sección de navegación principal */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300 transition duration-200">
                LANDING
              </Link>
            </li>
            <li>
              <Link href="/home" className="hover:text-gray-300 transition duration-200">
                HOME
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/cart" className="hover:text-gray-300 flex items-center space-x-2 transition duration-200">
                <span>CARRITO</span>
                <BsCart2 />
              </Link>
            </li>
          </div>

          {/* Sección de usuario */}
          <li>
            {isLogged ? (
              <Link 
                href="/userDashboard/miAccount" 
                className="flex items-center space-x-2 hover:text-gray-300 transition duration-200"
              >
                <span>MI CUENTA</span>
                <BsFillPersonFill />
              </Link>
            ) : (
              <Link 
                href="/userDashboard/login" 
                className="hover:text-gray-300 transition duration-200"
              >
                INGRESAR
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}


