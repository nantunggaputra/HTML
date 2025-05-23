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
	const fewdfButton = document.getElementById("fewdf");
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
		fewdfButton.style.display = "none";
		fewctButton.style.display = "none";
	} else {
		goToBottom.style.display = "";
		audioButton1.style.display = "";
		audioButton2.style.display = "";
		donationButton.style.display = "";
		qnaButton.style.display = "";
		fewdfButton.style.display = "";
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
