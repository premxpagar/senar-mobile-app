"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ScanLine, CheckCircle2, XCircle, HardHat, Award, Calendar, Clock, Search, Loader2, QrCode, RotateCcw, Camera, CameraOff } from "lucide-react";
import BottomNav from "../_components/BottomNav";
import { useI18n } from "../_lib/I18nProvider";

// Mock verification database
const WORKER_DB: Record<string, {
  name: string; department: string;
  certs: { moduleId: string; moduleName: string; score: number; issuedAt: string; expiresAt: string; status: "VALID" | "EXPIRED" }[];
}> = {
  "EMP-SIH26041": {
    name: "Rajan Kumar", department: "Workshop B",
    certs: [
      { moduleId: "FIRE-001", moduleName: "Fire & Explosion Safety", score: 97, issuedAt: "26 Sep 2026", expiresAt: "26 Sep 2027", status: "VALID" },
    ],
  },
  "EMP-SIH26042": {
    name: "Amit Sharma", department: "Electrical Unit",
    certs: [],
  },
  "EMP-SIH26043": {
    name: "Priya Devi", department: "Workshop A",
    certs: [
      { moduleId: "FIRE-001", moduleName: "Fire & Explosion Safety", score: 88, issuedAt: "25 Sep 2026", expiresAt: "25 Sep 2027", status: "VALID" },
    ],
  },
};

type ScanPhase = "idle" | "scanning" | "result" | "notfound";

interface VerifyResult {
  workerId: string;
  name: string;
  department: string;
  certs: typeof WORKER_DB[string]["certs"];
}

export default function ScanPage() {
  const router = useRouter();
  const { t } = useI18n();
  const [phase, setPhase]         = useState<ScanPhase>("idle");
  const [manualId, setManualId]   = useState("");
  const [result, setResult]       = useState<VerifyResult | null>(null);
  const [scanAnim, setScanAnim]   = useState(0);
  const [camState, setCamState]   = useState<"idle"|"active"|"denied"|"unavailable">("idle");
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("senar_user")) router.replace("/login");
  }, [router]);

  const startCameraStream = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) { setCamState("unavailable"); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) { videoRef.current.srcObject = stream; await videoRef.current.play(); }
      setCamState("active");
    } catch (e: unknown) {
      const err = e as { name?: string };
      setCamState(err?.name === "NotAllowedError" ? "denied" : "unavailable");
    }
  }, []);

  const stopCameraStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCamState("idle");
  }, []);

  useEffect(() => {
    return () => stopCameraStream();
  }, [stopCameraStream]);

  const startCameraScan = async () => {
    setPhase("scanning");
    setScanAnim(0);
    await startCameraStream();
    // Simulate QR detection after 3 seconds of real camera being open
    let progress = 0;
    animRef.current = setInterval(() => {
      progress += 2;
      setScanAnim(progress);
      if (progress >= 100) {
        clearInterval(animRef.current!);
        stopCameraStream();
        doVerify("EMP-SIH26041"); // Detected from QR
      }
    }, 60);
  };

  const doVerify = async (id: string) => {
    const clean = id.trim().toUpperCase();
    setPhase("scanning");
    await new Promise((r) => setTimeout(r, 600));

    let record: VerifyResult | null = null;

    // Try API first
    try {
      const res = await fetch(`http://localhost:8000/api/v1/verify/${clean}`);
      if (res.ok) record = await res.json();
    } catch { /* offline */ }

    // Fallback to mock DB
    if (!record) {
      const db = WORKER_DB[clean];
      if (db) record = { workerId: clean, name: db.name, department: db.department, certs: db.certs };
    }

    if (record) {
      setResult(record);
      setPhase("result");
    } else {
      setResult(null);
      setPhase("notfound");
    }
  };

  const reset = () => {
    setPhase("idle");
    setManualId("");
    setResult(null);
    setScanAnim(0);
    if (animRef.current) clearInterval(animRef.current);
    stopCameraStream();
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5">
      {/* Status */}
      <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40">
        <span>9:41</span>
      </div>

      {/* Header */}
      <div className="mb-5 fade-up">
        <h1 className="text-xl font-semibold tracking-tight text-white">{t.scanTitle}</h1>
        <p className="text-[12px] text-white/30 mt-0.5">{t.scanSubtitle}</p>
      </div>

      {/* ── IDLE ──────────────────────────────────────────────── */}
      {phase === "idle" && (
        <>
          {/* Camera viewfinder */}
          <div className="glass-strong rounded-3xl overflow-hidden mb-5 fade-up delay-1" style={{ aspectRatio: "1/1", position: "relative", minHeight: 280 }}>
            {/* Live camera preview */}
            <video
              ref={videoRef} autoPlay playsInline muted
              className="absolute inset-0 w-full h-full object-cover"
              style={{ display: camState === "active" ? "block" : "none" }}
            />
            <div className="relative w-full h-full flex flex-col items-center justify-center"
              style={{ background: camState === "active" ? "transparent" : "rgba(0,0,0,0.5)", minHeight: 280 }}>
              {/* Corner brackets */}
              {["tl","tr","bl","br"].map((pos) => (
                <div key={pos} className="absolute w-8 h-8 z-10" style={{
                  top:    pos.startsWith("t") ? 24 : undefined, bottom: pos.startsWith("b") ? 24 : undefined,
                  left:   pos.endsWith("l")   ? 24 : undefined, right:  pos.endsWith("r")   ? 24 : undefined,
                  borderTop:    pos.startsWith("t") ? "2px solid #F59E0B" : undefined,
                  borderBottom: pos.startsWith("b") ? "2px solid #F59E0B" : undefined,
                  borderLeft:   pos.endsWith("l")   ? "2px solid #F59E0B" : undefined,
                  borderRight:  pos.endsWith("r")   ? "2px solid #F59E0B" : undefined,
                  borderRadius: pos === "tl" ? "8px 0 0 0" : pos === "tr" ? "0 8px 0 0" : pos === "bl" ? "0 0 0 8px" : "0 0 8px 0",
                }} />
              ))}

              {camState !== "active" && (
                <>
                  <QrCode size={56} className="text-white/20 mb-3 z-10" />
                  <p className="text-[12px] text-white/40 text-center px-8 leading-relaxed z-10">{t.scanInstruction}</p>
                </>
              )}
              {camState === "denied" && (
                <p className="text-[11px] text-red-400 text-center px-8 mt-2 z-10">Camera blocked. Enable in browser settings.</p>
              )}

              <button
                onClick={startCameraScan}
                className="mt-5 flex items-center gap-2 bg-[#F59E0B] text-black px-6 py-3 rounded-2xl font-semibold text-[14px] active:scale-[0.97] transition-all glow-amber z-10"
              >
                <ScanLine size={16} /> {t.scanTitle}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-5 fade-up delay-2">
            <div className="flex-1 border-t border-white/10" />
            <span className="px-3 text-[10px] text-white/25 uppercase tracking-widest">{t.orEnterManually}</span>
            <div className="flex-1 border-t border-white/10" />
          </div>

          {/* Manual entry */}
          <div className="flex gap-2 fade-up delay-2">
            <div className="relative flex-1">
              <HardHat size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                className="field pl-10"
                placeholder={t.workerIdPlaceholder}
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
                autoCapitalize="characters"
                onKeyDown={(e) => e.key === "Enter" && manualId && doVerify(manualId)}
              />
            </div>
            <button
              onClick={() => manualId && doVerify(manualId)}
              disabled={!manualId}
              className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center font-bold transition-all active:scale-[0.95] disabled:opacity-30"
            >
              <Search size={16} />
            </button>
          </div>

        </>
      )}

      {/* ── SCANNING ──────────────────────────────────────────── */}
      {phase === "scanning" && (
        <div className="flex flex-col items-center justify-center flex-1 gap-6 fade-up" style={{ minHeight: 380 }}>
          <div className="glass-strong rounded-3xl overflow-hidden flex flex-col items-center gap-5 w-full">
            {/* Live camera during scanning */}
            <div className="relative w-full" style={{ aspectRatio: "1/1", minHeight: 200 }}>
              <video
                ref={videoRef} autoPlay playsInline muted
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: camState === "active" ? "block" : "none" }}
              />
              {camState !== "active" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                  <QrCode size={88} className="text-white/30" />
                </div>
              )}
              {/* Scanning line on top of camera */}
              <div className="absolute inset-x-0 h-0.5 bg-[#F59E0B] opacity-90 z-10"
                style={{ top: `${scanAnim}%`, transition: "top 0.06s linear", boxShadow: "0 0 10px rgba(245,158,11,0.9)" }} />
              {/* Corner brackets */}
              {["tl","tr","bl","br"].map((pos) => (
                <div key={pos} className="absolute w-8 h-8 z-10" style={{
                  top: pos.startsWith("t") ? 12 : undefined, bottom: pos.startsWith("b") ? 12 : undefined,
                  left: pos.endsWith("l") ? 12 : undefined, right: pos.endsWith("r") ? 12 : undefined,
                  borderTop: pos.startsWith("t") ? "2px solid #F59E0B" : undefined,
                  borderBottom: pos.startsWith("b") ? "2px solid #F59E0B" : undefined,
                  borderLeft: pos.endsWith("l") ? "2px solid #F59E0B" : undefined,
                  borderRight: pos.endsWith("r") ? "2px solid #F59E0B" : undefined,
                }} />
              ))}
            </div>
            <div className="px-8 pb-6 flex flex-col items-center gap-4 w-full">

              <div className="flex items-center gap-2">
                <Loader2 size={16} className="text-[#F59E0B] animate-spin" />
                <p className="text-[14px] font-medium text-white">{t.verifying}</p>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1 glass rounded-full overflow-hidden">
                <div className="h-full bg-[#F59E0B] rounded-full transition-all duration-75"
                  style={{ width: `${scanAnim}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── RESULT ────────────────────────────────────────────── */}
      {phase === "result" && result && (
        <div className="space-y-3 fade-up">
          {/* Verified badge */}
          <div className="glass-strong rounded-3xl overflow-hidden">
            <div className="h-px bg-gradient-to-r from-emerald-400 via-[#F59E0B] to-transparent" />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full glow-green flex items-center justify-center"
                  style={{ background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)" }}>
                  <CheckCircle2 size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white">{t.authenticCertificate}</p>
                  <p className="text-[11px] text-emerald-400">{t.verifiedRecord}</p>
                </div>
              </div>

              {/* Worker info */}
              <div className="glass rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 glass-amber rounded-full flex items-center justify-center font-bold text-[#F59E0B]">
                    {result.name.split(" ").map((n) => n[0]).join("").slice(0,2)}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{result.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <HardHat size={11} className="text-[#F59E0B]" />
                      <span className="text-[11px] font-mono text-white/30">{result.workerId}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-[11px] text-white/30">{result.department}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              {result.certs.length > 0 ? (
                result.certs.map((cert, i) => (
                  <div key={i} className="glass rounded-2xl p-4 mb-2 last:mb-0">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[13px] font-semibold text-white">{cert.moduleName}</p>
                      <span className="pill-passed text-[10px] font-bold px-2 py-0.5 rounded-full">{cert.status}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: <Award size={11} />,    label: t.score,   val: `${cert.score}%` },
                        { icon: <Calendar size={11} />, label: t.issued,  val: cert.issuedAt },
                        { icon: <Clock size={11} />,    label: t.expires, val: cert.expiresAt },
                      ].map((item) => (
                        <div key={item.label} className="glass rounded-xl p-2 text-center">
                          <div className="text-white/30 flex justify-center mb-0.5">{item.icon}</div>
                          <p className="text-[10px] text-white/25">{item.label}</p>
                          <p className="text-[11px] font-semibold text-white truncate">{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="glass rounded-2xl p-4 text-center">
                  <p className="text-[12px] text-white/40">No certificates earned yet</p>
                </div>
              )}
            </div>
          </div>

          <button onClick={reset} className="w-full glass rounded-2xl py-3.5 flex items-center justify-center gap-2 text-white/50 font-medium text-[13px]">
            <RotateCcw size={14} /> {t.scanAgain}
          </button>
        </div>
      )}

      {/* ── NOT FOUND ─────────────────────────────────────────── */}
      {phase === "notfound" && (
        <div className="flex flex-col items-center justify-center flex-1 gap-5 fade-up" style={{ minHeight: 300 }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center glow-red"
            style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)" }}>
            <XCircle size={32} className="text-red-400" />
          </div>
          <div className="text-center">
            <p className="text-[16px] font-semibold text-white mb-1">{t.noRecord}</p>
            <p className="text-[12px] text-white/30">ID: {manualId.toUpperCase()}</p>
          </div>
          <button onClick={reset} className="flex items-center gap-2 glass-amber text-[#F59E0B] px-6 py-3 rounded-2xl font-semibold text-[14px]">
            <RotateCcw size={15} /> {t.scanAgain}
          </button>
        </div>
      )}

      </div>{/* end page-scroll */}
      <BottomNav active="scan" />
    </div>
  );
}
