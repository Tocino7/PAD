<?php
header("Access-Control-Allow-Origin: *");

$conexion= mysqli_connect("localhost","root","","giftlist");

$Usuario= $_POST['Usuario'];
$Pass = $_POST['Pass'];
$Telefono = $_POST['Telefono'];

$sql="INSERT INTO usuario (`nombre`, `telefono`, `password`) VALUES ('$Usuario','$Telefono','$Pass')";

$resultado=mysqli_query($conexion,$sql);

mysqli_close($conexion);

if ($resultado==false)
	echo "es false";
if ($resultado==true)
	echo "es true";

?>