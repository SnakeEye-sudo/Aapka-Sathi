const HUB_BASE = window.location.pathname.startsWith("/Aapka-Sathi") ? "/Aapka-Sathi" : "";
const FAMILY_APPS_VERSION = "2026-03-19-dastavez-fix";
const FAMILY_APPS_URL = new URL(`${HUB_BASE}/apps/apps.json?v=${FAMILY_APPS_VERSION}`, window.location.origin).toString();
const REQUIRED_FAMILY_APPS = [
  {
    id: "dastavez-sathi",
    name: "Dastavez Sathi",
    emoji: "📄",
    tagline: "Scan papers into clean PDFs with OCR and auto crop.",
    description: "Mobile-first document scanner with camera capture, auto edge detection, perspective crop, OCR text extraction, multi-page PDF export, and local history.",
    url: "https://snakeeye-sudo.github.io/Dastavez-Sathi/",
    status: "LIVE",
    pwa: true,
    theme: true,
    sharedLogin: false,
    notification: true,
    feedback: true
  }
];
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
const BACKUP_SCHEMA_VERSION = 1;
const BACKUP_PREFIX_PATTERNS = [
  /^aapka-sathi-/,
  /^ganit-/,
  /^sikka-/,
  /^dhyan-/,
  /^khel-/,
  /^paltu-/,
  /^panchang-/,
  /^ank-/,
  /^jal-/,
  /^mann-/,
  /^sanket-/,
  /^dastavez-/,
  /^rozgar-/,
  /^pariksha_/,
  /^ps_/,
  /^hs-/,
  /^as-/,
  /^pragya-/,
  /^ss_/,
  /^sathi-family-theme/,
  /^vite-ui-theme$/
];
const BACKUP_EXCLUDE_PATTERNS = [
  /^sathi-installed-/,
  /:notification-prompt-/,
  /pwa-dismissed/i
];
const BACKUP_INDEXEDDB_CONFIG = {
  name: "samachar-sathi-vault",
  version: 2,
  stores: ["analyses"]
};
const APP_CATEGORY_MAP = {
  "pariksha-sathi": "study",
  "rozgar-sathi": "career",
  "samachar-sathi": "current",
  "hisaab-sathi": "finance",
  "antariksh-sathi": "learning",
  "ganit-sathi": "utility",
  "jal-sathi": "wellness",
  "mann-sathi": "wellness",
  "sanket-sathi": "utility",
  "dastavez-sathi": "productivity",
  "sikka-sathi": "play",
  "khel-sathi": "play",
  "dhyan-sathi": "wellness",
  "mausam-sathi": "daily",
  "paltu-sathi": "play",
  "panchang-sathi": "daily",
  "ank-sathi": "reflection"
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
    backupLabel: "Backup",
    backupTitle: "Family data save aur restore",
    backupAction: "Backup",
    backupSummary: "Poore ecosystem ka local data yahan se ek file me save kiya ja sakta hai.",
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
    installedApps: "Installed apps",
    notInstalledApps: "Not installed",
    snapshotText: "Yahin se install progress dekho, fast updates lo, aur family data ka backup banao.",
    storyLabelOne: "Simple",
    storyTitleOne: "User ko sirf useful cheez dikhe",
    storyTextOne: "Yahan bas wahi cheez dikhe jo user ko app choose karne me help kare. Seedha kaam, seedhi clarity.",
    storyLabelTwo: "Beautiful",
    storyTitleTwo: "Compact cards, clear hierarchy",
    storyTextTwo: "Cards compact, elegant aur touch-friendly rakhe gaye hain taaki family hub premium aur easy lage.",
    commandLabel: "Smart deck",
    commandTitle: "Family command center",
    commandText: "Install health, backup confidence, aur ecosystem progress ko ek compact view me dekho.",
    recentLabel: "Continue",
    recentTitle: "Recently used apps",
    recentText: "Jin apps par family ne recently kaam kiya hai, unhe yahin se dobara kholo.",
    recentEmpty: "Abhi tak koi family app recent list me nahi aaya. Kisi app ko open karoge to yahan dikhega.",
    appsLabel: "Current family",
    appsTitle: "Aaj ke live Sathi apps",
    appsText: "Jo app chahiye us par tap karo aur seedha kaam shuru karo.",
    searchLabel: "Search apps",
    searchPlaceholder: "Kis app ki zarurat hai?",
    recommendedLabel: "Recommended",
    recommendedTitle: "Next best apps",
    recommendedText: "Recent use, install status, aur family mix ke hisaab se yeh cards pehle dikh rahe hain.",
    noAppsMatch: "Is search ya filter me abhi koi app match nahi hua.",
    cardInstall: "Install app",
    cardPreview: "Open web",
    statusNeedsInstall: "Needs install",
    statusInstalledCard: "Installed",
    statusSharedLogin: "Shared login",
    statusReminderOn: "Reminder ready",
    statusLastOpened: "Last opened",
    statusNeverOpened: "Not opened yet",
    commandInstalled: "Installed family apps ab clean track ho rahe hain.",
    commandBackup: "Manual backup aur restore ecosystem level par ready hai.",
    commandDiscover: "Search aur categories se right app jaldi mil jayega.",
    commandLastBackupPrefix: "Last backup",
    categories: {
      all: "All",
      study: "Study",
      career: "Career",
      current: "Current affairs",
      finance: "Finance",
      learning: "Learning",
      utility: "Utility",
      wellness: "Wellness",
      productivity: "Productivity",
      play: "Fun",
      daily: "Daily life",
      reflection: "Reflection"
    },
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
    backupModalTitle: "Family Backup",
    backupModalText: "Ek JSON backup file me poore ecosystem ka local data save karo aur isi hub se restore bhi karo.",
    backupAppsTracked: "Apps tracked",
    backupItemsSaved: "Saved items",
    backupCreate: "Create backup",
    backupRestore: "Restore backup",
    backupStatusIdle: "Backup file yahan se share ya download ki ja sakti hai.",
    backupStatusPreparing: "Backup file taiyar ho rahi hai...",
    backupStatusDownloaded: "Backup file download ho gayi. Isse kahin bhi share kar sakte ho.",
    backupStatusShared: "Backup file share ho gayi.",
    backupStatusRestoring: "Backup restore ho raha hai...",
    backupStatusRestored: "Backup restore ho gaya. Family data wapas load ho chuka hai.",
    backupStatusInvalid: "Yeh valid Aapka-Sathi backup file nahi lag rahi.",
    backupStatusError: "Backup process complete nahi ho paya. Dobara try karo.",
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
    backupLabel: "Backup",
    backupTitle: "Save and restore family data",
    backupAction: "Backup",
    backupSummary: "Save the whole ecosystem's local data into one portable file.",
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
    installedApps: "Installed apps",
    notInstalledApps: "Not installed",
    snapshotText: "Track install progress, get fresher updates, and manage family backups from one place.",
    storyLabelOne: "Simple",
    storyTitleOne: "Only useful things should be visible",
    storyTextOne: "The hub should only show what helps the user choose the right app quickly and confidently.",
    storyLabelTwo: "Beautiful",
    storyTitleTwo: "Compact cards, clear hierarchy",
    storyTextTwo: "The cards are now compact, elegant, and touch-friendly so the family hub feels polished.",
    commandLabel: "Smart deck",
    commandTitle: "Family command center",
    commandText: "See install health, backup confidence, and ecosystem progress in one compact view.",
    recentLabel: "Continue",
    recentTitle: "Recently used apps",
    recentText: "Jump back into the family apps that were used most recently.",
    recentEmpty: "No family app has been opened recently yet. Open one and it will appear here.",
    appsLabel: "Current family",
    appsTitle: "Today's live Sathi apps",
    appsText: "Tap the app you need and get straight to work.",
    searchLabel: "Search apps",
    searchPlaceholder: "Which app do you need?",
    recommendedLabel: "Recommended",
    recommendedTitle: "Next best apps",
    recommendedText: "These cards are ranked first using recent use, install status, and family balance.",
    noAppsMatch: "No app matches this search or filter right now.",
    cardInstall: "Install app",
    cardPreview: "Open web",
    statusNeedsInstall: "Needs install",
    statusInstalledCard: "Installed",
    statusSharedLogin: "Shared login",
    statusReminderOn: "Reminder ready",
    statusLastOpened: "Last opened",
    statusNeverOpened: "Not opened yet",
    commandInstalled: "Installed family apps are now tracked cleanly.",
    commandBackup: "Manual family backup and restore are ready.",
    commandDiscover: "Search and categories help the right app surface faster.",
    commandLastBackupPrefix: "Last backup",
    categories: {
      all: "All",
      study: "Study",
      career: "Career",
      current: "Current affairs",
      finance: "Finance",
      learning: "Learning",
      utility: "Utility",
      wellness: "Wellness",
      productivity: "Productivity",
      play: "Fun",
      daily: "Daily life",
      reflection: "Reflection"
    },
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
    backupModalTitle: "Family Backup",
    backupModalText: "Create one JSON backup for the ecosystem's local data and restore it again from this hub.",
    backupAppsTracked: "Apps tracked",
    backupItemsSaved: "Saved items",
    backupCreate: "Create backup",
    backupRestore: "Restore backup",
    backupStatusIdle: "The backup file can be shared or downloaded from here.",
    backupStatusPreparing: "Preparing the backup file...",
    backupStatusDownloaded: "Backup file downloaded. You can share it anywhere.",
    backupStatusShared: "Backup file shared.",
    backupStatusRestoring: "Restoring backup...",
    backupStatusRestored: "Backup restored. Family data is available again.",
    backupStatusInvalid: "This does not look like a valid Aapka-Sathi backup file.",
    backupStatusError: "The backup process could not finish. Please try again.",
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
let currentSearchQuery = "";
let currentCategory = "all";
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

function getLastOpenedKey(appId) {
  return `sathi-last-opened-${appId}`;
}

function getAppCategory(app) {
  return APP_CATEGORY_MAP[app.id] || "all";
}

function getCategoryLabel(category) {
  return t("categories")[category] || category;
}

function getLastOpened(appId) {
  return Number(localStorage.getItem(getLastOpenedKey(appId)) || "0");
}

function markAppOpened(appId) {
  localStorage.setItem(getLastOpenedKey(appId), String(Date.now()));
}

function formatRelativeTime(timestamp) {
  if (!timestamp) return t("statusNeverOpened");
  const diff = Date.now() - timestamp;
  if (diff < 60 * 1000) return currentLang === "hi" ? "abhi" : "just now";
  if (diff < 60 * 60 * 1000) {
    const minutes = Math.round(diff / (60 * 1000));
    return currentLang === "hi" ? `${minutes} min pehle` : `${minutes} min ago`;
  }
  if (diff < 24 * 60 * 60 * 1000) {
    const hours = Math.round(diff / (60 * 60 * 1000));
    return currentLang === "hi" ? `${hours} ghante pehle` : `${hours}h ago`;
  }
  const days = Math.round(diff / (24 * 60 * 60 * 1000));
  return currentLang === "hi" ? `${days} din pehle` : `${days}d ago`;
}

function getInstalledCounts(apps = familyRegistry) {
  const installed = apps.filter((app) => isAppInstalled(app.id)).length;
  return {
    installed,
    notInstalled: Math.max(apps.length - installed, 0)
  };
}

function updateFamilySnapshot(apps = familyRegistry) {
  if (!apps.length) return;
  const { installed, notInstalled } = getInstalledCounts(apps);
  document.getElementById("liveCount").textContent = String(apps.filter((app) => app.status === "LIVE").length);
  document.getElementById("familyCount").textContent = String(apps.length);
  document.getElementById("pwaCount").textContent = String(installed);
  document.getElementById("reminderCount").textContent = String(notInstalled);
}

function shouldBackupLocalStorageKey(key) {
  return BACKUP_PREFIX_PATTERNS.some((pattern) => pattern.test(key))
    && !BACKUP_EXCLUDE_PATTERNS.some((pattern) => pattern.test(key));
}

function collectLocalStorageBackup() {
  const data = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key || !shouldBackupLocalStorageKey(key)) continue;
    data[key] = localStorage.getItem(key);
  }
  return data;
}

function getFilteredApps() {
  const search = currentSearchQuery.trim().toLowerCase();
  return familyRegistry.filter((app) => {
    const categoryMatch = currentCategory === "all" || getAppCategory(app) === currentCategory;
    if (!categoryMatch) return false;
    if (!search) return true;

    const haystack = [
      app.name,
      app.tagline,
      app.description,
      appDescription(app),
      getCategoryLabel(getAppCategory(app))
    ].join(" ").toLowerCase();
    return haystack.includes(search);
  });
}

function getRecommendedApps(apps) {
  const recent = [...apps]
    .filter((app) => getLastOpened(app.id))
    .sort((a, b) => getLastOpened(b.id) - getLastOpened(a.id));
  const installed = apps.filter((app) => isAppInstalled(app.id));
  const pending = apps.filter((app) => !isAppInstalled(app.id));
  const ordered = [...recent, ...installed, ...pending];
  const seen = new Set();
  return ordered.filter((app) => {
    if (seen.has(app.id)) return false;
    seen.add(app.id);
    return true;
  }).slice(0, 3);
}

function mergeRequiredFamilyApps(apps) {
  const byId = new Map((apps || []).map((app) => [app.id, app]));
  REQUIRED_FAMILY_APPS.forEach((app) => {
    if (!byId.has(app.id)) {
      byId.set(app.id, app);
    }
  });
  return [...byId.values()];
}

function openIndexedDb(name, version) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("analyses")) {
        const store = db.createObjectStore("analyses", { keyPath: "metadata.date" });
        store.createIndex("by-date", "metadata.date");
      }
      if (db.objectStoreNames.contains("quizzes")) db.deleteObjectStore("quizzes");
      if (db.objectStoreNames.contains("results")) db.deleteObjectStore("results");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
  });
}

async function collectIndexedDbBackup() {
  if (!("indexedDB" in window)) return {};

  try {
    const db = await openIndexedDb(BACKUP_INDEXEDDB_CONFIG.name, BACKUP_INDEXEDDB_CONFIG.version);
    const payload = {};
    await Promise.all(BACKUP_INDEXEDDB_CONFIG.stores.map((storeName) => new Promise((resolve, reject) => {
      if (!db.objectStoreNames.contains(storeName)) {
        payload[storeName] = [];
        resolve();
        return;
      }
      const request = db.transaction(storeName, "readonly").objectStore(storeName).getAll();
      request.onsuccess = () => {
        payload[storeName] = request.result || [];
        resolve();
      };
      request.onerror = () => reject(request.error || new Error(`IndexedDB read failed for ${storeName}`));
    })));
    db.close();
    return payload;
  } catch (error) {
    console.error("IndexedDB backup failed", error);
    return {};
  }
}

async function buildBackupPayload() {
  const localData = collectLocalStorageBackup();
  const indexedDb = await collectIndexedDbBackup();
  const indexedDbItemCount = Object.values(indexedDb).reduce((sum, items) => sum + (Array.isArray(items) ? items.length : 0), 0);

  return {
    ecosystem: "aapka-sathi-family",
    version: BACKUP_SCHEMA_VERSION,
    createdAt: new Date().toISOString(),
    appsTracked: familyRegistry.map((app) => app.id),
    localStorage: localData,
    indexedDb,
    stats: {
      localStorageItems: Object.keys(localData).length,
      indexedDbItems: indexedDbItemCount
    }
  };
}

function updateBackupSummary() {
  const summaryNode = document.getElementById("backupSummary");
  const appCountNode = document.getElementById("backupAppCount");
  const keyCountNode = document.getElementById("backupKeyCount");
  const localStorageCount = Object.keys(collectLocalStorageBackup()).length;
  const lastBackupAt = localStorage.getItem("aapka-sathi-last-backup-at");

  if (appCountNode) appCountNode.textContent = String(familyRegistry.length);
  if (keyCountNode) keyCountNode.textContent = String(localStorageCount);

  if (summaryNode) {
    const { installed, notInstalled } = getInstalledCounts();
    const lastBackupLabel = lastBackupAt ? ` ${t("commandLastBackupPrefix")}: ${formatRelativeTime(Number(lastBackupAt))}.` : "";
    summaryNode.textContent = currentLang === "hi"
      ? `${installed} apps installed, ${notInstalled} baaki. Backup me family ka local data save hoga.${lastBackupLabel}`
      : `${installed} apps installed, ${notInstalled} left. The backup will include the family's local data.${lastBackupLabel}`;
  }
}

function setBackupStatus(copyKey) {
  const node = document.getElementById("backupStatus");
  if (node) node.textContent = t(copyKey);
}

function downloadBackupFile(file) {
  const url = URL.createObjectURL(file);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = file.name;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

async function exportFamilyBackup() {
  setBackupStatus("backupStatusPreparing");
  const payload = await buildBackupPayload();
  localStorage.setItem("aapka-sathi-last-backup-at", String(Date.now()));
  document.getElementById("backupAppCount").textContent = String(payload.appsTracked.length);
  document.getElementById("backupKeyCount").textContent = String(payload.stats.localStorageItems + payload.stats.indexedDbItems);

  const dateStamp = payload.createdAt.slice(0, 10);
  const text = JSON.stringify(payload, null, 2);
  const file = new File([text], `aapka-sathi-backup-${dateStamp}.json`, { type: "application/json" });

  try {
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: "Aapka-Sathi backup",
        text: currentLang === "hi" ? "Family ecosystem backup" : "Family ecosystem backup",
        files: [file]
      });
      setBackupStatus("backupStatusShared");
      return;
    }
  } catch (error) {
    console.error("Backup share skipped", error);
  }

  downloadBackupFile(file);
  setBackupStatus("backupStatusDownloaded");
}

async function restoreIndexedDbBackup(indexedDbBackup) {
  if (!("indexedDB" in window) || !indexedDbBackup) return;

  const db = await openIndexedDb(BACKUP_INDEXEDDB_CONFIG.name, BACKUP_INDEXEDDB_CONFIG.version);
  await Promise.all(BACKUP_INDEXEDDB_CONFIG.stores.map((storeName) => new Promise((resolve, reject) => {
    if (!db.objectStoreNames.contains(storeName)) {
      resolve();
      return;
    }

    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const records = Array.isArray(indexedDbBackup[storeName]) ? indexedDbBackup[storeName] : [];
    const clearRequest = store.clear();
    clearRequest.onerror = () => reject(clearRequest.error || new Error(`IndexedDB clear failed for ${storeName}`));
    clearRequest.onsuccess = () => {
      records.forEach((record) => store.put(record));
    };
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error(`IndexedDB write failed for ${storeName}`));
    tx.onabort = () => reject(tx.error || new Error(`IndexedDB write aborted for ${storeName}`));
  })));
  db.close();
}

async function restoreFamilyBackup(file) {
  setBackupStatus("backupStatusRestoring");
  const shouldRestore = window.confirm(currentLang === "hi"
    ? "Is backup ko restore karne par current local data overwrite ho sakta hai. Continue karein?"
    : "Restoring this backup may overwrite current local data. Continue?");
  if (!shouldRestore) {
    setBackupStatus("backupStatusIdle");
    return;
  }
  const raw = await file.text();
  const payload = JSON.parse(raw);
  if (payload?.ecosystem !== "aapka-sathi-family" || payload?.version !== BACKUP_SCHEMA_VERSION) {
    throw new Error("invalid-backup");
  }

  Object.entries(payload.localStorage || {}).forEach(([key, value]) => {
    if (!shouldBackupLocalStorageKey(key)) return;
      localStorage.setItem(key, value);
    });
  await restoreIndexedDbBackup(payload.indexedDb);
  localStorage.setItem("aapka-sathi-last-backup-at", String(Date.now()));
  applyTheme(getThemePreference(), false);
  currentLang = localStorage.getItem(STORAGE.lang) || currentLang;
  applyLanguage();
  updateBackupSummary();
  renderInstallCenter();
  await renderApps();
  setBackupStatus("backupStatusRestored");
}

function renderCategoryFilters() {
  const container = document.getElementById("categoryFilters");
  if (!container) return;
  if (!familyRegistry.length) {
    container.innerHTML = "";
    return;
  }

  const categories = ["all", ...new Set(familyRegistry.map((app) => getAppCategory(app)))];
  container.innerHTML = categories.map((category) => `
    <button class="filter-chip ${currentCategory === category ? "active" : ""}" type="button" data-category-filter="${category}">
      ${getCategoryLabel(category)}
    </button>
  `).join("");

  container.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.categoryFilter || "all";
      renderApps();
    });
  });
}

function renderFamilyHighlights() {
  const container = document.getElementById("familyHighlights");
  if (!container || !familyRegistry.length) return;

  const { installed, notInstalled } = getInstalledCounts();
  const backupAt = localStorage.getItem("aapka-sathi-last-backup-at");
  const items = [
    { title: `${installed}/${familyRegistry.length}`, text: t("commandInstalled") },
    { title: backupAt ? formatRelativeTime(Number(backupAt)) : (currentLang === "hi" ? "abhi tak nahi" : "not yet"), text: t("commandBackup") },
    { title: `${notInstalled}`, text: t("commandDiscover") }
  ];

  container.innerHTML = items.map((item) => `
    <article class="signal-item">
      <strong>${item.title}</strong>
      <span class="muted">${item.text}</span>
    </article>
  `).join("");
}

function buildAppCard(app, compact = false) {
  const installed = isAppInstalled(app.id);
  const lastOpened = getLastOpened(app.id);
  const statusChips = [
    `<span class="status-pill">${installed ? t("statusInstalledCard") : t("statusNeedsInstall")}</span>`,
    `<span class="feature-pill">${t("statusLastOpened")}: ${lastOpened ? formatRelativeTime(lastOpened) : t("statusNeverOpened")}</span>`
  ];

  if (app.sharedLogin) statusChips.push(`<span class="feature-pill">${t("statusSharedLogin")}</span>`);
  if (app.notification) statusChips.push(`<span class="feature-pill">${t("statusReminderOn")}</span>`);

  return `
    <article class="app-card ${compact ? "compact-card" : ""}">
      <div class="app-top-row">
        <div class="app-top">
          <div class="app-icon">${app.emoji}</div>
          <div>
            <h3>${app.name}</h3>
            <p class="app-tagline">${t("appMood")[app.id] || app.tagline}</p>
          </div>
        </div>
        <span class="category-pill">${getCategoryLabel(getAppCategory(app))}</span>
      </div>
      <p>${appDescription(app)}</p>
      <div class="app-meta">
        <span class="feature-pill">${t("featureLang")}</span>
        <span class="feature-pill">${t("featureInstall")}</span>
        <span class="feature-pill">${app.notification ? t("featureReminder") : t("featureTheme")}</span>
      </div>
      <div class="app-status-row">${statusChips.join("")}</div>
      <div class="app-card-actions">
        <button class="solid-btn" type="button" data-primary-action="${app.id}">${installed ? t("appOpen") : t("cardInstall")}</button>
        <button class="ghost-btn" type="button" data-open-app="${app.id}">${t("cardPreview")}</button>
      </div>
    </article>
  `;
}

function bindAppActionButtons(scope = document) {
  scope.querySelectorAll("[data-open-app]").forEach((button) => {
    button.addEventListener("click", () => {
      const app = familyRegistry.find((entry) => entry.id === button.dataset.openApp);
      if (!app) return;
      markAppOpened(app.id);
      window.open(app.url, "_blank", "noopener,noreferrer");
      renderRecentApps();
      renderFamilyHighlights();
      renderRecommendedApps(getFilteredApps());
      updateBackupSummary();
    });
  });

  scope.querySelectorAll("[data-primary-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const app = familyRegistry.find((entry) => entry.id === button.dataset.primaryAction);
      if (!app) return;
      if (isAppInstalled(app.id)) {
        markAppOpened(app.id);
        window.open(app.url, "_blank", "noopener,noreferrer");
        renderRecentApps();
        renderFamilyHighlights();
        renderRecommendedApps(getFilteredApps());
        updateBackupSummary();
        return;
      }
      await handleSingleAppInstall(app);
      await renderApps();
    });
  });
}

function renderRecentApps() {
  const container = document.getElementById("recentAppsList");
  if (!container) return;

  const recentApps = [...familyRegistry]
    .filter((app) => getLastOpened(app.id))
    .sort((a, b) => getLastOpened(b.id) - getLastOpened(a.id))
    .slice(0, 4);

  if (!recentApps.length) {
    container.innerHTML = `<article class="recent-app-item"><div class="recent-app-copy"><strong>${t("recentTitle")}</strong><span class="muted">${t("recentEmpty")}</span></div></article>`;
    return;
  }

  container.innerHTML = recentApps.map((app) => `
    <article class="recent-app-item">
      <div class="recent-app-copy">
        <strong>${app.name}</strong>
        <span class="muted">${app.tagline}</span>
        <div class="recent-app-meta">
          <span class="feature-pill">${getCategoryLabel(getAppCategory(app))}</span>
          <span class="feature-pill">${t("statusLastOpened")}: ${formatRelativeTime(getLastOpened(app.id))}</span>
        </div>
      </div>
      <button class="ghost-btn" type="button" data-open-app="${app.id}">${t("appOpen")}</button>
    </article>
  `).join("");

  bindAppActionButtons(container);
}

function renderRecommendedApps(apps) {
  const container = document.getElementById("recommendedApps");
  if (!container) return;
  const recommended = getRecommendedApps(apps);
  container.innerHTML = recommended.map((app) => buildAppCard(app, true)).join("");
  bindAppActionButtons(container);
}

async function renderApps() {
  const container = document.getElementById("appGrid");
  if (!container) return;

  try {
    const res = await fetch(FAMILY_APPS_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Registry fetch failed: ${res.status}`);
    const data = await res.json();
    familyRegistry = mergeRequiredFamilyApps(data.apps);
    const filteredApps = getFilteredApps();
    updateFamilySnapshot(familyRegistry);
    updateBackupSummary();

    renderCategoryFilters();
    renderFamilyHighlights();
    renderRecentApps();
    renderRecommendedApps(filteredApps);

    if (!filteredApps.length) {
      container.innerHTML = `
        <article class="app-card">
          <h3>${t("noAppsMatch")}</h3>
          <p>${currentLang === "hi" ? "Search ya category filter badal kar dubara dekhiye." : "Try a different search or category filter."}</p>
        </article>
      `;
      return;
    }

    container.innerHTML = filteredApps.map((app) => buildAppCard(app)).join("");
    bindAppActionButtons(container);
    renderInstallCenter();
  } catch (error) {
    container.innerHTML = `<article class="app-card"><h3>Apps could not load</h3><p>${currentLang === "hi" ? "Thodi der baad refresh karke dubara try karo." : "Please refresh and try again in a moment."}</p></article>`;
    console.error(error);
  }
}

function initDiscoveryControls() {
  document.getElementById("appSearchInput")?.addEventListener("input", (event) => {
    currentSearchQuery = event.currentTarget.value || "";
    renderApps();
  });
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
  updateFamilySnapshot();
  updateBackupSummary();
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

function openBackupCenter() {
  updateBackupSummary();
  setBackupStatus("backupStatusIdle");
  document.getElementById("backupModal")?.classList.add("open");
}

function closeBackupCenter() {
  document.getElementById("backupModal")?.classList.remove("open");
}

function initBackupCenter() {
  document.getElementById("openBackupButton")?.addEventListener("click", openBackupCenter);
  document.getElementById("heroBackupButton")?.addEventListener("click", openBackupCenter);
  document.getElementById("backupCloseButton")?.addEventListener("click", closeBackupCenter);
  document.getElementById("backupImportButton")?.addEventListener("click", () => {
    document.getElementById("backupFileInput")?.click();
  });
  document.getElementById("backupExportButton")?.addEventListener("click", async () => {
    try {
      await exportFamilyBackup();
    } catch (error) {
      console.error("Backup export failed", error);
      setBackupStatus("backupStatusError");
    }
  });
  document.getElementById("backupFileInput")?.addEventListener("change", async (event) => {
    const input = event.currentTarget;
    const file = input?.files?.[0];
    if (!file) return;
    try {
      await restoreFamilyBackup(file);
    } catch (error) {
      console.error("Backup restore failed", error);
      setBackupStatus(error?.message === "invalid-backup" ? "backupStatusInvalid" : "backupStatusError");
    } finally {
      input.value = "";
    }
  });
  document.getElementById("backupModal")?.addEventListener("click", (event) => {
    if (event.target?.id === "backupModal") closeBackupCenter();
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
    let refreshing = false;
    window.addEventListener("load", () => {
      if (window.__sathiSwManaged) return;
      window.__sathiSwManaged = true;

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });

      navigator.serviceWorker.register(`${HUB_BASE}/sw.js`, { updateViaCache: "none" }).then((registration) => {
        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              worker.postMessage({ type: "SKIP_WAITING" });
            }
          });
        });
        registration.update().catch(() => {});

        const refreshInstalledShell = () => registration.update().catch(() => {});
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") refreshInstalledShell();
        });
        window.addEventListener("focus", refreshInstalledShell);
      }).catch(() => {});
    });
  }

  window.addEventListener("storage", (event) => {
    if (!event.key) return;
    if (event.key.startsWith(STORAGE.installMarkerPrefix)) {
      renderInstallCenter();
      renderApps();
      return;
    }
    if (event.key.startsWith("sathi-last-opened-")) {
      renderRecentApps();
      renderFamilyHighlights();
      renderRecommendedApps(getFilteredApps());
      return;
    }
    if (event.key === "aapka-sathi-last-backup-at") {
      updateBackupSummary();
      renderFamilyHighlights();
    }
  });

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
  initDiscoveryControls();
  initInstallCenter();
  initBackupCenter();
  initPwa();
  initNotifications();
  initFeedback();
  await initFamilyAuth();
  await renderApps();
  updateBackupSummary();
});
