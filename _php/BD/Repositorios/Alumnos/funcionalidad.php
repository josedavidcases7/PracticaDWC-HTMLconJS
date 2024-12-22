<?php
include './../../Modelos/Alumno.php';

function obtenerAtributosAlumno($filaQuery)
{
    if ($filaQuery == null) {
        return null;
    }

    $id = $filaQuery["id"];
    $nombre = $filaQuery["nombre"];
    $apellidos = $filaQuery["apellidos"];
    $password = $filaQuery["password"];
    $telefono = $filaQuery["telefono"];
    $email = $filaQuery["email"];
    $sexo = $filaQuery["sexo"];
    $fechanacimiento = $filaQuery["fecha_nacimiento"];

    $resultadoFinal = new Alumno($id, $nombre, $apellidos, $password, $telefono, $email, $sexo, $fechanacimiento);

    return $resultadoFinal;
}

function connectMySQL()
{
    $conn = mysqli_connect("localhost", "root", "", "colegio");
    if (!$conn) {
        return die(mysqli_connect_error());
    }
    return $conn;
}

function executeQuery($sql)
{
    $conn = connectMySQL();
    $queryResult = mysqli_query($conn, $sql);
    mysqli_close($conn);

    return $queryResult;
}

function generarAtributosAlumnos($queryResult)
{
    $lista = array();
    while ($resultado = $queryResult->fetch_assoc()) {

        $resultadoFinal = obtenerAtributosAlumno($resultado);
        array_push($lista, $resultadoFinal);
    }
    return $lista;
}

function generarAtributosAlumno($queryResult)
{
    $resultado = $queryResult->fetch_assoc();
    $resultadoFinal = obtenerAtributosAlumno($resultado);
    return $resultadoFinal;
}

function obtenerTodosLosAlumnos()
{
    $sql = "SELECT * FROM alumno;";


    $queryResult = executeQuery($sql);

    $listaObjetos = generarAtributosAlumnos($queryResult);

    return $listaObjetos;
}

function eliminarAlumno($id)
{
    $alumno = obtenerAlumno($id);
    if($alumno == null){
        return null;
    }
    $sql = "DELETE FROM alumno WHERE id = $id;";

    $queryResult = executeQuery($sql);

    return $alumno;
}

function añadirAlumno($nombre,$apellidos, $password, $telefono, $email, $sexo, $fechaNacimiento)
{
    $sql = "INSERT INTO alumno (nombre, apellidos, password, telefono, email, sexo, fecha_nacimiento) 
    VALUES ('$nombre', '$apellidos', '$password', $telefono, '$email', '$sexo', '$fechaNacimiento');";

    $queryResult = executeQuery($sql);

    $alumnoCreado = obtenerAlumnoPorEmail($email);
    return $alumnoCreado;
}

function obtenerAlumnoPorEmail($email)
{
    $sql = "SELECT * FROM alumno WHERE email = '$email'";
   
    $queryResult = executeQuery($sql);
    $objeto = generarAtributosAlumno($queryResult);

    return $objeto;
}


function obtenerAlumno($id)
{
    $sql = "SELECT * FROM alumno WHERE id = $id";
   
    $queryResult = executeQuery($sql);
    $objeto = generarAtributosAlumno($queryResult);

    return $objeto;
}
function modificarAlumno($id,$nombre,$apellidos, $password, $telefono, $email, $sexo, $fechaNacimiento)
{
    $alumnoBuscado = obtenerAlumno($id);
    if($alumnoBuscado == null){
        return null;
    }

    $sql = "UPDATE alumno SET nombre = '$nombre', apellidos = '$apellidos', password = '$password', telefono = $telefono, email = '$email', sexo = '$sexo', fecha_nacimiento = '$fechaNacimiento' WHERE id = $id;";

    $queryResult = executeQuery($sql);

    return $queryResult;
}
?>