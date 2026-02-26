// click_sound_effect

class ClickSoundEffect {
	constructor() {
		this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		this.volume = 1;
		this.isInitialized = false;
		this.initUnlock();
		this.setupClickListener();
	}
	initUnlock() {
		const unlock = async () => {
			if (this.audioCtx.state === "suspended") {
				await this.audioCtx.resume();
			}
			this.isInitialized = true;
		};
		document.addEventListener("click", unlock, { once: true });
		document.addEventListener("touchstart", unlock, { once: true });
	}
	setupClickListener() {
		document.addEventListener("click", (e) => {
			if (e.target.closest("button, a, [role='button'], input")) {
				this.playBubbleClick();
			}
		});
	}
	playBubbleClick() {
		if (this.audioCtx.state !== "running") return;
		const now = this.audioCtx.currentTime;
		const osc = this.audioCtx.createOscillator();
		const gain = this.audioCtx.createGain();
		const filter = this.audioCtx.createBiquadFilter();
		osc.type = "sine";
		osc.frequency.setValueAtTime(500, now);
		osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);
		gain.gain.setValueAtTime(0.001, now);
		gain.gain.linearRampToValueAtTime(0.25, now + 0.01);
		gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
		filter.type = "lowpass";
		filter.frequency.setValueAtTime(1800, now);
		osc.connect(filter);
		filter.connect(gain);
		gain.connect(this.audioCtx.destination);
		osc.start(now);
		osc.stop(now + 0.18);
		osc.onended = () => {
			osc.disconnect();
			gain.disconnect();
			filter.disconnect();
		};
	}
	setVolume(v) {
		this.volume = Math.max(0, Math.min(1, v));
	}
}
const clickSFX = new ClickSoundEffect();
