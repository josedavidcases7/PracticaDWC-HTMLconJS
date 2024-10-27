const usuarios = [
    { nombre: "Carla", apellidos: "Castillo", telefono: "666555444", email: "carla@gmail.com", sexo: "femenino" },
    { nombre: "Cristian", apellidos: "Martinez", telefono: "666333222", email: "cristian@gmail.com", sexo: "masculino" },
    { nombre: "David", apellidos: "Cases", telefono: "666777888", email: "david@gmail.com", sexo: "masculino" }
];

function mostrarUsuarios(filtrarTexto = "") {
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
        tablaBody.appendChild(fila);
    });
}
document.getElementById("filtro").addEventListener("input", function() {
    mostrarUsuarios(this.value.toLowerCase());
});

window.onload = mostrarUsuarios;
