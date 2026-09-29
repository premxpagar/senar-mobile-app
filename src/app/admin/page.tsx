"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Users, CheckCircle, XCircle, BarChart3, RefreshCw, AlertTriangle, LogOut, TrendingUp, ShieldCheck, QrCode, Sparkles, ExternalLink } from "lucide-react";
import { useI18n } from "../_lib/I18nProvider";

interface Attempt { id: string; workerName: string; workerId: string; module: string; score: number; status: string; timeTaken: string; }

const MOCK: Attempt[] = [
  { id: "1", workerName: "Rajan Kumar",   workerId: "EMP-SIH26041", module: "FIRE-001", score: 97, status: "PASSED", timeTaken: "24m 15s" },
  { id: "2", workerName: "Amit Sharma",   workerId: "EMP-SIH26042", module: "ELEC-001", score: 58, status: "FAILED", timeTaken: "28m 03s" },
  { id: "3", workerName: "Priya Devi",    workerId: "EMP-SIH26043", module: "FIRE-001", score: 88, status: "PASSED", timeTaken: "20m 11s" },
  { id: "4", workerName: "Suresh Mahato", workerId: "EMP-SIH26044", module: "CHEM-001", score: 41, status: "FAILED", timeTaken: "18m 45s" },
  { id: "5", workerName: "Kavita Singh",  workerId: "EMP-SIH26045", module: "ELEC-001", score: 79, status: "PASSED", timeTaken: "31m 20s" },
];

export default function AdminPage() {
  const router = useRouter();
  const { t }   = useI18n();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading]   = useState(true);
  const [filter, setFilter]     = useState<"ALL" | "PASSED" | "FAILED">("ALL");
  const [lastSync, setLastSync] = useState("Just now");
  const [genWorkerId, setGenWorkerId] = useState("EMP-SIH26041");
  const [showQrGen, setShowQrGen] = useState(false);

  useEffect(() => {
    const s = sessionStorage.getItem("senar_user");
    if (!s) { router.replace("/login"); return; }
    const u = JSON.parse(s);
    if (u.role !== "supervisor") { router.replace("/home"); return; }
    load();
  }, [router]);

  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch("http://localhost:8000/api/v1/admin/attempts");
      setAttempts(r.ok ? await r.json() : MOCK);
    } catch { setAttempts(MOCK); }
    setLoading(false);
    setLastSync(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const shown = filter === "ALL" ? attempts : attempts.filter((a) => a.status === filter);
  const passRate = attempts.length ? Math.round((attempts.filter((a) => a.status === "PASSED").length / attempts.length) * 100) : 0;

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5 pb-8">
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-[10px]">Live Node Active</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5 fade-up">
        <div>
          <p className="text-[12px] text-white/30">{t.supervisorPanel}</p>
          <h1 className="text-xl font-semibold tracking-tight text-white">{t.adminDashboard}</h1>
        </div>
        <button onClick={() => { sessionStorage.clear(); router.replace("/login"); }} className="w-9 h-9 glass rounded-full flex items-center justify-center">
          <LogOut size={15} className="text-white/50" />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4 fade-up delay-1">
        <div className="glass-strong rounded-3xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={15} className="text-[#F59E0B]" />
            <span className="text-[11px] text-white/40 font-medium">{t.totalSynced}</span>
          </div>
          <p className="text-2xl font-bold text-white">{attempts.length}</p>
          <p className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
            <TrendingUp size={10} /> +12% this week
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={15} className="text-emerald-400" />
            <span className="text-[11px] text-white/40 font-medium">Avg Pass Rate</span>
          </div>
          <p className="text-2xl font-bold text-emerald-400">{passRate}%</p>
          <p className="text-[10px] text-white/30 mt-0.5">{attempts.filter((a) => a.status === "PASSED").length} passed</p>
        </div>
      </div>

      {/* Compliance banner */}
      <div className="glass-amber rounded-2xl p-4 mb-4 flex items-center justify-between fade-up delay-1">
        <div className="flex items-center gap-2.5">
          <ShieldCheck size={20} className="text-[#F59E0B] shrink-0" />
          <div>
            <p className="text-xs font-semibold text-white">{t.overallCompliance}: 74%</p>
            <p className="text-[10px] text-white/40">{t.workersCleared}: 38 / 51</p>
          </div>
        </div>
        <button
          onClick={() => setShowQrGen(!showQrGen)}
          className="px-3 py-1.5 rounded-xl glass text-xs font-semibold text-[#F59E0B] flex items-center gap-1.5"
        >
          <QrCode size={13} />
          <span>{showQrGen ? "Hide Tool" : "Verify QR Tool"}</span>
        </button>
      </div>

      {/* QR Code Certificate Generator Panel */}
      {showQrGen && (
        <div className="glass-strong rounded-3xl p-4 mb-4 border border-[#F59E0B]/30 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#F59E0B]" /> Instant QR Verification Generator
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-[10px] text-white/40 uppercase tracking-wider font-mono">Select Worker ID</label>
              <select
                value={genWorkerId}
                onChange={(e) => setGenWorkerId(e.target.value)}
                className="w-full mt-1 bg-black/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
              >
                {attempts.map((a) => (
                  <option key={a.workerId} value={a.workerId} className="bg-black text-white">
                    {a.workerId} — {a.workerName} ({a.module})
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3 bg-white rounded-2xl flex flex-col items-center">
              <svg viewBox="0 0 100 100" className="w-28 h-28">
                <rect width="100" height="100" fill="white" />
                <rect x="10" y="10" width="24" height="24" fill="black" />
                <rect x="14" y="14" width="16" height="16" fill="white" />
                <rect x="18" y="18" width="8" height="8" fill="black" />
                <rect x="66" y="10" width="24" height="24" fill="black" />
                <rect x="70" y="14" width="16" height="16" fill="white" />
                <rect x="74" y="18" width="8" height="8" fill="black" />
                <rect x="10" y="66" width="24" height="24" fill="black" />
                <rect x="14" y="70" width="16" height="16" fill="white" />
                <rect x="18" y="74" width="8" height="8" fill="black" />
                <rect x="42" y="42" width="16" height="16" fill="#F59E0B" rx="3" />
                <rect x="42" y="14" width="6" height="6" fill="black" />
                <rect x="14" y="42" width="6" height="6" fill="black" />
                <rect x="70" y="70" width="6" height="6" fill="black" />
              </svg>
              <p className="text-[10px] text-black font-mono font-bold mt-1">{genWorkerId}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/verify/${genWorkerId}`)}
                className="btn-aurora flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold"
              >
                <ExternalLink size={13} />
                <span>Open Public Verification Page</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sync Queue */}
      <div className="flex items-center justify-between mb-3 fade-up delay-2">
        <h2 className="text-[14px] font-semibold text-white tracking-tight">{t.liveSyncQueue}</h2>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-white/30 font-mono">{lastSync}</span>
          <button onClick={load} className="w-7 h-7 glass rounded-full flex items-center justify-center">
            <RefreshCw size={12} className={`text-white/50 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-3 fade-up delay-2">
        {(["ALL", "PASSED", "FAILED"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === f ? "glass-amber text-[#F59E0B]" : "glass text-white/40"
            }`}
          >
            {f === "ALL" ? t.all : f === "PASSED" ? t.passed : t.failed}
          </button>
        ))}
      </div>

      {/* Table rows */}
      <div className="space-y-2 mb-6 fade-up delay-3">
        {shown.map((a) => (
          <div key={a.id} className="glass rounded-2xl p-3.5 flex items-center gap-3">
            {a.status === "PASSED"
              ? <CheckCircle size={16} className="text-emerald-400 shrink-0" />
              : <XCircle    size={16} className="text-red-400 shrink-0" />}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-[13px] font-semibold text-white truncate">{a.workerName}</p>
                <span className="text-[10px] font-mono text-white/30">{a.workerId}</span>
              </div>
              <p className="text-[11px] text-white/40">{a.module} · {a.timeTaken}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-xs font-bold font-mono ${a.status === "PASSED" ? "text-emerald-400" : "text-red-400"}`}>
                {a.score}%
              </span>
              <button
                onClick={() => router.push(`/verify/${a.workerId}`)}
                className="w-7 h-7 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white"
                title="Verify Record"
              >
                <QrCode size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Back to worker mode */}
      <button
        onClick={() => router.push("/home")}
        className="w-full py-3 rounded-2xl glass text-xs font-semibold text-white/60 hover:text-white transition-all text-center"
      >
        Switch to Worker Mode
      </button>
      </div>{/* end page-scroll */}
    </div>
  );
}
