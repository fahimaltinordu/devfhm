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
    playStoreUrl: "#"
  },
  // {
  //   id: "app-02",
  //   name: "MelaTone",
  //   tag: "Üretkenlik",
  //   color: "#26e863",
  //   tagline: "Kısa ve çarpıcı bir uygulama açıklaması buraya gelecek.",
  //   description: "Bu alana uygulamanızın detaylı açıklamasını yazabilirsiniz. Neler yaptığını, hangi problemi çözdüğünü ve öne çıkan özelliklerini birkaç cümleyle anlatın.",
  //   icon: "assets/apps/app-02.png",
  //   screenshots: [
  //     "assets/screenshots/app-02-1.png",
  //     "assets/screenshots/app-02-2.png",
  //     "assets/screenshots/app-02-3.png",
  //     "assets/screenshots/app-02-4.png"
  //   ],
  //   playStoreUrl: "#"
  // },
  
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
