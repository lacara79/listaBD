<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000'); 
header('Access-Length: 0');
header('Content-Type: text/plain');

	$pdo = new PDO("mysql:host=localhost;dbname=aula", "root", ""); 

    $nome = $_GET["nome"];
    $email = $_GET["email"];
   
    $sql = $pdo->query("insert into aluno(`id`, `nome`, `email`) VALUES  (NULL,\"$nome\",\"$email\") ");
    echo json_encode($nome . $email);
?>