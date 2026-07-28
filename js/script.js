/* =========================================================
   devFhm — site betiği (vanilla JS)
   Uygulama verilerini APPS dizisinden düzenleyebilirsiniz.
   ========================================================= */

const APPS = [
  {
    id: "app-01",
    name: "MelaTone",
    tag1: "Health & Fitness",
    tag2: "Mind & Body",
    color: "#7c3fe4",
    tagline: "Luxury Sleep & Meditation App",
    description: "MelaTone, uyku ve meditasyon deneyimini geliştirmek için tasarlanmış bir mobil uygulamadır. Kullanıcıların rahatlamasına, stresini azaltmasına ve daha iyi bir uyku düzeni oluşturmasına yardımcı olur. Uygulama, çeşitli meditasyon sesleri sunar ve reklam kesintisi olmadan kullanıcıların odaklanmasını sağlar. Ayrıca, kullanıcıların kendi uyku ve meditasyon rutinlerini oluşturmasına olanak tanır.",
    icon: "assets/apps/app-01.png",
    screenshots: [
      "assets/screenshots/app-01-1.png",
      "assets/screenshots/app-01-2.png",
      "assets/screenshots/app-01-3.png",
      "assets/screenshots/app-01-4.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devfhm.melatone"
  },
  {
    id: "app-02",
    name: "Yüzleşme: Cevaplar Kitabı",
    tag1: "Eğlence",
    tag2: "Falcılık & Astroloji",
    color: "#dab25f",
    tagline: "Yüzleşmeye hazır mısın?",
    description: "Hayatın karmaşasında kaybolduğunda, bir karar eşiğinde durduğunda ya da sadece ruhunun derinliklerinde bir rehber aradığında 'Yüzleşme: Cevaplar Kitabı' yanında. Bu uygulama, sıradan bir yanıt motoru değil; senin enerjinle ve o anki niyetinle şekillenen dijital bir bilgelik rehberidir.",
    icon: "assets/apps/app-02.png",
    screenshots: [
      "assets/screenshots/app-02-1.png",
      "assets/screenshots/app-02-2.png",
      "assets/screenshots/app-02-3.png",
      "assets/screenshots/app-02-4.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devfhm.yuzlesme"
  },
  {
    id: "app-03",
    name: "Manifest Defteri",
    tag1: "Kişisel Gelişim",
    tag2: "Yaşam tarzı",
    color: "#9344bb",
    tagline: "Kozmik frekanslarla günlük 3-6-9 manifest ritüeli ve kişisel defterin",
    description: "Manifest Defteri, çekim yasasına inanan ve niyetlerini evrene bilinçli şekilde göndermek isteyenler için tasarlanmış kozmik bir günlük ritüel ve kişisel manifest defteri uygulamasıdır. Kendi olumlamalarını, dileklerini ve şükran notlarını kaydet. Zamanla oluşan kayıtların, geçmiş sekmesinde arama ve filtreleme özellikleriyle kolayca gözden geçirilebilir. Dilersen özel notlarını PIN kilidiyle koru — sadece sen görebilirsin.",
    icon: "assets/apps/app-03.png",
    screenshots: [
      "assets/screenshots/app-03-1.jpg",
      "assets/screenshots/app-03-2.jpg",
      "assets/screenshots/app-03-3.jpg",
      "assets/screenshots/app-03-4.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devfhm.manifestdefteri"
  },
  {
    id: "app-04",
    name: "Passaparola - Kelime Oyunu",
    tag1: "Oyun",
    tag2: "Kelime & Bulmaca",
    color: "#ef7a27",
    tagline: "Türkçenin en eğlenceli kelime oyunu! cevapları bil, zamana karşı yarış.",
    description: "Passaparola; kelime dağarcığını geliştirmek, reflekslerini test etmek ve arada eğlenceli vakit geçirmek isteyen herkes için tasarlandı. Tek başına oynayarak kendi rekorlarını kır, istatistiklerinle gelişimini takip et!",
    icon: "assets/apps/app-04.png",
    screenshots: [
      "assets/screenshots/app-04-1.jpg",
      "assets/screenshots/app-04-2.jpg",
      "assets/screenshots/app-04-3.jpg",
      "assets/screenshots/app-04-4.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devfhm.passaparola"
  },
  {
    id: "app-05",
    name: "Yapyap - Puzzles",
    tag1: "Oyun",
    tag2: "Puzzle & Zeka",
    color: "#ef27bd",
    tagline: "Kendi fotoğraflarından jigsaw bulmacalar oluştur veya sürekli büyüyen hikaye modu ile eğlenceli vakit geçir.",
    description: "Yapyap - Puzzles; kendi fotoğraflarınızdan jigsaw bulmacalar oluşturmak ve sürekli büyüyen hikaye modu ile eğlenceli vakit geçirmek isteyen herkes için tasarlandı. Tek başına oynayarak kendi rekorlarını kır, istatistiklerinle gelişimini takip et!",
    icon: "assets/apps/app-05.png",
    screenshots: [
      "assets/screenshots/app-05-1.jpg",
      "assets/screenshots/app-05-2.jpg",
      "assets/screenshots/app-05-3.jpg",
      "assets/screenshots/app-05-4.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.devfhm.yapyap"
  },
  
];

/* Her uygulama "color" alanıyla kendi vurgu rengini taşır.
   Bu renk, kart ve modal üzerinde --accent CSS değişkenine yazılır;
   app-tag, app-card-cta, kart üst çizgisi ve modal-tag oradan renk alır. */

/* ---------- Uygulama kartlarını oluştur ---------- */
function renderAppCards() {
  const grid = document.getElementById("appGrid");
  grid.innerHTML = APPS.map((app) => {
    const accent = app.color || "#e8262c";
    return `
    <button class="app-card" data-id="${app.id}" style="--accent:${accent}" aria-haspopup="dialog">
      <div class="app-card-top">
        <div class="app-icon"><img src="${app.icon}" alt="${app.name} simgesi" loading="lazy"></div>
        <div>
          <div class="app-name">${app.name}</div>
          <span class="app-tag">${app.tag1}</span>
          <span class="app-tag">${app.tag2}</span>
        </div>
      </div>
      <p class="app-tagline">${app.tagline}</p>
      <span class="app-card-cta">Detayları gör →</span>
    </button>
  `;
  }).join("");

  grid.querySelectorAll(".app-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

/* ---------- Modal ---------- */
const overlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
let lastFocusedEl = null;

function openModal(id) {
  const app = APPS.find((a) => a.id === id);
  if (!app) return;

  overlay.querySelector(".modal").style.setProperty("--accent", app.color || "#e8262c");

  document.getElementById("modalIcon").src = app.icon;
  document.getElementById("modalIcon").alt = `${app.name} simgesi`;
  document.getElementById("modalTitle").textContent = app.name;
  document.getElementById("modalTagline").textContent = app.tagline;
  document.getElementById("modalTag1").textContent = app.tag1;
  document.getElementById("modalTag2").textContent = app.tag2;
  document.getElementById("modalDesc").textContent = app.description;

  const shotsWrap = document.getElementById("modalShots");
  shotsWrap.innerHTML = app.screenshots
    .map((src, i) => `<img src="${src}" alt="${app.name} ekran görüntüsü ${i + 1}" loading="lazy">`)
    .join("");

  const playLink = document.getElementById("modalPlayLink");
  playLink.href = app.playStoreUrl;

  lastFocusedEl = document.activeElement;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});

/* ---------- Mobil navigasyon ---------- */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Footer yılı ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Başlat ---------- */
renderAppCards();
