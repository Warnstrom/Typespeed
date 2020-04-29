<?php

$servername = "82.203.157.51";
$username="warnstro_root"; 
$password="AA6gr5ykw6Kohpe2wP86tpjYnVh4Sc"; 
$dbname="warnstro_typespeed"; 
$usertable="users"; 
$yourfield = "your_field";   

//Connect to the database 
$connection = mysql_connect($hostname, $username, $password); mysql_select_db($dbname, $connection);   

//Setup our query 
$query = "SELECT * FROM $usertable";   

//Run the query 
$result = mysql_query($query);   

//If the query returned results, loop through each result
if($result) 
    {   while($row = mysql_fetch_array($result))   
        {     $name = $row["$yourfield"];     
              echo "Name: " . $name; 
   } }   

?>