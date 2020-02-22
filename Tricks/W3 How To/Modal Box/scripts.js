var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When open modal button is clicked
btn.addEventListener("click", function() {
	modal.style.display = "block";
});

// When the close button is clicked
span.addEventListener("click", function() {
	modal.style.display = "none";
});

// When the window is clicked
window.addEventListener("click", function(e) {
	if(e.target == modal) {
		modal.style.display = "none";
	} 
});


