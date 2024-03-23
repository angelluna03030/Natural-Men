
import Image from 'next/image';
import imagen from '../../../public/assets/imagen.jpg';
import imagen2 from '../../../public/assets/casa.png';
import Link from 'next/link';

const Navegacion = ()=>{
    return (
        <>
      <center><Image src={imagen} width="100"></Image></center>  
      <center>
<nav className="navbar">
    <ul className="navbar-nav">
    <li className="nav-item"><Link href="/"><Image src={imagen2} width="25" height="25"></Image></Link></li>
        <li className="nav-item"><Link href="/promocion">
        Promociones</Link></li>
        <li className="nav-item"><Link href="/sociosclave">Socios Claves</Link></li>
        <li className="nav-item"><Link href="/recursosclave">Recursos Claves</Link></li>
        <li className="nav-item"><Link href="/relaciones">Relaciones</Link></li>
        <li className="nav-item"><Link href="/necesitamos">Informaciones de lo que necesitamos</Link></li>
        <li className="nav-item"><Link href="/informacion">Información</Link></li>
    </ul>
</nav>
</center>
        </>
    )
}

export default Navegacion;