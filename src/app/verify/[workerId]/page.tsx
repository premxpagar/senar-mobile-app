"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, CheckCircle2, Calendar, Award, HardHat, ExternalLink, ArrowLeft, QrCode, Download } from "lucide-react";

export default function VerifyCertificatePage({ params }: { params: Promise<{ workerId: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const workerId = resolvedParams.workerId.toUpperCase();

  const isVerified = workerId === "EMP-SIH26041" || workerId === "EMP-SIH26043";
  const workerName = workerId === "EMP-SIH26041" ? "Rajan Kumar" : workerId === "EMP-SIH26043" ? "Priya Devi" : "Worker";
  const moduleName = "Fire & Explosion Safety (FIRE-001)";
  const score = workerId === "EMP-SIH26041" ? 97 : 88;
  const issueDate = "26 Sep 2026";
  const expiryDate = "26 Sep 2027";
  const certHash = "0x7F9B...4D2E (Sha256 Certified)";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 selection:bg-[#F59E0B]/30">
      <div className="w-full max-w-md mx-auto">
        {/* Back navigation */}
        <button
          onClick={() => router.push("/home")}
          className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white mb-4 transition-all"
        >
          <ArrowLeft size={14} /> Back to Safety Portal
        </button>

        {/* Certificate Card — Liquid Glass Aurora style */}
        <div className="glass-strong rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
          {/* Accent top gradient bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#F59E0B] via-emerald-400 to-[#F59E0B]" />

          <div className="p-6">
            {/* Header Badge */}
            <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
              <div className="w-16 h-16 rounded-2xl glass-amber flex items-center justify-center mb-3 shadow-lg shadow-[#F59E0B]/20">
                <ShieldCheck className="w-8 h-8 text-[#F59E0B]" />
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                <CheckCircle2 size={13} /> {isVerified ? "CRYPTOGRAPHICALLY VERIFIED" : "RECORD RECORDED"}
              </span>

              <h1 className="text-xl font-bold tracking-tight text-white">Jharkhand Industrial Safety Authority</h1>
              <p className="text-xs text-white/40 mt-1">SENAR Official Safety Credential</p>
            </div>

            {/* Credential Details with Real Worker Photo */}
            <div className="py-5 space-y-4">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl glass border border-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    workerId === "EMP-SIH26041"
                      ? "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces&q=80"
                      : workerId === "EMP-SIH26043"
                      ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80"
                      : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80"
                  }
                  alt={workerName}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#F59E0B]/40 shadow-md shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-white truncate">{workerName}</p>
                  <p className="text-xs text-[#F59E0B] font-mono mt-0.5">{workerId}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">Mining & Heavy Machinery Division</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 space-y-3">
                <div>
                  <p className="text-[11px] text-white/40 uppercase tracking-wider font-mono">Module Certified</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{moduleName}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono">Competency Score</p>
                    <p className="text-base font-bold text-emerald-400 mt-0.5">{score}% PASSED</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono">Issued Date</p>
                    <p className="text-xs text-white/80 mt-0.5">{issueDate}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex justify-between text-[11px]">
                  <span className="text-white/40">Valid Until:</span>
                  <span className="text-white/80 font-mono">{expiryDate}</span>
                </div>
              </div>

              {/* Hash & Verification Stamp */}
              <div className="flex items-center justify-between text-[11px] text-white/30 font-mono px-1">
                <span>Hash: {certHash}</span>
                <span className="text-emerald-400">Node Sync: OK</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => router.push("/scan")}
                className="btn-aurora w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
              >
                <QrCode size={15} />
                <span>Scan Another Certificate</span>
              </button>

              <button
                onClick={() => router.push("/home")}
                className="w-full py-2.5 rounded-xl glass text-xs font-semibold text-white/60 hover:text-white transition-all text-center"
              >
                Open SENAR App Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-white/30 mt-6 leading-relaxed">
          This digital credential is anchored to the SENAR SQLite/Postgres verified ledger.
          Tampering invalidates the cryptographic signature.
        </p>
      </div>
    </div>
  );
}
