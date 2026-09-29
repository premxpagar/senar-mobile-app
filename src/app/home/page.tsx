"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  HardHat, ChevronRight, CheckCircle, XCircle, Wifi, WifiOff,
  Globe, QrCode, Camera, CameraOff, Video
} from "lucide-react";
import BottomNav from "../_components/BottomNav";
import { useI18n } from "../_lib/I18nProvider";
import { getLocalizedModule } from "../_lib/i18n";

interface UserSession { workerId: string; name: string; role: string; language: string; }

const BASE_MODULES = [
  { id: "FIRE-001", icon: "🔥", category: "Fire",       status: "PASSED",  score: 97 },
  { id: "ELEC-001", icon: "⚡", category: "Electrical", status: "FAILED",  score: 58 },
  { id: "CHEM-001", icon: "🧪", category: "Chemical",   status: "PENDING", score: 0  },
  { id: "MECH-001", icon: "⚙️", category: "Mechanical", status: "LOCKED",  score: 0  },
];

// Real human worker portraits from internet (Unsplash curated high-res portraits)
const DEMO_WORKERS = [
  {
    id: "EMP-SIH26041",
    name: "Rajan Kumar",
    dept: "Workshop B",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&q=80",
    online: true,
  },
  {
    id: "EMP-SIH26042",
    name: "Amit Sharma",
    dept: "Electrical Unit",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
    online: true,
  },
  {
    id: "EMP-SIH26043",
    name: "Priya Devi",
    dept: "Workshop A",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80",
    online: true,
  },
  {
    id: "EMP-SIH26044",
    name: "Sunita Murmu",
    dept: "Chemical Unit",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces&q=80",
    online: true,
  },
];

function CameraMonitor({ t }: { t: ReturnType<typeof useI18n>["t"] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [camState, setCamState] = useState<"idle" | "active" | "denied" | "unavailable">("idle");
  const [expanded, setExpanded] = useState(false);

  const startCamera = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) { setCamState("unavailable"); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCamState("active");
    } catch (e: unknown) {
      const err = e as { name?: string };
      setCamState(err?.name === "NotAllowedError" ? "denied" : "unavailable");
    }
  }, []);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((trk) => trk.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCamState("idle");
  }, []);

  useEffect(() => {
    if (expanded) startCamera(); else stopCamera();
    return () => stopCamera();
  }, [expanded, startCamera, stopCamera]);

  return (
    <div className="glass-strong rounded-3xl overflow-hidden mb-4 fade-up delay-2">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${camState === "active" ? "bg-emerald-400 animate-pulse" : "bg-white/20"}`} />
          <span className="text-[12px] font-semibold text-white">{t.siteCameraMonitor}</span>
        </div>
        <button
          onClick={() => setExpanded((e) => !e)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all active:scale-95 ${
            expanded ? "glass-amber text-[#F59E0B]" : "glass text-white/60"
          }`}
        >
          {expanded ? <CameraOff size={12} /> : <Camera size={12} />}
          {expanded ? t.stopCamera : t.startCamera}
        </button>
      </div>

      {expanded && (
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
            style={{ display: camState === "active" ? "block" : "none" }}
          />
          {camState === "active" && (
            <>
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(245,158,11,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.8) 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {["tl", "tr", "bl", "br"].map((pos) => (
                <div
                  key={pos}
                  className="absolute w-6 h-6 z-10"
                  style={{
                    top: pos.startsWith("t") ? 10 : undefined,
                    bottom: pos.startsWith("b") ? 10 : undefined,
                    left: pos.endsWith("l") ? 10 : undefined,
                    right: pos.endsWith("r") ? 10 : undefined,
                    borderTop: pos.startsWith("t") ? "2px solid #F59E0B" : undefined,
                    borderBottom: pos.startsWith("b") ? "2px solid #F59E0B" : undefined,
                    borderLeft: pos.endsWith("l") ? "2px solid #F59E0B" : undefined,
                    borderRight: pos.endsWith("r") ? "2px solid #F59E0B" : undefined,
                  }}
                />
              ))}
              <div className="absolute top-2 right-3 flex items-center gap-1 glass-strong rounded-full px-2 py-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-[10px] font-bold text-red-300 tracking-widest">LIVE</span>
              </div>
            </>
          )}
          {camState !== "active" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/80">
              {camState === "denied" && (
                <>
                  <CameraOff size={28} className="text-red-400" />
                  <p className="text-[11px] text-red-400 text-center px-6">Camera blocked. Enable permissions in settings.</p>
                </>
              )}
              {camState === "unavailable" && (
                <>
                  <CameraOff size={28} className="text-white/30" />
                  <p className="text-[11px] text-white/40 text-center px-6">Camera not available.</p>
                </>
              )}
              {camState === "idle" && (
                <div className="flex items-center gap-2 text-white/30 text-[11px]">
                  <Video size={14} className="animate-pulse" />
                  <span>Starting camera…</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {!expanded && (
        <div className="px-4 pb-3">
          <p className="text-[11px] text-white/30">{t.cameraHint}</p>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const { t, lang, setLang, languages } = useI18n();
  const [user, setUser]       = useState<UserSession | null>(null);
  const [online, setOnline]   = useState(true);
  const [greeting, setGreeting] = useState("Good morning");
  const [langModal, setLangModal] = useState(false);

  useEffect(() => {
    const s = sessionStorage.getItem("senar_user");
    if (!s) { router.replace("/login"); return; }
    setUser(JSON.parse(s));
    const h = new Date().getHours();
    setGreeting(h < 12 ? t.goodMorning : h < 17 ? t.goodAfternoon : t.goodEvening);
    setOnline(navigator.onLine);
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, [router, t]);

  if (!user) return null;

  const passed  = BASE_MODULES.filter((m) => m.status === "PASSED").length;
  const total   = BASE_MODULES.filter((m) => m.status !== "LOCKED").length;
  const percent = Math.round((passed / total) * 100);
  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const recent = [
    {
      moduleId: "FIRE-001",
      name: getLocalizedModule("FIRE-001", t)?.name || "Fire & Explosion Safety",
      status: "PASSED",
      score: 97,
      date: "Today, 10:32 AM",
    },
    {
      moduleId: "ELEC-001",
      name: getLocalizedModule("ELEC-001", t)?.name || "Electrical Hazard Control",
      status: "FAILED",
      score: 58,
      date: "Yesterday, 2:14 PM",
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Scrollable content */}
      <div className="page-scroll px-5 pt-0 pb-4">
        {/* Status bar */}
        <div className="flex justify-between items-center pt-1 pb-3 text-[11px] text-white/40 font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            {online ? <Wifi size={11} className="text-emerald-400" /> : <WifiOff size={11} className="text-red-400" />}
            <span className={online ? "text-emerald-400" : "text-red-400"}>{online ? t.synced : t.offline}</span>
            <div className="w-5 h-2.5 border border-white/20 rounded-sm p-px ml-1">
              <div className="w-3/4 h-full bg-[#F59E0B] rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="flex items-center justify-between mb-4 fade-up">
          <div>
            <p className="text-[13px] text-white/40">{greeting},</p>
            <h1 className="text-xl font-semibold tracking-tight text-white">{user.name.split(" ")[0]} 👋</h1>
            <div className="flex items-center gap-1.5 mt-1">
              <HardHat size={11} className="text-[#F59E0B]" />
              <span className="text-[11px] font-mono text-white/30">{user.workerId}</span>
            </div>
          </div>
          <button
            onClick={() => setLangModal(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-amber text-[12px] font-medium text-[#F59E0B] transition-all hover:scale-105 active:scale-95 shadow-sm"
            title="Change Language"
          >
            <Globe size={13} />
            <span>{currentLang.label}</span>
          </button>
        </div>

        {/* Progress card */}
        <div className="glass-strong rounded-3xl p-5 mb-4 fade-up delay-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[12px] text-white/40 font-medium">{t.trainingProgress}</p>
              <p className="text-3xl font-bold text-white mt-0.5">{percent}%</p>
              <p className="text-[11px] text-white/30 mt-0.5">{passed} {t.modulesOf}</p>
            </div>
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 40 40" className="w-16 h-16 -rotate-90">
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={`${percent} ${100 - percent}`}
                  pathLength={100}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white">
                {passed}/{total}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: t.passed,  val: BASE_MODULES.filter((m) => m.status === "PASSED").length, color: "text-emerald-400" },
              { label: t.pending, val: BASE_MODULES.filter((m) => ["PENDING", "FAILED"].includes(m.status)).length, color: "text-[#F59E0B]" },
              { label: t.locked,  val: BASE_MODULES.filter((m) => m.status === "LOCKED").length, color: "text-white/30" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-3 text-center">
                <p className={`text-lg font-bold ${s.color}`}>{s.val}</p>
                <p className="text-[10px] text-white/30 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick scan banner */}
        <div
          onClick={() => router.push("/scan")}
          className="glass rounded-2xl p-3.5 mb-4 flex items-center justify-between cursor-pointer border border-[#F59E0B]/20 hover:border-[#F59E0B]/50 transition-all active:scale-[0.98] fade-up delay-1"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-amber flex items-center justify-center">
              <QrCode className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white">{t.scanTitle}</p>
              <p className="text-[11px] text-white/40">{t.scanSubtitle}</p>
            </div>
          </div>
          <ChevronRight size={16} className="text-white/40" />
        </div>

        {/* Camera Monitor */}
        <CameraMonitor t={t} />

        {/* Workers on site with REAL human portrait photos */}
        <div className="mb-4 fade-up delay-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[14px] font-semibold text-white">{t.workersOnSite}</h2>
            <button
              onClick={() => router.push("/scan")}
              className="text-[11px] text-[#F59E0B] font-medium hover:underline"
            >
              {t.verifyAll}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {DEMO_WORKERS.map((w) => (
              <button
                key={w.id}
                onClick={() => router.push(`/verify/${w.id}`)}
                className="glass rounded-2xl p-2.5 flex flex-col items-center gap-1.5 active:scale-95 transition-all text-center group border border-white/5 hover:border-white/20"
              >
                <div className="relative">
                  {/* Real Human Face Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.avatar}
                    alt={w.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#F59E0B]/50 transition-all shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-black" />
                </div>
                <div className="w-full">
                  <p className="text-[11px] font-semibold text-white truncate">{w.name.split(" ")[0]}</p>
                  <p className="text-[9px] text-white/35 truncate">{w.dept.split(" ")[0]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div className="flex items-center justify-between mb-3 fade-up delay-2">
          <h2 className="text-[15px] font-semibold text-white tracking-tight">{t.modules}</h2>
          <button
            onClick={() => router.push("/modules")}
            className="flex items-center gap-1 text-[12px] text-[#F59E0B] font-medium"
          >
            {t.viewAll} <ChevronRight size={13} />
          </button>
        </div>

        <div className="space-y-2.5 mb-5 fade-up delay-2">
          {BASE_MODULES.slice(0, 3).map((mod) => {
            const loc = getLocalizedModule(mod.id, t);
            const title = loc?.name || mod.id;
            return (
              <button
                key={mod.id}
                disabled={mod.status === "LOCKED"}
                onClick={() => router.push(`/training/${mod.id}`)}
                className="w-full glass rounded-2xl p-4 flex items-center gap-3 text-left transition-all active:scale-[0.98] disabled:opacity-40"
              >
                <span className="text-2xl">{mod.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-white truncate">{title}</p>
                  <p className="text-[11px] text-white/30 mt-0.5">{mod.category} · {mod.id}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      mod.status === "PASSED"
                        ? "pill-passed"
                        : mod.status === "FAILED"
                        ? "pill-failed"
                        : mod.status === "PENDING"
                        ? "pill-pending"
                        : "pill-locked"
                    }`}
                  >
                    {mod.status === "PASSED"
                      ? t.passed
                      : mod.status === "FAILED"
                      ? t.failed
                      : mod.status === "PENDING"
                      ? t.pending
                      : t.locked}
                  </span>
                  {mod.score > 0 && <span className="text-[11px] font-mono text-white/30">{mod.score}%</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Recent activity */}
        <h2 className="text-[15px] font-semibold text-white tracking-tight mb-3 fade-up delay-3">
          {t.recentActivity}
        </h2>
        <div className="space-y-2 fade-up delay-3">
          {recent.map((a, i) => (
            <div key={i} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
              {a.status === "PASSED" ? (
                <CheckCircle size={17} className="text-emerald-400 shrink-0" />
              ) : (
                <XCircle size={17} className="text-red-400 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white truncate">{a.name}</p>
                <p className="text-[11px] text-white/30">{a.date}</p>
              </div>
              <span className={`text-sm font-bold font-mono ${a.status === "PASSED" ? "text-emerald-400" : "text-red-400"}`}>
                {a.score}%
              </span>
            </div>
          ))}
        </div>

        {/* Footer Links to all compliance & support pages */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-x-3 gap-y-1.5 justify-center pb-2">
          {[
            [t.privacyPolicy, "/privacy"],
            [t.termsConditions, "/terms"],
            [t.cookiePolicy, "/cookies"],
            [t.refundPolicy, "/refund"],
            [t.support, "/support"],
            [t.plansPayment, "/payment"],
          ].map(([label, href]) => (
            <button
              key={href}
              onClick={() => router.push(href)}
              className="text-[10px] text-white/30 hover:text-[#F59E0B] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Language Modal */}
      {langModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="w-full glass-strong rounded-3xl p-5 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="text-[#F59E0B] w-5 h-5" />
                <h3 className="text-base font-semibold text-white">Select Language / भाषा चुनें</h3>
              </div>
              <button
                onClick={() => setLangModal(false)}
                className="w-7 h-7 rounded-full glass flex items-center justify-center text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto no-scrollbar">
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
                  <span className={`text-sm font-bold ${lang === l.code ? "text-[#F59E0B]" : "text-white"}`}>
                    {l.label}
                  </span>
                  <span className="text-[10px] text-white/40">{l.labelEn}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setLangModal(false)}
              className="w-full mt-4 py-2.5 rounded-xl glass text-xs font-semibold text-white/70 hover:text-white"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <BottomNav active="home" />
    </div>
  );
}
