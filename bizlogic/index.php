<?php

session_start();

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
	
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$servername = "localhost";
$username = "root";
$password = "";
$db = "db";


$conn = new mysqli($servername, $username, $password, $db);

$myusername = $_POST['username'];
$mypassword = $_POST['password'];

$sql = "SELECT id FROM user WHERE username = '$myusername' and passcode = '$mypassword'";
$result = mysqli_query($db,$sql);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
$active = $row['active'];

$count = mysqli_num_rows($result)

if($count == 1) {
	session_register("myusername");
	$_SESSION['login_user'] = $myusername;
	$_SESSION['valid'] = true;
	
	header("location: welcome.php");
 }else {
	$error = "Your Login Name or Password is invalid";
 }


?>