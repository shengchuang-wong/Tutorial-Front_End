$(document).ready(function() {

	readComment();

	$("#comment_form").submit(function(e) {

		var commentForm = $("#comment_form");

		$.ajax({
			type: 'POST',
			url: 'action.php',
			data: commentForm.serialize(),
			success: function(response) {
				$("#commentText").val('');
				$("#comment_list").append("<li>" + response + "</li>");
			}
		});

		e.preventDefault();
	});

	function readComment() {
		$("#comment_list").empty();

		$.ajax({
			type: 'GET',
			url: 'action1.php',
			success: function(response) {
				$.each(response, function(index) {
					$("#comment_list").append("<li>" + response[index].comment + "</li>");
				});
			}
		});
	}

});