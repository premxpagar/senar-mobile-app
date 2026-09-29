# SENAR — Industrial Safety Training Platform

An offline-first, mobile-first industrial safety training and verification web application built for workers in Jharkhand. Features real-time site camera monitoring, multi-language localization (8 Indian languages), interactive AR simulation training, cryptographic certificate verification, and Google OAuth 2.0 integration.

---

## 🚀 Features

- **Multi-Language Support (8 Languages)**:
  - English (`en`), Hindi (`hi`), Marathi (`mr`), Bengali (`bn`), Odia (`or`), Santali (`sat`), Telugu (`te`), and Punjabi (`pa`).
  - Full translation coverage including module names, descriptions, categories, legal policies, and camera monitor states.
- **Authentication & Security**:
  - Google OAuth 2.0 ("Continue with Google") with real Google user identity extraction.
  - Interactive Google reCAPTCHA checkbox verification ("I'm not a robot").
  - Role-based access control (Worker vs. Supervisor/Admin).
  - One-click demo credentials for rapid testing and presentations.
- **Industrial Safety Training**:
  - Interactive training modules (Fire & Explosion Safety, Electrical Hazard Control, Chemical PPE, Machine Lockout, Fall Prevention).
  - Integrated device camera stream with real-time AR HUD overlay and knowledge check quizzes.
- **Credentials & Cryptographic Verification**:
  - Tamper-evident verifiable digital certificates with SHA-256 certificate hashes.
  - Integrated QR scanner with real-time worker credentials database lookup.
  - Verification badges with real worker portraits and on-site clearance status.
- **Compliance & Legal Suite**:
  - Dedicated pages for Terms & Conditions (`/terms`), Privacy Policy (`/privacy`), Cookie Policy (`/cookies`), Refund & Concessions (`/refund`), Help & Support (`/support`), Billing Plans (`/payment`), and Email Verification (`/verify-email`).
- **Modern Liquid Glass UI**:
  - Responsive iPhone frame presentation with dynamic island, glassmorphic frosted surfaces, and floating bottom navigation dock.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla Glassmorphism CSS (`globals.css`)
- **Icons**: Lucide React
- **Auth**: Google OAuth 2.0 REST API

---

## 📂 Project Structure

```
mobile-app/
├── src/
│   ├── app/
│   │   ├── _components/         # Shared components (BottomNav, UtilPage)
│   │   ├── _lib/                # i18n dictionaries and provider
│   │   ├── api/auth/            # Google OAuth 2.0 routes
│   │   │   ├── google/          # Initiates Google sign-in
│   │   │   └── callback/google/ # Exchanges token & extracts Google profile
│   │   ├── home/                # Worker dashboard with camera monitor & workers list
│   │   ├── login/               # Sign-in with reCAPTCHA, Google Auth & Terms links
│   │   ├── modules/             # Localized training modules list & filters
│   │   ├── training/[moduleId]/ # AR camera training simulation & quiz
│   │   ├── certificates/        # Earned safety certificates & QR codes
│   │   ├── scan/                # QR code scanner & manual ID verification
│   │   ├── verify/[workerId]/   # Cryptographic verification badge & worker photo
│   │   ├── profile/             # Worker profile, language switcher & policy directory
│   │   ├── admin/               # Supervisor live telemetry & compliance analytics
│   │   ├── terms/               # Terms & Conditions policy
│   │   ├── privacy/             # Privacy Policy
│   │   ├── cookies/             # Cookie Policy
│   │   ├── refund/              # Refund & Concession policy
│   │   ├── support/             # Help & Support center with FAQ
│   │   ├── payment/             # Enterprise & training plans
│   │   ├── verify-email/        # Email verification screen
│   │   ├── maintenance/         # Scheduled maintenance status screen
│   │   └── access-denied/       # 403 access control screen
│   └── globals.css              # Custom design system tokens & glass docks
├── .env.local                   # Google OAuth credentials configuration
└── package.json
```

---

## ⚡ Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Google OAuth** (`.env.local`):
   ```env
   GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="your-client-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Demo Accounts

For offline/quick testing without Google account setup:
- **Worker Account**: `EMP-SIH26041` / `senar123`
- **Supervisor Account**: `SUP-SIH001` / `admin123`
- Or click the **Worker Demo** / **Supervisor Demo** buttons on the login screen.
