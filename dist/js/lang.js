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
		btn_hire: "Rekrut Aku",
		btn_business: "Kerjasama Bisnis",
		section_about_label: "Tentangku",
		section_about_title: "Terinspirasi untuk terus belajar dan meningkatkan keterampilan teknis",
		section_about_desc: "Dengan lebih banyak latihan, aku akan memiliki fondasi yang kuat untuk memahami logika dan perencanaan proyek.",
		section_connect_title: "Mari Terhubung",
		section_connect_desc: "Mari bekerjasama dalam menciptakan solusi teknologi yang inovatif!",
		section_qr_label: "Kode QR",
		section_qr_title: "Pindai di sini",
		section_qr_desc: "Portofolio juga tersedia melalui kode QR ini",
		section_portfolio_label: "Portofolio",
		section_portfolio_title: "Proyek Terbaru",
		section_portfolio_desc: "Bagian ini menampilkan proyek-proyek terbaruku di bidang front-end web development dari beberapa kursus online, termasuk dari para tech influencer di bidang pemrograman.",
		section_portfolio_oldest: "Terlama",
		section_portfolio_newest: "Terbaru",
		portfolio_ecommerce_1_desc: 'NGOBAR: NGoding BAReng YouTube Web Programming UNPAS "Membuat WEBSITE Kedai Kopi RESPONSIVE dengan HTML & CSS dari 0 + Autodeploy ke WEB HOSTING" - "Membuat WEBSITE Kedai Kopi RESPONSIVE dengan HTML, CSS & JavaScript"',
		portfolio_ecommerce_2_desc: 'NGOBAR: NGoding BAReng YouTube Web Programming UNPAS "Membuat WEBSITE RESPONSIVE menggunakan CSS GRID"',
		portfolio_freecodecamp: "Responsive Web Design freeCodeCamp: mempelajari bahasa yang digunakan developer untuk membangun halaman web, yaitu HTML (Hypertext Markup Language) sebagai struktur konten, dan CSS (Cascading Style Sheets) sebagai desain tampilan",
		portfolio_homepage: 'NGOBAR: NGoding BAReng YouTube Web Programming UNPAS "Membuat Website Portfolio Menggunakan TAILWIND CSS 3"',
		portfolio_calculator: "Materi ini akan membawa kita dalam melakukan sebuah mini project. Pada materi ini, kita akan belajar langkah demi langkah untuk membuat calculator dengan menerapkan JavaScript.",
		portfolio_weatherapp: "Pelajari Cara Membuat Weather App menggunakan JavaScript dijelaskan Langkah demi Langkah | Membuat Weather App dengan HTML CSS dan JavaScript",
		portfolio_react_1: 'NGOBAR: NGoding BAReng YouTube Web Programming UNPAS Tutorial REACT "Paling Masuk Akal" untuk PEMULA',
		portfolio_react_2: "Kali ini kita akan belajar dalam membuat sebuah portfolio yang menggunakan react di bagian header, about, contact, resume, project, dan bagian akhir halaman.",
		portfolio_weeboo: "WeeBoo | My Anime List adalah proyek Front-End Web Single Page Application (SPA) yang dibangun menggunakan React untuk menampilkan daftar anime. Proyek ini menggunakan Vite sebagai bundler dan Visual Studio Code sebagai code editor. Sebagian besar data anime diambil dari Jikan - Unofficial MyAnimeList API.",
		portfolio_private: "Aku memiliki passion dalam mengajar dan membimbing siswa untuk membuat website, mulai dari tingkat dasar hingga tingkat lanjut, serta menyediakan jalur pembelajaran langkah demi langkah yang membantu mereka mengembangkan kemampuan pemrograman secara bertahap.",
		portfolio_projectbased: "Aku memiliki passion untuk berkontribusi dan bekerja di perusahaan di mana aku dapat menerapkan kemampuan front-end web development aku untuk mendukung digitalisasi industri, serta melalui aktivitas pemrograman aku untuk memperoleh pengetahuan tambahan.",
		section_tech_label: "Stack Teknologi",
		section_tech_title: "Teknologi Website dan Web App",
		section_tech_desc: "Sejak Mei 2023, aku telah mempelajari bahasa pemrograman, algoritma, dan metodologi pengembangan software untuk membekali diri dengan keahlian teknis yang diperlukan.",
		tech_programming_languages: "Bahasa Pemrograman",
		tech_development_framework: "Kerangka Pengembangan",
		tech_tools: "Peralatan",
		tech_all_skills: "Seluruh Keahlian",
		section_certify_label: "Sertifikasi",
		section_certify_title: "Sertifikat",
		section_certify_desc: "Tautan gambar ini menampilkan sertifikasi yang telah ku peroleh sebagai bentuk komitmenku untuk terus belajar serta keahlianku dalam front-end web development.",
		section_cta_label: "Panggilan Aksi",
		section_cta_title: "Pengembangan Web",
		section_cta_desc: "Hai, aku Nantungga Putra, Front-End Web Developer profesionalmu, dan Front-End Web Coding Tutor. Apakah kamu membutuhkan website yang menarik untuk bisnis atau personal brand kamu? Atau kamu ingin belajar membangun website sendiri dari awal tetapi belum tahu harus mulai dari mana?",
		section_cta_button: "Pesan Layanan",
		section_services: "Layanan",
		section_documents: "Dokumen",
		section_faqs: "Bertanya",
		faq_q1: "Apa yang perlu saya siapkan untuk membuat website?",
		faq_a1_1: "Namai website/brand/bisnis kamu,",
		faq_a1_2: "Kategori (misalnya: pendidikan, agensi digital, travel, manufaktur, konstruksi, keuangan, fashion, kesehatan & kebugaran, makanan, keagamaan, non-profit, pemerintahan / sektor publik, pribadi, portofolio, acara & pernikahan, keanggotaan & komunitas, dan lain-lain),",
		faq_a1_3: "Deskripsi pemilik atau bisnis,",
		faq_a1_4: "Logo (opsional),",
		faq_a1_5: "Minimal 3 gambar berkualitas tinggi,",
		faq_a1_6: "Nomor kontak,",
		faq_a1_7: "Testimoni (opsional),",
		faq_a1_8: "Alamat (opsional),",
		faq_a1_9: "Tautan media sosial,",
		faq_a1_10: "Preferensi tema warna (opsional).",
		faq_q2: "Berapa lama waktu yang dibutuhkan untuk mengembangkan website saya?",
		faq_a2: "Waktu pengerjaan bergantung pada kompleksitas proyek. Umumnya, website statis standar membutuhkan waktu sekitar 1-2 minggu dari awal hingga selesai.",
		faq_q3: "Apakah website saya bisa mobile-friendly?",
		faq_a3: "Semua website yang ku kembangkan sepenuhnya responsif dan telah dioptimalkan untuk perangkat mobile.",
		faq_q4: "Apakah anda bisa membantu terkait hosting website?",
		faq_a4: "Ya, aku dapat membantu dalam memilih penyedia hosting dan melakukan deployment website agar berjalan dengan lancar dan aman.",
		section_rate_label: "Pesan Layanan",
		section_rate_title: "Daftar Harga",
		section_rate_desc: "Daftar ini berisi layanan profesional yang ku tawarkan. Aku menyediakan keahlian khusus di bidang front-end web development yang disesuaikan dengan kebutuhan proyekmu.",
		rate_desc: "Aku menyediakan layanan pembuatan website statis yang cepat, aman, dan disesuaikan dengan kebutuhan kamu.",
		rate_entry_price: "Rp 299.000 /minggu",
		rate_simple_price: "Rp 599.000 /minggu",
		rate_stable_price: "Rp 799.000 /minggu",
		rate_feature_custom_design: "Desain yang Dapat Disesuaikan",
		rate_feature_responsive: "Desain Website Responsif",
		rate_feature_secure_code: "Implementasi Kode Front-End yang Aman",
		rate_feature_cross_browser: "Kompatibilitas Lintas Browser",
		rate_feature_deploy: "Deployment Akhir",
		rate_feature_unlimited_maintenance: "Maintenance Tanpa Batas",
		rate_feature_1_revision: "Dapat 1x Revisi Gratis",
		rate_feature_3_revision: "Dapat Lebih dari 3x Revisi Gratis",
		rate_feature_portfolio_bonus: "Termasuk Showcase Portofolio (bonus)",
		rate_feature_google_index: "Terdaftar di Google Search",
		rate_feature_source_code: "Kepemilikan Source Code",
		rate_feature_no_rent: "Sepenuhnya Milik Kamu - Tanpa Sewa",
		section_rate_button: "Kerjasama denganku",
		section_clients_label: "Klien",
		section_clients_title: "Para Klien",
		section_clients_desc: "Bagian ini menampilkan klien yang telah ku bantu dalam pembuatan website melalui proyek freelance dan internship berbasis proyek, yang menonjolkan keberhasilan dan visi unik mereka.",
		section_company_label: "Perusahaan",
		section_company_title: "Contoh Perusahaan",
		section_company_desc: "Bagian ini menampilkan contoh perusahaan yang menginspirasi para profesional dan pencari kerja, meningkatkan citra perusahaan melalui pencapaian mereka yang luar biasa.",
		section_cite_label: "Kutipan",
		section_cite_title: "Kutipan dan Referensi",
		section_cite_desc: "Carousel ini menampilkan kutipan penuh makna yang dipilih dan disampaikan kembali, mengandung kebijaksanaan yang menyentuh hati.",
		section_blog_label: "Blog",
		section_blog_title: "Coretan Terakhir",
		section_blog_desc: "Bagian ini memuat coretan/tulisan seseorang di blogku mengenai fanfiction Ending Detective Conan.",
		section_blog_hot_title: "Artikel Terpopuler",
		section_blog_hot_desc: "Bagian ini menampilkan artikel di blogku seputar teknologi Website dan Web App.",
		blog_read_more_unavailable: "Baca Selengkapnya... (belum tersedia)",
		blog_read_more: "Baca Selengkapnya...",
		song_title: "Ada apa dengan lagu ini?",
		song_desc_light: "Lagu ini 💕 adalah pengingat bahwa sekecil apa pun dirimu, kamu tetap punya sesuatu yang unik untuk ditawarkan pada dunia. Itulah yang membuatmu menjadi dirimu. Bahkan percikan cahaya kecil pun bisa menerangi kegelapan. Saat kamu merasa tidak cukup baik, tidak cukup berbakat, atau tidak cukup istimewa, Kimi ni Dekiru Nanika mengajarkan bahwa nilai sejati bukan tentang menjadi yang terbaik, tetapi menemukan apa yang hanya bisa kamu lakukan. Mungkin kamu bukan siswa terpandai atau karyawan terbaik, tapi ada ruang di dunia ini yang hanya bisa kamu isi. Terus belajar, terus bertumbuh, dan percaya bahwa riak kecil pun bisa menciptakan ombak besar.",
		song_desc_dark: "Lagu ini 🍃 menggambarkan rasa pahit-manis saat kita melangkah maju sambil membawa kenangan seseorang yang tak lagi berada di sisi kita. Ia berbicara tentang sunyinya perubahan; saat kita memasuki babak baru tanpa suara yang dulu membimbing kita. Hidup tidak selalu membiarkan kita bersama orang-orang yang kita andalkan. Ada waktunya kita harus berdiri sendiri, meninggalkan rumah untuk pertama kalinya, menghadapi kegagalan tanpa mentor hebat, atau melangkah ke masa depan yang asing. Kimi ga inai Natsu mengingatkan bahwa meski jalan terasa sepi, kita tetap membawa pelajaran, cinta, dan jejak mereka yang membentuk kita. Kekuatan lahir bukan dari kenyamanan, tetapi dari keberanian untuk terus berjalan meski tanpa kehadirannya.",
		section_school_label: "Sekolah",
		section_school_title: "Bootcamp Akselerasi Teknologi",
		section_school_desc: "Bagian ini menampilkan program pelatihan intensif sekolah di Indonesia yang dirancang untuk mempercepat karier di bidang teknologi, dengan memberikan pengalaman praktik langsung dan wawasan industri yang mempersiapkan peserta menghadapi proses pembelajaran yang dinamis.",
		section_contact_label: "Kontak",
		section_contact_title: "Mari Terhubung",
		section_contact_desc: "Mari bekerjasama dalam menciptakan solusi teknologi yang inovatif!",
		form_name: "Nama",
		form_email: "E-mail",
		form_handphone: "Telepon",
		form_message: "Pesan",
		form_send: "Kirim",
		section_hit_label: "Kunjungan",
		section_hit_desc: "Itulah jumlah kunjungan ke portofolioku. Terima kasih telah mengunjungi website ini. Semoga informasi yang tersedia memberikan wawasan yang bermanfaat.",
		footer_contact_title: "Hubungi Aku",
		footer_category: "Kategori",
		footer_hyperlink: "Tautan",
		footer_home: "Rumah",
		footer_about: "Tentangku",
		footer_qr: "Kode QR",
		footer_portfolio: "Portofolio",
		footer_tech: "Teknologi",
		footer_certify: "Sertifikasi",
		footer_cta: "CTA",
		footer_nda: "NDA",
		footer_clients: "Klien",
		footer_cite: "Kutipan",
		footer_blog: "Blog",
		footer_audio: "Audio",
		footer_school: "Sekolah",
		footer_contact: "Kontak",
		footer_hit: "Kunjungan",
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
