"use client";
import Image from "next/image";
import { useState } from "react";

const Productos = ({ titulo, imagen, precio, descripcion, cantidad, fotter  }) => {
  const [showModal, setShowModal] = useState(false);

  const abrir = () => {
    setShowModal(true);
  };

  const cerrar = () => {
    setShowModal(false);
  };

  return (
    <>
      <div onClick={abrir}>
        <div className="card9">
          <div className="content9">
            <div className="back9">
              <div className="back-content9">
              <Image src={imagen} className="imagenproductos" width={120} height={120} />

                <strong>{titulo}</strong>
              </div>
            </div>
            <div className="front9">
              <div className="img9">
                <div className="circle9"></div>
                <div className="circle9" id="right9"></div>
                <div className="circle9" id="bottom9"></div>
              </div>
              <div className="front-content9">
                <small className="badge9">{titulo}</small>
                <div className="description9">
                  <div className="title9">
                    <p className="title9">
                      <strong>{precio}</strong>
                    </p>
                  </div>
                  <p className="card-footer9">
                   Categoria: {fotter}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
  <div
    onClick={cerrar}
    className="card-modal"
    style={{
      position: "fixed",
      top: "7%",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "20px",
      zIndex: 100,
      width: "450px",
      height: "470px",
      transition: "all 0.3s ease-in-out",
      cursor: "auto",
    }}
  >
    <div className="circle-modal"></div>
    <div className="circle-modal"></div>
    <div
      className="card-inner-modal"
      style={{
        width: "inherit",
        height: "inherit",
        background: "rgba(255, 255, 255, 0.1)", // Ligeramente más visible
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        borderRadius: "15px", // Bordes más redondeados
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        cursor: "default", // Asegura que el cursor no sugiera clickeabilidad en todo el modal
      }}
      onClick={(e) => e.stopPropagation()} // Previene que el clic dentro del modal cierre el mismo
    >
       <h3 style={{ marginTop: "5px", color : "white" }}>{titulo}</h3>
      <Image src={imagen} alt="Promoción" width={200} height={200}  style={{  borderRadius: "10px" }} />
     
      <p style={{ textAlign: "center", margin: "10px 0", fontSize:"13px", color : "white" }}>
        {descripcion}
      </p>
      <span style={{
        color: "white",
        fontSize: "13px",
      }}>Cantidad: {cantidad}</span>
      <span
      style={{
        color: "white",
        fontSize: "13px",
      }}
      >Precio: {precio}</span>
      <br></br>
      <button className="button" onClick={cerrar}>Comprar</button>
    </div>

    <style jsx>{`
      .card-modal:hover {
        transform: scale(1.05); // Efecto más suave
      }

      .circle-modal {
        width: 100px;
        height: 100px;
        background: repeating-linear-gradient(
          48deg,
          #a6261e 0%,
          #fdeba0 100%
        );
        border-radius: 35% 30% 75% 30% / 49% 30% 70% 51%;
        position: absolute;
        animation: move-up6 2s ease-in infinite alternate-reverse;
      }

      .circle-modal:nth-child(1) {
        top: -25px;
        left: -25px;
      }

      .circle-modal:nth-child(2) {
        bottom: -25px;
        right: -25px;
        animation-name: move-down1;
      }

      @keyframes move-up6 {
        to {
          transform: translateY(-10px);
        }
      }

      @keyframes move-down1 {
        to {
          transform: translateY(10px);
        }
      }
    `}</style>
  </div>
)}

      </div>
    </>
  );
};

export default Productos;
