const HUB_BASE = window.location.pathname.startsWith("/Aapka-Sathi") ? "/Aapka-Sathi" : "";
const FAMILY_APPS_URL = new URL(`${HUB_BASE}/apps/apps.json`, window.location.origin).toString();
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC6Cpg83N8fBuvY7YOSwTWsfM9DUsaVc3E",
  authDomain: "pariksha-sathi.firebaseapp.com",
  projectId: "pariksha-sathi",
  storageBucket: "pariksha-sathi.firebasestorage.app",
  messagingSenderId: "921721697043",
  appId: "1:921721697043:web:dada90a420c40e11ae60e6",
  measurementId: "G-NC7955J7KV"
};
const STORAGE = {
  theme: "aapka-sathi-theme",
  notifEnabled: "aapka-sathi-notif-enabled",
  notifName: "aapka-sathi-notif-name",
  notifLastShown: "aapka-sathi-notif-last-shown"
};

let auth = null;

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

function chip(label, type) {
  const suffix = type === "yes" ? "Yes" : type === "no" ? "Gap" : "Partial";
  return `<div class="feature-chip ${type}">${label}: ${suffix}</div>`;
}

async function renderApps() {
  const container = document.getElementById("appGrid");
  if (!container) return;

  let data;
  try {
    const res = await fetch(FAMILY_APPS_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Registry fetch failed: ${res.status}`);
    data = await res.json();
  } catch (error) {
    container.innerHTML = `<article class="app-card"><h3 class="app-name">Registry unavailable</h3><p class="app-desc">App listing abhi load nahi ho paayi. Please refresh once, ya thodi der baad dubara try karein.</p></article>`;
    console.error(error);
    return;
  }
  const liveCount = data.apps.filter((app) => app.status === "LIVE").length;
  const standardCount = data.apps.filter((app) => app.sharedLogin && app.pwa).length;

  document.getElementById("liveCount").textContent = String(liveCount);
  document.getElementById("familyCount").textContent = String(data.apps.length);
  document.getElementById("standardCount").textContent = String(standardCount);
  document.getElementById("registryCount").textContent = String(data.apps.length);

  container.innerHTML = data.apps.map((app) => `
    <article class="app-card">
      <div class="app-top">
        <div>
          <p class="muted">${app.emoji}</p>
          <h3 class="app-name">${app.name}</h3>
        </div>
        <span class="status-pill">${app.status}</span>
      </div>
      <p class="app-tagline">${app.tagline}</p>
      <p class="app-desc">${app.description}</p>
      <div class="feature-list">
        ${chip("Shared Login", app.sharedLogin ? "yes" : "no")}
        ${chip("PWA", app.pwa ? "yes" : "no")}
        ${chip("Theme", app.theme ? "yes" : "warn")}
        ${chip("Reminder", app.notification ? "yes" : "warn")}
        ${chip("Feedback", app.feedback ? "yes" : "warn")}
      </div>
      <div class="app-actions">
        <a class="solid-btn" href="${app.url}" target="_blank" rel="noopener noreferrer">Open App</a>
        <a class="ghost-btn" href="${HUB_BASE}/resources.html#${app.id}">Family Notes</a>
      </div>
    </article>
  `).join("");
}

async function initFirebaseAuth() {
  const firebase = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js");
  const authLib = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js");
  firebase.initializeApp(FIREBASE_CONFIG);
  auth = authLib.getAuth();
  const provider = new authLib.GoogleAuthProvider();

  authLib.onAuthStateChanged(auth, (user) => {
    const authState = document.getElementById("authState");
    const authButton = document.getElementById("authButton");
    const nameInput = document.getElementById("notifName");
    if (!authState || !authButton) return;

    if (user) {
      authState.textContent = `${user.displayName || user.email} is signed in`;
      authButton.textContent = "Logout";
      authButton.onclick = async () => authLib.signOut(auth);
      if (nameInput && !nameInput.value) nameInput.value = user.displayName || "";
    } else {
      authState.textContent = "No active family login";
      authButton.textContent = "Login with Google";
      authButton.onclick = async () => authLib.signInWithPopup(auth, provider);
    }
  });
}

function initPwa() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(`${HUB_BASE}/sw.js`).catch(() => {});
    });
  }

  let deferredPrompt = null;
  const installBtn = document.getElementById("installButton");
  if (!installBtn) return;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.classList.remove("hidden");
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.classList.add("hidden");
  });
}

function maybeShowReminder() {
  if (localStorage.getItem(STORAGE.notifEnabled) !== "true") return;
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const lastShown = Number(localStorage.getItem(STORAGE.notifLastShown) || "0");
  const oneDay = 24 * 60 * 60 * 1000;
  if (Date.now() - lastShown < oneDay) return;
  const name = localStorage.getItem(STORAGE.notifName) || "Friend";
  new Notification("Aapka-Sathi reminder", {
    body: `${name}, aaj apna Sathi app open karke progress check karo.`,
    icon: `${HUB_BASE}/logo.svg`,
    tag: "aapka-sathi-daily"
  });
  localStorage.setItem(STORAGE.notifLastShown, String(Date.now()));
}

function initNotifications() {
  const toggle = document.getElementById("notifToggle");
  const saveBtn = document.getElementById("notifSave");
  const nameInput = document.getElementById("notifName");
  const status = document.getElementById("notifStatus");
  if (!toggle || !saveBtn || !nameInput || !status) return;

  toggle.checked = localStorage.getItem(STORAGE.notifEnabled) === "true";
  nameInput.value = localStorage.getItem(STORAGE.notifName) || nameInput.value || "";

  saveBtn.addEventListener("click", async () => {
    localStorage.setItem(STORAGE.notifEnabled, String(toggle.checked));
    localStorage.setItem(STORAGE.notifName, nameInput.value.trim());
    if (toggle.checked && "Notification" in window) {
      const permission = await Notification.requestPermission();
      status.textContent = permission === "granted"
        ? "Reminder preference saved. Reminder appears on return visits after 24h."
        : "Notification permission blocked. Enable it from browser settings.";
    } else {
      status.textContent = "Reminder preference saved locally.";
    }
  });

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
  await initFirebaseAuth();
});
