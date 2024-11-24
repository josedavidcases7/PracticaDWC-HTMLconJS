let usuarios = [
    { nombre: "Carla", apellidos: "Castillo", telefono: "666555444", email: "carla@gmail.com", sexo: "femenino" },
    { nombre: "Cristian", apellidos: "Martinez", telefono: "666333222", email: "cristian@gmail.com", sexo: "masculino" },
    { nombre: "David", apellidos: "Cases", telefono: "666777888", email: "david@gmail.com", sexo: "masculino" }
];

export function mostrarUsuarios(filtrarTexto = "") {
    const tablaBody = document.querySelector("#tabla-rellena tbody");
    tablaBody.textContent = "";

    let usuariosFiltrados;
    if (filtrarTexto.length >= 3) {
        usuariosFiltrados = usuarios.filter(usuario => 
            usuario.nombre.toLowerCase().includes(filtrarTexto) || 
            usuario.apellidos.toLowerCase().includes(filtrarTexto)
        );
    } else {
        usuariosFiltrados = usuarios;
    }

    usuariosFiltrados.forEach(usuario => {
        const fila = document.createElement("tr");

        ["nombre", "apellidos", "telefono", "email", "sexo"].forEach(campo => {
            const celda = document.createElement("td");
            celda.textContent = usuario[campo];
            fila.appendChild(celda);
        });


        const celdaAccion = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.onclick = () => fila.textContent = "";
        celdaAccion.appendChild(botonEliminar);
        fila.appendChild(celdaAccion);
        
        

        const enlaceEditar = document.createElement("a");
        enlaceEditar.setAttribute("href","#modal1")
        enlaceEditar.setAttribute("class","")
        enlaceEditar.textContent = "Edit";
        celdaAccion.appendChild(enlaceEditar);
        fila.appendChild(celdaAccion);
        tablaBody.appendChild(fila);

        fila.innerHTML+=`<div id="modal1" class="modal-overlay">
        <div class="modal">
            <h2>Modificar</h2>
            <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" name="apellidos" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required>

        <label for="sexo">Sexo:</label>
        <select id="sexo" name="sexo" required>
            <option active value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
        </select>

        <button id="enviar" type="submit">Enviar</button>
    </form>
            <a href="#" class="close-btn">Cerrar</a>
        </div>
    </div>`

    });
}
document.getElementById("filtro").addEventListener("input", function() {
    mostrarUsuarios(this.value.toLowerCase());
});

function cargarDatosVentanaModal(columnas){
    document.getElementById("nombre").value = columnas[0].textContent
    document.getElementById("apellidos").value = columnas[1].textContent
    document.getElementById("telefono").value = columnas[2].textContent
    document.getElementById("email").value = columnas[3].textContent
    document.getElementById("sexo").value = columnas[4].textContent
}

export function funcionalidadBotonesModificar(usuarios){
let tabla = document.getElementById("tabla-rellena")
let botonesModificar = tabla.getElementsByTagName("a")

for (let boton of botonesModificar){
    boton.onclick =  () => {
        funcionalidadBotonModificar(boton, usuarios, tabla)
    }
}
}

function funcionalidadBotonGuardar ( usuarios, boton) {

    let botonEnviar = document.getElementById("enviar") 
    botonEnviar.onclick  =  () => {
        let usuarioEncontrado = obtenerUsuarioDeFormulario(boton)
        for (let usuario of usuarios){
            if (usuario.email === usuarioEncontrado.email){
                usuario = usuarioEncontrado

                mostrarUsuarios()
                funcionalidadBotonesModificar()
                return
            }
        }
    }
}

function obtenerUsuarioDeFormulario(){
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let sexo = document.getElementById("sexo").value

    return {nombre, apellidos, telefono, email, sexo}
}

function funcionalidadBotonModificar(boton, usuarios, tabla){
    let tdBoton = boton.parentElement
    let tr = tdBoton.parentElement

    let camposTr = tr.getElementsByTagName("td")

    cargarDatosVentanaModal(camposTr)

    funcionalidadBotonGuardar( usuarios, tabla)

}

