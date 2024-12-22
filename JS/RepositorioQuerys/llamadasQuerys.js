const rutaRepositorio = "../_php/BD/Repositorios/Alumnos/"
const rutaGetUsuario = rutaRepositorio + "getUsuario.php"
const rutaDeleteUsuario = rutaRepositorio + "deleteUsuario.php"
const rutaCrearUsuario2 = rutaRepositorio + "crearUsuario2.php"
const rutaModificarUsuario = rutaRepositorio + "modificarUsuario.php"

async function obtenerTodosLosAlumnos(){
    let params = {};
  return await obtenerListaJson(rutaGetUsuario, params);
}

async function eliminarAlumno(idAlumno){
  let params = {idAlumno};
return await obtenerObjetoJson(rutaDeleteUsuario, params);
}

async function crearAlumno(nombre,apellidos, password, telefono, email, sexo, fechaNacimiento){
  let params = {nombre,apellidos, password, telefono, email, sexo, fechaNacimiento};
return await obtenerObjetoJson(rutaCrearUsuario2, params);
}

async function modificarAlumno (idAlumno,nombre,apellidos, password, telefono, email, sexo, fechaNacimiento){
  let params = {idAlumno,nombre,apellidos, password, telefono, email, sexo, fechaNacimiento};
  return await obtenerListaJson(rutaModificarUsuario, params);
}