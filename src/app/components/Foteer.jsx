function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <nav>
              <ul>
                <li><a href="#!">Inicio</a></li>
                <li><a href="#!">Servicios</a></li>
                <li><a href="#!">Sobre Nosotros</a></li>
                <li><a href="#!">Contacto</a></li>
              </ul>
            </nav>
            <div className="copy">
              © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  