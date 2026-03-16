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
let isCoolingDown = false;
async function copyToClipboard() {
	if (isCoolingDown) return;
	const btn = document.getElementById("copied");
	const icon = btn.querySelector("i, svg");
	if (!icon) {
		console.error("Icon tidak ditemukan!");
		return;
	}
	try {
		await navigator.clipboard.writeText(window.location.href);
		console.log("Link copied! Paste to bookmark bar or share with friends!");
	} catch (e) {
		const tempInput = document.createElement("input");
		tempInput.value = window.location.href;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		console.log("Link copied! Paste to bookmark bar or share with friends!");
	}
	isCoolingDown = true;
	btn.disabled = true;
	icon.setAttribute("data-feather", "check");
	feather.replace();
	setTimeout(() => {
		const currentIcon = btn.querySelector("i, svg");
		currentIcon.setAttribute("data-feather", "copy");
		feather.replace();
		isCoolingDown = false;
		btn.disabled = false;
	}, 5000);
}
generateArcLines();
updateTime();
setInterval(updateTime, 1000);

// hidden_game_logic
let dragStartX = 0;
let dragStartY = 0;
let isDragging = false;
document.addEventListener("mousedown", (e) => {
	dragStartX = e.clientX;
	dragStartY = e.clientY;
	isDragging = true;
});
document.addEventListener("mousemove", (e) => {
	if (!isDragging) return;
	const deltaX = Math.abs(e.clientX - dragStartX);
	const deltaY = Math.abs(e.clientY - dragStartY);
	const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	if (distance >= 25) {
		triggerGame();
		isDragging = false;
	}
});
document.addEventListener("mouseup", () => {
	isDragging = false;
});
document.addEventListener("keydown", (e) => {
	if ((e.ctrlKey || e.metaKey) && e.key === "a") {
		e.preventDefault();
		triggerGame();
	}
});
let touchStartX = 0;
let touchStartY = 0;
let isTouching = false;
let longPressTimer;
let isLongPressActive = false;
document.addEventListener("touchstart", (e) => {
	touchStartX = e.touches[0].clientX;
	touchStartY = e.touches[0].clientY;
	isTouching = true;
	isLongPressActive = false;
	longPressTimer = setTimeout(() => {
		isLongPressActive = true;
	}, 500);
});
document.addEventListener("touchmove", (e) => {
	if (!isTouching || !isLongPressActive) {
		clearTimeout(longPressTimer);
		return;
	}
	const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
	const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
	const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	if (distance >= 25) {
		e.preventDefault();
		clearTimeout(longPressTimer);
		triggerGame();
		isTouching = false;
		isLongPressActive = false;
	}
});
document.addEventListener("touchend", () => {
	clearTimeout(longPressTimer);
	isTouching = false;
	isLongPressActive = false;
});
document.addEventListener("selectstart", (e) => {
	const gameOverlay = document.getElementById("gameOverlay");
	if (gameOverlay && gameOverlay.classList.contains("active")) {
		e.preventDefault();
	}
});
function triggerGame() {
	const gameOverlay = document.getElementById("gameOverlay");
	if (gameOverlay && !gameOverlay.classList.contains("active")) {
		gameOverlay.classList.add("active");
		feather.replace();
		initGame();
	}
}
function closeGame() {
	const gameOverlay = document.getElementById("gameOverlay");
	gameOverlay.classList.remove("active");
	if (gameLoop) {
		cancelAnimationFrame(gameLoop);
	}
}

// gameplay_logic
const canvas = document.getElementById("gameCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let gameLoop;
let isGameOver = false;
let gameScore = 0;
let gameHighScore = parseInt(localStorage.getItem("lockedGameHighScore")) || 0;
const player = {
	x: 50,
	y: 0,
	width: 40,
	height: 40,
	velocityY: 0,
	gravity: 0.6,
	jumpPower: -12,
	isJumping: false,
};
const obstacles = [];
let obstacleTimer = 0;
const obstacleInterval = 120;
let gameSpeed = 4;
let speedIncreaseTimer = 0;
function initGame() {
	if (!canvas) return;
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	player.y = canvas.height - player.height - 20;
	player.velocityY = 0;
	player.isJumping = false;
	obstacles.length = 0;
	obstacleTimer = 0;
	isGameOver = false;
	gameScore = 0;
	gameSpeed = 4;
	speedIncreaseTimer = 0;
	document.getElementById("gameScore").textContent = gameScore;
	document.getElementById("gameHighScore").textContent = gameHighScore;
	document.getElementById("gameOver").classList.add("hidden");
	gameLoop = requestAnimationFrame(update);
	canvas.addEventListener("click", jump);
	document.addEventListener("keydown", handleJump);
}
function handleJump(e) {
	if (e.code === "Space" || e.code === "ArrowUp") {
		e.preventDefault();
		jump();
	}
}
function jump() {
	if (!player.isJumping && !isGameOver) {
		player.velocityY = player.jumpPower;
		player.isJumping = true;
	}
}
function update() {
	if (isGameOver) return;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.velocityY += player.gravity;
	player.y += player.velocityY;
	const groundY = canvas.height - player.height - 20;
	if (player.y >= groundY) {
		player.y = groundY;
		player.velocityY = 0;
		player.isJumping = false;
	}
	ctx.fillStyle = "#ffffff";
	ctx.font = "32px monospace";
	ctx.fillText("𓊝", player.x, player.y + 30);
	speedIncreaseTimer++;
	if (speedIncreaseTimer >= 180) {
		gameSpeed += 0.5;
		speedIncreaseTimer = 0;
	}
	obstacleTimer++;
	if (obstacleTimer >= obstacleInterval) {
		obstacles.push({ x: canvas.width, y: canvas.height - 40 - 20, width: 50, height: 40, speed: gameSpeed });
		obstacleTimer = 0;
	}
	for (let i = obstacles.length - 1; i >= 0; i--) {
		const obs = obstacles[i];
		obs.x -= obs.speed;
		ctx.fillStyle = "#ffffff";
		ctx.font = "32px monospace";
		ctx.fillText("𓂃𓂃", obs.x, obs.y + 30);
		if (obs.x + obs.width < 0) {
			obstacles.splice(i, 1);
			gameScore++;
			document.getElementById("gameScore").textContent = gameScore;
			if (gameScore > gameHighScore) {
				gameHighScore = gameScore;
				localStorage.setItem("lockedGameHighScore", gameHighScore);
				document.getElementById("gameHighScore").textContent = gameHighScore;
			}
		}
		if (player.x < obs.x + obs.width - 10 && player.x + player.width - 10 > obs.x && player.y < obs.y + obs.height - 10 && player.y + player.height - 10 > obs.y) {
			gameOver();
			return;
		}
	}
	ctx.strokeStyle = "rgba(255,255,255,0.3)";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height - 20);
	ctx.lineTo(canvas.width, canvas.height - 20);
	ctx.stroke();
	gameLoop = requestAnimationFrame(update);
}
function gameOver() {
	isGameOver = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	document.getElementById("finalScore").textContent = gameScore;
	document.getElementById("gameOver").classList.remove("hidden");
	feather.replace();
	cancelAnimationFrame(gameLoop);
}
function restartGame() {
	initGame();
}
