"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Award, ShieldCheck, Calendar, Download, Share2, QrCode, Clock, ExternalLink } from "lucide-react";
import BottomNav from "../_components/BottomNav";
import { useI18n } from "../_lib/I18nProvider";
import { getLocalizedModule } from "../_lib/i18n";

const CERTS = [
  {
    id: "CERT-2026-001",
    moduleId: "FIRE-001",
    moduleIcon: "🔥",
    score: 97,
    issuedAt: "26 Sep 2026",
    expiresAt: "26 Sep 2027",
    status: "VALID" as const,
    verifyPath: "/verify/EMP-SIH26041",
  },
];

export default function CertificatesPage() {
  const router = useRouter();
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("senar_user")) router.replace("/login");
  }, [router]);

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5 pb-4">
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40">
          <span>9:41</span>
        </div>

        <div className="flex items-center gap-3 mb-5 fade-up">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 glass rounded-full flex items-center justify-center active:scale-95"
          >
            <ChevronLeft size={17} className="text-white/60" />
          </button>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-white">{t.myCertificates}</h1>
            <p className="text-[12px] text-white/30">{CERTS.length} {t.certsEarned}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5 fade-up delay-1">
          <div className="glass-strong rounded-3xl p-4 text-center">
            <p className="text-2xl font-bold text-[#F59E0B]">{CERTS.length}</p>
            <p className="text-[11px] text-white/30 mt-1">{t.certificates}</p>
          </div>
          <div className="glass-strong rounded-3xl p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400">
              {CERTS.filter((c) => c.status === "VALID").length}
            </p>
            <p className="text-[11px] text-white/30 mt-1">{t.valid}</p>
          </div>
        </div>

        {/* Certificate cards */}
        <div className="space-y-4 fade-up delay-2">
          {CERTS.map((cert) => {
            const loc = getLocalizedModule(cert.moduleId, t);
            const moduleName = loc?.name || cert.moduleId;
            return (
              <div key={cert.id} className="glass-strong rounded-3xl overflow-hidden">
                {/* Gradient top line — Aurora accent bar */}
                <div className="h-px bg-gradient-to-r from-[#F59E0B] via-emerald-400 to-transparent" />

                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{cert.moduleIcon}</span>
                    <div className="flex-1">
                      <p className="text-[15px] font-semibold text-white leading-tight">{moduleName}</p>
                      <p className="text-[11px] text-white/30 mt-0.5">{cert.moduleId}</p>
                    </div>
                    <span className="pill-passed text-[10px] font-bold px-2 py-0.5 rounded-full">{t.valid}</span>
                  </div>

                  {/* Score & dates */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="glass rounded-xl p-2.5">
                      <p className="text-[10px] text-white/30">{t.score}</p>
                      <p className="text-base font-bold text-emerald-400 font-mono">{cert.score}%</p>
                    </div>
                    <div className="glass rounded-xl p-2.5">
                      <p className="text-[10px] text-white/30">{t.issued}</p>
                      <p className="text-xs font-medium text-white/70 mt-0.5">{cert.issuedAt}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-white/40 mb-4">
                    <Clock size={12} className="text-[#F59E0B]" />
                    <span>{t.expires}: {cert.expiresAt}</span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
                      className="flex-1 py-2 px-3 rounded-xl glass text-xs font-semibold text-white/70 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                    >
                      <QrCode size={13} className="text-[#F59E0B]" />
                      <span>{expanded === cert.id ? t.hideQR : t.showQR}</span>
                    </button>
                    <button
                      onClick={() => router.push(cert.verifyPath)}
                      className="py-2 px-3 rounded-xl glass text-xs font-semibold text-white/70 hover:text-white flex items-center justify-center gap-1 transition-all"
                      title="Verify"
                    >
                      <ExternalLink size={13} />
                    </button>
                  </div>

                  {/* QR view toggle */}
                  {expanded === cert.id && (
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center animate-fade-in">
                      <div className="w-28 h-28 bg-white rounded-2xl p-2 mb-2 flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect x="0" y="0" width="100" height="100" fill="white" />
                          <rect x="10" y="10" width="24" height="24" fill="black" />
                          <rect x="14" y="14" width="16" height="16" fill="white" />
                          <rect x="18" y="18" width="8" height="8" fill="black" />
                          <rect x="66" y="10" width="24" height="24" fill="black" />
                          <rect x="70" y="14" width="16" height="16" fill="white" />
                          <rect x="74" y="18" width="8" height="8" fill="black" />
                          <rect x="10" y="66" width="24" height="24" fill="black" />
                          <rect x="14" y="70" width="16" height="16" fill="white" />
                          <rect x="18" y="74" width="8" height="8" fill="black" />
                          <rect x="42" y="10" width="5" height="5" fill="black" />
                          <rect x="52" y="14" width="5" height="5" fill="black" />
                          <rect x="42" y="24" width="5" height="5" fill="black" />
                          <rect x="10" y="42" width="5" height="5" fill="black" />
                          <rect x="20" y="46" width="5" height="5" fill="black" />
                          <rect x="30" y="42" width="5" height="5" fill="black" />
                          <rect x="42" y="42" width="16" height="16" fill="#F59E0B" rx="3" />
                          <rect x="66" y="42" width="5" height="5" fill="black" />
                          <rect x="78" y="46" width="5" height="5" fill="black" />
                          <rect x="86" y="42" width="5" height="5" fill="black" />
                          <rect x="42" y="66" width="5" height="5" fill="black" />
                          <rect x="52" y="72" width="5" height="5" fill="black" />
                          <rect x="42" y="82" width="5" height="5" fill="black" />
                          <rect x="66" y="66" width="5" height="5" fill="black" />
                          <rect x="74" y="74" width="5" height="5" fill="black" />
                          <rect x="82" y="82" width="5" height="5" fill="black" />
                        </svg>
                      </div>
                      <p className="text-[11px] text-white/40 text-center font-mono">{cert.id}</p>
                      <p className="text-[10px] text-white/25 mt-0.5 text-center">{t.scanToVerify}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNav active="certificates" />
    </div>
  );
}
