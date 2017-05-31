<?php
	$username1 = $_POST['username'];
	$password1 = $_POST['password'];
	$json_arr = array("name"=>$username1,"pwd"=>$password1);
	$json_obj = json_encode($json_arr);
	echo $json_obj;
?>