export async function cargarAlumnosTabla() {
  let alumnos = await obtenerTodosLosAlumnos();
  const cuerpoTabla = document.getElementById("cuerpoTabla");
  cuerpoTabla.innerHTML = "";

  alumnos.forEach((alumno) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
                <td>${alumno.nombre}</td>
                <td>${alumno.apellidos}</td>
                <td>${alumno.telefono}</td>
                <td>${alumno.email}</td>
                <td>${alumno.sexo}</td>
                <td>
                    <button class="btn-eliminar" data-object='{"id":${alumno.id}}'>X</button>
                    <button class="btn-modificar">Mod</button>
                </td>
                
            `;
    cuerpoTabla.appendChild(fila);
  });

  funcionalidadBotonesEliminar()
}
export function añadirAlumnoModal() {
  let btnAñadir = document.getElementById("btnAddAlumno");
  btnAñadir.onclick = function () {
    document.getElementById("tituloModal").textContent = "Insertar Alumno"
    document.getElementById("id").disabled = true;

    let modal = document.getElementById("modal");
    modal.style.display = "flex";
  };
}

export function modificarAlumnoModal() {
  let cuerpoTabla = document.getElementById ("cuerpoTabla")
  let botonesModificar = cuerpoTabla.getElementsByClassName("btn-modificar")

  for(let botonModificar of botonesModificar){
    botonModificar.onclick = function () {
      document.getElementById("tituloModal").textContent = "Modificar Alumno"
      document.getElementById("id").disabled = false;
  
      let modal = document.getElementById("modal");
      modal.style.display = "flex";
    }
  }
}

export function cerrarModal() {
  let cerrarModal = document.getElementById("cerrarModal");
  cerrarModal.onclick = function () {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  };
}



function extraerDatosFormulario() {
  const formulario = document.getElementById("formularioAlumno");

  const id = formulario.id.value;
  const nombre = formulario.nombre.value;
  const apellidos = formulario.apellidos.value;
  const password = formulario.password.value;
  const telefono = formulario.telefono.value;
  const email = formulario.email.value;
  const sexo = formulario.sexo.value;
  const fechaNacimiento = formulario.fechaNacimiento.value;

  return { id, nombre, apellidos, password, telefono, email, sexo, fechaNacimiento };
}

export function guardarAlumno() {
  let guardarAlumno = document.getElementById("btnGuardarAlumno");
  guardarAlumno.onclick = async function () {

    let tituloModal = document.getElementById("tituloModal").textContent
    let camposFormulario = extraerDatosFormulario();

    if(tituloModal == "Insertar Alumno"){
      await crearAlumno(camposFormulario.nombre,camposFormulario.apellidos, camposFormulario.password, camposFormulario.telefono, camposFormulario.email, camposFormulario.sexo, camposFormulario.fechaNacimiento)
    }else if (tituloModal == "Modificar Alumno"){
      await modificarAlumno(camposFormulario.id, camposFormulario.nombre,camposFormulario.apellidos, camposFormulario.password, camposFormulario.telefono, camposFormulario.email, camposFormulario.sexo, camposFormulario.fechaNacimiento)
    }
    cargarAlumnosTabla()
  };
}

export function funcionalidadBotonesEliminar(){
  let cuerpoTabla = document.getElementById("cuerpoTabla")
  let botonesEliminar = cuerpoTabla.getElementsByClassName("btn-eliminar")

  for(let botonEliminar of botonesEliminar){
    botonEliminar.onclick = async function () {

      let idAlumno = botonEliminar.getAttribute('data-object')
      idAlumno = JSON.parse(idAlumno)
      await eliminarAlumno(idAlumno.id)
      cargarAlumnosTabla()
    }
  }
}