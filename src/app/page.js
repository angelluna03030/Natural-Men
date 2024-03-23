import Link from "next/link";
import Footer from "./components/Foteer";
import Navegacion from "./components/navegacion";
import Productos from "./products/productos";
import Inicio from "./components/introc";

const Pages = () => {
  return (
    <>
      <Navegacion></Navegacion>
      <br></br>
      <br></br>
      <div className="eslogan-container">
        <p className="eslogan">
          Descubre tu verdadera naturaleza: Natural Men, donde la belleza y el
          cuidado de la piel se encuentran en la esencia de la naturaleza
          masculina.
        </p>
      </div>
      <br></br>
      <br></br>

      <Inicio></Inicio>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexGrow: "wrap",
          gap: "20px",
          marginTop: " 200px",
        }}
      >
        <Productos
          descripcion={
            "Esta crema hidratante está especialmente formulada para la piel del hombre. Con ingredientes naturales y orgánicos, esta crema nutre e hidrata profundamente, dejando la piel suave y revitalizada."
          }
          titulo={"Crema Idratante"}
          fotter={"Crema"}
          precio={"25.000$"}
          imagen={"/assets/cremaidratante.jpeg"}
          cantidad={"23"}
        ></Productos>

        <Productos
          descripcion={
            " Esta crema para manos está diseñada para ofrecer hidratación intensiva sin dejar fragancia alguna. Ideal para aquellos que prefieren productos sin aroma, esta crema utiliza ingredientes naturales para cuidar y proteger la piel de las manos."
          }
          titulo={"Crema para las manos "}
          fotter={"Sin olor"}
          precio={"35.000$"}
          cantidad={"50"}
          imagen={"/assets/sinolor.jpeg"}
        ></Productos>

        <Productos
          titulo={"Protector Solar"}
          precio={"45.000$"}
          fotter={"Para todo el cuerpo"}
          cantidad={"30"}
          descripcion={
            "Este protector solar está diseñado para ofrecer una protección eficaz contra los rayos UVA y UVB, utilizando ingredientes naturales que cuidan la piel. Es perfecto para el hombre que busca proteger su piel sin renunciar a la naturalidad."
          }
          imagen={"/assets/solar.jpeg"}
        ></Productos>

        <Productos
          titulo={"Summer"}
          precio={"450.000$"}
          fotter={"barba"}
          cantidad={"10"}
          descripcion={
            "Sumérgete en la frescura del verano con cada aplicación de nuestra Crema “Summer” para después de afeitar. Diseñada exclusivamente para el hombre moderno, esta crema combina lo mejor de la naturaleza para calmar y revitalizar la piel tras el afeitado."
          }
          imagen={"/assets/summer.jpeg"}
        ></Productos>

        <Productos
          cantidad={"23"}
          imagen={"/assets/gel.jpeg"}
          fotter={"para pelo"}
          titulo={"Gel de Savila "}
          precio={"34.000$"}
          descripcion={
            "Este gel para el pelo está enriquecido con el poder natural de la sábila, conocida por sus propiedades hidratantes y reparadoras. Ideal para mantener un peinado perfecto durante todo el día, sin dejar residuos y con un acabado natural."
          }
        ></Productos>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexGrow: "wrap",
          gap: "20px",
          marginTop: " 200px",
          marginBottom: "200px",
        }}
      >
        <Productos
          cantidad={"70"}
          descripcion={
            "Este bálsamo labial combina la dulzura de la fresa con una fórmula hidratante intensiva, ideal para mantener los labios suaves y protegidos. Su composición natural garantiza el cuidado de tus labios sin ingredientes artificiales."
          }
          fotter={"para labios"}
          precio={"21.000$"}
          titulo={"Hidratante de labios"}
          imagen={"/assets/fresa.jpeg"}
        ></Productos>

        <Productos
          cantidad={"15"}
          fotter={"para axilas"}
          precio={"20.000$"}
          titulo={"Desodorante de Menta"}
          descripcion={
            "Este desodorante combina la frescura de la menta con una protección duradera contra el olor. Es perfecto para el hombre activo que busca frescura y naturalidad en su cuidado personal."
          }
          imagen={"/assets/gel3.jpeg"}
        ></Productos>

        <Productos
          cantidad={23}
          descripcion={
            "Inspirado en la frescura del refresco Sprite, este bálsamo labial ofrece una sensación refrescante y un sabor a limón que revitaliza tus labios. Formulado para hombres, proporciona una hidratación duradera y protección contra los elementos."
          }
          fotter={"Bocal"}
          precio={"29.000$"}
          titulo={"Sprite Bocal de Limon"}
          imagen={"/assets/limon.jpeg"}
        ></Productos>

        <Productos
          cantidad={"23"}
          descripcion={
            "Este gel limpiador corporal está formulado para la piel del hombre, ofreciendo una limpieza profunda sin resecar. Con ingredientes naturales, deja la piel fresca y revitalizada."
          }
          fotter={"Cuerpo"}
          precio={"34.000$"}
          imagen={"/assets/limpia.jpeg"}
          titulo={"Gel para el Cuerpo"}
        ></Productos>

        <Productos
          precio={"25.000$"}
          titulo={"Alcohol  cortaduras"}
          cantidad={"23"}
          fotter={"barba y cara "}
          imagen={"/assets/al.jpeg"}
          descripcion={
            "Este alcohol está especialmente formulado para tratar las cortaduras de afeitar, proporcionando una desinfección eficaz y una sensación de alivio inmediato. Su fórmula suave es adecuada para la piel sensible del hombre."
          }
        ></Productos>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Pages;
