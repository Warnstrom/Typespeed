<?php 
include "connect.php";
if ($_SERVER['REQUEST_METHOD'] == 'GET')  {
    header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Origin: *');    
    header('Content-Type: application/json');

    $query = "SELECT * FROM users";
    $statement = $conn->prepare($query);
    $statement->execute();
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($results);
    echo $json;
    $conn = null;
}
?>