<?php
// Password: AA6gr5ykw6Kohpe2wP86tpjYnVh4Sc
// Username: warnstro_root
$conn = new mysqli("localhost:3306", "root", "", "warnstro_typespeed");
 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 
$out = array('error' => false);
 
$crud = 'read';
 
if(isset($_GET['warnstro_typespeed'])){
	$crud = $_GET['warnstro_typespeed'];
}
 
 
if($crud = 'read'){
	$sql = "select * from users";
	$query = $conn->query($sql);
	$users = array();
 
	while($row = $query->fetch_array()){
		array_push($users, $row);
	}
 
	$out['users'] = $users;
}
 
 
$conn->close();
 
header("Content-type: application/json");
echo json_encode($out);
die();
?>