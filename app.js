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
  familyTheme: "sathi-family-theme",
  familyThemeMode: "sathi-family-theme-mode",
  installMarkerPrefix: "sathi-installed-",
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
    installAllAction: "Install all",
    sharedLoginLabel: "Family login",
    sharedLoginTitle: "Ek hi ID, poori family",
    sharedLoginHint: "Same Google login family apps me share hota hai.",
    authLoading: "Login status load ho raha hai...",
    authSignIn: "Login with Google",
    authSignOut: "Logout",
    authSignedAs: "Signed in as",
    authLoggedOut: "Abhi family login active nahi hai.",
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
    snapshotText: "Ek jagah se poori Sathi family ka clean access, install aur login control milta hai.",
    storyLabelOne: "Simple",
    storyTitleOne: "User ko sirf useful cheez dikhe",
    storyTextOne: "Yahan bas wahi cheez dikhe jo user ko app choose karne me help kare. Seedha kaam, seedhi clarity.",
    storyLabelTwo: "Beautiful",
    storyTitleTwo: "Compact cards, clear hierarchy",
    storyTextTwo: "Cards compact, elegant aur touch-friendly rakhe gaye hain taaki family hub premium aur easy lage.",
    appsLabel: "Current family",
    appsTitle: "Aaj ke live Sathi apps",
    appsText: "Jo app chahiye us par tap karo aur seedha kaam shuru karo.",
    footerText: "Focused everyday apps ka ek growing family.",
    installModalTitle: "Install Aapka-Sathi",
    installModalText: "Hub ko app ki tarah phone par rakho, taaki poori family ek tap me mil jaye.",
    installNow: "Install now",
    installLater: "Not now",
    installCenterTitle: "Install All Family Apps",
    installCenterText: "Browser har app ka install alag confirm karta hai. Yahan se guided family install flow start hoga.",
    installCenterStart: "Start install flow",
    installGuideNote: "Jo app already installed hai woh open state me dikhega.",
    installQueueStatus: "Family apps ke install tabs open ho rahe hain. Browser har app ke liye alag prompt dikha sakta hai.",
    installStateInstalled: "Installed",
    installStateReady: "Install",
    installStateOpen: "Open",
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
      "antariksh-sathi": "Aaj ka sky, ISRO watch aur space learning dekho.",
      "dastavez-sathi": "Paper ko clean PDF aur text me turant badlo."
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
    installAllAction: "Install all",
    sharedLoginLabel: "Family login",
    sharedLoginTitle: "One ID, whole family",
    sharedLoginHint: "The same Google login works across the family apps.",
    authLoading: "Loading login status...",
    authSignIn: "Login with Google",
    authSignOut: "Logout",
    authSignedAs: "Signed in as",
    authLoggedOut: "No family login is active right now.",
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
    snapshotText: "One place to manage clean access, install flow, and login state across the Sathi family.",
    storyLabelOne: "Simple",
    storyTitleOne: "Only useful things should be visible",
    storyTextOne: "The hub should only show what helps the user choose the right app quickly and confidently.",
    storyLabelTwo: "Beautiful",
    storyTitleTwo: "Compact cards, clear hierarchy",
    storyTextTwo: "The cards are now compact, elegant, and touch-friendly so the family hub feels polished.",
    appsLabel: "Current family",
    appsTitle: "Today's live Sathi apps",
    appsText: "Tap the app you need and get straight to work.",
    footerText: "A growing family of focused everyday apps.",
    installModalTitle: "Install Aapka-Sathi",
    installModalText: "Keep the hub on your phone like an app so the whole family is one tap away.",
    installNow: "Install now",
    installLater: "Not now",
    installCenterTitle: "Install All Family Apps",
    installCenterText: "Each browser still confirms app installs separately. This panel starts a guided family install flow.",
    installCenterStart: "Start install flow",
    installGuideNote: "Apps already installed will show an open state here.",
    installQueueStatus: "Family app install tabs are opening. Your browser may still confirm each app separately.",
    installStateInstalled: "Installed",
    installStateReady: "Install",
    installStateOpen: "Open",
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
      "antariksh-sathi": "See today’s sky, ISRO watch, and space learning.",
      "dastavez-sathi": "Turn paper into clean PDFs and readable text fast."
    }
  }
};

let deferredPrompt = null;
let isInstalled = window.matchMedia("(display-mode: standalone)").matches;
let currentLang = localStorage.getItem(STORAGE.lang) || "hi";
let familyRegistry = [];
let familyAuthApi = null;
let authUser = null;
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function t(key) {
  return COPY[currentLang][key];
}

function getInstallMarker(appId) {
  return `${STORAGE.installMarkerPrefix}${appId}`;
}

function markInstalled(appId) {
  localStorage.setItem(getInstallMarker(appId), "true");
}

function isAppInstalled(appId) {
  return localStorage.getItem(getInstallMarker(appId)) === "true";
}

function getThemePreference() {
  return localStorage.getItem(STORAGE.familyThemeMode) || localStorage.getItem(STORAGE.familyTheme) || localStorage.getItem(STORAGE.theme) || "system";
}

function resolveTheme(themePreference) {
  if (themePreference === "system") return systemThemeQuery.matches ? "dark" : "light";
  return themePreference === "dark" ? "dark" : "light";
}

function applyTheme(themePreference, persist = true) {
  const resolvedTheme = resolveTheme(themePreference);
  document.body.dataset.theme = resolvedTheme;
  document.documentElement.dataset.theme = resolvedTheme;
  if (persist) {
    localStorage.setItem(STORAGE.theme, resolvedTheme);
    localStorage.setItem(STORAGE.familyTheme, resolvedTheme);
    localStorage.setItem(STORAGE.familyThemeMode, themePreference);
  }
}

function initTheme() {
  applyTheme(getThemePreference(), false);

  const handleSystemThemeChange = () => {
    if ((localStorage.getItem(STORAGE.familyThemeMode) || "system") === "system") {
      applyTheme("system", false);
    }
  };

  if (typeof systemThemeQuery.addEventListener === "function") {
    systemThemeQuery.addEventListener("change", handleSystemThemeChange);
  } else if (typeof systemThemeQuery.addListener === "function") {
    systemThemeQuery.addListener(handleSystemThemeChange);
  }

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE.familyTheme || event.key === STORAGE.familyThemeMode) {
      applyTheme(getThemePreference(), false);
    }
  });

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
    renderInstallCenter();
    syncAuthUI(authUser);
  });
  document.getElementById("langEnBtn")?.addEventListener("click", () => {
    currentLang = "en";
    localStorage.setItem(STORAGE.lang, currentLang);
    applyLanguage();
    renderApps();
    renderInstallCenter();
    syncAuthUI(authUser);
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
    familyRegistry = data.apps;

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
    renderInstallCenter();
  } catch (error) {
    container.innerHTML = `<article class="app-card"><h3>Apps could not load</h3><p>${currentLang === "hi" ? "Thodi der baad refresh karke dubara try karo." : "Please refresh and try again in a moment."}</p></article>`;
    console.error(error);
  }
}

function syncAuthUI(user) {
  const displayName = user?.displayName || user?.email || "";
  const authName = user ? `${t("authSignedAs")} ${displayName}` : t("authLoggedOut");
  const authEmail = user?.email || t("sharedLoginHint");
  ["familyAuthName", "heroAuthName"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.textContent = authName;
  });
  ["familyAuthEmail", "heroAuthEmail"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.textContent = authEmail;
  });
  ["familyAuthButton", "heroAuthButton"].forEach((id) => {
    const button = document.getElementById(id);
    if (!button) return;
    button.textContent = user ? t("authSignOut") : t("authSignIn");
    button.onclick = async () => {
      if (!familyAuthApi) return;
      if (authUser) {
        await familyAuthApi.signOut(familyAuthApi.auth);
      } else {
        await familyAuthApi.signInWithPopup(familyAuthApi.auth, familyAuthApi.provider);
      }
    };
  });
}

async function initFamilyAuth() {
  try {
    const firebaseApp = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js");
    const firebaseAuth = await import("https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js");
    const app = firebaseApp.initializeApp(FIREBASE_CONFIG, "aapka-sathi-family-hub");
    const auth = firebaseAuth.getAuth(app);
    const provider = new firebaseAuth.GoogleAuthProvider();
    familyAuthApi = {
      auth,
      provider,
      signInWithPopup: firebaseAuth.signInWithPopup,
      signOut: firebaseAuth.signOut
    };
    firebaseAuth.onAuthStateChanged(auth, (user) => {
      authUser = user;
      syncAuthUI(user);
    });
  } catch (error) {
    console.error("Family auth failed", error);
    syncAuthUI(null);
  }
}

function openInstallCenter() {
  renderInstallCenter();
  document.getElementById("installCenterModal")?.classList.add("open");
}

function closeInstallCenter() {
  document.getElementById("installCenterModal")?.classList.remove("open");
}

async function triggerHubInstall() {
  if (!deferredPrompt) {
    alert(t("installUnavailable"));
    return false;
  }
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  return true;
}

async function handleSingleAppInstall(app) {
  if (app.id === "aapka-sathi") {
    await triggerHubInstall();
    return;
  }
  window.open(`${app.url}${app.url.includes("?") ? "&" : "?"}family-install=1`, "_blank", "noopener,noreferrer");
}

function renderInstallCenter() {
  const list = document.getElementById("installCenterList");
  if (!list) return;
  if (!familyRegistry.length) {
    list.innerHTML = "";
    return;
  }

  list.innerHTML = familyRegistry.map((app) => {
    const installed = isAppInstalled(app.id);
    return `
      <article class="install-row">
        <div>
          <h3>${app.name}</h3>
          <p class="muted">${t("appMood")[app.id] || app.tagline}</p>
        </div>
        <div class="install-row-actions">
          <span class="status-pill">${installed ? t("installStateInstalled") : t("installStateReady")}</span>
          <button class="ghost-btn" type="button" data-install-app="${app.id}">${installed ? t("installStateOpen") : t("installStateReady")}</button>
        </div>
      </article>
    `;
  }).join("");

  list.querySelectorAll("[data-install-app]").forEach((button) => {
    button.addEventListener("click", async () => {
      const app = familyRegistry.find((entry) => entry.id === button.dataset.installApp);
      if (!app) return;
      if (isAppInstalled(app.id)) {
        window.open(app.url, "_blank", "noopener,noreferrer");
        return;
      }
      await handleSingleAppInstall(app);
    });
  });
}

function initInstallCenter() {
  document.getElementById("installAllButton")?.addEventListener("click", openInstallCenter);
  document.getElementById("closeInstallCenter")?.addEventListener("click", closeInstallCenter);
  document.getElementById("installCenterModal")?.addEventListener("click", (event) => {
    if (event.target?.id === "installCenterModal") closeInstallCenter();
  });
  document.getElementById("startFamilyInstall")?.addEventListener("click", async () => {
    const status = document.getElementById("installCenterStatus");
    for (const app of familyRegistry.filter((entry) => entry.pwa)) {
      if (isAppInstalled(app.id)) continue;
      await handleSingleAppInstall(app);
    }
    if (status) status.textContent = t("installQueueStatus");
  });
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
  if (isInstalled) markInstalled("aapka-sathi");

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
    markInstalled("aapka-sathi");
    document.getElementById("installModal")?.classList.remove("open");
    document.getElementById("installButton")?.classList.add("hidden");
    renderInstallCenter();
    if (localStorage.getItem(STORAGE.notifAsked) !== "true") {
      document.getElementById("notifModal")?.classList.add("open");
    }
  });

  document.getElementById("installButton")?.addEventListener("click", triggerHubInstall);
  document.getElementById("heroInstallButton")?.addEventListener("click", triggerHubInstall);
  document.getElementById("installNowButton")?.addEventListener("click", triggerHubInstall);
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
  initInstallCenter();
  initPwa();
  initNotifications();
  initFeedback();
  await initFamilyAuth();
  await renderApps();
});
