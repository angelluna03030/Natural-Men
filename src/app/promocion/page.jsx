import Footer from "../components/Foteer";
import Navegacion from "../components/navegacion";
import Carrusel2 from "./caruse2";
import Carrusel from "./carusel";
import ModalInferior from "./modal";

const pagesPromocion = () => {
  return (
    <>
      <Navegacion></Navegacion>
      <div className="eslogan-container">
        <p className="eslogan">
          Este Día del Hombre, queremos destacar dos de nuestros kits
          esenciales, diseñados para mejorar tu rutina de cuidado personal y
          hacerte sentir tu mejor versión.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div className="containerProm">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <div className="cardProm">
            <div className="card-headerProm">Kit de Baño</div>
            <Carrusel />
            <p>
              Nuestro exclusivo Kit de Baño es más que un simple conjunto de
              productos de higiene; es una experiencia completa de limpieza y
              rejuvenecimiento. Diseñado para enseñarte cómo lavarte
              adecuadamente, este kit incluye [detalles de los productos, como
              jabón, champú, etc.], cada uno formulado con ingredientes
              naturales que respetan y nutren tu piel. Aprende a cuidarte con
              nuestro kit y siente la diferencia en tu piel.
            </p>
          </div>
        </div>

        <div
          className="containerProm"
          style={{
            marginLeft: "3rem",
          }}
        >
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <div className="cardProm">
            <div className="card-headerProm">Kit de Afeitado</div>
            <Carrusel2 />

            <p>
              Para aquellos momentos especiales de afeitado, nuestro Kit de
              Afeitado está aquí para revolucionar tu experiencia. Ideal para
              usar después de afeitar y para tratar esas molestas cortaduras,
              este kit incluye [detalles de los productos, como bálsamo after
              shave, crema para cortes, alcohol,etc.]. Con nuestro kit, cada
              afeitado se convierte en un momento de cuidado personal que tu
              piel agradecerá.
            </p>
          </div>
        </div>

        <ModalInferior></ModalInferior>
      </div>
      <Footer></Footer>
    </>
  );
};

export default pagesPromocion;
