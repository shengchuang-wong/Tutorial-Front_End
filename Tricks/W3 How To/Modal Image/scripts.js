var modal = document.getElementById("myModal");

var imgs = document.getElementsByClassName("myImgs");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("click", function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	});	
}

var span = document.getElementsByClassName("close")[0];

span.addEventListener("click", function() {
	modal.style.display = "none";
});

window.addEventListener("click", function(e) {
	if(e.target == modal) {
		modal.style.display = "none";
	}
});