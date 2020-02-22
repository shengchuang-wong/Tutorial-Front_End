// var slideIndex = 1;
// showSlides(slideIndex);

var slideIndex = 1;
var slidesInterval;

var slides = document.getElementsByClassName("mySlides");
var nextSlidesBtn = document.getElementById("nextBtn");
var prevSlidesBtn = document.getElementById("prevBtn");
autoSlide("start");

nextSlidesBtn.addEventListener("click", nextSlides);
prevSlidesBtn.addEventListener("click", prevSlides);

for (var j = 0; j < slides.length; j++) {
	slides[j].addEventListener("mouseover", function() {
		clearInterval(slidesInterval);
	});

	slides[j].addEventListener("mouseout", function() {
		autoSlide();
	});
}

function nextSlides(n) {
	//clearInterval(slidesInterval);
	if(n == null ) {
		showSlides(slideIndex += 1);
	} else if(n.type == "click") {
		clearInterval(slidesInterval);
		setTimeout(autoSlide, 0);
		showSlides(slideIndex += 1);
	}

}

function prevSlides(n) {
	//clearInterval(slidesInterval);
	clearInterval(slidesInterval);
	setTimeout(autoSlide, 0);
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	//clearInterval(slidesInterval);
	showSlides(slideIndex = n);
}

function autoSlide(type) {
	if(type === "start") {
		showSlides();
		setTimeout(autoSlide, 0);	
	} else {
		slidesInterval = setInterval(nextSlides, 2000);
	}
}	

function showSlides(n) {

	var i;
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length) {
		slideIndex = 1;
	} else if (n === 0) {
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for(i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classList.add("active");

}