<?php 
include "connect.php";	


if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
    header("Access-Control-Allow-Origin: *");
    header('Content-type: text/html; charset=utf-8');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data = json_decode(file_get_contents("php://input"), true);

    echo $data;
    $name = $data["name"];
    $words_per_minute = $data["words_per_minute"];
    $accuracy = $data["accuracy"];

    $sql = "INSERT INTO users ( name, words_per_minute, accuracy) VALUES ('$name', '$words_per_minute', '$accuracy')";
    $conn->exec($sql);
}
?>