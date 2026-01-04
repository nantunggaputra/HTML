// click_sound_effect

class ClickSoundEffect {
	constructor(soundPath) {
		this.soundPath = soundPath;
		this.volume = 0.5;
		this.isInitialized = false;
		this.clickSound = null;
		this.preloadSound();
		this.initMobileAudio();
		this.setupClickListener();
	}
	preloadSound() {
		this.clickSound = new Audio(this.soundPath);
		this.clickSound.preload = "auto";
		this.clickSound.volume = this.volume;
		this.clickSound.load();
	}
	initMobileAudio() {
		const unlockAudio = () => {
			if (!this.isInitialized) {
				const tempPlay = this.clickSound.play();
				if (tempPlay !== undefined) {
					tempPlay
						.then(() => {
							this.clickSound.pause();
							this.clickSound.currentTime = 0;
							this.isInitialized = true;
						})
						.catch((err) => {
							console.log("Audio unlock pending:", err);
						});
				}
			}
		};
		document.addEventListener("click", unlockAudio, { once: true });
		document.addEventListener("touchstart", unlockAudio, { once: true });
	}
	setupClickListener() {
		document.addEventListener("click", (e) => {
			const isClickable = e.target.matches('button, a, [onclick], [role="button"], ' + 'input[type="submit"], input[type="button"], input[type="checkbox"], ' + 'input[type="radio"], .confetti-effect');
			if (isClickable) {
				this.playSound();
			}
		});
	}
	playSound() {
		if (!this.isInitialized && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
			return;
		}
		const sound = this.clickSound.cloneNode();
		sound.volume = this.volume;
		const playPromise = sound.play();
		if (playPromise !== undefined) {
			playPromise
				.then(() => {
					sound.addEventListener("ended", () => {
						sound.remove();
					});
				})
				.catch((err) => {
					console.log("Sound play prevented:", err);
				});
		}
	}
	setVolume(newVolume) {
		this.volume = Math.max(0, Math.min(1, newVolume));
		this.clickSound.volume = this.volume;
		console.log("Click sound volume set to:", this.volume);
	}
}
const clickSFX = new ClickSoundEffect("./dist/audio/click/mixkit-video-game-mystery-alert-234.mp3");
window.clickSFX = clickSFX;
