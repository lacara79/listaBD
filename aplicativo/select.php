<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000'); 
    header('Access-Length: 0');
    header('Content-Type: text/plain');

    $pdo = new PDO("mysql:host=localhost;dbname=aula", "root", ""); 


    $sql = $pdo->query("select * from aluno");
    $total = $sql->rowCount();


        while($row = $sql->fetch()){
            $alunos[] = array(
                "id" => $row['id'],	
                "nome"=> $row['nome'],
                "email"=> $row['email']
            );           
        }

        echo json_encode($alunos);
    


?>