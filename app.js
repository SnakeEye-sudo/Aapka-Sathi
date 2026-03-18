const HUB_BASE = window.location.pathname.startsWith("/Aapka-Sathi") ? "/Aapka-Sathi" : "";
const FAMILY_APPS_URL = new URL(`${HUB_BASE}/apps/apps.json`, window.location.origin).toString();
const STORAGE = {
  theme: "aapka-sathi-theme",
  lang: "aapka-sathi-lang",
  notifEnabled: "aapka-sathi-notif-enabled",
  notifLastShown: "aapka-sathi-notif-last-shown",
  notifAsked: "aapka-sathi-notif-asked"
};

const COPY = {
  hi: {
    menuLabel: "Family controls",
    menuTitle: "Aapka-Sathi menu",
    languageLabel: "Language",
    languageTitle: "Hindi aur English",
    themeLabel: "Theme",
    themeTitle: "Alive family mood",
    themeAction: "Theme badlo",
    installLabel: "Install",
    installTitle: "Hub ko phone par rakho",
    installAction: "Install app",
    pagesLabel: "Pages",
    pagesTitle: "Info aur family links",
    pageAbout: "About",
    pageResources: "Resources",
    pageContact: "Contact",
    pagePrivacy: "Privacy",
    pageTerms: "Terms",
    brandSub: "Focused app family",
    heroEyebrow: "One family, many useful apps",
    heroTitle: "Har kaam ke liye ek focused Sathi.",
    heroText: "Padhai, jobs, current affairs, hisaab aur space jaise daily kaam ke liye alag-alag apps, ek clean family hub ke andar. Jo kaam chahiye, wahi app kholo.",
    heroCta: "Apps dekho",
    heroInstall: "Install hub",
    snapshotLabel: "Family snapshot",
    liveApps: "Live apps",
    totalApps: "Total apps",
    installReady: "Install ready",
    dailyReminder: "Daily reminder",
    snapshotText: "Family standard ab ye bhi kehta hai ki sabhi naye apps me Hindi/English toggle aur top-right hamburger menu hoga.",
    storyLabelOne: "Simple",
    storyTitleOne: "User ko sirf useful cheez dikhe",
    storyTextOne: "Developer details ya confusing setup info family home par nahi aayega. Bas apps kya kaam karte hain aur kisliye kholne chahiye, wahi dikhega.",
    storyLabelTwo: "Beautiful",
    storyTitleTwo: "Compact cards, clear hierarchy",
    storyTextTwo: "Tiles ko lamba khinchne ke bajay ab unhe tighter, cleaner aur zyada premium family-hub feel me rakha gaya hai.",
    appsLabel: "Current family",
    appsTitle: "Aaj ke live Sathi apps",
    appsText: "Har card me app ka kaam seedhe user point of view se dikh raha hai.",
    footerText: "Focused everyday apps ka ek growing family.",
    installModalTitle: "Install Aapka-Sathi",
    installModalText: "Hub ko app ki tarah phone par rakho, taaki poori family ek tap me mil jaye.",
    installNow: "Install now",
    installLater: "Not now",
    notifTitle: "Daily reminder",
    notifText: "Install hone ke baad roz ek baar yaad dilaya ja sakta hai ki apna useful Sathi app open kar lo.",
    notifAllowText: "Allow reminder",
    notifSkipText: "Skip",
    feedbackTitle: "Family feedback",
    feedbackText: "Bug, UI issue ya new app idea yahin se bhejo.",
    feedbackCategoryLabel: "Category",
    feedbackMessageLabel: "Message",
    feedbackPlaceholder: "Kya improve hona chahiye?",
    feedbackSend: "Send feedback",
    feedbackClose: "Close",
    installUnavailable: "Install prompt abhi available nahi hai. Browser menu se install try karo.",
    reminderGranted: "Daily reminder on ho gaya.",
    reminderDenied: "Notification permission off hai.",
    reminderUnsupported: "Is browser me notification support nahi hai.",
    appOpen: "Open app",
    featureLang: "Hindi + English",
    featureInstall: "Install-ready",
    featureReminder: "Daily reminder",
    featureTheme: "Alive theme",
    appMood: {
      "pariksha-sathi": "Preparation ko planned aur calm banao.",
      "rozgar-sathi": "Jobs aur career tracking ko seedha rakho.",
      "samachar-sathi": "Current affairs ko short aur useful form me dekho.",
      "hisaab-sathi": "Daily finance aur udhar ko clear rakho.",
      "antariksh-sathi": "Aaj ka sky, ISRO watch aur space learning dekho."
    }
  },
  en: {
    menuLabel: "Family controls",
    menuTitle: "Aapka-Sathi menu",
    languageLabel: "Language",
    languageTitle: "Hindi and English",
    themeLabel: "Theme",
    themeTitle: "Alive family mood",
    themeAction: "Change theme",
    installLabel: "Install",
    installTitle: "Keep the hub on your phone",
    installAction: "Install app",
    pagesLabel: "Pages",
    pagesTitle: "Info and family links",
    pageAbout: "About",
    pageResources: "Resources",
    pageContact: "Contact",
    pagePrivacy: "Privacy",
    pageTerms: "Terms",
    brandSub: "Focused app family",
    heroEyebrow: "One family, many useful apps",
    heroTitle: "One focused Sathi for every job.",
    heroText: "Study, jobs, current affairs, finance, and space all get their own dedicated apps inside one clean family hub. Open only the app you need.",
    heroCta: "See apps",
    heroInstall: "Install hub",
    snapshotLabel: "Family snapshot",
    liveApps: "Live apps",
    totalApps: "Total apps",
    installReady: "Install ready",
    dailyReminder: "Daily reminder",
    snapshotText: "The family standard now also requires a Hindi/English toggle and a top-right hamburger menu for all new apps.",
    storyLabelOne: "Simple",
    storyTitleOne: "Only useful things should be visible",
    storyTextOne: "Developer-facing details or confusing setup notes should not appear on the family home. Users should only see what each app does and when to open it.",
    storyLabelTwo: "Beautiful",
    storyTitleTwo: "Compact cards, clear hierarchy",
    storyTextTwo: "Instead of tall stretched tiles, the cards now feel tighter, cleaner, and much more like a polished family hub.",
    appsLabel: "Current family",
    appsTitle: "Today's live Sathi apps",
    appsText: "Each card speaks from the user point of view.",
    footerText: "A growing family of focused everyday apps.",
    installModalTitle: "Install Aapka-Sathi",
    installModalText: "Keep the hub on your phone like an app so the whole family is one tap away.",
    installNow: "Install now",
    installLater: "Not now",
    notifTitle: "Daily reminder",
    notifText: "After install, the hub can remind you once a day to open the useful Sathi app you need.",
    notifAllowText: "Allow reminder",
    notifSkipText: "Skip",
    feedbackTitle: "Family feedback",
    feedbackText: "Send a bug, UI issue, or new app idea from here.",
    feedbackCategoryLabel: "Category",
    feedbackMessageLabel: "Message",
    feedbackPlaceholder: "What should improve?",
    feedbackSend: "Send feedback",
    feedbackClose: "Close",
    installUnavailable: "The install prompt is not available yet. Try the browser install option.",
    reminderGranted: "Daily reminder is enabled.",
    reminderDenied: "Notification permission is off.",
    reminderUnsupported: "This browser does not support notifications.",
    appOpen: "Open app",
    featureLang: "Hindi + English",
    featureInstall: "Install-ready",
    featureReminder: "Daily reminder",
    featureTheme: "Alive theme",
    appMood: {
      "pariksha-sathi": "Make exam preparation planned and calm.",
      "rozgar-sathi": "Keep jobs and career tracking simple.",
      "samachar-sathi": "See current affairs in a short useful form.",
      "hisaab-sathi": "Keep daily finance and lending clear.",
      "antariksh-sathi": "See today’s sky, ISRO watch, and space learning."
    }
  }
};

let deferredPrompt = null;
let isInstalled = window.matchMedia("(display-mode: standalone)").matches;
let currentLang = localStorage.getItem(STORAGE.lang) || "hi";

function t(key) {
  return COPY[currentLang][key];
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem(STORAGE.theme, theme);
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE.theme);
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = COPY[currentLang][key];
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    node.setAttribute("placeholder", COPY[currentLang][key]);
  });
  document.getElementById("langHiBtn")?.classList.toggle("active", currentLang === "hi");
  document.getElementById("langEnBtn")?.classList.toggle("active", currentLang === "en");
}

function initLanguage() {
  applyLanguage();
  document.getElementById("langHiBtn")?.addEventListener("click", () => {
    currentLang = "hi";
    localStorage.setItem(STORAGE.lang, currentLang);
    applyLanguage();
    renderApps();
  });
  document.getElementById("langEnBtn")?.addEventListener("click", () => {
    currentLang = "en";
    localStorage.setItem(STORAGE.lang, currentLang);
    applyLanguage();
    renderApps();
  });
}

function appDescription(app) {
  if (currentLang === "en") return app.description;

  const map = {
    "pariksha-sathi": "Competitive exams ke liye planner, checklist, progress aur cloud sync support ke saath.",
    "rozgar-sathi": "Jobs, application tracking aur career flow ko ek jagah laane wala portal.",
    "samachar-sathi": "Current affairs aur daily analysis ko clean tarike se dikhane wala app.",
    "hisaab-sathi": "Expense, income, udhar aur reminder ke saath daily finance ledger app.",
    "antariksh-sathi": "Daily sky snapshot, ISRO watch, stargazing spots aur student curiosity space app."
  };
  return map[app.id] || app.description;
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
          <div class="app-top">
            <div class="app-icon">${app.emoji}</div>
            <div>
              <h3>${app.name}</h3>
              <p class="app-tagline">${t("appMood")[app.id] || app.tagline}</p>
            </div>
          </div>
          <span class="status-pill">${app.status}</span>
        </div>
        <p>${appDescription(app)}</p>
        <div class="app-meta">
          <span class="feature-pill">${t("featureLang")}</span>
          <span class="feature-pill">${t("featureInstall")}</span>
          <span class="feature-pill">${app.notification ? t("featureReminder") : t("featureTheme")}</span>
        </div>
        <a class="solid-btn" href="${app.url}" target="_blank" rel="noopener noreferrer">${t("appOpen")}</a>
      </article>
    `).join("");
  } catch (error) {
    container.innerHTML = `<article class="app-card"><h3>Apps could not load</h3><p>${currentLang === "hi" ? "Thodi der baad refresh karke dubara try karo." : "Please refresh and try again in a moment."}</p></article>`;
    console.error(error);
  }
}

function openDrawer() {
  document.getElementById("drawer")?.classList.add("drawer-open");
  document.getElementById("drawer")?.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  document.getElementById("drawer")?.classList.remove("drawer-open");
  document.getElementById("drawer")?.setAttribute("aria-hidden", "true");
}

function initDrawer() {
  document.getElementById("openDrawerBtn")?.addEventListener("click", openDrawer);
  document.getElementById("closeDrawerBtn")?.addEventListener("click", closeDrawer);
  document.getElementById("drawer")?.addEventListener("click", (event) => {
    if (event.target.id === "drawer") closeDrawer();
  });
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
    if (!deferredPrompt) {
      alert(t("installUnavailable"));
      return;
    }
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

  new Notification("Aapka-Sathi", {
    body: currentLang === "hi"
      ? "Aaj apna useful Sathi app open karke progress check kar lo."
      : "Open the useful Sathi app you need today and check your progress.",
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
      document.getElementById("notifStatus").textContent = t("reminderUnsupported");
    } else {
      const permission = await Notification.requestPermission();
      document.getElementById("notifStatus").textContent = permission === "granted" ? t("reminderGranted") : t("reminderDenied");
      if (permission !== "granted") localStorage.setItem(STORAGE.notifEnabled, "false");
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

document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  initLanguage();
  initDrawer();
  initPwa();
  initNotifications();
  initFeedback();
  await renderApps();
});
