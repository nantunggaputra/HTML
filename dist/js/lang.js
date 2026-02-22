(function () {
	const translations = {
		nav_home: "Rumah",
		nav_about: "Tentangku",
		nav_portfolio: "Portofolio",
		nav_tech: "Teknologi",
		nav_clients: "Klien",
		nav_contact: "Kontak",
		greeting_highlight: "Hai di sana, aku",
		title_role_prefix: "Front End",
		title_role_highlight: "Web Developer",
		desc_intro_prefix: "seorang pemula yang antusias di dunia ",
		desc_programming: "pemrograman",
		desc_and: " dan ",
		desc_webdev: "pengembangan web",
		desc_long: "Jika kamu ingin berkomunikasi lebih lanjut atau menjalin koneksi, silakan terhubung denganku di LinkedIn. Terima kasih telah mengunjungi website ini. Semoga informasi yang tersedia bermanfaat.",
		btn_message: "Pesan",
		btn_hire: "Rekrut aku",
		btn_business: "Kerjasama Bisnis",
		section_about_label: "Tentangku",
		section_about_title: "Terinspirasi untuk terus belajar dan meningkatkan keterampilan teknis",
		section_about_desc: "Dengan lebih banyak latihan, aku akan memiliki fondasi yang kuat untuk memahami logika dan perencanaan proyek.",
		section_connect_title: "Mari Terhubung",
		section_connect_desc: "Mari bekerjasama dalam menciptakan solusi teknologi yang inovatif!",
		section_qr_label: "Kode QR",
		section_qr_title: "Pindai di sini",
		section_qr_desc: "Portofolio juga tersedia melalui kode QR ini",
	};
	let currentLang = "en";

	// apply_id
	function applyIndonesian() {
		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const key = el.getAttribute("data-i18n");
			if (translations[key]) {
				el.textContent = translations[key];
			}
		});
		currentLang = "id";
		localStorage.setItem("lang", "id");
		updateToggle();
	}

	// apply_en
	function applyEnglish() {
		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const original = el.getAttribute("data-default");
			if (original) {
				el.textContent = original;
			}
		});
		currentLang = "en";
		localStorage.setItem("lang", "en");
		updateToggle();
	}

	// toggle_button
	function updateToggle() {
		const btn = document.getElementById("langToggle");
		if (!btn) return;
		btn.innerHTML = currentLang === "en" ? "<small>🇮🇩</small>" : "<small>🇬🇧</small>";
	}
	function handleToggleClick() {
		if (currentLang === "en") {
			applyIndonesian();
		} else {
			applyEnglish();
		}
	}

	// ip_init
	document.addEventListener("DOMContentLoaded", async () => {
		const btn = document.getElementById("langToggle");
		if (btn) {
			btn.addEventListener("click", handleToggleClick);
		}
		document.querySelectorAll("[data-i18n]").forEach((el) => {
			if (!el.getAttribute("data-default")) {
				el.setAttribute("data-default", el.textContent);
			}
		});
		const savedLang = localStorage.getItem("lang");
		if (savedLang === "id") {
			applyIndonesian();
			return;
		}
		if (savedLang === "en") {
			applyEnglish();
			return;
		}
		try {
			const res = await fetch("https://ipapi.co/json/");
			const data = await res.json();
			if (data.country === "ID" || data.country === "MY") {
				applyIndonesian();
			} else {
				applyEnglish();
			}
		} catch {
			applyEnglish();
		}
	});
})();
