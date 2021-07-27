
function createSlider() {
	let slides = [
		"images/image-1.jpg",
		"images/image-2.jpg",
		"images/image-3.jpg",
		"images/image-4.jpg",
		"images/image-5.jpg",
		"images/image-6.jpg"
	];

	let slider = document.getElementById("slider");
	let rail = document.getElementById("rail");
	let currentPosition = 0
	let pageWidth = 650

	function createSlide(url) {
		let slide = document.createElement("div");
		slide.className = "slide";
		slide.style.backgroundImage = "url("+ url + ")";

		return slide;
	}

	function createSlides() {
		for(let i = 0; i < slides.length; i++) {
			let slideIndex = createSlide(slides[i])
			rail.appendChild(slideIndex);
		}
	}
	createSlides();


	function next() {
		rail.style.transform = 'translateX(-' + currentPosition + 'px)';
		currentPosition += pageWidth;
		checkScroll();
	}

	function prev() {
		currentPosition -= pageWidth;
		rail.style.transform = 'translateX(-' + currentPosition + 'px)';
		checkScroll();
	}

	function createNavigation() {
		let nextButton = document.createElement("button");
		nextButton.className = "next";
		nextButton.innerText = "Next";
		nextButton.addEventListener("click", next);
		slider.appendChild(nextButton);

		let prevButton = document.createElement("button");
		prevButton.className = "prev";
		prevButton.innerText = "Prev";
		prevButton.addEventListener("click", prev);
		slider.appendChild(prevButton);

	}
	createNavigation();


	function checkScroll() {
		let scrollWidth = document.getElementById('rail').scrollWidth;

		if(currentPosition == scrollWidth- pageWidth) {
			currentPosition = 0;

		}else if(currentPosition == 0) {
			currentPosition = scrollWidth - pageWidth;
		}
	}

	// setInterval(next, 5000);
	// ვერ გავაკეთე ისე რომ სულ ეტრიალა. ვცადე while ლუპით გაკეთებაც, მაგრამ იციკლებოდა პროგრამა, ამიტომ ლიმიტი 5000 გავუწერე.
	function scrollTimer() {
		for(let i = 0; i < 5000; i++) {
			setTimeout(next, i * 5000);
		}
	}
	scrollTimer();

	return {next: next, prev: prev};
}

createSlider();


