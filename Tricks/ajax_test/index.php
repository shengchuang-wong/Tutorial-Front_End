<!DOCTYPE html>
<html>
<head>
	<title>Ajax</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<h1>Comment System</h1>
	<div id="comment_container">
		<ul id="comment_list">
		</ul>
	</div>
	<form method="post" id="comment_form">
		<input type="text" name="comment" placeholder="comment..." autocomplete="off" required="required" id="commentText" >
		<input type="submit" name="submit" value="Submit">
	</form>

	<marquee>123</marquee>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script type="text/javascript" src="scripts.js"></script>
</body>
</html>