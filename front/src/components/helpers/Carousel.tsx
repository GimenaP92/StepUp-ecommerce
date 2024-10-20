"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724691646/samples/woman-on-a-football-field.jpg",
  "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729360613/braden-collum-9HI8UJMSdZA-unsplash_gctndz.jpg",
  "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729360775/john-arano-h4i9G-de7Po-unsplash_uxr8jz.jpg",
  "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729360856/clique-images-hSB2HmJYaTo-unsplash_dmjpjt.jpg",
  "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729360933/x-N4QTBfNQ8Nk-unsplash_fn414l.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen cada 1 segundo automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // Cambio cada 1 segundo
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor del carrusel con altura controlada */}
      <div className="relative w-full h-[40vh]">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          fill
          className="object-cover" // Para cubrir todo el ancho sin deformar
          priority
        />
      </div>
    </div>
  );
}
