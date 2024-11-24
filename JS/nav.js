export default function cargarNavbar() {
  document.body.innerHTML = `<ul id="navbar">
        <li><a href="../formulario/formulario.html">Formulario</a></li>
        <li><a href="../tabla/tabla.html">Tabla</a></li>
        <li><a href="../menuNavegacion/menuNavegacion.html">Menú de navegación</a></li>
        <li><a href="../preguntasFrecuentes/preguntasFrecuentes.html">Preguntas más frecuentes</a></li>
        <li><a href="../listaOrdenada/listaOrdenada.html">Lista ordenada</a></li>
    </ul>` + document.body.innerHTML;

    cargarColorNavbar();
}

function cargarColorNavbar (){
    let rutaPaginaActual = window.location.href;
    let partesRuta = rutaPaginaActual.split("/");
  
    let nombreCarpetaPadre = partesRuta[partesRuta.length - 2]

    let ulNavbar = document.getElementById("navbar")
    let enlacesNavbar = ulNavbar.getElementsByTagName("a")
    if (nombreCarpetaPadre === "formulario"){
      let enlacenavbar = enlacesNavbar[0]
      enlacenavbar.style.color = "red";
    }else if (nombreCarpetaPadre === "tabla"){
      let enlacenavbar = enlacesNavbar[1]
      enlacenavbar.style.color = "red";
    }else if (nombreCarpetaPadre === "menuNavegacion"){
      let enlacenavbar = enlacesNavbar[2]
      enlacenavbar.style.color = "red";
    }else if (nombreCarpetaPadre === "preguntasFrecuentes"){
      let enlacenavbar = enlacesNavbar[3]
      enlacenavbar.style.color = "red";
    }else if (nombreCarpetaPadre === "listaOrdenada"){
      let enlacenavbar = enlacesNavbar[4]
      enlacenavbar.style.color = "red";
    }
}
