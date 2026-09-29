// ─── SENAR i18n translations ─────────────────────────────────────────────────
// Supports 8 Languages: English (en) · Hindi (hi) · Marathi (mr) · Bengali (bn) 
// Odia (or) · Santali (sat) · Telugu (te) · Punjabi (pa)

export type LangCode = "en" | "hi" | "mr" | "bn" | "or" | "sat" | "te" | "pa";

export interface Lang {
  code: LangCode;
  label: string;       // native name
  labelEn: string;     // English name for display
  flag: string;
}

export const LANGUAGES: Lang[] = [
  { code: "en",  label: "English",  labelEn: "English",    flag: "🇬🇧" },
  { code: "hi",  label: "हिंदी",    labelEn: "Hindi",      flag: "🇮🇳" },
  { code: "mr",  label: "मराठी",    labelEn: "Marathi",    flag: "🇮🇳" },
  { code: "bn",  label: "বাংলা",    labelEn: "Bengali",    flag: "🇮🇳" },
  { code: "or",  label: "ଓଡ଼ିଆ",   labelEn: "Odia",       flag: "🇮🇳" },
  { code: "sat", label: "ᱥᱟᱱᱛᱟᱲᱤ", labelEn: "Santali",    flag: "🇮🇳" },
  { code: "te",  label: "తెలుగు",   labelEn: "Telugu",     flag: "🇮🇳" },
  { code: "pa",  label: "ਪੰਜਾਬੀ",  labelEn: "Punjabi",    flag: "🇮🇳" },
];

// ─── Translation keys ─────────────────────────────────────────────────────────
export interface Translations {
  // App
  appName: string;
  appSubtitle: string;

  // Auth
  worker: string;
  supervisor: string;
  workerId: string;
  supervisorId: string;
  password: string;
  signIn: string;
  signOut: string;
  invalidCreds: string;
  fillFields: string;
  demo: string;
  arPowered: string;
  googleSignIn: string;
  googleDemoNote: string;
  forgotPassword: string;
  agreeTermsNotice: string;
  and: string;

  // reCAPTCHA & Cookies
  notRobot: string;
  verifiedCaptcha: string;
  recaptchaSecurity: string;
  cookieNotice: string;
  acceptCookies: string;
  cookiePreferences: string;

  // Legal & Support
  termsConditions: string;
  privacyPolicy: string;
  cookiePolicy: string;
  refundPolicy: string;
  support: string;
  plansPayment: string;
  legalAndPolicies: string;

  // Greetings
  goodMorning: string;
  goodAfternoon: string;
  goodEvening: string;

  // Nav
  home: string;
  modules: string;
  certificates: string;
  profile: string;
  scan: string;

  // Home
  trainingProgress: string;
  modulesOf: string;
  passed: string;
  pending: string;
  locked: string;
  viewAll: string;
  recentActivity: string;
  synced: string;
  offline: string;
  siteCameraMonitor: string;
  workersOnSite: string;
  verifyAll: string;
  startCamera: string;
  stopCamera: string;
  cameraHint: string;

  // Modules
  availableModules: string;
  searchModules: string;
  all: string;
  failed: string;
  required: string;
  start: string;
  retry: string;
  redo: string;
  duration: string;
  attempts: string;

  // Localized Module Names
  moduleFireName: string;
  moduleFireDesc: string;
  moduleElecName: string;
  moduleElecDesc: string;
  moduleChemName: string;
  moduleChemDesc: string;
  moduleMechName: string;
  moduleMechDesc: string;
  moduleFallName: string;
  moduleFallDesc: string;

  // Training
  scenario: string;
  instruction: string;
  passMark: string;
  quiz: string;
  launchAR: string;
  knowledgeCheck: string;
  simulationPassed: string;
  notPassed: string;
  certWillBeIssued: string;
  reviewAndRetry: string;
  practicalScore: string;
  theoryScore: string;
  finalScore: string;
  timeTaken: string;
  viewCertificate: string;
  returnHome: string;
  retryModule: string;
  syncingToServer: string;
  arTrackingActive: string;
  targetDetected: string;
  actionCompleted: string;
  exit: string;
  questionOf: string;
  phase: string;
  briefing: string;

  // Certificates
  myCertificates: string;
  noCertificates: string;
  noCertDesc: string;
  browseModules: string;
  certId: string;
  issued: string;
  expires: string;
  score: string;
  valid: string;
  expired: string;
  showQR: string;
  hideQR: string;
  share: string;
  download: string;
  scanToVerify: string;

  // Profile
  myProfile: string;
  attemptCount: string;
  passRate: string;
  certsEarned: string;
  settings: string;
  language: string;
  notifications: string;
  trainingReminders: string;
  syncData: string;
  uploadPending: string;
  allSynced: string;
  syncing: string;
  attemptHistory: string;
  complianceStatus: string;
  notCompliant: string;
  compliant: string;

  // Admin
  adminDashboard: string;
  supervisorPanel: string;
  totalSynced: string;
  needRetraining: string;
  modulePassRates: string;
  liveSyncQueue: string;
  overallCompliance: string;
  workersCleared: string;
  connectingToServer: string;

  // QR Scan
  scanTitle: string;
  scanSubtitle: string;
  scanInstruction: string;
  orEnterManually: string;
  workerIdPlaceholder: string;
  verifyCertificate: string;
  verifying: string;
  verifiedRecord: string;
  authenticCertificate: string;
  noRecord: string;
  trainingModule: string;
  status: string;
  date: string;
  scanAgain: string;
}

// ─── ENGLISH ─────────────────────────────────────────────────────────────────
const en: Translations = {
  appName: "SENAR",
  appSubtitle: "Industrial Safety Training · Jharkhand",
  worker: "Worker",
  supervisor: "Supervisor",
  workerId: "Worker ID",
  supervisorId: "Supervisor ID",
  password: "Password",
  signIn: "Sign In",
  signOut: "Sign Out",
  invalidCreds: "Invalid credentials. Check your ID and password.",
  fillFields: "Please fill all fields.",
  demo: "Demo",
  arPowered: "AR-powered · Offline-first · SIH 2026",
  googleSignIn: "Continue with Google",
  googleDemoNote: "One-click Google Demo Login",
  forgotPassword: "Forgot Password?",
  agreeTermsNotice: "By signing in, you agree to our",
  and: "and",

  notRobot: "I'm not a robot",
  verifiedCaptcha: "Verification Passed",
  recaptchaSecurity: "reCAPTCHA Protection",
  cookieNotice: "We use essential security cookies for worker authentication & offline state.",
  acceptCookies: "Accept All",
  cookiePreferences: "Cookie Policy",

  termsConditions: "Terms & Conditions",
  privacyPolicy: "Privacy Policy",
  cookiePolicy: "Cookie Policy",
  refundPolicy: "Refund & Concessions",
  support: "Help & Support",
  plansPayment: "Plans & Billing",
  legalAndPolicies: "Legal, Security & Support",

  goodMorning: "Good morning",
  goodAfternoon: "Good afternoon",
  goodEvening: "Good evening",

  home: "Home",
  modules: "Modules",
  certificates: "Certs",
  profile: "Profile",
  scan: "Scan",

  trainingProgress: "Training Progress",
  modulesOf: "modules passed",
  passed: "Passed",
  pending: "Pending",
  locked: "Locked",
  viewAll: "View all",
  recentActivity: "Recent Activity",
  synced: "Synced",
  offline: "Offline",
  siteCameraMonitor: "Site Camera Monitor",
  workersOnSite: "Workers On Site",
  verifyAll: "Verify All",
  startCamera: "Start",
  stopCamera: "Stop",
  cameraHint: "Tap Start to monitor your work site in real time.",

  availableModules: "modules available",
  searchModules: "Search modules…",
  all: "All",
  failed: "Failed",
  required: "Required",
  start: "Start",
  retry: "Retry",
  redo: "Redo",
  duration: "Duration",
  attempts: "attempt",

  moduleFireName: "Fire & Explosion Safety",
  moduleFireDesc: "Identify fire hazards, operate extinguishers, execute emergency evacuations in AR.",
  moduleElecName: "Electrical Hazard Control",
  moduleElecDesc: "Recognise live circuits, apply lockout-tagout (LOTO) procedures, use insulated PPE.",
  moduleChemName: "Chemical Exposure & PPE",
  moduleChemDesc: "Handle hazardous chemicals, read MSDS sheets, don correct personal protective equipment.",
  moduleMechName: "Machine Guard & Lockout",
  moduleMechDesc: "Safely interact with industrial machinery and understand safety interlocks.",
  moduleFallName: "Fall Prevention & Harness",
  moduleFallDesc: "Practice working at heights with proper harness fitting and anchor point assessment.",

  scenario: "Scenario",
  instruction: "Instruction",
  passMark: "Pass Mark",
  quiz: "Quiz",
  launchAR: "Launch AR Simulation",
  knowledgeCheck: "Knowledge Check",
  simulationPassed: "Simulation Passed!",
  notPassed: "Not Passed",
  certWillBeIssued: "Certificate will be issued",
  reviewAndRetry: "Review material and retry",
  practicalScore: "Practical Score",
  theoryScore: "Theory Score",
  finalScore: "Final Score",
  timeTaken: "Time Taken",
  viewCertificate: "View Certificate",
  returnHome: "Return to Home",
  retryModule: "Retry Module",
  syncingToServer: "Syncing to server…",
  arTrackingActive: "AR ACTIVE",
  targetDetected: "Target Detected",
  actionCompleted: "Completed!",
  exit: "Exit",
  questionOf: "of",
  phase: "Phase",
  briefing: "Briefing",

  myCertificates: "My Certificates",
  noCertificates: "No Certificates Yet",
  noCertDesc: "Complete a training module to earn your first certificate.",
  browseModules: "Browse Modules",
  certId: "Cert ID",
  issued: "Issued",
  expires: "Expires",
  score: "Score",
  valid: "VALID",
  expired: "EXPIRED",
  showQR: "Show Verification QR",
  hideQR: "Hide QR",
  share: "Share",
  download: "Download",
  scanToVerify: "Scan to verify authenticity",

  myProfile: "My Profile",
  attemptCount: "Attempts",
  passRate: "Pass Rate",
  certsEarned: "Certs",
  settings: "Settings",
  language: "Language",
  notifications: "Notifications",
  trainingReminders: "Training reminders",
  syncData: "Sync Data",
  uploadPending: "Upload pending attempts",
  allSynced: "✓ All synced",
  syncing: "Syncing…",
  attemptHistory: "Attempt History",
  complianceStatus: "Compliance Status",
  notCompliant: "Not yet compliant",
  compliant: "Compliant",

  adminDashboard: "Admin Dashboard",
  supervisorPanel: "Supervisor Panel",
  totalSynced: "Total Synced",
  needRetraining: "Need Retraining",
  modulePassRates: "Module Pass Rates",
  liveSyncQueue: "Live Sync Queue",
  overallCompliance: "Overall Compliance",
  workersCleared: "workers cleared",
  connectingToServer: "Connecting to server…",

  scanTitle: "Scan Certificate",
  scanSubtitle: "Verify worker safety credentials instantly",
  scanInstruction: "Point camera at the QR code on a safety certificate",
  orEnterManually: "Or enter Worker ID manually",
  workerIdPlaceholder: "e.g. EMP-SIH26041",
  verifyCertificate: "Verify Certificate",
  verifying: "Verifying…",
  verifiedRecord: "Verified Record",
  authenticCertificate: "Authentic Certificate",
  noRecord: "No record found for this worker ID.",
  trainingModule: "Training Module",
  status: "Status",
  date: "Date",
  scanAgain: "Scan Again",
};

// ─── HINDI (हिंदी) ────────────────────────────────────────────────────────────
const hi: Translations = {
  appName: "सेनार",
  appSubtitle: "औद्योगिक सुरक्षा प्रशिक्षण · झारखण्ड",
  worker: "कर्मचारी",
  supervisor: "पर्यवेक्षक",
  workerId: "कर्मचारी आईडी",
  supervisorId: "पर्यवेक्षक आईडी",
  password: "पासवर्ड",
  signIn: "साइन इन",
  signOut: "साइन आउट",
  invalidCreds: "गलत जानकारी। अपना आईडी और पासवर्ड जाँचें।",
  fillFields: "कृपया सभी फ़ील्ड भरें।",
  demo: "डेमो",
  arPowered: "AR-संचालित · ऑफलाइन-प्रथम · SIH 2026",
  googleSignIn: "Google से आगे बढ़ें",
  googleDemoNote: "एक-क्लिक Google डेमो लॉगिन",
  forgotPassword: "पासवर्ड भूल गए?",
  agreeTermsNotice: "साइन इन करके आप हमारी शर्तों से सहमत होते हैं",
  and: "और",

  notRobot: "मैं रोबोट नहीं हूँ",
  verifiedCaptcha: "सत्यापन सफल",
  recaptchaSecurity: "reCAPTCHA सुरक्षा",
  cookieNotice: "हम कर्मचारी प्रमाणीकरण और सुरक्षा के लिए आवश्यक कुकीज़ का उपयोग करते हैं।",
  acceptCookies: "सभी स्वीकार करें",
  cookiePreferences: "कुकी नीति",

  termsConditions: "नियम एवं शर्तें",
  privacyPolicy: "गोपनीयता नीति",
  cookiePolicy: "कुकी नीति",
  refundPolicy: "वापसी एवं छूट",
  support: "सहायता एवं समर्थन",
  plansPayment: "योजनाएं एवं भुगतान",
  legalAndPolicies: "कानूनी, सुरक्षा एवं सहायता",

  goodMorning: "सुप्रभात",
  goodAfternoon: "शुभ दोपहर",
  goodEvening: "शुभ संध्या",

  home: "होम",
  modules: "मॉड्यूल",
  certificates: "प्रमाणपत्र",
  profile: "प्रोफ़ाइल",
  scan: "स्कैन",

  trainingProgress: "प्रशिक्षण प्रगति",
  modulesOf: "मॉड्यूल पास किए",
  passed: "उत्तीर्ण",
  pending: "लंबित",
  locked: "बंद",
  viewAll: "सभी देखें",
  recentActivity: "हाल की गतिविधि",
  synced: "सिंक्ड",
  offline: "ऑफलाइन",
  siteCameraMonitor: "साइट कैमरा मॉनिटर",
  workersOnSite: "कार्यस्थल पर कर्मचारी",
  verifyAll: "सभी सत्यापित करें",
  startCamera: "शुरू करें",
  stopCamera: "रोकें",
  cameraHint: "वास्तविक समय में कार्यस्थल देखने के लिए 'शुरू करें' दबाएं।",

  availableModules: "मॉड्यूल उपलब्ध",
  searchModules: "मॉड्यूल खोजें…",
  all: "सभी",
  failed: "असफल",
  required: "अनिवार्य",
  start: "शुरू",
  retry: "पुनः प्रयास",
  redo: "दोबारा",
  duration: "अवधि",
  attempts: "प्रयास",

  moduleFireName: "अग्नि और विस्फोट सुरक्षा",
  moduleFireDesc: "आग के खतरों को पहचानें, अग्निशामक यंत्र चलाएं, आपातकालीन निकास सीखें।",
  moduleElecName: "विद्युत खतरा नियंत्रण",
  moduleElecDesc: "चालू सर्किट पहचानें, लॉकआउट-टैगआउट (LOTO) प्रक्रिया अपनाएं।",
  moduleChemName: "रासायनिक सुरक्षा एवं PPE",
  moduleChemDesc: "खतरनाक रसायनों का प्रबंधन करें, सही सुरक्षात्मक उपकरण पहनें।",
  moduleMechName: "मशीनरी सुरक्षा एवं गार्डिंग",
  moduleMechDesc: "औद्योगिक मशीनों के साथ सुरक्षित कार्य और सुरक्षा इंटरलॉक को समझें।",
  moduleFallName: "ऊंचाई से सुरक्षा एवं हार्नेस",
  moduleFallDesc: "ऊंचाई पर काम करते समय सुरक्षा बेल्ट और एंकर पॉइंट का सही उपयोग।",

  scenario: "परिदृश्य",
  instruction: "निर्देश",
  passMark: "उत्तीर्ण अंक",
  quiz: "प्रश्नोत्तरी",
  launchAR: "AR सिमुलेशन लॉन्च करें",
  knowledgeCheck: "ज्ञान जाँच",
  simulationPassed: "सिमुलेशन उत्तीर्ण!",
  notPassed: "उत्तीर्ण नहीं",
  certWillBeIssued: "प्रमाणपत्र जारी किया जाएगा",
  reviewAndRetry: "सामग्री समीक्षा करें और पुनः प्रयास करें",
  practicalScore: "व्यावहारिक अंक",
  theoryScore: "सैद्धांतिक अंक",
  finalScore: "अंतिम अंक",
  timeTaken: "लिया गया समय",
  viewCertificate: "प्रमाणपत्र देखें",
  returnHome: "होम पर वापस जाएं",
  retryModule: "मॉड्यूल पुनः प्रयास करें",
  syncingToServer: "सर्वर से सिंक हो रहा है…",
  arTrackingActive: "AR सक्रिय",
  targetDetected: "लक्ष्य पहचाना",
  actionCompleted: "पूर्ण!",
  exit: "बाहर",
  questionOf: "में से",
  phase: "चरण",
  briefing: "ब्रीफिंग",

  myCertificates: "मेरे प्रमाणपत्र",
  noCertificates: "अभी तक कोई प्रमाणपत्र नहीं",
  noCertDesc: "अपना पहला प्रमाणपत्र अर्जित करने के लिए प्रशिक्षण पूरा करें।",
  browseModules: "मॉड्यूल देखें",
  certId: "प्रमाण आईडी",
  issued: "जारी",
  expires: "समाप्ति",
  score: "अंक",
  valid: "वैध",
  expired: "समाप्त",
  showQR: "सत्यापन QR दिखाएं",
  hideQR: "QR छुपाएं",
  share: "साझा करें",
  download: "डाउनलोड",
  scanToVerify: "प्रामाणिकता सत्यापित करने के लिए स्कैन करें",

  myProfile: "मेरी प्रोफ़ाइल",
  attemptCount: "प्रयास",
  passRate: "पास दर",
  certsEarned: "प्रमाण",
  settings: "सेटिंग्स",
  language: "भाषा",
  notifications: "सूचनाएं",
  trainingReminders: "प्रशिक्षण रिमाइंडर",
  syncData: "डेटा सिंक करें",
  uploadPending: "लंबित प्रयास अपलोड करें",
  allSynced: "✓ सब सिंक हुआ",
  syncing: "सिंक हो रहा है…",
  attemptHistory: "प्रयास इतिहास",
  complianceStatus: "अनुपालन स्थिति",
  notCompliant: "अभी अनुपालन नहीं",
  compliant: "अनुपालित",

  adminDashboard: "एडमिन डैशबोर्ड",
  supervisorPanel: "पर्यवेक्षक पैनल",
  totalSynced: "कुल सिंक",
  needRetraining: "पुनः प्रशिक्षण चाहिए",
  modulePassRates: "मॉड्यूल पास दर",
  liveSyncQueue: "लाइव सिंक कतार",
  overallCompliance: "कुल अनुपालन",
  workersCleared: "कर्मचारी उत्तीर्ण",
  connectingToServer: "सर्वर से जुड़ रहे हैं…",

  scanTitle: "प्रमाणपत्र स्कैन करें",
  scanSubtitle: "कर्मचारी सुरक्षा प्रमाण-पत्र तुरंत सत्यापित करें",
  scanInstruction: "सुरक्षा प्रमाणपत्र पर QR कोड पर कैमरा इंगित करें",
  orEnterManually: "या कर्मचारी आईडी मैन्युअली दर्ज करें",
  workerIdPlaceholder: "जैसे EMP-SIH26041",
  verifyCertificate: "प्रमाणपत्र सत्यापित करें",
  verifying: "सत्यापित हो रहा है…",
  verifiedRecord: "सत्यापित रिकॉर्ड",
  authenticCertificate: "प्रामाणिक प्रमाणपत्र",
  noRecord: "इस कर्मचारी आईडी के लिए कोई रिकॉर्ड नहीं मिला।",
  trainingModule: "प्रशिक्षण मॉड्यूल",
  status: "स्थिति",
  date: "तारीख",
  scanAgain: "फिर स्कैन करें",
};

// ─── MARATHI (मराठी) ──────────────────────────────────────────────────────────
const mr: Translations = {
  appName: "सेनार",
  appSubtitle: "औद्योगिक सुरक्षा प्रशिक्षण · झारखंड",
  worker: "कामगार",
  supervisor: "पर्यवेक्षक",
  workerId: "कामगार आयडी",
  supervisorId: "पर्यवेक्षक आयडी",
  password: "पासवर्ड",
  signIn: "साइन इन",
  signOut: "साइन आउट",
  invalidCreds: "चुकीची माहिती. तुमची आयडी आणि पासवर्ड तपासा.",
  fillFields: "कृपया सर्व फील्ड भरा.",
  demo: "डेमो",
  arPowered: "AR-चालित · ऑफलाइन-प्रथम · SIH 2026",
  googleSignIn: "Google सह पुढे जा",
  googleDemoNote: "एक-क्लिक Google डेमो लॉगिन",
  forgotPassword: "पासवर्ड विसरलात?",
  agreeTermsNotice: "साइन इन करून तुम्ही आमच्या अटी मान्य करता",
  and: "आणि",

  notRobot: "मी रोबोट नाही",
  verifiedCaptcha: "सत्यापन पूर्ण झाले",
  recaptchaSecurity: "reCAPTCHA सुरक्षा",
  cookieNotice: "कामगार प्रमाणीकरण आणि सुरक्षिततेसाठी आम्ही आवश्यक कुकीज वापरतो.",
  acceptCookies: "सर्व स्वीकारा",
  cookiePreferences: "कुकी धोरण",

  termsConditions: "नियम व अटी",
  privacyPolicy: "गोपनीयता धोरण",
  cookiePolicy: "कुकी धोरण",
  refundPolicy: "परतावा व सवलती",
  support: "मदत व सहकार्य",
  plansPayment: "योजना व बिलिंग",
  legalAndPolicies: "कायदेशीर, सुरक्षा व मदत",

  goodMorning: "शुभ प्रभात",
  goodAfternoon: "शुभ दुपार",
  goodEvening: "शुभ संध्याकाळ",

  home: "मुख्यपृष्ठ",
  modules: "मॉड्युल्स",
  certificates: "प्रमाणपत्रे",
  profile: "प्रोफाइल",
  scan: "स्कॅन",

  trainingProgress: "प्रशिक्षण प्रगती",
  modulesOf: "मॉड्युल्स उत्तीर्ण",
  passed: "उत्तीर्ण",
  pending: "प्रलंबित",
  locked: "बंद",
  viewAll: "सर्व पाहा",
  recentActivity: "अलीकडील क्रियाकलाप",
  synced: "सिंक्ड",
  offline: "ऑफलाइन",
  siteCameraMonitor: "साइट कॅमेरा मॉनिटर",
  workersOnSite: "कामावर उपस्थित कामगार",
  verifyAll: "सर्व सत्यापित करा",
  startCamera: "सुरू करा",
  stopCamera: "थांबवा",
  cameraHint: "थेट कामाची जागा पाहण्यासाठी 'सुरू करा' दाबा.",

  availableModules: "मॉड्युल्स उपलब्ध",
  searchModules: "मॉड्युल्स शोधा…",
  all: "सर्व",
  failed: "अनुत्तीर्ण",
  required: "अनिवार्य",
  start: "सुरू करा",
  retry: "पुन्हा प्रयत्न",
  redo: "पुन्हा करा",
  duration: "कालावधी",
  attempts: "प्रयत्न",

  moduleFireName: "अग्नी आणि स्फोट सुरक्षा",
  moduleFireDesc: "आगीचे धोके ओळखा, अग्निशामक चालवा आणि आपत्कालीन बाहेर पडण्याची पद्धत शिका.",
  moduleElecName: "विद्युत धोका नियंत्रण",
  moduleElecDesc: "विद्युत प्रवाह ओळखा, LOTO प्रक्रिया वापरा, सुरक्षा साधने वापरा.",
  moduleChemName: "रासायनिक सुरक्षा व PPE",
  moduleChemDesc: "धोकादायक रसायने हाताळा, योग्य सुरक्षात्मक पोशाख परिधान करा.",
  moduleMechName: "यंत्रसामग्री सुरक्षा व लॉकआउट",
  moduleMechDesc: "कारखान्यातील यंत्रांशी सुरक्षित संवाद आणि सेफ्टी इंटरलॉक्स समजून घ्या.",
  moduleFallName: "उंचीवरून पडणे प्रतिबंध",
  moduleFallDesc: "योग्य हार्नेस आणि अँकर पॉईंटसह उंचावर सुरक्षित काम करण्याचा सराव.",

  scenario: "परिस्थिती",
  instruction: "सूचना",
  passMark: "उत्तीर्ण गुण",
  quiz: "प्रश्नमंजुषा",
  launchAR: "AR सिम्युलेशन सुरू करा",
  knowledgeCheck: "ज्ञान तपासणी",
  simulationPassed: "सिम्युलेशन उत्तीर्ण!",
  notPassed: "उत्तीर्ण नाही",
  certWillBeIssued: "प्रमाणपत्र दिले जाईल",
  reviewAndRetry: "सामग्री पुन्हा वाचा आणि प्रयत्न करा",
  practicalScore: "व्यावहारिक गुण",
  theoryScore: "सैद्धांतिक गुण",
  finalScore: "अंतिम गुण",
  timeTaken: "वेळ घेतला",
  viewCertificate: "प्रमाणपत्र पाहा",
  returnHome: "मुख्यपृष्ठावर परत",
  retryModule: "मॉड्युल पुन्हा करा",
  syncingToServer: "सर्व्हरशी सिंक होत आहे…",
  arTrackingActive: "AR सक्रिय",
  targetDetected: "लक्ष्य सापडले",
  actionCompleted: "पूर्ण!",
  exit: "बाहेर",
  questionOf: "पैकी",
  phase: "टप्पा",
  briefing: "माहिती",

  myCertificates: "माझी प्रमाणपत्रे",
  noCertificates: "अद्याप प्रमाणपत्र नाही",
  noCertDesc: "पहिले प्रमाणपत्र मिळवण्यासाठी प्रशिक्षण पूर्ण करा.",
  browseModules: "मॉड्युल पाहा",
  certId: "प्रमाण आयडी",
  issued: "दिलेले",
  expires: "समाप्ती",
  score: "गुण",
  valid: "वैध",
  expired: "समाप्त",
  showQR: "सत्यापन QR दाखवा",
  hideQR: "QR लपवा",
  share: "शेअर करा",
  download: "डाउनलोड",
  scanToVerify: "सत्यापनासाठी स्कॅन करा",

  myProfile: "माझी प्रोफाइल",
  attemptCount: "प्रयत्न",
  passRate: "उत्तीर्ण दर",
  certsEarned: "प्रमाणे",
  settings: "सेटिंग्ज",
  language: "भाषा",
  notifications: "सूचना",
  trainingReminders: "प्रशिक्षण स्मरणपत्र",
  syncData: "डेटा सिंक करा",
  uploadPending: "प्रलंबित प्रयत्न अपलोड करा",
  allSynced: "✓ सर्व सिंक झाले",
  syncing: "सिंक होत आहे…",
  attemptHistory: "प्रयत्न इतिहास",
  complianceStatus: "अनुपालन स्थिती",
  notCompliant: "अद्याप अनुपालित नाही",
  compliant: "अनुपालित",

  adminDashboard: "प्रशासक डॅशबोर्ड",
  supervisorPanel: "पर्यवेक्षक पॅनेल",
  totalSynced: "एकूण सिंक",
  needRetraining: "पुनः प्रशिक्षण आवश्यक",
  modulePassRates: "मॉड्युल उत्तीर्ण दर",
  liveSyncQueue: "थेट सिंक रांग",
  overallCompliance: "एकूण अनुपालन",
  workersCleared: "कामगार उत्तीर्ण",
  connectingToServer: "सर्व्हरशी जोडत आहे…",

  scanTitle: "प्रमाणपत्र स्कॅन करा",
  scanSubtitle: "कामगार सुरक्षा क्रेडेन्शियल त्वरित सत्यापित करा",
  scanInstruction: "सुरक्षा प्रमाणपत्रावरील QR कोडवर कॅमेरा दाखवा",
  orEnterManually: "किंवा कामगार आयडी मॅन्युअली प्रविष्ट करा",
  workerIdPlaceholder: "उदा. EMP-SIH26041",
  verifyCertificate: "प्रमाणपत्र सत्यापित करा",
  verifying: "सत्यापित होत आहे…",
  verifiedRecord: "सत्यापित रेकॉर्ड",
  authenticCertificate: "प्रामाणिक प्रमाणपत्र",
  noRecord: "या कामगार आयडीसाठी कोणताही रेकॉर्ड सापडला नाही.",
  trainingModule: "प्रशिक्षण मॉड्युल",
  status: "स्थिती",
  date: "तारीख",
  scanAgain: "पुन्हा स्कॅन करा",
};

// ─── BENGALI (বাংলা) ──────────────────────────────────────────────────────────
const bn: Translations = {
  appName: "সেনার",
  appSubtitle: "শিল্প নিরাপত্তা প্রশিক্ষণ · ঝাড়খণ্ড",
  worker: "শ্রমিক",
  supervisor: "পর্যবেক্ষক",
  workerId: "শ্রমিক আইডি",
  supervisorId: "পর্যবেক্ষক আইডি",
  password: "পাসওয়ার্ড",
  signIn: "সাইন ইন",
  signOut: "সাইন আউট",
  invalidCreds: "ভুল তথ্য। আপনার আইডি এবং পাসওয়ার্ড যাচাই করুন।",
  fillFields: "সমস্ত ক্ষেত্র পূরণ করুন।",
  demo: "ডেমো",
  arPowered: "AR-চালিত · অফলাইন-প্রথম · SIH 2026",
  googleSignIn: "Google দিয়ে এগিয়ে যান",
  googleDemoNote: "এক ক্লিকে Google ডেমো লগইন",
  forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?",
  agreeTermsNotice: "সাইন ইন করে আপনি আমাদের শর্তাবলীতে সম্মতি দিচ্ছেন",
  and: "এবং",

  notRobot: "আমি রোবট নই",
  verifiedCaptcha: "যাচাই সম্পন্ন হয়েছে",
  recaptchaSecurity: "reCAPTCHA নিরাপত্তা",
  cookieNotice: "কর্মী প্রমাণীকরণ ও অফলাইন সুরক্ষার জন্য আমরা প্রয়োজনীয় কুকিজ ব্যবহার করি।",
  acceptCookies: "সব গ্রহণ করুন",
  cookiePreferences: "কুকি নীতি",

  termsConditions: "নিয়ম ও শর্তাবলী",
  privacyPolicy: "গোপনীয়তা নীতি",
  cookiePolicy: "কুকি নীতি",
  refundPolicy: "রিফান্ড ও ছাড় নীতি",
  support: "সহায়তা ও সাপোর্ট",
  plansPayment: "প্ল্যান ও বিলিং",
  legalAndPolicies: "আইনি, নিরাপত্তা ও সহায়তা",

  goodMorning: "শুভ সকাল",
  goodAfternoon: "শুভ দুপুর",
  goodEvening: "শুভ সন্ধ্যা",

  home: "হোম",
  modules: "মডিউল",
  certificates: "সার্টিফিকেট",
  profile: "প্রোফাইল",
  scan: "স্ক্যান",

  trainingProgress: "প্রশিক্ষণ অগ্রগতি",
  modulesOf: "মডিউল পাস",
  passed: "পাস",
  pending: "মুলতুবি",
  locked: "লক",
  viewAll: "সব দেখুন",
  recentActivity: "সাম্প্রতিক কার্যক্রম",
  synced: "সিঙ্কড",
  offline: "অফলাইন",
  siteCameraMonitor: "সাইট ক্যামেরা মনিটর",
  workersOnSite: "সাইটে উপস্থিত শ্রমিক",
  verifyAll: "সব যাচাই করুন",
  startCamera: "শুরু করুন",
  stopCamera: "থামান",
  cameraHint: "কাজের স্থান রিয়েল-টাইমে পর্যবেক্ষণ করতে 'শুরু করুন' চাপুন।",

  availableModules: "মডিউল পাওয়া যাচ্ছে",
  searchModules: "মডিউল খুঁজুন…",
  all: "সব",
  failed: "ব্যর্থ",
  required: "আবশ্যিক",
  start: "শুরু",
  retry: "পুনরায় চেষ্টা",
  redo: "আবার করুন",
  duration: "সময়কাল",
  attempts: "প্রচেষ্টা",

  moduleFireName: "আগুন ও বিস্ফোরণ নিরাপত্তা",
  moduleFireDesc: "আগুনের ঝুঁকি শনাক্ত করুন, অগ্নিনির্বাপক ব্যবহার ও জরুরি নির্গমন শিখুন।",
  moduleElecName: "বৈদ্যুতিক ঝুঁকি নিয়ন্ত্রণ",
  moduleElecDesc: "লাইভ তার চেনা, LOTO পদ্ধতি প্রয়োগ এবং নিরোধক PPE ব্যবহার।",
  moduleChemName: "রাসায়নিক এক্সপোজার ও PPE",
  moduleChemDesc: "বিপজ্জনক রাসায়নিক পরিচালনা এবং সুরক্ষামূলক সামগ্রী পরা।",
  moduleMechName: "যন্ত্রপাতি সুরক্ষা ও লকআউট",
  moduleMechDesc: "কারখানার যন্ত্রপাতির সাথে নিরাপদ মিথস্ক্রিয়া এবং সেফটি ইন্টারলক।",
  moduleFallName: "উচ্চতা থেকে পতন প্রতিরোধ",
  moduleFallDesc: "উঁচু স্থানে কাজের সময় উপযুক্ত জোতা ও নোঙ্গর পয়েন্ট ব্যবহারের অনুশীলন।",

  scenario: "দৃশ্যকল্প",
  instruction: "নির্দেশনা",
  passMark: "পাস নম্বর",
  quiz: "কুইজ",
  launchAR: "AR সিমুলেশন চালু করুন",
  knowledgeCheck: "জ্ঞান পরীক্ষা",
  simulationPassed: "সিমুলেশন পাস!",
  notPassed: "পাস হয়নি",
  certWillBeIssued: "সার্টিফিকেট দেওয়া হবে",
  reviewAndRetry: "উপকরণ পর্যালোচনা করুন এবং পুনরায় চেষ্টা করুন",
  practicalScore: "ব্যবহারিক নম্বর",
  theoryScore: "তাত্ত্বিক নম্বর",
  finalScore: "চূড়ান্ত নম্বর",
  timeTaken: "সময় লাগছে",
  viewCertificate: "সার্টিফিকেট দেখুন",
  returnHome: "হোমে ফিরুন",
  retryModule: "মডিউল পুনরায় করুন",
  syncingToServer: "সার্ভারে সিঙ্ক হচ্ছে…",
  arTrackingActive: "AR সক্রিয়",
  targetDetected: "লক্ষ্য শনাক্ত",
  actionCompleted: "সম্পন্ন!",
  exit: "বের হন",
  questionOf: "এর মধ্যে",
  phase: "ধাপ",
  briefing: "ব্রিফিং",

  myCertificates: "আমার সার্টিফিকেট",
  noCertificates: "এখনো কোনো সার্টিফিকেট নেই",
  noCertDesc: "প্রথম সার্টিফিকেট পেতে প্রশিক্ষণ সম্পন্ন করুন।",
  browseModules: "মডিউল দেখুন",
  certId: "সার্ট আইডি",
  issued: "জারি",
  expires: "মেয়াদ শেষ",
  score: "নম্বর",
  valid: "বৈধ",
  expired: "মেয়াদোত্তীর্ণ",
  showQR: "যাচাই QR দেখান",
  hideQR: "QR লুকান",
  share: "শেয়ার করুন",
  download: "ডাউনলোড",
  scanToVerify: "প্রামাণিকতা যাচাই করতে স্ক্যান করুন",

  myProfile: "আমার প্রোফাইল",
  attemptCount: "প্রচেষ্টা",
  passRate: "পাস হার",
  certsEarned: "সার্টিফিকেট",
  settings: "সেটিংস",
  language: "ভাষা",
  notifications: "বিজ্ঞপ্তি",
  trainingReminders: "প্রশিক্ষণ রিমাইন্ডার",
  syncData: "ডেটা সিঙ্ক করুন",
  uploadPending: "মুলতুবি প্রচেষ্টা আপলোড করুন",
  allSynced: "✓ সব সিঙ্ক হয়েছে",
  syncing: "সিঙ্ক হচ্ছে…",
  attemptHistory: "প্রচেষ্টার ইতিহাস",
  complianceStatus: "সম্মতির স্থিতি",
  notCompliant: "এখনো সম্মতি নেই",
  compliant: "সম্মতিযুক্ত",

  adminDashboard: "অ্যাডমিন ড্যাশবোর্ড",
  supervisorPanel: "পর্যবেক্ষক প্যানেল",
  totalSynced: "মোট সিঙ্কড",
  needRetraining: "পুনরায় প্রশিক্ষণ প্রয়োজন",
  modulePassRates: "মডিউল পাস হার",
  liveSyncQueue: "লাইভ সিঙ্ক কিউ",
  overallCompliance: "সামগ্রিক সম্মতি",
  workersCleared: "শ্রমিক উত্তীর্ণ",
  connectingToServer: "সার্ভারের সাথে সংযোগ হচ্ছে…",

  scanTitle: "সার্টিফিকেট স্ক্যান করুন",
  scanSubtitle: "শ্রমিক নিরাপত্তা সনদ তাৎক্ষণিক যাচাই করুন",
  scanInstruction: "নিরাপত্তা সার্টিফিকেটের QR কোডে ক্যামেরা নির্দেশ করুন",
  orEnterManually: "বা শ্রমিক আইডি ম্যানুয়ালি লিখুন",
  workerIdPlaceholder: "যেমন EMP-SIH26041",
  verifyCertificate: "সার্টিফিকেট যাচাই করুন",
  verifying: "যাচাই হচ্ছে…",
  verifiedRecord: "যাচাইকৃত রেকর্ড",
  authenticCertificate: "প্রামাণিক সার্টিফিকেট",
  noRecord: "এই শ্রমিক আইডির জন্য কোনো রেকর্ড পাওয়া যায়নি।",
  trainingModule: "প্রশিক্ষণ মডিউল",
  status: "স্থিতি",
  date: "তারিখ",
  scanAgain: "আবার স্ক্যান করুন",
};

// ─── ODIA (ଓଡ଼ିଆ) ────────────────────────────────────────────────────────────
const or: Translations = {
  appName: "ସେନାର",
  appSubtitle: "ଶିଳ୍ପ ସୁରକ୍ଷା ପ୍ରଶିକ୍ଷଣ · ଝାଡ଼ଖଣ୍ଡ",
  worker: "ଶ୍ରମିକ",
  supervisor: "ପରିଦର୍ଶକ",
  workerId: "ଶ୍ରମିକ ଆଇଡି",
  supervisorId: "ପରିଦର୍ଶକ ଆଇଡି",
  password: "ପାସୱାର୍ଡ",
  signIn: "ସାଇନ ଇନ",
  signOut: "ସାଇନ ଆଉଟ",
  invalidCreds: "ଭୁଲ ତଥ୍ୟ। ଆପଣଙ୍କ ଆଇଡି ଓ ପାସୱାର୍ଡ ଯାଞ୍ଚ କରନ୍ତୁ।",
  fillFields: "ଦୟାକରି ସମସ୍ତ ବିବରଣୀ ପୂରଣ କରନ୍ତୁ।",
  demo: "ଡେମୋ",
  arPowered: "AR-ଚାଳିତ · ଅଫଲାଇନ-ପ୍ରଥମ · SIH 2026",
  googleSignIn: "Google ସହିତ ଆଗକୁ ବଢ଼ନ୍ତୁ",
  googleDemoNote: "ଗୋଟିଏ କ୍ଲିକରେ Google ଡେମୋ ଲଗଇନ",
  forgotPassword: "ପାସୱାର୍ଡ ଭୁଲିଗଲେ କି?",
  agreeTermsNotice: "ସାଇନ ଇନ କରି ଆପଣ ଆମର ନିୟମାବଳୀ ଗ୍ରହଣ କରୁଛନ୍ତି",
  and: "ଓ",

  notRobot: "ମୁଁ ରୋବଟ ନୁହେଁ",
  verifiedCaptcha: "ଯାଞ୍ଚ ସଫଳ ହେଲା",
  recaptchaSecurity: "reCAPTCHA ସୁରକ୍ଷା",
  cookieNotice: "ଶ୍ରମିକ ପ୍ରମାଣୀକରଣ ଏବଂ ସୁରକ୍ଷା ପାଇଁ ଆମେ କୁକିଜ ବ୍ୟବହାର କରୁଛୁ।",
  acceptCookies: "ସମସ୍ତ ଗ୍ରହଣ କରନ୍ତୁ",
  cookiePreferences: "କୁକି ନୀତି",

  termsConditions: "ନିୟମ ଓ ସର୍ତ୍ତାବଳୀ",
  privacyPolicy: "ଗୋପନୀୟତା ନୀତି",
  cookiePolicy: "କୁକି ନୀତି",
  refundPolicy: "ଫେରସ୍ତ ଓ ରିହାତି",
  support: "ସାହାଯ୍ୟ ଓ ସମର୍ଥନ",
  plansPayment: "ଯୋଜନା ଓ ଦେୟ",
  legalAndPolicies: "ଆଇନଗତ, ସୁରକ୍ଷା ଓ ସାହାଯ୍ୟ",

  goodMorning: "ଶୁଭ ସକାଳ",
  goodAfternoon: "ଶୁଭ ଅପରାହ୍ନ",
  goodEvening: "ଶୁଭ ସଂଧ୍ୟା",

  home: "ମୁଖ୍ୟପୃଷ୍ଠା",
  modules: "ମଡ୍ୟୁଲଗୁଡ଼ିକ",
  certificates: "ପ୍ରମାଣପତ୍ର",
  profile: "ପ୍ରୋଫାଇଲ",
  scan: "ସ୍କାନ",

  trainingProgress: "ପ୍ରଶିକ୍ଷଣ ଅଗ୍ରଗତି",
  modulesOf: "ମଡ୍ୟୁଲ ଉତ୍ତୀର୍ଣ୍ଣ",
  passed: "ଉତ୍ତୀର୍ଣ୍ଣ",
  pending: "ବିଚାରାଧୀନ",
  locked: "ବନ୍ଦ",
  viewAll: "ସବୁ ଦେଖନ୍ତୁ",
  recentActivity: "ସାମ୍ପ୍ରତିକ କାର୍ଯ୍ୟକଳାପ",
  synced: "ସିଙ୍କ ହୋଇଛି",
  offline: "ଅଫଲାଇନ",
  siteCameraMonitor: "କାର୍ଯ୍ୟସ୍ଥଳ କ୍ୟାମେରା ମନିଟର",
  workersOnSite: "କାର୍ଯ୍ୟସ୍ଥଳରେ ଥିବା ଶ୍ରମିକ",
  verifyAll: "ସମସ୍ତ ଯାଞ୍ଚ କରନ୍ତୁ",
  startCamera: "ଆରମ୍ଭ କରନ୍ତୁ",
  stopCamera: "ବନ୍ଦ କରନ୍ତୁ",
  cameraHint: "କାର୍ଯ୍ୟସ୍ଥଳୀ ଦେଖିବା ପାଇଁ ଆରମ୍ଭ କରନ୍ତୁ ବଟନ ଦବାନ୍ତୁ।",

  availableModules: "ମଡ୍ୟୁଲ ଉପଲବ୍ଧ",
  searchModules: "ମଡ୍ୟୁଲ ଖୋଜନ୍ତୁ…",
  all: "ସବୁ",
  failed: "ଅସଫଳ",
  required: "ଆବଶ୍ୟକ",
  start: "ଆରମ୍ଭ",
  retry: "ପୁନଃ ପ୍ରୟାସ",
  redo: "ପୁନରାବୃତ୍ତି",
  duration: "ସମୟସୀମା",
  attempts: "ପ୍ରୟାସ",

  moduleFireName: "ଅଗ୍ନି ଓ ବିସ୍ଫୋରଣ ସୁରକ୍ଷା",
  moduleFireDesc: "ଅଗ୍ନି ବିପଦ ଚିହ୍ନଟ, ଅଗ୍ନିଶମ ଯନ୍ତ୍ର ବ୍ୟବହାର ଓ ଜରୁରୀକାଳୀନ ପ୍ରସ୍ଥାନ।",
  moduleElecName: "ବିଦ୍ୟୁତ ବିପଦ ନିୟନ୍ତ୍ରଣ",
  moduleElecDesc: "ବିଦ୍ୟୁତ ତାର ଚିହ୍ନିବା, LOTO ନିୟମ ପାଳନ ଓ ସୁରକ୍ଷିତ PPE ବ୍ୟବହାର।",
  moduleChemName: "ରାସାୟନିକ ସୁରକ୍ଷା ଓ PPE",
  moduleChemDesc: "ବିପଜ୍ଜନକ ରାସାୟନିକ ପଦାର୍ଥ ପରିଚାଳନା ଏବଂ ସୁରକ୍ଷା ଉପକରଣ।",
  moduleMechName: "ଯନ୍ତ୍ରପାତି ସୁରକ୍ଷା ଓ ଲକଆଉଟ",
  moduleMechDesc: "କଳକାରଖାନାର ମେସିନ ସହ ସୁରକ୍ଷିତ କାର୍ଯ୍ୟ ଏବଂ ଇଣ୍ଟରଲକ ବୁଝିବା।",
  moduleFallName: "ଉଚ୍ଚତାରୁ ଖସିବା ପ୍ରତିରୋଧ",
  moduleFallDesc: "ଉଚ୍ଚ ସ୍ଥାନରେ କାର୍ଯ୍ୟ କରିବା ବେଳେ ସୁରକ୍ଷା ବେଲ୍ଟର ଠିକ ବ୍ୟବହାର।",

  scenario: "ପରିସ୍ଥିତି",
  instruction: "ନିର୍ଦ୍ଦେଶ",
  passMark: "ଉତ୍ତୀର୍ଣ୍ଣ ନମ୍ବର",
  quiz: "ପ୍ରଶ୍ନୋତ୍ତର",
  launchAR: "AR ସିମୁଲେସନ ଆରମ୍ଭ କରନ୍ତୁ",
  knowledgeCheck: "ଜ୍ଞାନ ପରୀକ୍ଷା",
  simulationPassed: "ସିମୁଲେସନ ଉତ୍ତୀର୍ଣ୍ଣ!",
  notPassed: "ଉତ୍ତୀର୍ଣ୍ଣ ହୋଇନାହିଁ",
  certWillBeIssued: "ପ୍ରମାଣପତ୍ର ପ୍ରଦାନ କରାଯିବ",
  reviewAndRetry: "ସାମଗ୍ରୀ ପୁଣି ପଢ଼ନ୍ତୁ ଓ ପ୍ରୟାସ କରନ୍ତୁ",
  practicalScore: "ପ୍ରାୟୋଗିକ ସ୍କୋର",
  theoryScore: "ତତ୍ତ୍ୱଗତ ସ୍କୋର",
  finalScore: "ଚୂଡ଼ାନ୍ତ ସ୍କୋର",
  timeTaken: "ଲାଗିଥିବା ସମୟ",
  viewCertificate: "ପ୍ରମାଣପତ୍ର ଦେଖନ୍ତୁ",
  returnHome: "ମୁଖ୍ୟପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ",
  retryModule: "ମଡ୍ୟୁଲ ପୁନଃ ପ୍ରୟାସ କରନ୍ତୁ",
  syncingToServer: "ସର୍ଭର ସହିତ ସିଙ୍କ ହେଉଛି…",
  arTrackingActive: "AR ସକ୍ରିୟ",
  targetDetected: "ଲକ୍ଷ୍ୟ ଚିହ୍ନଟ",
  actionCompleted: "ସମ୍ପୂର୍ଣ୍ଣ ହେଲା!",
  exit: "ବାହାରନ୍ତୁ",
  questionOf: "ମଧ୍ୟରୁ",
  phase: "ପର୍ଯ୍ୟାୟ",
  briefing: "ବିବରଣୀ",

  myCertificates: "ମୋର ପ୍ରମାଣପତ୍ର",
  noCertificates: "କୌଣସି ପ୍ରମାଣପତ୍ର ମିଳିନାହିଁ",
  noCertDesc: "ପ୍ରଥମ ପ୍ରମାଣପତ୍ର ପାଇବାକୁ ଟ୍ରେନିଂ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ।",
  browseModules: "ମଡ୍ୟୁଲ ବ୍ରାଉଜ କରନ୍ତୁ",
  certId: "ପ୍ରମାଣ ଆଇଡି",
  issued: "ପ୍ରଦାନ",
  expires: "ଅବଧି ସମାପ୍ତ",
  score: "ସ୍କୋର",
  valid: "ବୈଧ",
  expired: "ମିଆଦ ପୂରିଛି",
  showQR: "ଯାଞ୍ଚ QR ଦେଖାନ୍ତୁ",
  hideQR: "QR ଲୁଚାନ୍ତୁ",
  share: "ସେୟାର କରନ୍ତୁ",
  download: "ଡାଉନଲୋଡ",
  scanToVerify: "ଯାଞ୍ଚ କରିବା ପାଇଁ ସ୍କାନ କରନ୍ତୁ",

  myProfile: "ମୋର ପ୍ରୋଫାଇଲ",
  attemptCount: "ପ୍ରୟାସ",
  passRate: "ପାସ ହାର",
  certsEarned: "ପ୍ରମାଣପତ୍ର",
  settings: "ସେଟିଂସ",
  language: "ଭାଷା",
  notifications: "ସୂଚନା",
  trainingReminders: "ପ୍ରଶିକ୍ଷଣ ସ୍ମାରକୀ",
  syncData: "ଡାଟା ସିଙ୍କ କରନ୍ତୁ",
  uploadPending: "ବାକି ଥିବା ପ୍ରୟାସ ଅପଲୋଡ କରନ୍ତୁ",
  allSynced: "✓ ସବୁ ସିଙ୍କ ହେଲା",
  syncing: "ସିଙ୍କ ହେଉଛି…",
  attemptHistory: "ପ୍ରୟାସ ଇତିହାସ",
  complianceStatus: "ଅନୁପାଳନ ସ୍ଥିତି",
  notCompliant: "ଅନୁପାଳିତ ନୁହେଁ",
  compliant: "ଅନୁପାଳିତ",

  adminDashboard: "ପ୍ରଶାସକ ଡ୍ୟାସବୋର୍ଡ",
  supervisorPanel: "ପରିଦର୍ଶକ ପ୍ୟାନେଲ",
  totalSynced: "ମୋଟ ସିଙ୍କ",
  needRetraining: "ପୁନଃ ତାଲିମ ଦରକାର",
  modulePassRates: "ମଡ୍ୟୁଲ ପାସ ହାର",
  liveSyncQueue: "ଲାଇଭ ସିଙ୍କ ଧାଡ଼ି",
  overallCompliance: "ସମଗ୍ର ଅନୁପାଳନ",
  workersCleared: "ଶ୍ରମିକ ଉତ୍ତୀର୍ଣ୍ଣ",
  connectingToServer: "ସର୍ଭର ସହ ଯୋଡ଼ା ହେଉଛି…",

  scanTitle: "ପ୍ରମାଣପତ୍ର ସ୍କାନ କରନ୍ତୁ",
  scanSubtitle: "ସୁରକ୍ଷା ପ୍ରମାଣପତ୍ର ତୁରନ୍ତ ଯାଞ୍ଚ କରନ୍ତୁ",
  scanInstruction: "ସୁରକ୍ଷା ପ୍ରମାଣପତ୍ରର QR କୋଡ ଉପରେ କ୍ୟାମେରା ରଖନ୍ତୁ",
  orEnterManually: "କିମ୍ବା ଶ୍ରମିକ ଆଇଡି ଲେଖନ୍ତୁ",
  workerIdPlaceholder: "ଯଥା EMP-SIH26041",
  verifyCertificate: "ପ୍ରମାଣପତ୍ର ଯାଞ୍ଚ କରନ୍ତୁ",
  verifying: "ଯାଞ୍ଚ ହେଉଛି…",
  verifiedRecord: "ଯାଞ୍ଚିତ ରେକର୍ଡ",
  authenticCertificate: "ପ୍ରାମାଣିକ ପ୍ରମାଣପତ୍ର",
  noRecord: "ଏହି ଶ୍ରମିକ ଆଇଡି ପାଇଁ କୌଣସି ରେକର୍ଡ ମିଳିଲା ନାହିଁ।",
  trainingModule: "ପ୍ରଶିକ୍ଷଣ ମଡ୍ୟୁଲ",
  status: "ସ୍ଥିତି",
  date: "ତାରିଖ",
  scanAgain: "ପୁଣି ସ୍କାନ କରନ୍ତୁ",
};

// ─── SANTALI (ᱥᱟᱱᱛᱟᱲᱤ) ────────────────────────────────────────────────────────
const sat: Translations = {
  appName: "ᱥᱮᱱᱟᱨ",
  appSubtitle: "ᱠᱟᱹᱨᱜᱟᱲ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ · ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
  worker: "ᱠᱟᱹᱢᱤᱭᱟᱹ",
  supervisor: "ᱧᱮᱞ-ᱛᱚᱫᱟᱨᱚᱠᱤᱭᱟᱹ",
  workerId: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ",
  supervisorId: "ᱧᱮᱞ-ᱛᱚᱫᱟᱨᱚᱠᱤᱭᱟᱹ ᱟᱭᱰᱤ",
  password: "ᱫᱟᱱᱟᱝ ᱥᱟᱵᱟᱫ",
  signIn: "ᱵᱚᱞᱚᱱ ᱢᱮ",
  signOut: "ᱚᱰᱚᱠᱚᱜ ᱢᱮ",
  invalidCreds: "ᱵᱟᱹᱲᱤᱡ ᱛᱟᱹᱞᱠᱟᱹ᱾ ᱟᱢᱟᱜ ᱟᱭᱰᱤ ᱟᱨ ᱯᱟᱥᱣᱟᱨᱰ ᱧᱮᱞ ᱵᱤᱰᱟᱹᱣ ᱢᱮ᱾",
  fillFields: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱡᱚᱛᱚ ᱠᱷᱚᱸᱫᱽ ᱯᱮᱨᱮᱡ ᱢᱮ᱾",
  demo: "ᱰᱮᱢᱳ",
  arPowered: "AR-ᱥᱟᱡᱟᱣ · ᱚᱯᱷᱞᱟᱭᱤᱱ-ᱯᱩᱭᱞᱩ · SIH 2026",
  googleSignIn: "Google ᱥᱟᱶ ᱞᱟᱦᱟᱜ ᱢᱮ",
  googleDemoNote: "ᱢᱤᱫ ᱴᱤᱯᱟᱹᱣ Google ᱰᱮᱢᱳ ᱵᱚᱞᱚᱱ",
  forgotPassword: "ᱯᱟᱥᱣᱟᱨᱰ ᱮᱢ ᱦᱤᱲᱤᱧ ᱠᱮᱫᱟ?",
  agreeTermsNotice: "ᱵᱚᱞᱚᱱ ᱠᱟᱛᱮ ᱟᱞᱮᱭᱟᱜ ᱱᱤᱭᱟᱹᱢ ᱨᱮ ᱨᱮᱵᱮᱱ ᱢᱮᱱᱟᱢᱟ",
  and: "ᱟᱨ",

  notRobot: "ᱤᱧ ᱨᱳᱵᱚᱴ ᱫᱚ ᱵᱟᱝ ᱠᱟᱹᱱᱟᱹᱧ",
  verifiedCaptcha: "ᱯᱚᱨᱚᱠ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ",
  recaptchaSecurity: "reCAPTCHA ᱨᱩᱠᱷᱤᱭᱟᱹ",
  cookieNotice: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱩᱯᱨᱩᱢ ᱟᱨ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱞᱟᱹᱜᱤᱫ ᱠᱩᱠᱤᱡ ᱵᱮᱵᱷᱟᱨᱚᱜ ᱠᱟᱱᱟ᱾",
  acceptCookies: "ᱡᱚᱛᱚ ᱟᱸᱜᱚᱪ ᱢᱮ",
  cookiePreferences: "ᱠᱩᱠᱤ ᱨᱟᱭᱨᱤᱛ",

  termsConditions: "ᱱᱤᱭᱟᱹᱢ ᱟᱨ ᱥᱚᱨᱛᱚ",
  privacyPolicy: "ᱩᱠᱩ ᱫᱚᱦᱚ ᱨᱟᱭᱨᱤᱛ",
  cookiePolicy: "ᱠᱩᱠᱤ ᱨᱟᱭᱨᱤᱛ",
  refundPolicy: "ᱨᱩᱣᱟᱹᱲ ᱟᱨ ᱪᱷᱟᱹᱲ",
  support: "ᱜᱚᱲᱚ-ᱥᱚᱦᱚᱫ",
  plansPayment: "ᱯᱞᱟᱱ ᱟᱨ ᱠᱷᱟᱡᱽᱱᱟ",
  legalAndPolicies: "ᱟᱹᱭᱤᱱ, ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱨ ᱜᱚᱲᱚ",

  goodMorning: "ᱥᱟᱹᱜᱩᱱ ᱥᱮᱛᱟᱜ",
  goodAfternoon: "ᱥᱟᱹᱜᱩᱱ ᱛᱤᱠᱤᱱ",
  goodEvening: "ᱥᱟᱹᱜᱩᱱ ᱟᱹᱭᱩᱵ",

  home: "ᱢᱩᱬᱩᱛ",
  modules: "ᱢᱚᱰᱩᱞ ᱠᱚ",
  certificates: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ",
  profile: "ᱯᱨᱚᱯᱷᱟᱭᱤᱞ",
  scan: "ᱥᱠᱮᱱ",

  trainingProgress: "ᱥᱮᱪᱮᱫ ᱞᱟᱦᱟᱱᱛᱤ",
  modulesOf: "ᱢᱚᱰᱩᱞ ᱯᱟᱥ ᱮᱱᱟ",
  passed: "ᱯᱟᱥ ᱮᱱᱟ",
  pending: "ᱛᱟᱺᱜᱤ ᱨᱮ",
  locked: "ᱠᱩᱞᱯᱷᱤ ᱟᱠᱟᱱ",
  viewAll: "ᱡᱚᱛᱚ ᱧᱮᱞ ᱢᱮ",
  recentActivity: "ᱱᱤᱛᱚᱜᱟᱜ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ",
  synced: "ᱥᱤᱸᱠ ᱮᱱᱟ",
  offline: "ᱚᱯᱷᱞᱟᱭᱤᱱ",
  siteCameraMonitor: "ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ ᱠᱮᱢᱮᱨᱟ ᱧᱮᱞ",
  workersOnSite: "ᱴᱷᱟᱶ ᱨᱮ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ",
  verifyAll: "ᱡᱚᱛᱚ ᱯᱚᱨᱚᱠ ᱢᱮ",
  startCamera: "ᱮᱦᱚᱵ ᱢᱮ",
  stopCamera: "ᱛᱷᱟᱢᱵᱷᱟᱣ ᱢᱮ",
  cameraHint: "ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ 'ᱮᱦᱚᱵ ᱢᱮ' ᱨᱮ ᱚᱛᱟᱭ ᱢᱮ᱾",

  availableModules: "ᱢᱚᱰᱩᱞ ᱢᱮᱱᱟᱜ-ᱟ",
  searchModules: "ᱢᱚᱰᱩᱞ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ…",
  all: "ᱡᱚᱛᱚ",
  failed: "ᱯᱷᱮᱞ ᱮᱱᱟ",
  required: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ",
  start: "ᱮᱦᱚᱵ",
  retry: "ᱫᱚᱦᱲᱟ ᱪᱮᱥᱴᱟ",
  redo: "ᱟᱨᱦᱚᱸ ᱠᱚᱨᱟᱣ",
  duration: "ᱚᱠᱛᱚ",
  attempts: "ᱪᱮᱥᱴᱟ",

  moduleFireName: "ᱥᱮᱸᱜᱮᱞ ᱟᱨ ᱯᱷᱩᱴᱟᱹᱣ ᱨᱩᱠᱷᱤᱭᱟᱹ",
  moduleFireDesc: "ᱥᱮᱸᱜᱮᱞ ᱵᱚᱛᱚᱨ ᱪᱤᱱᱦᱟᱹᱣ, ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱢᱮᱥᱤᱱ ᱪᱟᱞᱟᱣ ᱥᱮᱬᱟᱭ ᱢᱮ᱾",
  moduleElecName: "ᱵᱤᱡᱽᱞᱤ ᱵᱚᱛᱚᱨ ᱥᱟᱢᱵᱽᱲᱟᱣ",
  moduleElecDesc: "ᱪᱟᱹᱞᱩ ᱛᱟᱨ ᱪᱤᱱᱦᱟᱹᱣ, LOTO ᱱᱤᱭᱟᱹᱢ ᱢᱟᱱᱟᱣ ᱟᱨ PPE ᱦᱚᱨᱚᱜ ᱢᱮ᱾",
  moduleChemName: "ᱨᱟᱥᱟᱭᱚᱱᱤᱠ ᱵᱚᱛᱚᱨ ᱟᱨ PPE",
  moduleChemDesc: "ᱵᱤᱥᱟᱹᱠᱛᱚ ᱡᱤᱱᱤᱥ ᱥᱟᱢᱵᱽᱲᱟᱣ ᱟᱨ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱦᱚᱨᱚᱜ-ᱵᱟᱸᱫᱮ᱾",
  moduleMechName: "ᱢᱮᱥᱤᱱ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱨ ᱞᱚᱠ",
  moduleMechDesc: "ᱠᱟᱹᱨᱜᱟᱲ ᱢᱮᱥᱤᱱ ᱥᱟᱶ ᱨᱩᱠᱷᱤᱭᱟᱹᱛᱮ ᱠᱟᱹᱢᱤ ᱟᱨ ᱤᱱᱴᱟᱨᱞᱚᱠ ᱵᱩᱡᱷᱟᱹᱣ᱾",
  moduleFallName: "ᱪᱮᱛᱟᱱ ᱠᱷᱚᱱ ᱧᱩᱨᱩᱜ ᱨᱩᱠᱷᱤᱭᱟᱹ",
  moduleFallDesc: "ᱩᱥᱩᱞ ᱴᱷᱟᱶ ᱨᱮ ᱠᱟᱹᱢᱤ ᱡᱚᱦᱚᱜ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱵᱮᱞᱴ ᱨᱮᱱᱟᱜ ᱵᱮᱵᱷᱟᱨ᱾",

  scenario: "ᱦᱟᱞᱚᱛ",
  instruction: "ᱫᱤᱥ-ᱦᱩᱫᱤᱥ",
  passMark: "ᱯᱟᱥ ᱱᱚᱢᱵᱚᱨ",
  quiz: "ᱠᱩᱠᱞᱤ-ᱛᱮᱞᱟ",
  launchAR: "AR ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱮᱦᱚᱵ ᱢᱮ",
  knowledgeCheck: "ᱜᱮᱭᱟᱱ ᱯᱚᱨᱚᱠ",
  simulationPassed: "ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱯᱟᱥ ᱮᱱᱟ!",
  notPassed: "ᱵᱟᱝ ᱯᱟᱥ ᱞᱮᱱᱟ",
  certWillBeIssued: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱮᱢᱚᱜ ᱦᱩᱭᱩᱜ-ᱟ",
  reviewAndRetry: "ᱡᱤᱱᱤᱥ ᱯᱟᱲᱦᱟᱣ ᱢᱮ ᱟᱨ ᱫᱚᱦᱲᱟ ᱪᱮᱥᱴᱟᱭ ᱢᱮ",
  practicalScore: "ᱠᱟᱹᱢᱤ ᱱᱚᱢᱵᱚᱨ",
  theoryScore: "ᱯᱚᱛᱚᱵ ᱱᱚᱢᱵᱚᱨ",
  finalScore: "ᱢᱩᱪᱟᱹᱫ ᱱᱚᱢᱵᱚᱨ",
  timeTaken: "ᱦᱟᱛᱟᱣ ᱟᱠᱟᱱ ᱚᱠᱛᱚ",
  viewCertificate: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ ᱢᱮ",
  returnHome: "ᱢᱩᱬᱩᱛ ᱛᱮ ᱨᱩᱣᱟᱹᱲ ᱢᱮ",
  retryModule: "ᱢᱚᱰᱩᱞ ᱫᱚᱦᱲᱟ ᱪᱮᱥᱴᱟ",
  syncingToServer: "ᱥᱟᱨᱵᱷᱟᱨ ᱥᱟᱶ ᱡᱚᱲᱟᱣᱜ ᱠᱟᱱᱟ…",
  arTrackingActive: "AR ᱪᱟᱹᱞᱩ ᱢᱮᱱᱟᱜ-ᱟ",
  targetDetected: "ᱴᱟᱨᱜᱮᱴ ᱧᱟᱢ ᱮᱱᱟ",
  actionCompleted: "ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ!",
  exit: "ᱚᱰᱚᱠᱚᱜ",
  questionOf: "ᱨᱮᱱᱟᱜ",
  phase: "ᱛᱷᱚᱠ",
  briefing: "ᱵᱤᱵᱚᱨᱚᱬ",

  myCertificates: "ᱤᱧᱟᱜ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱠᱚ",
  noCertificates: "ᱱᱤᱛᱚᱜ ᱫᱷᱟᱹᱵᱤᱡ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱵᱟᱹᱱᱩᱜ-ᱟ",
  noCertDesc: "ᱯᱩᱭᱞᱩ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱟᱢ ᱞᱟᱹᱜᱤᱫ ᱥᱮᱪᱮᱫ ᱯᱩᱨᱟᱹᱣ ᱢᱮ᱾",
  browseModules: "ᱢᱚᱰᱩᱞ ᱠᱚ ᱧᱮᱞ ᱢᱮ",
  certId: "ᱥᱟᱨᱴ ᱟᱭᱰᱤ",
  issued: "ᱮᱢ ᱟᱠᱟᱱ",
  expires: "ᱪᱟᱵᱟᱜ ᱚᱠᱛᱚ",
  score: "ᱱᱚᱢᱵᱚᱨ",
  valid: "ᱵᱟᱹᱭᱫᱷᱚ",
  expired: "ᱢᱤᱭᱟᱹᱫᱽ ᱪᱟᱵᱟ",
  showQR: "ᱯᱚᱨᱚᱠ QR ᱩᱫᱩᱜ ᱢᱮ",
  hideQR: "QR ᱩᱠᱩᱭ ᱢᱮ",
  share: "ᱦᱟᱹᱴᱤᱧ ᱢᱮ",
  download: "ᱰᱟᱣᱩᱱᱞᱳᱰ",
  scanToVerify: "ᱥᱟᱹᱨᱤ ᱯᱚᱨᱚᱠ ᱞᱟᱹᱜᱤᱫ ᱥᱠᱮᱱ ᱢᱮ",

  myProfile: "ᱤᱧᱟᱜ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ",
  attemptCount: "ᱪᱮᱥᱴᱟ",
  passRate: "ᱯᱟᱥ ᱦᱟᱨ",
  certsEarned: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ",
  settings: "ᱥᱟᱡᱟᱣ",
  language: "ᱯᱟᱹᱨᱥᱤ",
  notifications: "ᱵᱮᱣᱨᱟ",
  trainingReminders: "ᱥᱮᱪᱮᱫ ᱩᱭᱦᱟᱹᱨ",
  syncData: "ᱰᱮᱴᱟ ᱥᱤᱸᱠ ᱢᱮ",
  uploadPending: "ᱵᱟᱹᱠᱤ ᱪᱮᱥᱴᱟ ᱚᱯᱞᱳᱰ ᱢᱮ",
  allSynced: "✓ ᱡᱚᱛᱚ ᱥᱤᱸᱠ ᱮᱱᱟ",
  syncing: "ᱥᱤᱸᱠᱚᱜ ᱠᱟᱱᱟ…",
  attemptHistory: "ᱪᱮᱥᱴᱟ ᱱᱟᱜᱟᱢ",
  complianceStatus: "ᱨᱟᱭᱨᱤᱛ ᱦᱟᱞᱚᱛ",
  notCompliant: "ᱵᱟᱝ ᱯᱩᱨᱟᱹᱣ",
  compliant: "ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ",

  adminDashboard: "ᱮᱰᱢᱤᱱ ᱰᱮᱥᱵᱳᱨᱰ",
  supervisorPanel: "ᱧᱮᱞ-ᱛᱚᱫᱟᱨᱚᱠᱤᱭᱟᱹ ᱯᱮᱱᱮᱞ",
  totalSynced: "ᱢᱩᱴᱷᱟᱹᱱ ᱥᱤᱸᱠ",
  needRetraining: "ᱟᱨᱦᱚᱸ ᱥᱮᱪᱮᱫ ᱞᱟᱹᱠᱛᱤ",
  modulePassRates: "ᱢᱚᱰᱩᱞ ᱯᱟᱥ ᱦᱟᱨ",
  liveSyncQueue: "ᱞᱟᱭᱤᱵᱷ ᱥᱤᱸᱠ ᱞᱟᱭᱤᱱ",
  overallCompliance: "ᱡᱚᱛᱚ ᱢᱮᱥᱟ ᱨᱟᱭᱨᱤᱛ",
  workersCleared: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱯᱟᱥ ᱮᱱᱟ",
  connectingToServer: "ᱥᱟᱨᱵᱷᱟᱨ ᱥᱟᱶ ᱡᱚᱲᱟᱣᱜ ᱠᱟᱱᱟ…",

  scanTitle: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱥᱠᱮᱱ ᱢᱮ",
  scanSubtitle: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱛᱟᱹᱞᱠᱟᱹ ᱛᱚᱨᱟᱝ ᱯᱚᱨᱚᱠ ᱢᱮ",
  scanInstruction: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱨᱮᱱᱟᱜ QR ᱠᱳᱰ ᱪᱮᱛᱟᱱ ᱨᱮ ᱠᱮᱢᱮᱨᱟ ᱫᱚᱦᱚᱭ ᱢᱮ",
  orEnterManually: "ᱵᱟᱝᱠᱷᱟᱱ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ ᱚᱞ ᱢᱮ",
  workerIdPlaceholder: "ᱡᱮᱞᱮᱠᱟ EMP-SIH26041",
  verifyCertificate: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱚᱨᱚᱠ ᱢᱮ",
  verifying: "ᱯᱚᱨᱚᱠᱚᱜ ᱠᱟᱱᱟ…",
  verifiedRecord: "ᱯᱚᱨᱚᱠ ᱟᱠᱟᱱ ᱨᱮᱠᱚᱨᱰ",
  authenticCertificate: "ᱥᱟᱹᱨᱤ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ",
  noRecord: "ᱱᱚᱣᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ ᱞᱟᱹᱜᱤᱫ ᱪᱮᱫ ᱨᱮᱠᱚᱨᱰ ᱵᱟᱹᱱᱩᱜ-ᱟ᱾",
  trainingModule: "ᱥᱮᱪᱮᱫ ᱢᱚᱰᱩᱞ",
  status: "ᱦᱟᱞᱚᱛ",
  date: "ᱢᱟᱹᱦᱤᱛ",
  scanAgain: "ᱟᱨᱦᱚᱸ ᱥᱠᱮᱱ ᱢᱮ",
};

// ─── TELUGU (తెలుగు) ──────────────────────────────────────────────────────────
const te: Translations = {
  appName: "సేనార్",
  appSubtitle: "పారిశ్రామిక భద్రతా శిక్షణ · జార్ఖండ్",
  worker: "కార్మికుడు",
  supervisor: "పర్యవేక్షకుడు",
  workerId: "కార్మికుడి ఐడీ",
  supervisorId: "సూపర్‌వైజర్ ఐడీ",
  password: "పాస్‌వర్డ్",
  signIn: "సైన్ ఇన్",
  signOut: "సైన్ అవుట్",
  invalidCreds: "చెల్లని వివరాలు. మీ ఐడీ మరియు పాస్‌వర్డ్‌ను తనిఖీ చేయండి.",
  fillFields: "దయచేసి అన్ని వివరాలను పూరించండి.",
  demo: "డెమో",
  arPowered: "AR ఆధారిత · ఆఫ్‌లైన్-మొదటిది · SIH 2026",
  googleSignIn: "Google తో కొనసాగండి",
  googleDemoNote: "ఒకే క్లిక్‌తో Google డెమో లాగిన్",
  forgotPassword: "పాస్‌వర్డ్ మర్చిపోయారా?",
  agreeTermsNotice: "సైన్ ఇన్ చేయడం ద్వారా మీరు మా నిబంధనలను అంగీకరిస్తున్నారు",
  and: "మరియు",

  notRobot: "నేను రోబోట్‌ను కాను",
  verifiedCaptcha: "ధృవీకరణ పూర్తయింది",
  recaptchaSecurity: "reCAPTCHA భద్రత",
  cookieNotice: "కార్మికుల ప్రామాణీకరణ మరియు ఆఫ్‌లైన్ భద్రత కోసం మేము అవసరమైన కుకీలను ఉపయోగిస్తాము.",
  acceptCookies: "అన్నీ అంగీకరించు",
  cookiePreferences: "కుకీ విధానం",

  termsConditions: "నిబంధనలు మరియు షరతులు",
  privacyPolicy: "గోప్యతా విధానం",
  cookiePolicy: "కుకీ విధానం",
  refundPolicy: "రీఫండ్ మరియు రాయితీలు",
  support: "సహాయం మరియు మద్దతు",
  plansPayment: "ప్లాన్లు మరియు బిల్లింగ్",
  legalAndPolicies: "చట్టపరమైన, భద్రత & మద్దతు",

  goodMorning: "శుభోదయం",
  goodAfternoon: "శుభ మధ్యాహ్నం",
  goodEvening: "శుభ సాయంత్రం",

  home: "హోమ్",
  modules: "మాడ్యూల్స్",
  certificates: "సర్టిఫికెట్లు",
  profile: "ప్రొఫైల్",
  scan: "స్కాన్",

  trainingProgress: "శిక్షణ పురోగతి",
  modulesOf: "మాడ్యూల్స్ ఉత్తీర్ణత",
  passed: "ఉత్తీర్ణత",
  pending: "పెండింగ్",
  locked: "లాక్ చేయబడింది",
  viewAll: "అన్నీ చూడండి",
  recentActivity: "ఇటీవలి కార్యాచరణ",
  synced: "సింక్ చేయబడింది",
  offline: "ఆఫ్‌లైన్",
  siteCameraMonitor: "సైట్ కెమెరా మానిటర్",
  workersOnSite: "పని ప్రదేశంలో కార్మికులు",
  verifyAll: "అన్నీ ధృవీకరించండి",
  startCamera: "ప్రారంభించు",
  stopCamera: "ఆపు",
  cameraHint: "పని ప్రదేశాన్ని ప్రత్యక్షంగా చూడటానికి 'ప్రారంభించు' నొక్కండి.",

  availableModules: "మాడ్యూల్స్ అందుబాటులో ఉన్నాయి",
  searchModules: "మాడ్యూల్స్ వెతకండి…",
  all: "అన్నీ",
  failed: "విఫలమైంది",
  required: "తప్పనిసరి",
  start: "ప్రారంభించు",
  retry: "మళ్ళీ ప్రయత్నించు",
  redo: "మళ్ళీ చేయి",
  duration: "వ్యవధి",
  attempts: "ప్రయత్నం",

  moduleFireName: "అగ్ని మరియు పేలుడు భద్రత",
  moduleFireDesc: "అగ్ని ప్రమాదాలను గుర్తించడం, అగ్నిమాపక యంత్రాలను ఉపయోగించడం మరియు అత్యవసర తరలింపు.",
  moduleElecName: "విద్యుత్ ప్రమాద నియంత్రణ",
  moduleElecDesc: "లైవ్ సర్క్యూట్లను గుర్తించడం, LOTO విధానాన్ని పాటించడం మరియు సురక్షిత PPE ధరించడం.",
  moduleChemName: "రసాయన భద్రత మరియు PPE",
  moduleChemDesc: "ప్రమాదకర రసాయనాల నిర్వహణ మరియు సరైన రక్షణ దుస్తులు ధరించడం.",
  moduleMechName: "యంత్రాల భద్రత మరియు లాకౌట్",
  moduleMechDesc: "పరిశ్రమ యంత్రాలతో సురక్షిత పని మరియు భద్రతా ఇంటర్‌లాక్స్ అర్థం చేసుకోవడం.",
  moduleFallName: "ఎత్తు నుండి పడకుండా నివారణ",
  moduleFallDesc: "ఎత్తైన ప్రదేశాలలో పని చేస్తున్నప్పుడు సరైన హార్నెస్ మరియు యాంకర్ పాయింట్ వాడకం.",

  scenario: "సందర్భం",
  instruction: "సూచన",
  passMark: "ఉత్తీర్ణత మార్కులు",
  quiz: "క్విజ్",
  launchAR: "AR సిమ్యులేషన్ ప్రారంభించు",
  knowledgeCheck: "జ్ఞాన పరీక్ష",
  simulationPassed: "సిమ్యులేషన్ ఉత్తీర్ణత!",
  notPassed: "ఉత్తీర్ణత సాధించలేదు",
  certWillBeIssued: "సర్టిఫికెట్ జారీ చేయబడుతుంది",
  reviewAndRetry: "విషయాన్ని సమీక్షించి మళ్లీ ప్రయత్నించండి",
  practicalScore: "ప్రాక్టికల్ స్కోరు",
  theoryScore: "థియరీ స్కోరు",
  finalScore: "చివరి స్కోరు",
  timeTaken: "తీసుకున్న సమయం",
  viewCertificate: "సర్టిఫికెట్ చూడండి",
  returnHome: "హోమ్‌కు తిరిగి వెళ్ళండి",
  retryModule: "మాడ్యూల్ మళ్లీ ప్రయత్నించండి",
  syncingToServer: "సర్వర్‌తో సింక్ అవుతోంది…",
  arTrackingActive: "AR యాక్టివ్‌గా ఉంది",
  targetDetected: "లక్ష్యం కనుగొనబడింది",
  actionCompleted: "పూర్తయింది!",
  exit: "నిష్క్రమించు",
  questionOf: "లో",
  phase: "దశ",
  briefing: "వివరణ",

  myCertificates: "నా సర్టిఫికెట్లు",
  noCertificates: "ఇంకా సర్టిఫికెట్లు లేవు",
  noCertDesc: "మొదటి సర్టిఫికెట్ సంపాదించడానికి శిక్షణ పూర్తి చేయండి.",
  browseModules: "మాడ్యూల్స్ చూడండి",
  certId: "సర్టిఫికెట్ ఐడీ",
  issued: "జారీ చేయబడింది",
  expires: "గడువు ముగుస్తుంది",
  score: "స్కోరు",
  valid: "చెల్లుబాటు",
  expired: "గడువు ముగిసింది",
  showQR: "ధృవీకరణ QR చూపించు",
  hideQR: "QR దాచు",
  share: "షేర్ చేయండి",
  download: "డౌన్‌లోడ్",
  scanToVerify: "నిజమైనదని నిర్ధారించడానికి స్కాన్ చేయండి",

  myProfile: "నా ప్రొఫైల్",
  attemptCount: "ప్రయత్నాలు",
  passRate: "పాస్ రేటు",
  certsEarned: "సర్టిఫికెట్లు",
  settings: "సెట్టింగ్‌లు",
  language: "భాష",
  notifications: "నోటిఫికేషన్‌లు",
  trainingReminders: "శిక్షణ రిమైండర్‌లు",
  syncData: "డేటాను సింక్ చేయండి",
  uploadPending: "పెండింగ్ ప్రయత్నాలను అప్‌లోడ్ చేయండి",
  allSynced: "✓ అన్నీ సింక్ అయ్యాయి",
  syncing: "సింక్ అవుతోంది…",
  attemptHistory: "ప్రయత్నాల చరిత్ర",
  complianceStatus: "వర్తింపు స్థితి",
  notCompliant: "ఇంకా పూర్తికాలేదు",
  compliant: "పూర్తయింది",

  adminDashboard: "అడ్మిన్ డాష్‌బోర్డ్",
  supervisorPanel: "పర్యవేక్షక ప్యానెల్",
  totalSynced: "మొత్తం సింక్",
  needRetraining: "పునఃశిక్షణ అవసరం",
  modulePassRates: "మాడ్యూల్ పాస్ రేట్లు",
  liveSyncQueue: "లైవ్ సింక్ క్యూ",
  overallCompliance: "మొత్తం వర్తింపు",
  workersCleared: "కార్మికులు ఉత్తీర్ణులయ్యారు",
  connectingToServer: "సర్వర్‌కు కనెక్ట్ అవుతోంది…",

  scanTitle: "సర్టిఫికెట్‌ను స్కాన్ చేయండి",
  scanSubtitle: "కార్మికుడి భద్రతా వివరాలను తక్షణమే ధృవీకరించండి",
  scanInstruction: "సర్టిఫికెట్ పైనున్న QR కోడ్‌పై కెమెరాను ఉంచండి",
  orEnterManually: "లేదా వర్కర్ ఐడీ నమోదు చేయండి",
  workerIdPlaceholder: "ఉదా. EMP-SIH26041",
  verifyCertificate: "సర్టిఫికెట్ ధృవీకరించు",
  verifying: "ధృవీకరిస్తోంది…",
  verifiedRecord: "ధృవీకరించబడిన రికార్డు",
  authenticCertificate: "ప్రామాణిక సర్టిఫికెట్",
  noRecord: "ఈ కార్మికుడి ఐడీకి ఎటువంటి రికార్డు కనుగొనబడలేదు.",
  trainingModule: "శిక్షణా మాడ్యూల్",
  status: "స్థితి",
  date: "తేదీ",
  scanAgain: "మళ్లీ స్కాన్ చేయండి",
};

// ─── PUNJABI (ਪੰਜਾਬੀ) ─────────────────────────────────────────────────────────
const pa: Translations = {
  appName: "ਸੇਨਾਰ",
  appSubtitle: "ਉਦਯੋਗਿਕ ਸੁਰੱਖਿਆ ਸਿਖਲਾਈ · ਝਾਰਖੰਡ",
  worker: "ਕਾਮਗਾਰ",
  supervisor: "ਨਿਗਰਾਨ",
  workerId: "ਕਾਮਗਾਰ ਆਈਡੀ",
  supervisorId: "ਸੁਪਰਵਾਈਜ਼ਰ ਆਈਡੀ",
  password: "ਪਾਸਵਰਡ",
  signIn: "ਸਾਈਨ ਇਨ",
  signOut: "ਸਾਈਨ ਆਊਟ",
  invalidCreds: "ਗਲਤ ਜਾਣਕਾਰੀ। ਆਪਣੀ ਆਈਡੀ ਅਤੇ ਪਾਸਵਰਡ ਦੀ ਜਾਂਚ ਕਰੋ।",
  fillFields: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਖਾਨੇ ਭਰੋ।",
  demo: "ਡੈਮੋ",
  arPowered: "AR-ਅਧਾਰਿਤ · ਆਫ਼ਲਾਈਨ-ਪਹਿਲਾਂ · SIH 2026",
  googleSignIn: "Google ਨਾਲ ਅੱਗੇ ਵਧੋ",
  googleDemoNote: "ਇੱਕ-ਕਲਿੱਕ Google ਡੈਮੋ ਲੌਗਇਨ",
  forgotPassword: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
  agreeTermsNotice: "ਸਾਈਨ ਇਨ ਕਰਕੇ ਤੁਸੀਂ ਸਾਡੇ ਨਿਯਮਾਂ ਨਾਲ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ",
  and: "ਅਤੇ",

  notRobot: "ਮੈਂ ਰੋਬੋਟ ਨਹੀਂ ਹਾਂ",
  verifiedCaptcha: "ਜਾਂਚ ਸਫਲ ਰਹੀ",
  recaptchaSecurity: "reCAPTCHA ਸੁਰੱਖਿਆ",
  cookieNotice: "ਕਾਮਗਾਰ ਪ੍ਰਮਾਣੀਕਰਨ ਅਤੇ ਸੁਰੱਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਰੂਰੀ ਕੂਕੀਜ਼ ਵਰਤਦੇ ਹਾਂ।",
  acceptCookies: "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
  cookiePreferences: "ਕੂਕੀ ਨੀਤੀ",

  termsConditions: "ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ",
  privacyPolicy: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
  cookiePolicy: "ਕੂਕੀ ਨੀਤੀ",
  refundPolicy: "ਰਿਫੰਡ ਅਤੇ ਰਿਆਇਤਾਂ",
  support: "ਸਹਾਇਤਾ ਅਤੇ ਮਦਦ",
  plansPayment: "ਯੋਜਨਾਵਾਂ ਅਤੇ ਬਿਲਿੰਗ",
  legalAndPolicies: "ਕਾਨੂੰਨੀ, ਸੁਰੱਖਿਆ ਅਤੇ ਸਹਾਇਤਾ",

  goodMorning: "ਸ਼ੁਭ ਸਵੇਰ",
  goodAfternoon: "ਸ਼ੁਭ ਦੁਪਹਿਰ",
  goodEvening: "ਸ਼ੁਭ ਸ਼ਾਮ",

  home: "ਮੁੱਖ ਪੰਨਾ",
  modules: "ਮਾਡਿਊਲ",
  certificates: "ਸਰਟੀਫਿਕੇਟ",
  profile: "ਪ੍ਰੋਫ਼ਾਈਲ",
  scan: "ਸਕੈਨ",

  trainingProgress: "ਸਿਖਲਾਈ ਤਰੱਕੀ",
  modulesOf: "ਮਾਡਿਊਲ ਪਾਸ ਕੀਤੇ",
  passed: "ਪਾਸ",
  pending: "ਬਕਾਇਆ",
  locked: "ਲਾਕ",
  viewAll: "ਸਭ ਦੇਖੋ",
  recentActivity: "ਹਾਲੀਆ ਸਰਗਰਮੀ",
  synced: "ਸਿੰਕ ਹੋਇਆ",
  offline: "ਆਫ਼ਲਾਈਨ",
  siteCameraMonitor: "ਸਾਈਟ ਕੈਮਰਾ ਨਿਗਰਾਨੀ",
  workersOnSite: "ਸਾਈਟ 'ਤੇ ਕਾਮਗਾਰ",
  verifyAll: "ਸਾਰੇ ਤਸਦੀਕ ਕਰੋ",
  startCamera: "ਸ਼ੁਰੂ ਕਰੋ",
  stopCamera: "ਰੋਕੋ",
  cameraHint: "ਸਾਈਟ ਨੂੰ ਲਾਈਵ ਦੇਖਣ ਲਈ 'ਸ਼ੁਰੂ ਕਰੋ' ਦਬਾਓ।",

  availableModules: "ਮਾਡਿਊਲ ਉਪਲਬਧ ਹਨ",
  searchModules: "ਮਾਡਿਊਲ ਲੱਭੋ…",
  all: "ਸਾਰੇ",
  failed: "ਫੇਲ੍ਹ",
  required: "ਜ਼ਰੂਰੀ",
  start: "ਸ਼ੁਰੂ",
  retry: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼",
  redo: "ਦੁਹਰਾਓ",
  duration: "ਸਮਾਂ",
  attempts: "ਕੋਸ਼ਿਸ਼",

  moduleFireName: "ਅੱਗ ਅਤੇ ਧਮਾਕਾ ਸੁਰੱਖਿਆ",
  moduleFireDesc: "ਅੱਗ ਦੇ ਖਤਰਿਆਂ ਦੀ ਪਛਾਣ, ਅੱਗ ਬੁਝਾਊ ਯੰਤਰ ਚਲਾਉਣਾ ਅਤੇ ਐਮਰਜੈਂਸੀ ਨਿਕਾਸੀ।",
  moduleElecName: "ਬਿਜਲੀ ਖਤਰਾ ਕੰਟਰੋਲ",
  moduleElecDesc: "ਚੱਲਦੇ ਸਰਕਟਾਂ ਦੀ ਪਛਾਣ, LOTO ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਅਤੇ ਸੁਰੱਖਿਆ ਕਿੱਟ ਵਰਤੋਂ।",
  moduleChemName: "ਰਸਾਇਣਕ ਸੁਰੱਖਿਆ ਅਤੇ PPE",
  moduleChemDesc: "ਖਤਰਨਾਕ ਰਸਾਇਣਾਂ ਦੀ ਸੰਭਾਲ ਅਤੇ ਸਹੀ ਸੁਰੱਖਿਆ ਕੱਪੜੇ ਪਹਿਨਣਾ।",
  moduleMechName: "ਮਸ਼ੀਨਰੀ ਸੁਰੱਖਿਆ ਅਤੇ ਲਾਕਆਊਟ",
  moduleMechDesc: "ਫੈਕਟਰੀ ਮਸ਼ੀਨਾਂ ਨਾਲ ਸੁਰੱਖਿਅਤ ਕੰਮ ਅਤੇ ਸੁਰੱਖਿਆ ਇੰਟਰਲਾਕ ਨੂੰ ਸਮਝਣਾ।",
  moduleFallName: "ਉਚਾਈ ਤੋਂ ਡਿੱਗਣ ਤੋਂ ਬਚਾਅ",
  moduleFallDesc: "ਉੱਚੀਆਂ ਥਾਵਾਂ 'ਤੇ ਕੰਮ ਕਰਦੇ ਸਮੇਂ ਸੁਰੱਖਿਆ ਬੈਲਟ ਦੀ ਸਹੀ ਵਰਤੋਂ।",

  scenario: "ਸਥਿਤੀ",
  instruction: "ਹਿਦਾਇਤ",
  passMark: "ਪਾਸ ਅੰਕ",
  quiz: "ਸਵਾਲ-ਜਵਾਬ",
  launchAR: "AR ਸਿਮੂਲੇਸ਼ਨ ਸ਼ੁਰੂ ਕਰੋ",
  knowledgeCheck: "ਗਿਆਨ ਪਰਖ",
  simulationPassed: "ਸਿਮੂਲੇਸ਼ਨ ਪਾਸ ਹੋਇਆ!",
  notPassed: "ਪਾਸ ਨਹੀਂ ਹੋਇਆ",
  certWillBeIssued: "ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕੀਤਾ ਜਾਵੇਗਾ",
  reviewAndRetry: "ਸਮੱਗਰੀ ਦੁਬਾਰਾ ਪੜ੍ਹੋ ਅਤੇ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
  practicalScore: "ਅਮਲੀ ਅੰਕ",
  theoryScore: "ਕਿਤਾਬੀ ਅੰਕ",
  finalScore: "ਕੁੱਲ ਅੰਕ",
  timeTaken: "ਲੱਗਿਆ ਸਮਾਂ",
  viewCertificate: "ਸਰਟੀਫਿਕੇਟ ਦੇਖੋ",
  returnHome: "ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਵਾਪਸ ਜਾਓ",
  retryModule: "ਮਾਡਿਊਲ ਦੁਬਾਰਾ ਕਰੋ",
  syncingToServer: "ਸਰਵਰ ਨਾਲ ਸਿੰਕ ਹੋ ਰਿਹਾ ਹੈ…",
  arTrackingActive: "AR ਚਾਲੂ ਹੈ",
  targetDetected: "ਟਾਰਗੈੱਟ ਲੱਭਿਆ",
  actionCompleted: "ਪੂਰਾ ਹੋਇਆ!",
  exit: "ਬਾਹਰ",
  questionOf: "ਵਿੱਚੋਂ",
  phase: "ਪੜਾਅ",
  briefing: "ਵੇਰਵਾ",

  myCertificates: "ਮੇਰੇ ਸਰਟੀਫਿਕੇਟ",
  noCertificates: "ਹਾਲੇ ਕੋਈ ਸਰਟੀਫਿਕੇਟ ਨਹੀਂ",
  noCertDesc: "ਪਹਿਲਾ ਸਰਟੀਫਿਕੇਟ ਹਾਸਲ ਕਰਨ ਲਈ ਸਿਖਲਾਈ ਪੂਰੀ ਕਰੋ।",
  browseModules: "ਮਾਡਿਊਲ ਦੇਖੋ",
  certId: "ਸਰਟ ਆਈਡੀ",
  issued: "ਜਾਰੀ ਹੋਇਆ",
  expires: "ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ",
  score: "ਅੰਕ",
  valid: "ਮਾਨਤਾ ਪ੍ਰਾਪਤ",
  expired: "ਮਿਆਦ ਪੁੱਗੀ",
  showQR: "ਤਸਦੀਕ QR ਦਿਖਾਓ",
  hideQR: "QR ਲੁਕਾਓ",
  share: "ਸਾਂਝਾ ਕਰੋ",
  download: "ਡਾਊਨਲੋਡ",
  scanToVerify: "ਅਸਲੀਅਤ ਪਰਖਣ ਲਈ ਸਕੈਨ ਕਰੋ",

  myProfile: "ਮੇਰੀ ਪ੍ਰੋਫ਼ਾਈਲ",
  attemptCount: "ਕੋਸ਼ਿਸ਼ਾਂ",
  passRate: "ਪਾਸ ਦਰ",
  certsEarned: "ਸਰਟੀਫਿਕੇਟ",
  settings: "ਸੈਟਿੰਗਾਂ",
  language: "ਭਾਸ਼ਾ",
  notifications: "ਸੂਚਨਾਵਾਂ",
  trainingReminders: "ਸਿਖਲਾਈ ਰੀਮਾਈਂਡਰ",
  syncData: "ਡੇਟਾ ਸਿੰਕ ਕਰੋ",
  uploadPending: "ਬਕਾਇਆ ਕੋਸ਼ਿਸ਼ਾਂ ਅੱਪਲੋਡ ਕਰੋ",
  allSynced: "✓ ਸਭ ਸਿੰਕ ਹੋ ਗਿਆ",
  syncing: "ਸਿੰਕ ਹੋ ਰਿਹਾ ਹੈ…",
  attemptHistory: "ਕੋਸ਼ਿਸ਼ਾਂ ਦਾ ਇਤਿਹਾਸ",
  complianceStatus: "ਪਾਲਣਾ ਸਥਿਤੀ",
  notCompliant: "ਅਜੇ ਪੂਰਾ ਨਹੀਂ",
  compliant: "ਪੂਰਾ ਹੋ ਗਿਆ",

  adminDashboard: "ਐਡਮਿਨ ਡੈਸ਼ਬੋਰਡ",
  supervisorPanel: "ਨਿਗਰਾਨ ਪੈਨਲ",
  totalSynced: "ਕੁੱਲ ਸਿੰਕ",
  needRetraining: "ਮੁੜ ਸਿਖਲਾਈ ਦੀ ਲੋੜ",
  modulePassRates: "ਮਾਡਿਊਲ ਪਾਸ ਦਰ",
  liveSyncQueue: "ਲਾਈਵ ਸਿੰਕ ਕਤਾਰ",
  overallCompliance: "ਸਮੁੱਚੀ ਪਾਲਣਾ",
  workersCleared: "ਕਾਮਗਾਰ ਪਾਸ ਹੋਏ",
  connectingToServer: "ਸਰਵਰ ਨਾਲ ਜੁੜ ਰਿਹਾ ਹੈ…",

  scanTitle: "ਸਰਟੀਫਿਕੇਟ ਸਕੈਨ ਕਰੋ",
  scanSubtitle: "ਕਾਮਗਾਰ ਸੁਰੱਖਿਆ ਯੋਗਤਾ ਤੁਰੰਤ ਤਸਦੀਕ ਕਰੋ",
  scanInstruction: "ਸੁਰੱਖਿਆ ਸਰਟੀਫਿਕੇਟ ਦੇ QR ਕੋਡ 'ਤੇ ਕੈਮਰਾ ਸੇਧੋ",
  orEnterManually: "ਜਾਂ ਕਾਮਗਾਰ ਆਈਡੀ ਖੁਦ ਦਰਜ ਕਰੋ",
  workerIdPlaceholder: "ਜਿਵੇਂ EMP-SIH26041",
  verifyCertificate: "ਸਰਟੀਫਿਕੇਟ ਤਸਦੀਕ ਕਰੋ",
  verifying: "ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ…",
  verifiedRecord: "ਤਸਦੀਕ ਸ਼ੁਦਾ ਰਿਕਾਰਡ",
  authenticCertificate: "ਅਸਲ ਸਰਟੀਫਿਕੇਟ",
  noRecord: "ਇਸ ਕਾਮਗਾਰ ਆਈਡੀ ਲਈ ਕੋਈ ਰਿਕਾਰਡ ਨਹੀਂ ਮਿਲਿਆ।",
  trainingModule: "ਸਿਖਲਾਈ ਮਾਡਿਊਲ",
  status: "ਸਥਿਤੀ",
  date: "ਮਿਤੀ",
  scanAgain: "ਦੁਬਾਰਾ ਸਕੈਨ ਕਰੋ",
};

export const TRANSLATIONS: Record<LangCode, Translations> = { en, hi, mr, bn, or, sat, te, pa };

// Helper to get localized module data
export function getLocalizedModule(id: string, t: Translations) {
  switch (id) {
    case "FIRE-001":
      return { name: t.moduleFireName, description: t.moduleFireDesc };
    case "ELEC-001":
      return { name: t.moduleElecName, description: t.moduleElecDesc };
    case "CHEM-001":
      return { name: t.moduleChemName, description: t.moduleChemDesc };
    case "MECH-001":
      return { name: t.moduleMechName, description: t.moduleMechDesc };
    case "FALL-001":
      return { name: t.moduleFallName, description: t.moduleFallDesc };
    default:
      return null;
  }
}
