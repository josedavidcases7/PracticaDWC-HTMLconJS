<?php
Class Alumno implements JsonSerializable{
    private $id;
    private $nombre;
    private $apellidos;
    private $password;
    private $telefono;
    private $email;
    private $sexo;
    private $fechaNacimiento;
    function __construct($id, $nombre, $apellidos, $password, $telefono, $email, $sexo, $fechaNacimiento){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->password = $password;
        $this->telefono = $telefono;
        $this->email = $email;
        $this->sexo = $sexo;
        $this->fechaNacimiento = $fechaNacimiento;
    }

    //{id:1,nombreCreacion:paco}
    function jsonSerialize():mixed { 
        return array(
            'id'=>$this->id,
            'nombre'=>$this->nombre,
            'apellidos'=>$this->apellidos,
            'password'=>$this->password,
            'telefono'=>$this->telefono,
            'email'=>$this->email,
            'sexo'=>$this->sexo,
            'fechaNacimiento'=>$this->fechaNacimiento
        );
    } 
}

?>