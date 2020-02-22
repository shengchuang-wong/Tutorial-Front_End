<?php 

	$conn = new mysqli('localhost', 'root', '', 'ajax_comment');

	if($conn->error) {
		die("error");
	}

	$sql = "select * from comment";

	$result = mysqli_query($conn, $sql) or die("error".mysqli_error($conn));

	$myArray = array();
	while($row = mysqli_fetch_assoc($result)) {
		$myArray[] = $row;
	}

	mysqli_close($conn);

	header('Content-Type: application/json');

	$json = json_encode($myArray);

	echo $json;

?>