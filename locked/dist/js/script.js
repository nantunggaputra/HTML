// time_logic
function generateArcLines() {
	const arcLines = document.getElementById("arcLines");
	arcLines.innerHTML = "";

	const totalLines = 60;
	const isMobile = window.innerWidth <= 768;
	const startAngle = isMobile ? -180 : 90;
	const endAngle = isMobile ? 0 : 270;
	const angleRange = endAngle - startAngle;
	const angleStep = angleRange / (totalLines - 1);
	const radius = 90;
	const centerX = 100;
	const centerY = 100;
	const lineLength = 15;

	for (let i = 0; i < totalLines; i++) {
		const angle = startAngle + i * angleStep;
		const radian = (angle * Math.PI) / 180;

		const x1 = centerX + (radius - lineLength) * Math.cos(radian);
		const y1 = centerY + (radius - lineLength) * Math.sin(radian);
		const x2 = centerX + radius * Math.cos(radian);
		const y2 = centerY + radius * Math.sin(radian);

		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);
		line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);
		line.classList.add("arc-line");
		line.dataset.index = i;

		arcLines.appendChild(line);
	}
}

function updateArcLines(seconds) {
	const lines = document.querySelectorAll(".arc-line");

	lines.forEach((line, index) => {
		if (index <= seconds) {
			line.classList.add("active");
		} else {
			line.classList.remove("active");
		}
	});
}

function updateTime() {
	const now = new Date();

	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	document.getElementById("hour").textContent = `${hours}:${minutes}`;

	const seconds = now.getSeconds();
	document.getElementById("second").textContent = String(seconds).padStart(2, "0");

	updateArcLines(seconds);

	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const month = months[now.getMonth()];
	const date = now.getDate();
	const year = now.getFullYear();
	const day = days[now.getDay()];

	document.getElementById("date").textContent = `${month} ${date} ${year}`;
	document.getElementById("day").textContent = day;

	const totalMinutesInDay = 24 * 60;
	const minutesPassed = now.getHours() * 60 + now.getMinutes();
	const progressPercent = Math.round((minutesPassed / totalMinutesInDay) * 100);

	document.getElementById("progressPercent").textContent = progressPercent;

	const circle = document.getElementById("progressCircle");
	const circumference = 2 * Math.PI * 60;
	const offset = circumference - (progressPercent / 100) * circumference;
	circle.style.strokeDashoffset = offset;
}

// feature_logic
function goHome() {
	window.location.href = "../";
}

async function shareScreen() {
	const shareData = {
		title: "Homepage Portfolio | Locked",
		text: "I am Nantungga Putra, an enthusiastic newcomer to the world of programming and web development, inspired to continually learn and enhance technical skills. This Homepage Portfolio features my latest projects around the front-end web development from several online courses including programming tech influencers. Thank you for exploring my website. I hope the provided information offers valuable insights.",
		url: window.location.href,
	};

	try {
		if (navigator.share) {
			await navigator.share(shareData);
		} else {
			await navigator.clipboard.writeText(window.location.href);
			console.log("Link copied to clipboard!");
		}
	} catch (err) {
		if (err.name !== "AbortError") {
			console.error("Share failed:", err);
		}
	}
}

function addBookmark() {
	const pageTitle = document.title;
	const pageURL = window.location.href;

	try {
		if (window.sidebar && window.sidebar.addPanel) {
			window.sidebar.addPanel(pageTitle, pageURL, "");
		} else if (window.external && "AddFavorite" in window.external) {
			window.external.AddFavorite(pageURL, pageTitle);
		} else {
			console.error("Press Ctrl+D (Cmd+D on Mac) to bookmark this page!");
		}
	} catch (e) {
		console.error("Press Ctrl+D (Cmd+D on Mac) to bookmark this page!");
	}
}

generateArcLines();
updateTime();
setInterval(updateTime, 1000);
