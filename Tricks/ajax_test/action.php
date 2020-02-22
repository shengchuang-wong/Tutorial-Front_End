<?php 

	$conn = new mysqli('localhost', 'root', '', 'ajax_comment');

	if($conn->error) {
		die("error");
	}

	$comment = $_POST['comment'];
	$now = date('Y-m-d H:i:s');

	$sql = $conn->prepare("INSERT INTO comment (`comment`, `date`) VALUES (?, ?)");

	$sql->bind_param("ss", $comment, $now);

	$sql->execute();

	mysqli_close($conn);

	echo $comment;

?>