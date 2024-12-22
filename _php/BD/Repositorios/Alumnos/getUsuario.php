<?php
include 'funcionalidad.php';
if (isset($_POST['idAlumno'])) {
    echo json_encode(obtenerAlumno($_POST['idAlumno']));
} else {
    echo json_encode(obtenerTodosLosAlumnos());
}