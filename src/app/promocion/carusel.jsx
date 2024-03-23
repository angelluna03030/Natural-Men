"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const imagenes = [
  '/assets/promocion1.jpg',
  '/assets/promocion2.jpg',
  '/assets/promocion3.jpg',
  '/assets/promocion4.jpg'
];

const Carrusel = () => {
  const [indiceActual, setIndiceActual] = useState(0);

  const irSiguiente = () => {
    setIndiceActual(indiceActual === imagenes.length - 1 ? 0 : indiceActual + 1);
  };

  useEffect(() => {
    const intervalo = setInterval(irSiguiente, 3000); // 3000 ms = 3 segundos
    return () => clearInterval(intervalo);
  }, [indiceActual]);

  return (
    <div className="carrusel">
      <Image
        src={imagenes[indiceActual]}
        alt={`Imagen ${indiceActual + 1}`}
        width={400} // Establece el ancho deseado
        height={400} // Establece la altura deseada
        layout="responsive" // Hace que la imagen sea responsive
      />
    </div>
  );
};

export default Carrusel;
