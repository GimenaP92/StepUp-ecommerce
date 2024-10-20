import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="text-white mt-8 bg-customBg">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Columna 1: Contáctame y Redes Sociales */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-2xl font-bold text-white">Contact me</h2>
            {/* Iconos de Redes Sociales */}
            <ul className="flex justify-center gap-6 mt-4 lg:justify-start">
              <li>
                <a
                  href="https://www.linkedin.com/in/gimena-pascuale"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <FaLinkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GimenaP92" 
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <FaGithub size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gimenapascuale@gmail.com"
                  rel="noreferrer"
                  className="text-white transition hover:opacity-75"
                >
                  <FaEnvelope size={24} />
                  <span className="sr-only">Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Derechos de Autor */}
          <div className="flex items-center justify-center lg:justify-end">
            <p className="text-xs text-gray-500 text-center lg:text-left">
              &copy; 2024. Company StepUp. All rights reserved.
              <span className="block">Created by Gimena Pascuale</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
