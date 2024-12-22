<?php
include 'funcionalidad.php';
echo json_encode(añadirAlumno($_POST['nombre'],$_POST['apellidos'],$_POST['password'],$_POST['telefono'],$_POST['email'],$_POST['sexo'],$_POST['fechaNacimiento'],));
