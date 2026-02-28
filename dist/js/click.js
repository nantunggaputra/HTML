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
			const target = e.target.closest("button, a, [role='button'], input");
			if (!target) return;
			if (target.classList.contains("no-click-sound")) return;
			this.playGlassTap();
		});
	}
	playGlassTap() {
		if (this.audioCtx.state !== "running") return;
		const now = this.audioCtx.currentTime;
		const osc1 = this.audioCtx.createOscillator();
		const osc2 = this.audioCtx.createOscillator();
		const gain = this.audioCtx.createGain();
		const filter = this.audioCtx.createBiquadFilter();
		osc1.type = "sine";
		osc1.frequency.setValueAtTime(1400, now);
		osc2.type = "triangle";
		osc2.frequency.setValueAtTime(2100, now);
		gain.gain.setValueAtTime(0.001, now);
		gain.gain.linearRampToValueAtTime(0.18, now + 0.005);
		gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
		filter.type = "bandpass";
		filter.frequency.setValueAtTime(1800, now);
		filter.Q.setValueAtTime(8, now);
		osc1.connect(filter);
		osc2.connect(filter);
		filter.connect(gain);
		gain.connect(this.audioCtx.destination);
		osc1.start(now);
		osc2.start(now);
		osc1.stop(now + 0.18);
		osc2.stop(now + 0.18);
		osc1.onended = () => {
			osc1.disconnect();
			osc2.disconnect();
			gain.disconnect();
			filter.disconnect();
		};
	}
	setVolume(v) {
		this.volume = Math.max(0, Math.min(1, v));
	}
}
const clickSFX = new ClickSoundEffect();
