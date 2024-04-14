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

// remove_class_active_hamburger
// window.addEventListener('click', function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove('hamburger-active');
//     navMenu.classList.add('hidden');
//   }
// });

// darktoggle
const darkModeToggle = document.querySelector("#darktoggle");
const html = document.querySelector("html");
darkModeToggle.addEventListener("click", function () {
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

// submit mailto:
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
			let hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
	if (!name || !email || !phone || !message) {
		alert("Please fill in all fields.");
		return;
	}
	if (name.length === 0 || email.length === 0 || phone.length === 0 || message.length === 0) {
		alert("Please provide valid input.");
		return;
	}
	const subject = `${name} [${email}]`;
	const body = message + "\n\n" + name + "\n" + phone;
	const mailtoLink = "mailto:anggunnantunggaputra@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
	window.location.href = mailtoLink;
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

// tobottom
window.addEventListener("scroll", function () {
	const goToBottom = document.getElementById("tobottom");
	const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
	// const totalHeight = document.body.scrollHeight;
	// const windowHeight = window.innerHeight;
	// if (scrollPosition + windowHeight >= totalHeight || scrollPosition === 0) {
	//     goToBottom.style.display = 'none';
	// } else {
	//     goToBottom.style.display = 'block';
	// }
	if (scrollPosition === 0) {
		goToBottom.style.display = "none";
	} else {
		goToBottom.style.display = "block";
	}
});
