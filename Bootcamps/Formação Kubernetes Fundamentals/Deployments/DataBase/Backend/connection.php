<?php

// Define os dados para a conexão com o banco de dados.

$servername = "mysql-connection-service";
$username = "root";
$password = "admin";
$database = "DataBase";

// Realiza a conexão com o banco de dados.

$conn = new mysqli($servername, $username, $password, $database);

// Verifica se houve erro na conexão.

if (mysqli_connect_errno()) {
    printf("Falha ao conectar-se ao banco de dados: %s\n", mysqli_connect_error());
    exit();
}

?>