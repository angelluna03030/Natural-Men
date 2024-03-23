import Footer from "../components/Foteer";
import Navegacion from "../components/navegacion";

const pagesNecesitamos = () => {
  return (
    <>
      <Navegacion></Navegacion>
      <div className="cards">
        <div
          className="card blue"
          style={{
            color: "black",
            height: "8rem",
            textAlign:"start"
          }}
        >
          <h5> intangible</h5>
          una página web con base de datos =20’000.000 $ <br></br>
          publicidad= 4’000.000$
        </div>

        <div
          className="card blue"
          style={{
            color: "black",
            height: "25rem",
            textAlign:"start"
          }}
        >
          <h5> tangible</h5>
          primer lote de productos de 100 productos <br />
          Gel limpiador para el cuerpo =2’400.000$ <br />
          crema hidratante para la piel= 3’106.000$ <br />
          crema para las manos = 1’500.000$ <br />
          protector solar = 3’500.000$ <br />
          surem para después de afeitarse = 3’500.000$ <br />
          alcohol para cortadura de afeitar = 1’500.000$ <br />
          gel para el pelo de sábila = 2’400.000$ <br />
          hidratante de labios de fresa = 1’100.000$ <br />
          sprite bocal de limón =1’900.000$ <br />
          portatil =3’500.000$ <br />
          celular =2’549.000$ <br />
          8 personal = 10’400.000$ <br />
          <h4>     Total = 81’555.000$</h4>
     
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default pagesNecesitamos;
