import cargarNavbar from "../JS/nav.js"
import * as MetodosTabla from "../JS/funciones.js"
window.onload = async () => {

    cargarNavbar()
    await MetodosTabla.cargarAlumnosTabla()
    MetodosTabla.añadirAlumnoModal()
    MetodosTabla.modificarAlumnoModal()
    MetodosTabla.cerrarModal()
    MetodosTabla.guardarAlumno()
}