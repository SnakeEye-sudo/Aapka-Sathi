const HUB_BASE = window.location.pathname.startsWith("/Aapka-Sathi") ? "/Aapka-Sathi" : "";
const FAMILY_APPS_URL = new URL(`${HUB_BASE}/apps/apps.json`, window.location.origin).toString();
const STORAGE = {
  theme: "aapka-sathi-theme",
  notifEnabled: "aapka-sathi-notif-enabled",
  notifLastShown: "aapka-sathi-notif-last-shown",
  notifAsked: "aapka-sathi-notif-asked"
};

let deferredPrompt = null;
let isInstalled = window.matchMedia("(display-mode: standalone)").matches;

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem(STORAGE.theme, theme);
  const label = document.getElementById("themeLabel");
  if (label) label.textContent = theme === "dark" ? "Dark" : "Light";
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE.theme);
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
  });
}

function appMood(app) {
  if (/Pariksha/i.test(app.name)) return "Study smarter, plan better.";
  if (/Rozgar/i.test(app.name)) return "Jobs aur career tracking ek jagah.";
  if (/Samachar/i.test(app.name)) return "Daily current affairs ko easy banao.";
  if (/Hisaab/i.test(app.name)) return "Daily finance aur udhar ko control me rakho.";
  if (/Antariksh/i.test(app.name)) return "Sky events aur space curiosity ko explore karo.";
  return app.tagline;
}

async function renderApps() {
  const container = document.getElementById("appGrid");
  if (!container) return;

  try {
    const res = await fetch(FAMILY_APPS_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Registry fetch failed: ${res.status}`);
    const data = await res.json();
    document.getElementById("liveCount").textContent = String(data.apps.filter((app) => app.status === "LIVE").length);
    document.getElementById("familyCount").textContent = String(data.apps.length);
    document.getElementById("pwaCount").textContent = String(data.apps.filter((app) => app.pwa).length);
    document.getElementById("reminderCount").textContent = String(data.apps.filter((app) => app.notification).length);

    container.innerHTML = data.apps.map((app) => `
      <article class="app-card">
        <div class="app-top">
          <div>
            <p class="muted">${app.emoji}</p>
            <h3 class="app-name">${app.name}</h3>
          </div>
          <span class="status-pill">${app.status}</span>
        </div>
        <p class="app-tagline">${appMood(app)}</p>
        <p class="app-desc">${app.description}</p>
        <div class="app-actions">
          <a class="solid-btn" href="${app.url}" target="_blank" rel="noopener noreferrer">Open App</a>
        </div>
      </article>
    `).join("");
  } catch (error) {
    container.innerHTML = `<article class="app-card"><h3 class="app-name">Apps could not load</h3><p class="app-desc">Thodi der baad refresh karke dubara try karo.</p></article>`;
    console.error(error);
  }
}

function initPwa() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(`${HUB_BASE}/sw.js`).catch(() => {});
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.getElementById("installButton")?.classList.remove("hidden");
    if (!isInstalled) document.getElementById("installModal")?.classList.add("open");
  });

  window.addEventListener("appinstalled", () => {
    isInstalled = true;
    document.getElementById("installModal")?.classList.remove("open");
    document.getElementById("installButton")?.classList.add("hidden");
    if (localStorage.getItem(STORAGE.notifAsked) !== "true") {
      document.getElementById("notifModal")?.classList.add("open");
    }
  });

  async function triggerInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
  }

  document.getElementById("installButton")?.addEventListener("click", triggerInstall);
  document.getElementById("heroInstallButton")?.addEventListener("click", triggerInstall);
  document.getElementById("installNowButton")?.addEventListener("click", triggerInstall);
  document.getElementById("installLaterButton")?.addEventListener("click", () => {
    document.getElementById("installModal")?.classList.remove("open");
  });
}

function maybeShowReminder() {
  if (localStorage.getItem(STORAGE.notifEnabled) !== "true") return;
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const lastShown = Number(localStorage.getItem(STORAGE.notifLastShown) || "0");
  if (Date.now() - lastShown < 24 * 60 * 60 * 1000) return;
  new Notification("Aapka-Sathi reminder", {
    body: "Aaj apna useful Sathi app open karke progress check kar lo.",
    icon: `${HUB_BASE}/logo.svg`,
    tag: "aapka-sathi-daily"
  });
  localStorage.setItem(STORAGE.notifLastShown, String(Date.now()));
}

function initNotifications() {
  document.getElementById("notifAllow")?.addEventListener("click", async () => {
    localStorage.setItem(STORAGE.notifAsked, "true");
    localStorage.setItem(STORAGE.notifEnabled, "true");
    if (!("Notification" in window)) {
      document.getElementById("notifStatus").textContent = "Is browser me notification support nahi hai.";
    } else {
      const permission = await Notification.requestPermission();
      document.getElementById("notifStatus").textContent = permission === "granted"
        ? "Daily reminder on ho gaya."
        : "Notification permission off hai.";
    }
    document.getElementById("notifModal")?.classList.remove("open");
  });

  document.getElementById("notifSkip")?.addEventListener("click", () => {
    localStorage.setItem(STORAGE.notifAsked, "true");
    localStorage.setItem(STORAGE.notifEnabled, "false");
    document.getElementById("notifModal")?.classList.remove("open");
  });

  if (isInstalled && localStorage.getItem(STORAGE.notifAsked) !== "true") {
    document.getElementById("notifModal")?.classList.add("open");
  }

  maybeShowReminder();
}

function initFeedback() {
  const modal = document.getElementById("feedbackModal");
  const fab = document.getElementById("feedbackFab");
  const close = document.getElementById("feedbackClose");
  const send = document.getElementById("feedbackSend");
  const message = document.getElementById("feedbackMessage");
  const category = document.getElementById("feedbackCategory");

  fab?.addEventListener("click", () => modal?.classList.add("open"));
  close?.addEventListener("click", () => modal?.classList.remove("open"));
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) modal.classList.remove("open");
  });

  send?.addEventListener("click", () => {
    if (!message.value.trim()) return;
    const subject = encodeURIComponent(`[Aapka-Sathi Feedback] ${category.value}`);
    const body = encodeURIComponent(message.value.trim());
    window.open(`mailto:sangamkrishna.dev@gmail.com?subject=${subject}&body=${body}`, "_blank");
    modal?.classList.remove("open");
    message.value = "";
  });
}

function initYear() {
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  initPwa();
  initNotifications();
  initFeedback();
  initYear();
  await renderApps();
});
