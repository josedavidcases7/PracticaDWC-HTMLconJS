<?php
include 'funcionalidad.php';
echo json_encode(modificarAlumno($_POST['idAlumno'],$_POST['nombre'],$_POST['apellidos'],$_POST['password'],$_POST['telefono'],$_POST['email'],$_POST['sexo'],$_POST['fechaNacimiento'],));
