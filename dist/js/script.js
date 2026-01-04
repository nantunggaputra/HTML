// scroll_progress_bar
const progressBar = document.getElementById("scroll-progress");
function updateProgressBar() {
	const windowHeight = window.innerHeight;
	const documentHeight = document.documentElement.scrollHeight;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
	progressBar.style.width = scrollPercentage + "%";
}
window.addEventListener("scroll", updateProgressBar);
updateProgressBar();

// fixed_navbar
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;
	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// toggle_class_active_hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

// // dark_mode
// if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
// 	document.documentElement.classList.add("dark");
// } else {
// 	document.documentElement.classList.remove("dark");
// }

// darktoggle
const darkModeToggle = document.querySelector("#darktoggle");
const audioElements = document.querySelectorAll("audio");
const html = document.querySelector("html");
darkModeToggle.addEventListener("click", function () {
	audioElements.forEach((audio) => {
		audio.pause();
	});
	if (isPlaying1) {
		audio1.pause();
		isPlaying1 = false;
		button1.innerText = "♪";
	}
	if (isPlaying2) {
		audio2.pause();
		isPlaying2 = false;
		button2.innerText = "♩";
	}
	if (darkModeToggle.checked) {
		html.classList.add("dark");
		localStorage.theme = "dark";
	} else {
		html.classList.remove("dark");
		localStorage.theme = "light";
	}
});

// darktoggle_localstorage
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
	darkModeToggle.checked = true;
} else {
	darkModeToggle.checked = false;
}

// bluelightfiltertoggle
const readingModeToggle = document.getElementById("apply-filter");
readingModeToggle.addEventListener("click", dim);
function dim() {
	if (document.body.classList.contains("bluelightfilter")) {
		document.body.classList.remove("bluelightfilter");
	} else {
		document.body.classList.add("bluelightfilter");
	}
}

// audio
const audio1 = new Audio("./dist/audio/Project_DMM_-_Kimi_ni_Dekiru_Nanika_(OST_Ultraman_Cosmos).mp3");
const audio2 = new Audio("./dist/audio/DEEN_-_Kimi_ga_inai_Natsu_(OST_Detective_Conan).mp3");
audio1.loop = true;
audio2.loop = true;
let isPlaying1 = false;
let isPlaying2 = false;

// audio_on_click_button
const button1 = document.getElementById("playAudioButton1");
const button2 = document.getElementById("playAudioButton2");
button1.addEventListener("click", function () {
	audioElements.forEach((audio) => {
		audio.pause();
	});
	if (isPlaying1) {
		audio1.pause();
		isPlaying1 = false;
		button1.innerText = "♪";
	} else {
		if (isPlaying2) {
			audio2.pause();
			isPlaying2 = false;
			button2.innerText = "♩";
		}
		audio1.play();
		isPlaying1 = true;
		button1.innerText = "ᯤ";
	}
});
button2.addEventListener("click", function () {
	audioElements.forEach((audio) => {
		audio.pause();
	});
	if (isPlaying2) {
		audio2.pause();
		isPlaying2 = false;
		button2.innerText = "♩";
	} else {
		if (isPlaying1) {
			audio1.pause();
			isPlaying1 = false;
			button1.innerText = "♪";
		}
		audio2.play();
		isPlaying2 = true;
		button2.innerText = "ᯤ";
	}
});

// donations_link
document.addEventListener("DOMContentLoaded", function () {
	const donationsLinks = document.querySelectorAll(".donations-link");
	donationsLinks.forEach((donationsLink) => {
		donationsLink.addEventListener("click", function (event) {
			event.preventDefault();
			window.open("https://rebrand.ly/nantunggaputra-on-trakteer", "_blank");
			setTimeout(() => {
				window.location.href = donationsLink.getAttribute("title");
			}, 100);
		});
	});
});

// // project_based_link
// document.addEventListener("DOMContentLoaded", function () {
// 	const projectLink = document.querySelector(".project-based-link");
// 	projectLink.addEventListener("click", function (event) {
// 		event.preventDefault();
// 		window.open("https://nantunggaputra-sabikerja-frontend-web.vercel.app/", "_blank");
// 		setTimeout(() => {
// 			window.location.href = "https://nantunggaputra-indonesiajapantravel-beta-frontend-web.vercel.app/";
// 		}, 100);
// 	});
// });

// faq_toggle
document.addEventListener("DOMContentLoaded", function () {
	const faqItems = document.querySelectorAll(".faq-item");
	faqItems.forEach((item) => {
		const question = item.querySelector(".faq-question");
		const answer = item.querySelector(".faq-answer");
		question.addEventListener("click", () => {
			answer.classList.toggle("hidden");
		});
	});
});

// carousel_slide
const track = document.getElementById("carousel-track");
const carousel = document.getElementById("carousel");
const dots = document.querySelectorAll(".dot-indicator");
const totalSlides = 5;
let currentSlide = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;
let startTransform = 0;
function updateCarousel() {
	const offset = -currentSlide * 100;
	track.style.transform = `translateX(${offset}%)`;
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add("active");
		} else {
			dot.classList.remove("active");
		}
	});
}
function handleStart(e) {
	isDragging = true;
	startX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
	startTransform = -currentSlide * carousel.offsetWidth;
	track.style.transition = "none";
}
function handleMove(e) {
	if (!isDragging) return;
	e.preventDefault();
	currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
	const diff = currentX - startX;
	const newTransform = startTransform + diff;
	track.style.transform = `translateX(${newTransform}px)`;
}
function handleEnd() {
	if (!isDragging) return;
	isDragging = false;
	track.style.transition = "transform 0.3s ease-out";
	const diff = currentX - startX;
	const threshold = carousel.offsetWidth * 0.2;
	if (diff > threshold && currentSlide > 0) {
		currentSlide--;
	} else if (diff < -threshold && currentSlide < totalSlides - 1) {
		currentSlide++;
	}
	updateCarousel();
}
carousel.addEventListener("mousedown", handleStart);
carousel.addEventListener("mousemove", handleMove);
carousel.addEventListener("mouseup", handleEnd);
carousel.addEventListener("mouseleave", handleEnd);
carousel.addEventListener("touchstart", handleStart, { passive: true });
carousel.addEventListener("touchmove", handleMove, { passive: false });
carousel.addEventListener("touchend", handleEnd);
dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentSlide = index;
		updateCarousel();
	});
});
carousel.addEventListener("dragstart", (e) => e.preventDefault());

// blog_switch_tab
function switchTab(tab) {
	const btnOtaku = document.getElementById("btn-otaku");
	const btnTech = document.getElementById("btn-tech");
	const contentOtaku = document.getElementById("content-otaku");
	const contentTech = document.getElementById("content-tech");
	const subtitle = document.getElementById("blog-subtitle");
	const description = document.getElementById("blog-description");
	if (tab === "otaku") {
		btnOtaku.classList.add("active");
		btnTech.classList.remove("active");
		contentOtaku.classList.remove("hidden");
		contentOtaku.classList.add("flex");
		contentTech.classList.remove("flex");
		contentTech.classList.add("hidden");
		subtitle.textContent = "Last Scribbles";
		description.textContent = "This line contains someone's writing/scribbles on my blog about Ending Detective Conan fanfiction.";
	} else if (tab === "tech") {
		btnTech.classList.add("active");
		btnOtaku.classList.remove("active");
		contentTech.classList.remove("hidden");
		contentTech.classList.add("flex");
		contentOtaku.classList.remove("flex");
		contentOtaku.classList.add("hidden");
		subtitle.textContent = "Hottest Posts";
		description.textContent = "This section features my posts on my blog about Website and Web App Technologies article.";
	}
}

// audio_source
const audioSource = document.querySelectorAll("audio");
audioSource.forEach((audio) => {
	audio.addEventListener("play", () => {
		if (isPlaying1) {
			audio1.pause();
			isPlaying1 = false;
			button1.innerText = "♪";
		}
		if (isPlaying2) {
			audio2.pause();
			isPlaying2 = false;
			button2.innerText = "♩";
		}
	});
});

// confetti_effect
function createConfetti(e) {
	const colors = ["#FF6B6B", "#FFFFFF", "#45B7D1", "#000000", "#98D8C8", "#F7DC6F", "#BB8FCE", "#0377B9"];
	const confettiCount = 30;
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	for (let i = 0; i < confettiCount; i++) {
		const confetti = document.createElement("div");
		confetti.className = "confetti";
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		confetti.style.backgroundColor = randomColor;
		if (Math.random() > 0.5) {
			confetti.style.borderRadius = "50%";
		}
		confetti.style.left = mouseX + "px";
		confetti.style.top = mouseY + "px";
		const angle = (Math.PI * 2 * i) / confettiCount;
		const velocity = 60 + Math.random() * 40;
		const tx = Math.cos(angle) * velocity;
		const ty = Math.sin(angle) * velocity * 1;
		const rotate = Math.random() * 720 - 360;
		confetti.style.setProperty("--tx", tx + "px");
		confetti.style.setProperty("--ty", ty + "px");
		confetti.style.setProperty("--rotate", rotate + "deg");
		document.body.appendChild(confetti);
		setTimeout(() => {
			confetti.remove();
		}, 800);
	}
}
let isHovering = false;
const hoverElements = document.querySelectorAll(".confetti-effect");
hoverElements.forEach((element) => {
	element.addEventListener("mouseenter", function (e) {
		if (!isHovering) {
			isHovering = true;
			createConfetti(e);
		}
	});
	element.addEventListener("mouseleave", function () {
		isHovering = false;
	});
});

// input_name
const inputElement = document.getElementById("name");
inputElement.addEventListener("input", function () {
	let inputValue = inputElement.value;
	let cleanValue = inputValue.replace(/[^a-zA-Z\s'\-]/g, "");
	inputElement.value = cleanValue;
});

// input_number
document.getElementById("phone").addEventListener("input", function () {
	this.value = this.value.replace(/[^0-9]/g, "");
});

// submit_mailto:
document.getElementById("myForm").addEventListener("submit", function (event) {
	event.preventDefault();
	let storageAvailable = true;
	let storage = null;
	try {
		if (typeof Storage !== "undefined") {
			storage = localStorage;
		} else if (typeof sessionStorage !== "undefined") {
			storage = sessionStorage;
		} else {
			storageAvailable = false;
		}
	} catch (error) {
		console.error("An error occurred while accessing web storage:", error);
		storageAvailable = false;
	}
	if (!storageAvailable) {
		console.log("Web storage is not supported.");
		return;
	}
	try {
		let lastEmailSent = parseInt(storage.getItem("lastEmailSent"));
		let currentTime = Date.now();
		if (lastEmailSent) {
			let timeDiff = currentTime - lastEmailSent;
			let hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
			if (hoursDiff >= 24) {
				storage.setItem("emailCount", "0");
			}
		}
		let emailCount = parseInt(storage.getItem("emailCount")) || 0;
		if (emailCount >= 3) {
			console.log("You have exceeded the send request limit.");
			return;
		}
		storage.setItem("emailCount", emailCount + 1);
		storage.setItem("lastEmailSent", currentTime.toString());
	} catch (error) {
		console.error("An error occurred while accessing web storage:", error);
	}
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const message = document.getElementById("message").value.trim();
	const subject = `${name} [${email}]`;
	const body = message + "\n\n" + name + "\n" + phone;
	const mailtoLink = "mailto:anggunnantunggaputra@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
	if (!name || !email || !phone || !message || name.length === 0 || email.length === 0 || phone.length === 0 || message.length === 0) {
		alert("Please provide valid input.");
		return;
	} else {
		window.location.href = mailtoLink;
	}
});

// visitor_counter
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
	visitCount = Number(visitCount) + 1;
	localStorage.setItem("page_view", visitCount);
} else {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
resetButton.addEventListener("click", () => {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
	counterContainer.innerHTML = visitCount;
});

// copyright_year
const copyrightYear = document.getElementById("current-year");
if (copyrightYear) {
	copyrightYear.textContent = new Date().getFullYear();
}

// donation
document.addEventListener("DOMContentLoaded", function () {
	const donationLink = document.querySelector(".donation");
	donationLink.addEventListener("click", function (event) {
		event.preventDefault();
		window.open("https://rebrand.ly/nantunggaputra-on-trakteer", "_blank");
	});
});

// tobottom
window.addEventListener("scroll", function () {
	const goToTop = document.getElementById("totop");
	const goToBottom = document.getElementById("tobottom");
	const audioButton1 = document.getElementById("playAudioButton1");
	const audioButton2 = document.getElementById("playAudioButton2");
	const donationButton = document.getElementById("donation");
	const qnaButton = document.getElementById("qna");
	const fewdf1Button = document.getElementById("fewdf1");
	const fewdf2Button = document.getElementById("fewdf2");
	const fewctButton = document.getElementById("fewct");
	const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
	const viewportHeight = document.documentElement.clientHeight;
	const documentHeight = document.documentElement.scrollHeight;
	if (scrollPosition + viewportHeight <= 2000) {
		goToTop.style.display = "";
	} else {
		goToTop.style.display = "flex";
	}
	if (scrollPosition + viewportHeight >= documentHeight - 200) {
		goToBottom.style.display = "none";
		audioButton1.style.display = "none";
		audioButton2.style.display = "none";
		donationButton.style.display = "none";
		qnaButton.style.display = "none";
		fewdf1Button.style.display = "none";
		fewdf2Button.style.display = "none";
		fewctButton.style.display = "none";
	} else {
		goToBottom.style.display = "";
		audioButton1.style.display = "";
		audioButton2.style.display = "";
		donationButton.style.display = "";
		qnaButton.style.display = "";
		fewdf1Button.style.display = "";
		fewdf2Button.style.display = "";
		fewctButton.style.display = "";
	}
});

// for_develovers
console.log("---");
console.log("Hi Develovers!");
console.log("Every programmer is an author.");
console.log("Programming isn't about what you know; it's about what you can figure out.");
console.log("If debugging is the process of removing software bugs, then programming must be the process of putting them in.");
console.log("I am Nantungga Putra, a Front-End Web Developer, the developer of this website. Thank you for exploring my website. I hope the provided information offers valuable insights. Let's work together on innovative technology solutions!");
console.log("---");
