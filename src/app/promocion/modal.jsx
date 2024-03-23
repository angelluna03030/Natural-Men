"use client"

import { useEffect, useState } from 'react';

const ModalInferior = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostrar el modal después de montar el componente
    setVisible(true);

    // Ocultar el modal después de 10 segundos
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="modal">
      <p>Y hay más: con la compra de cualquier kit, recibirás un regalo especial como muestra de nuestro agradecimiento. Es nuestra manera de decir "gracias" por confiar en Natural Men para tu cuidado personal.</p>
    </div>
  );
};

export default ModalInferior;
