"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ChevronLeft, Camera, CameraOff, AlertTriangle, CheckCircle2,
  Timer, Volume2, VolumeX, Crosshair, Zap, RotateCcw, Home, Award
} from "lucide-react";
import { useI18n } from "../../_lib/I18nProvider";
import { type Translations } from "../../_lib/i18n";

interface ModuleMeta {
  id: string; name: string; icon: string; category: string;
  scenario: string; instruction: string; action: string; passMark: number;
}

const MODULES: Record<string, ModuleMeta> = {
  "FIRE-001": { id: "FIRE-001", name: "Fire & Explosion Safety",   icon: "🔥", category: "Fire",      scenario: "Electrical panel fire detected in Workshop B. Select correct extinguisher type.", instruction: "Aim CO₂ extinguisher at the base of the flame. Sweep side to side.", action: "USE CO₂ EXTINGUISHER", passMark: 70 },
  "ELEC-001": { id: "ELEC-001", name: "Electrical Hazard Control", icon: "⚡", category: "Electrical", scenario: "Live wire exposed near machinery. Apply LOTO procedure before maintenance.", instruction: "Step 1: Notify supervisor. Step 2: Isolate power. Step 3: Apply lockout tag.", action: "APPLY LOCKOUT TAG", passMark: 70 },
  "CHEM-001": { id: "CHEM-001", name: "Chemical Exposure & PPE",   icon: "🧪", category: "Chemical",  scenario: "Chemical spill detected — unknown substance. Don appropriate PPE before approach.", instruction: "Put on Level B PPE: respirator, chemical-resistant suit, and face shield.", action: "DON FULL PPE", passMark: 70 },
};

const QUIZ = [
  { q: "What class of fire extinguisher is used on electrical fires?", opts: ["Class A", "Class B", "Class C (CO₂)", "Class D"], ans: 2 },
  { q: "What does LOTO stand for?", opts: ["Lock-Out Tag-Out", "Lead-On Turn-Off", "Lock-Off Test-On", "None"], ans: 0 },
  { q: "Minimum safe distance from an unsecured electrical arc?", opts: ["0.5 m", "1 m", "2 m", "3 m"], ans: 2 },
];

type Phase = "brief" | "ar" | "quiz" | "result";

/* ─── Camera Hook ──────────────────────────────────────────────── */
function useCameraStream() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [camState, setCamState] = useState<"idle" | "active" | "denied" | "unavailable">("idle");

  const startCamera = useCallback(async () => {
    setCamState("idle");
    if (!navigator.mediaDevices?.getUserMedia) {
      setCamState("unavailable");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } },
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
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCamState("idle");
  }, []);

  return { videoRef, camState, startCamera, stopCamera };
}

/* ─── AR Phase Component ───────────────────────────────────────── */
function ARPhase({
  mod, timer, muted, done, t, onMuteToggle, onAction, fmt,
}: {
  mod: ModuleMeta; timer: number; muted: boolean; done: boolean;
  t: Translations; onMuteToggle: () => void;
  onAction: () => void; fmt: (s: number) => string;
}) {
  const { videoRef, camState, startCamera, stopCamera } = useCameraStream();

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  return (
    <div className="relative flex-1 flex flex-col min-h-full overflow-hidden bg-black">
      {/* Live camera feed */}
      <video
        ref={videoRef}
        autoPlay playsInline muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: camState === "active" ? "block" : "none" }}
      />

      {/* Fallback when camera unavailable */}
      {camState !== "active" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: "linear-gradient(135deg,#0a0f1e 0%,#0d1a2e 100%)" }}>
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.5) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
          {camState === "denied" ? (
            <>
              <CameraOff size={48} className="text-red-400" />
              <p className="text-xs text-red-400 font-semibold text-center px-8">Camera permission denied.<br/>Allow camera access in browser settings.</p>
            </>
          ) : camState === "unavailable" ? (
            <>
              <CameraOff size={48} className="text-white/30" />
              <p className="text-xs text-white/40 text-center px-8">Camera not available on this device.</p>
            </>
          ) : (
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Camera size={16} className="animate-pulse" />
              <span>Requesting camera…</span>
            </div>
          )}
          {/* Hazard icon for context even without camera */}
          <div className="relative mt-4">
            <span className="text-8xl animate-bounce">{mod.icon}</span>
            <div className="absolute -inset-4 border-2 border-dashed border-red-400/60 rounded-xl animate-pulse" />
          </div>
        </div>
      )}

      {/* AR Overlay — dark tint on camera */}
      {camState === "active" && (
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
      )}

      {/* AR grid overlay */}
      {camState === "active" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.8) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
      )}

      {/* Hazard detection box overlaid on camera */}
      {camState === "active" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <span className="text-7xl">{mod.icon}</span>
            <div className="absolute -inset-5 border-2 border-dashed border-red-400/70 rounded-xl animate-pulse" />
            <p className="text-center text-red-300 text-[10px] font-bold uppercase tracking-widest mt-3 glass rounded-full px-3 py-1">
              {t.targetDetected}
            </p>
          </div>
        </div>
      )}

      {/* Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Crosshair size={52} className="text-[#F59E0B]/25" />
      </div>

      {/* HUD top */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2 glass-strong rounded-full px-3 py-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${camState === "active" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
          <span className={`text-[11px] font-semibold tracking-wider ${camState === "active" ? "text-emerald-300" : "text-amber-300"}`}>
            {camState === "active" ? "CAMERA LIVE" : "CONNECTING"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onMuteToggle} className="w-8 h-8 glass rounded-full flex items-center justify-center text-white/50">
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-[11px] font-mono text-white/70">
            <Timer size={12} className="text-[#F59E0B]" />
            <span>{fmt(timer)}</span>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="relative z-10 mt-auto px-5 pb-8 space-y-3">
        <div className="glass-strong rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={13} className="text-[#F59E0B]" />
            <span className="text-[11px] font-semibold text-[#F59E0B] uppercase tracking-wider">{t.instruction}</span>
          </div>
          <p className="text-[13px] text-white">{mod.instruction}</p>
        </div>

        <button
          onClick={onAction}
          disabled={done}
          className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all ${
            done ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/30" : "btn-aurora"
          }`}
        >
          {done ? `✓ ${t.actionCompleted}` : mod.action}
        </button>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────────── */
export default function TrainingPage() {
  const router = useRouter();
  const { moduleId } = useParams<{ moduleId: string }>();
  const { t } = useI18n();
  const mod = MODULES[moduleId] ?? MODULES["FIRE-001"];
  const [phase, setPhase]         = useState<Phase>("brief");
  const [timer, setTimer]         = useState(0);
  const [muted, setMuted]         = useState(false);
  const [done, setDone]           = useState(false);
  const [quizIdx, setQuizIdx]     = useState(0);
  const [selected, setSelected]   = useState<number | null>(null);
  const [correct, setCorrect]     = useState(0);
  const [syncing, setSyncing]     = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase === "ar") intervalRef.current = setInterval(() => setTimer((tt) => tt + 1), 1000);
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2,"0")}:${String(s % 60).padStart(2,"0")}`;
  const handleAction = () => { setDone(true); setTimeout(() => setPhase("quiz"), 1100); };

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    const ok = idx === QUIZ[quizIdx].ans;
    if (ok) setCorrect((c) => c + 1);
    setTimeout(() => {
      setSelected(null);
      if (quizIdx + 1 < QUIZ.length) { setQuizIdx((q) => q + 1); }
      else { setPhase("result"); syncResult(ok ? correct + 1 : correct); }
    }, 750);
  };

  const syncResult = async (finalCorrect: number) => {
    setSyncing(true);
    const u = JSON.parse(sessionStorage.getItem("senar_user") || "{}");
    const practical = 100, theory = Math.round((finalCorrect / QUIZ.length) * 100), final = Math.round((100 + theory) / 2);
    sessionStorage.setItem("senar_last_result", JSON.stringify({ finalScore: final, status: final >= mod.passMark ? "PASSED" : "FAILED", practicalScore: practical, theoryScore: theory, duration: timer }));
    try {
      await fetch("http://localhost:8000/api/v1/sync", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_attempt_uuid: crypto.randomUUID(), worker_id: u.workerId, module_code: mod.id, practical_score: practical, theory_score: theory, final_score: final, status: final >= mod.passMark ? "PASSED" : "FAILED", duration: timer, completed_at: new Date().toISOString(), answers: [] }),
      });
    } catch { /* offline */ }
    setSyncing(false);
  };

  const result = (() => { const r = sessionStorage.getItem("senar_last_result"); return r ? JSON.parse(r) : null; })();

  /* ─── BRIEF ─────────────────────────────────────── */
  if (phase === "brief") return (
    <div className="flex flex-col min-h-full px-5" style={{ paddingBottom: 0 }}>
      <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>
      <div className="flex items-center gap-3 mb-6 fade-up">
        <button onClick={() => router.back()} className="w-9 h-9 glass rounded-full flex items-center justify-center">
          <ChevronLeft size={17} className="text-white/60" />
        </button>
        <div>
          <p className="text-[11px] text-white/30">{mod.id} · {mod.category}</p>
          <h1 className="text-[17px] font-semibold text-white tracking-tight">{mod.name}</h1>
        </div>
      </div>

      <div className="flex justify-center mb-6 fade-up delay-1"><span className="text-8xl">{mod.icon}</span></div>

      <div className="glass-strong rounded-3xl p-5 mb-4 fade-up delay-1 space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle size={14} className="text-[#F59E0B]" />
          <span className="text-[11px] font-semibold text-[#F59E0B] uppercase tracking-widest">{t.scenario}</span>
        </div>
        <p className="text-[14px] text-white leading-relaxed">{mod.scenario}</p>
      </div>

      <div className="glass rounded-3xl p-5 mb-5 fade-up delay-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] text-white/30 uppercase tracking-widest font-semibold">{t.instruction}</p>
          <button onClick={() => setMuted(!muted)} className="text-white/40 hover:text-white">
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#F59E0B]" />}
          </button>
        </div>
        <p className="text-[13px] text-white/70 leading-relaxed">{mod.instruction}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6 fade-up delay-2">
        {[["~25m", t.duration], [`${mod.passMark}%`, t.passMark], ["3 Q", t.quiz]].map(([val, lbl]) => (
          <div key={lbl} className="glass rounded-2xl py-3 text-center">
            <p className="text-[15px] font-bold text-[#F59E0B]">{val}</p>
            <p className="text-[10px] text-white/30 mt-0.5">{lbl}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 glass rounded-2xl px-4 py-3 mb-4 fade-up delay-2">
        <Camera size={13} className="text-[#F59E0B] shrink-0" />
        <p className="text-[11px] text-white/40">Camera mode uses your device camera for live hazard simulation. Allow access when prompted.</p>
      </div>

      <button onClick={() => setPhase("ar")} className="btn-aurora w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold fade-up delay-3">
        <Camera size={18} /> Start Camera Simulation
      </button>
    </div>
  );

  /* ─── AR ─────────────────────────────────────────── */
  if (phase === "ar") return (
    <ARPhase
      mod={mod} timer={timer} muted={muted} done={done}
      t={t}
      onMuteToggle={() => setMuted((m) => !m)}
      onAction={handleAction}
      fmt={fmt}
    />
  );

  /* ─── QUIZ ───────────────────────────────────────── */
  if (phase === "quiz") {
    const cur = QUIZ[quizIdx];
    return (
      <div className="flex flex-col min-h-full px-5" style={{ paddingBottom: 0 }}>
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>
        <div className="flex items-center justify-between mb-4 fade-up">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="text-xs font-semibold text-[#F59E0B] tracking-wider uppercase">{t.knowledgeCheck}</span>
          </div>
          <span className="text-xs font-mono text-white/30">{quizIdx + 1} / {QUIZ.length}</span>
        </div>

        <div className="h-1 bg-white/10 rounded-full mb-6 overflow-hidden fade-up">
          <div className="h-full bg-[#F59E0B] transition-all duration-300" style={{ width: `${((quizIdx + 1) / QUIZ.length) * 100}%` }} />
        </div>

        <div className="glass-strong rounded-3xl p-5 mb-5 fade-up delay-1">
          <span className="text-[11px] font-mono text-white/30 uppercase">{t.questionOf} {quizIdx + 1}</span>
          <p className="text-base font-semibold text-white mt-2 leading-relaxed">{cur.q}</p>
        </div>

        <div className="space-y-2.5 mb-6 fade-up delay-2">
          {cur.opts.map((opt, i) => {
            const isSel = selected === i;
            const isAns = isSel && i === cur.ans;
            const isWrong = isSel && i !== cur.ans;
            return (
              <button
                key={opt}
                disabled={selected !== null}
                onClick={() => handleAnswer(i)}
                className={`w-full p-4 rounded-2xl text-left text-sm font-medium transition-all active:scale-[0.98] ${
                  isAns   ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 border" :
                  isWrong ? "bg-red-500/20 border-red-400 text-red-300 border" :
                  "glass text-white/80 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {isAns   && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
                  {isWrong && <span className="text-red-400 text-xs font-bold">✕</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  /* ─── RESULT ─────────────────────────────────────── */
  const passed = result ? result.status === "PASSED" : false;
  return (
    <div className="flex flex-col min-h-full px-5" style={{ paddingBottom: 0 }}>
      <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>

      <div className="flex flex-col items-center pt-6 pb-6 text-center fade-up">
        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-4 ${
          passed ? "glass-amber text-emerald-400 shadow-xl shadow-emerald-500/10" : "glass text-red-400"
        }`}>
          {passed ? "🏆" : "⚠️"}
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          {passed ? t.simulationPassed : t.notPassed}
        </h1>
        <p className="text-xs text-white/40 mt-1">
          {passed ? t.certWillBeIssued : t.reviewAndRetry}
        </p>
      </div>

      {result && (
        <div className="glass-strong rounded-3xl p-5 mb-5 fade-up delay-1 space-y-3">
          <div className="flex justify-between text-sm py-1 border-b border-white/5">
            <span className="text-white/40">{t.practicalScore}</span>
            <span className="font-bold text-white font-mono">{result.practicalScore}%</span>
          </div>
          <div className="flex justify-between text-sm py-1 border-b border-white/5">
            <span className="text-white/40">{t.theoryScore}</span>
            <span className="font-bold text-white font-mono">{result.theoryScore}%</span>
          </div>
          <div className="flex justify-between text-sm py-1 border-b border-white/5">
            <span className="text-white/40">{t.finalScore}</span>
            <span className={`font-bold font-mono text-base ${passed ? "text-emerald-400" : "text-red-400"}`}>
              {result.finalScore}%
            </span>
          </div>
          <div className="flex justify-between text-xs py-1 text-white/30 font-mono">
            <span>{t.timeTaken}</span>
            <span>{fmt(result.duration)}</span>
          </div>
        </div>
      )}

      <div className="space-y-3 fade-up delay-2">
        {passed ? (
          <button onClick={() => router.push("/certificates")} className="btn-aurora w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold">
            <Award size={17} /> {t.viewCertificate}
          </button>
        ) : (
          <button onClick={() => setPhase("brief")} className="btn-aurora w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold">
            <RotateCcw size={17} /> {t.retryModule}
          </button>
        )}
        <button onClick={() => router.push("/home")} className="w-full py-3.5 rounded-2xl glass text-xs font-semibold text-white/50 hover:text-white transition-all flex items-center justify-center gap-1.5">
          <Home size={14} /> {t.returnHome}
        </button>
      </div>
    </div>
  );
}
