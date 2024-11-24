import cargarNavbar from "../JS/nav.js"
import * as MetodosTabla from "../JS/funciones.js"
window.onload = () => {
    
    let usuarios = [
        { nombre: "Carla", apellidos: "Castillo", telefono: "666555444", email: "carla@gmail.com", sexo: "femenino" },
        { nombre: "Cristian", apellidos: "Martinez", telefono: "666333222", email: "cristian@gmail.com", sexo: "masculino" },
        { nombre: "David", apellidos: "Cases", telefono: "666777888", email: "david@gmail.com", sexo: "masculino" }
    ];

    cargarNavbar()
    MetodosTabla.mostrarUsuarios()

    MetodosTabla.funcionalidadBotonesModificar(usuarios)
}