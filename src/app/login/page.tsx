"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck, HardHat, Eye, EyeOff, AlertTriangle, ChevronRight,
  Lock, User, Globe, CheckCircle2, Loader2, Sparkles, HelpCircle
} from "lucide-react";
import { useI18n } from "../_lib/I18nProvider";

type Role = "worker" | "supervisor";

const MOCK_USERS: Record<string, { password: string; role: Role; name: string; language: string }> = {
  "EMP-SIH26041": { password: "senar123", role: "worker",     name: "Rajan Kumar",  language: "hi" },
  "EMP-SIH26042": { password: "senar123", role: "worker",     name: "Amit Sharma",  language: "en" },
  "SUP-SIH001":   { password: "admin123", role: "supervisor", name: "Dr. P. Mehta", language: "en" },
};

export default function LoginPage() {
  const router = useRouter();
  const { t, lang, setLang, languages } = useI18n();
  const [role, setRole]         = useState<Role>("worker");
  const [workerId, setWorkerId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [langModal, setLangModal] = useState(false);

  // reCAPTCHA state
  const [captchaStatus, setCaptchaStatus] = useState<"idle" | "verifying" | "verified">("idle");
  const [captchaError, setCaptchaError] = useState(false);

  // Cookie banner state
  const [cookieAccepted, setCookieAccepted] = useState(false);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const handleCaptchaClick = () => {
    if (captchaStatus === "verified" || captchaStatus === "verifying") return;
    setCaptchaStatus("verifying");
    setCaptchaError(false);
    setTimeout(() => {
      setCaptchaStatus("verified");
    }, 900);
  };

  const handleLogin = async () => {
    setError("");
    if (!workerId || !password) {
      setError(t.fillFields);
      return;
    }
    if (captchaStatus !== "verified") {
      setCaptchaError(true);
      setError("Please complete the reCAPTCHA verification below.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const user = MOCK_USERS[workerId.toUpperCase()];
    if (!user || user.password !== password || user.role !== role) {
      setError(t.invalidCreds);
      setLoading(false);
      return;
    }
    sessionStorage.setItem(
      "senar_user",
      JSON.stringify({ workerId: workerId.toUpperCase(), name: user.name, role: user.role, language: lang })
    );
    router.push(user.role === "supervisor" ? "/admin" : "/home");
  };

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);
    setError("");
    window.location.href = "/api/auth/google";
  };

  const handleDemoLogin = (id: string, pass: string, r: Role) => {
    setWorkerId(id);
    setPassword(pass);
    setRole(r);
    setCaptchaStatus("verified");
    setLoading(true);
    setTimeout(() => {
      const u = MOCK_USERS[id];
      if (u) {
        sessionStorage.setItem(
          "senar_user",
          JSON.stringify({ workerId: id, name: u.name, role: u.role, language: lang })
        );
        router.push(u.role === "supervisor" ? "/admin" : "/home");
      }
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-full px-5 pb-6 relative overflow-y-auto no-scrollbar">
      {/* Status bar */}
      <div className="flex justify-between items-center pt-1 pb-3 text-[11px] text-white/40 font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-2">
          {/* Quick Language Switcher */}
          <button
            onClick={() => setLangModal(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-amber text-[11px] font-medium text-[#F59E0B]"
          >
            <Globe size={11} />
            <span>{currentLang.label}</span>
          </button>
          <div className="w-5 h-2.5 border border-white/20 rounded-sm p-px">
            <div className="w-3/4 h-full bg-[#F59E0B] rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center pt-4 pb-6 fade-up">
        <div className="w-14 h-14 rounded-2xl glass-amber flex items-center justify-center mb-4 shadow-lg shadow-[#F59E0B]/20">
          <ShieldCheck className="w-7 h-7 text-[#F59E0B]" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">{t.appName}</h1>
        <p className="text-[12px] text-white/45 mt-1 text-center font-medium">
          {t.appSubtitle}
        </p>
      </div>

      {/* Role toggle */}
      <div className="flex rounded-2xl glass p-1 mb-4 fade-up delay-1">
        {(["worker", "supervisor"] as Role[]).map((r) => (
          <button
            key={r}
            onClick={() => { setRole(r); setError(""); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              role === r ? "glass-amber text-[#F59E0B]" : "text-white/40"
            }`}
          >
            {r === "worker" ? <HardHat className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
            {r === "worker" ? t.worker : t.supervisor}
          </button>
        ))}
      </div>

      {/* Google Authentication Button (Demo) */}
      <div className="mb-4 fade-up delay-1">
        <button
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="w-full py-3 px-4 rounded-2xl glass hover:bg-white/10 active:scale-[0.98] transition-all border border-white/15 flex items-center justify-center gap-3 text-white text-xs font-semibold shadow-md"
        >
          {googleLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#F59E0B]" />
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          )}
          <span>{googleLoading ? "Connecting Google Auth…" : t.googleSignIn}</span>
        </button>
        <p className="text-[10px] text-white/30 text-center mt-1 flex items-center justify-center gap-1">
          <Sparkles size={10} className="text-[#F59E0B]" />
          <span>{t.googleDemoNote}</span>
        </p>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">OR ID LOGIN</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Form Fields */}
      <div className="space-y-3 mb-3 fade-up delay-2">
        <div className="relative">
          <User className="field-icon w-4 h-4" />
          <input
            className="field"
            placeholder={role === "worker" ? `${t.workerId} (EMP-SIH26041)` : `${t.supervisorId} (SUP-SIH001)`}
            value={workerId}
            onChange={(e) => setWorkerId(e.target.value)}
            autoCapitalize="characters"
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
        </div>

        <div className="relative">
          <Lock className="field-icon w-4 h-4" />
          <input
            className="field pr-11"
            type={showPass ? "text" : "password"}
            placeholder={t.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
          >
            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Forgot password link */}
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-[11px] text-[#F59E0B]/80 hover:text-[#F59E0B] transition-colors"
          >
            {t.forgotPassword}
          </Link>
        </div>
      </div>

      {/* Google reCAPTCHA Verification Box */}
      <div className="mb-4 fade-up delay-2">
        <div
          onClick={handleCaptchaClick}
          className={`glass rounded-2xl p-3 flex items-center justify-between cursor-pointer border transition-all ${
            captchaError
              ? "border-red-500/50 bg-red-500/5"
              : captchaStatus === "verified"
              ? "border-emerald-500/40 bg-emerald-500/5"
              : "border-white/10 hover:border-white/20"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                captchaStatus === "verified"
                  ? "bg-emerald-500 border-emerald-500 text-black"
                  : captchaStatus === "verifying"
                  ? "border-[#F59E0B] bg-transparent"
                  : "border-white/30 bg-white/5 hover:border-white/50"
              }`}
            >
              {captchaStatus === "verifying" && (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#F59E0B]" />
              )}
              {captchaStatus === "verified" && (
                <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" />
              )}
            </div>
            <div>
              <p className="text-[12px] font-medium text-white">
                {captchaStatus === "verified" ? t.verifiedCaptcha : t.notRobot}
              </p>
              <p className="text-[9px] text-white/30">{t.recaptchaSecurity}</p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            {/* reCAPTCHA Logo */}
            <div className="flex items-center gap-1 opacity-70">
              <svg className="w-5 h-5 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 6v6l4.24 2.12-.85 1.7L10.5 13V6z" />
              </svg>
              <span className="text-[8px] font-mono text-white/50 uppercase">reCAPTCHA</span>
            </div>
            <div className="flex gap-1.5 text-[8px] text-white/30 mt-0.5">
              <Link href="/privacy" className="hover:text-white underline">
                Privacy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white underline">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Error alert */}
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs mb-3 fade-up">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleLogin}
        disabled={loading}
        className="btn-aurora w-full flex items-center justify-center gap-2 py-3 rounded-xl mb-3 fade-up delay-3"
      >
        <span>{loading ? "..." : t.signIn}</span>
        {!loading && <ChevronRight className="w-4 h-4" />}
      </button>

      {/* Legal & Terms Acceptance notice */}
      <p className="text-[10px] text-white/35 text-center px-3 leading-relaxed mb-4 fade-up delay-3">
        {t.agreeTermsNotice}{" "}
        <Link href="/terms" className="text-[#F59E0B] underline hover:text-[#F59E0B]/80">
          {t.termsConditions}
        </Link>
        ,{" "}
        <Link href="/privacy" className="text-[#F59E0B] underline hover:text-[#F59E0B]/80">
          {t.privacyPolicy}
        </Link>{" "}
        {t.and}{" "}
        <Link href="/cookies" className="text-[#F59E0B] underline hover:text-[#F59E0B]/80">
          {t.cookiePolicy}
        </Link>
        .
      </p>

      {/* Demo Credentials Helper */}
      <div className="pt-2 text-center fade-up delay-3">
        <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">
          {t.demo} Credentials
        </p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleDemoLogin("EMP-SIH26041", "senar123", "worker")}
            className="px-2.5 py-1 rounded-lg glass text-[10px] text-white/60 hover:text-white transition-all font-mono active:scale-95"
          >
            Worker Demo
          </button>
          <button
            onClick={() => handleDemoLogin("SUP-SIH001", "admin123", "supervisor")}
            className="px-2.5 py-1 rounded-lg glass text-[10px] text-white/60 hover:text-white transition-all font-mono active:scale-95"
          >
            Supervisor Demo
          </button>
        </div>
      </div>

      {/* Support & Help Link */}
      <div className="mt-4 text-center">
        <Link
          href="/support"
          className="inline-flex items-center gap-1.5 text-[11px] text-white/40 hover:text-white/80 transition-colors"
        >
          <HelpCircle size={12} className="text-[#F59E0B]" />
          <span>{t.support}</span>
        </Link>
      </div>

      {/* Cookie Consent Floating Notification */}
      {!cookieAccepted && (
        <div className="mt-4 p-3 rounded-2xl glass-strong border border-white/10 flex items-center justify-between gap-3 text-left">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-white/70 leading-snug">
              🍪 {t.cookieNotice}{" "}
              <Link href="/cookies" className="text-[#F59E0B] underline">
                {t.cookiePreferences}
              </Link>
            </p>
          </div>
          <button
            onClick={() => setCookieAccepted(true)}
            className="px-2.5 py-1 rounded-lg bg-[#F59E0B] text-black font-bold text-[10px] shrink-0 active:scale-95 transition-all"
          >
            {t.acceptCookies}
          </button>
        </div>
      )}

      {/* Language Selector Modal */}
      {langModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-sm glass-strong rounded-3xl p-5 border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="text-[#F59E0B] w-5 h-5" />
                <h3 className="text-sm font-semibold text-white">Select Language / भाषा चुनें</h3>
              </div>
              <button
                onClick={() => setLangModal(false)}
                className="w-7 h-7 rounded-full glass flex items-center justify-center text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto no-scrollbar py-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangModal(false);
                  }}
                  className={`p-3 rounded-2xl text-left transition-all flex flex-col gap-1 ${
                    lang === l.code ? "glass-amber border border-[#F59E0B]" : "glass hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base">{l.flag}</span>
                    {lang === l.code && <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />}
                  </div>
                  <span className={`text-xs font-bold ${lang === l.code ? "text-[#F59E0B]" : "text-white"}`}>
                    {l.label}
                  </span>
                  <span className="text-[10px] text-white/40">{l.labelEn}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setLangModal(false)}
              className="w-full mt-4 py-2.5 rounded-xl glass text-xs font-semibold text-white/70 hover:text-white transition-all"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
