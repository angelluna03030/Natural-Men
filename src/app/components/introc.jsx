import Image from "next/image";
import Imagen1 from "../../../public/assets/1.jpg"; 
const Inicio = () => {
  return (
    <>
   <br id="descripcion" />
      <div
        className="CardGrande"
        initial={{ scale: 1, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="CardGrande_imagen">
          <Image
           src={Imagen1} width="230" height="230"
          
            className="imagen"
          />
        </div>
        <div className="CardGrande_Contenido">
          <div className="CardGrande_Contenido_titulo" aria-label="Título del plato">
        Importacias
          </div>
          <div className="CardGrande_Contenido_Descripcion" aria-describedby="descripcion">
          El cuidado del cuerpo, la piel y la belleza no son exclusivos de las mujeres; los hombres también tienen el deber y la necesidad de cuidarse. Mantener una higiene adecuada, cuidar nuestra piel y prestar atención a nuestra apariencia son aspectos fundamentales que todos debemos considerar. Los hombres también pueden, y deben, cuidar de sí mismos, asegurándose de oler bien y verse bien. Este enfoque hacia el autocuidado masculino no solo mejora la confianza personal, sino que también es un aspecto crucial del bienestar general.
          </div>
          <span aria-describedby="descripcion"></span>
          <br />
          <span aria-describedby="descripcion"></span>
          <br />
          <span aria-describedby="descripcion"></span>
        </div>
      </div>

    </>
  );
};

export default Inicio;
