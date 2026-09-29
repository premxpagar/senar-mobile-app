"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft, Globe, LogOut, CheckCircle, XCircle, ShieldCheck,
  RefreshCw, HardHat, Check, ChevronRight, FileText, Lock, Cookie,
  CreditCard, HelpCircle, MailCheck, AlertOctagon
} from "lucide-react";
import BottomNav from "../_components/BottomNav";
import { useI18n } from "../_lib/I18nProvider";
import { type LangCode } from "../_lib/i18n";

interface U { workerId: string; name: string; role: string; language: string; authProvider?: string; }
const HISTORY = [
  { module: "Fire & Explosion Safety",   status: "PASSED", score: 97, date: "26 Sep 2026, 10:32" },
  { module: "Electrical Hazard Control", status: "FAILED", score: 58, date: "25 Sep 2026, 14:14" },
  { module: "Electrical Hazard Control", status: "FAILED", score: 44, date: "24 Sep 2026, 09:55" },
];

export default function ProfilePage() {
  const router = useRouter();
  const { t, lang, setLang, languages } = useI18n();
  const [user, setUser]         = useState<U | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [syncing, setSyncing]   = useState(false);
  const [syncDone, setSyncDone] = useState(false);

  useEffect(() => {
    const s = sessionStorage.getItem("senar_user");
    if (!s) { router.replace("/login"); return; }
    setUser(JSON.parse(s));
  }, [router]);

  const doSync = async () => {
    setSyncing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSyncing(false); setSyncDone(true);
    setTimeout(() => setSyncDone(false), 3000);
  };

  const handleLangChange = (code: LangCode) => {
    setLang(code);
    setLangOpen(false);
  };

  if (!user) return null;
  const passRate = HISTORY.length ? Math.round((HISTORY.filter((a) => a.status === "PASSED").length / HISTORY.length) * 100) : 0;
  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const userAvatar = user.workerId === "SUP-SIH001"
    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces&q=80"
    : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&q=80";

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5 pb-6">
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40">
          <span>9:41</span>
        </div>

        <div className="flex items-center gap-3 mb-5 fade-up">
          <button onClick={() => router.back()} className="w-9 h-9 glass rounded-full flex items-center justify-center active:scale-95">
            <ChevronLeft size={17} className="text-white/60" />
          </button>
          <h1 className="text-xl font-semibold tracking-tight text-white">{t.myProfile}</h1>
        </div>

        {/* Real Human Avatar */}
        <div className="flex flex-col items-center pb-6 fade-up delay-1">
          <div className="relative mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={userAvatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-[#F59E0B]/30 shadow-xl"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-black" />
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight">{user.name}</h2>
          <div className="flex items-center gap-1.5 mt-1">
            <HardHat size={12} className="text-[#F59E0B]" />
            <span className="text-xs font-mono text-white/40">{user.workerId}</span>
          </div>
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-amber text-[11px] font-semibold text-[#F59E0B]">
            <ShieldCheck size={12} />
            <span>{t.compliant} · JHARKHAND-SEC</span>
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-2 mb-5 fade-up delay-1">
          {[
            { label: t.attemptCount, val: HISTORY.length, color: "text-white" },
            { label: t.passRate,     val: `${passRate}%`, color: "text-emerald-400" },
            { label: t.certsEarned,  val: 1,              color: "text-[#F59E0B]" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-3 text-center">
              <p className={`text-base font-bold ${s.color}`}>{s.val}</p>
              <p className="text-[10px] text-white/30 font-medium mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Settings & Language */}
        <div className="glass-strong rounded-3xl p-4 mb-4 space-y-3 fade-up delay-2">
          <h3 className="text-[12px] font-semibold text-white/40 uppercase tracking-wider">{t.settings}</h3>

          {/* Language selector */}
          <div>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="w-full flex items-center justify-between py-1 text-left"
            >
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-[#F59E0B]" />
                <div>
                  <p className="text-[13px] font-medium text-white">{t.language}</p>
                  <p className="text-[11px] text-white/30">{currentLang.flag} {currentLang.label} ({currentLang.labelEn})</p>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#F59E0B] px-2 py-0.5 rounded-full glass">
                {langOpen ? "Close" : "Change"}
              </span>
            </button>

            {langOpen && (
              <div className="grid grid-cols-2 gap-1.5 mt-3 pt-3 border-t border-white/5 animate-fade-in">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangChange(l.code)}
                    className={`p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                      lang === l.code ? "glass-amber text-[#F59E0B] font-bold" : "glass text-white/70 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span>{l.flag}</span>
                      <span className="truncate">{l.label}</span>
                    </div>
                    {lang === l.code && <Check size={12} className="shrink-0 text-[#F59E0B]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sync */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RefreshCw size={16} className={`text-emerald-400 ${syncing ? "animate-spin" : ""}`} />
              <div>
                <p className="text-[13px] font-medium text-white">{t.syncData}</p>
                <p className="text-[11px] text-white/30">{syncDone ? t.allSynced : t.uploadPending}</p>
              </div>
            </div>
            <button
              onClick={doSync}
              disabled={syncing}
              className="px-3 py-1.5 rounded-xl glass text-[11px] font-semibold text-white/70 hover:text-white transition-all disabled:opacity-50"
            >
              {syncing ? t.syncing : syncDone ? "✓" : "Sync"}
            </button>
          </div>
        </div>

        {/* Legal, Security & Policies Section */}
        <div className="glass-strong rounded-3xl p-4 mb-4 space-y-2 fade-up delay-2">
          <h3 className="text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-1">
            {t.legalAndPolicies}
          </h3>

          {[
            { label: t.termsConditions, path: "/terms", icon: FileText, color: "text-[#F59E0B]" },
            { label: t.privacyPolicy, path: "/privacy", icon: Lock, color: "text-emerald-400" },
            { label: t.cookiePolicy, path: "/cookies", icon: Cookie, color: "text-amber-400" },
            { label: t.refundPolicy, path: "/refund", icon: CreditCard, color: "text-cyan-400" },
            { label: t.support, path: "/support", icon: HelpCircle, color: "text-purple-400" },
            { label: t.plansPayment, path: "/payment", icon: CreditCard, color: "text-green-400" },
            { label: "Email Verification", path: "/verify-email", icon: MailCheck, color: "text-blue-400" },
            { label: "Maintenance Status", path: "/maintenance", icon: AlertOctagon, color: "text-orange-400" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-xl transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={15} className={item.color} />
                  <span className="text-[13px] font-medium text-white/80">{item.label}</span>
                </div>
                <ChevronRight size={14} className="text-white/30" />
              </Link>
            );
          })}
        </div>

        {/* Attempt History */}
        <h3 className="text-[13px] font-semibold text-white/40 uppercase tracking-wider mb-2 fade-up delay-3">
          {t.attemptHistory}
        </h3>
        <div className="space-y-2 mb-5 fade-up delay-3">
          {HISTORY.map((h, i) => (
            <div key={i} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
              {h.status === "PASSED" ? (
                <CheckCircle size={16} className="text-emerald-400 shrink-0" />
              ) : (
                <XCircle size={16} className="text-red-400 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white truncate">{h.module}</p>
                <p className="text-[11px] text-white/30">{h.date}</p>
              </div>
              <span className={`text-xs font-bold font-mono ${h.status === "PASSED" ? "text-emerald-400" : "text-red-400"}`}>
                {h.score}%
              </span>
            </div>
          ))}
        </div>

        {/* Sign out */}
        <button
          onClick={() => { sessionStorage.clear(); router.replace("/login"); }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl glass text-xs font-semibold text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-all fade-up delay-3"
        >
          <LogOut size={14} />
          <span>{t.signOut}</span>
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
