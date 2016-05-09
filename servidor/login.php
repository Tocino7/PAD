<?php
header("Access-Control-Allow-Origin: *");

$conexion= mysqli_connect("localhost","root","","giftlist");

$Usuario= $_POST['Usuario'];
$Pass = $_POST['Pass'];

$sql="SELECT * FROM usuario WHERE `nombre`='$Usuario' and `password`='$Pass'";

$resultado=mysqli_query($conexion,$sql);

mysqli_close($conexion);

if ($resultado->num_rows==0)
	echo "Login fallido";
if ($resultado->num_rows==1)
	echo "Login correcto";

?>