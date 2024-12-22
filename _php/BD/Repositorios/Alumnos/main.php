<?php
include 'funcionalidad.php';
$numQuery = 0;
if (isset($_POST['numQuery'])) {
    $numQuery = $_POST['numQuery'];
}

switch ($numQuery) {
    case 1:
        echo json_encode(obtenerTodosLosAlumnos());
        break;
    case 2:
        echo json_encode(eliminarAlumno($_POST['idAlumno']));
        break;
    case 3:
        echo json_encode(añadirAlumno($_POST['nombre'],$_POST['apellidos'],$_POST['password'],$_POST['telefono'],$_POST['email'],$_POST['sexo'],$_POST['fechaNacimiento'],));
        break;
    case 4:
        echo json_encode(obtenerAlumno($_POST['idAlumno']));
        break;
    case 5:
        echo json_encode(modificarAlumno($_POST['idAlumno'],$_POST['nombre'],$_POST['apellidos'],$_POST['password'],$_POST['telefono'],$_POST['email'],$_POST['sexo'],$_POST['fechaNacimiento'],));
        break;
    }
?>
