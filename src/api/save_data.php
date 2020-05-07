<?php 
include "connect.php";	
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Origin: *");
header('Content-type: text/html; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
    
    $data = json_decode(file_get_contents("php://input"), true);

    $username = $data["username"];
    $words_per_minute = $data["words_per_minute"];
    $accuracy = $data["accuracy"];

    $sth = $conn->prepare("INSERT INTO users ( username, words_per_minute, accuracy) VALUES (:username, :words_per_minute, :accuracy)");
    $sth->bindValue(':username', $username, PDO::PARAM_STR);
    $sth->bindValue(':words_per_minute', $words_per_minute, PDO::PARAM_STR);
    $sth->bindValue(':accuracy', $accuracy, PDO::PARAM_INT);
    $sth->execute();
    $conn = null;
}
?>