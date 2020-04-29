<?php 
include "connect.php";
echo "asdawdawd";
if ($_SERVER['REQUEST_METHOD'] == 'GET')  {
    header('Access-Control-Allow-Origin: *');    
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin", "*");
    header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    $sql = "SELECT * FROM users";

    $result = $database->query($sql);

    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
}
?>