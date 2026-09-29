"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Search, Lock, Play, RotateCcw } from "lucide-react";
import BottomNav from "../_components/BottomNav";
import { useI18n } from "../_lib/I18nProvider";
import { getLocalizedModule } from "../_lib/i18n";

const BASE_MODULES = [
  { id: "FIRE-001", icon: "🔥", category: "Fire",       status: "PASSED",  score: 97, duration: "~25 min", required: true,  attempts: 1 },
  { id: "ELEC-001", icon: "⚡", category: "Electrical", status: "FAILED",  score: 58, duration: "~30 min", required: true,  attempts: 2 },
  { id: "CHEM-001", icon: "🧪", category: "Chemical",   status: "PENDING", score: 0,  duration: "~20 min", required: true,  attempts: 0 },
  { id: "MECH-001", icon: "⚙️", category: "Mechanical", status: "LOCKED",  score: 0,  duration: "~35 min", required: false, attempts: 0 },
  { id: "FALL-001", icon: "🪂", category: "Height",     status: "LOCKED",  score: 0,  duration: "~40 min", required: false, attempts: 0 },
];

export default function ModulesPage() {
  const router  = useRouter();
  const { t }   = useI18n();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"ALL" | "PASSED" | "FAILED" | "PENDING" | "LOCKED">("ALL");

  useEffect(() => {
    if (!sessionStorage.getItem("senar_user")) router.replace("/login");
  }, [router]);

  const visible = BASE_MODULES.map((m) => {
    const loc = getLocalizedModule(m.id, t);
    return {
      ...m,
      name: loc?.name || m.id,
      description: loc?.description || "",
    };
  }).filter((m) => {
    const fs = filter === "ALL" || m.status === filter;
    const ss =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase());
    return fs && ss;
  });

  const filterTabs = [
    { key: "ALL", label: t.all },
    { key: "PASSED", label: t.passed },
    { key: "FAILED", label: t.failed },
    { key: "PENDING", label: t.pending },
    { key: "LOCKED", label: t.locked },
  ] as const;

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5 pb-4">
        {/* Status */}
        <div className="flex justify-between items-center pt-1 pb-3 text-[11px] text-white/40">
          <span>9:41</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5 fade-up">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 glass rounded-full flex items-center justify-center active:scale-95"
          >
            <ChevronLeft size={17} className="text-white/60" />
          </button>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-white">{t.modules}</h1>
            <p className="text-[12px] text-white/30">{BASE_MODULES.length} {t.availableModules}</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3 fade-up delay-1">
          <Search size={14} className="field-icon" />
          <input
            className="field"
            placeholder={t.searchModules}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-4 fade-up delay-1">
          {filterTabs.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filter === f.key ? "glass-amber text-[#F59E0B]" : "glass text-white/40 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Module list */}
        <div className="space-y-3 fade-up delay-2">
          {visible.map((mod) => (
            <div key={mod.id} className="glass-strong rounded-3xl p-4 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl shrink-0">{mod.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
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
                    {mod.required && (
                      <span className="text-[10px] text-[#F59E0B] font-medium bg-[#F59E0B]/10 px-2 py-0.5 rounded-full">
                        {t.required}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-1">{mod.name}</h3>
                  <p className="text-[11px] text-white/40 mt-1 line-clamp-2 leading-relaxed">{mod.description}</p>
                </div>
              </div>

              {/* Meta + Action */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-3 text-[11px] text-white/30 font-mono">
                  <span>{mod.duration}</span>
                  {mod.attempts > 0 && (
                    <span>
                      · {mod.attempts} {t.attempts}{mod.attempts > 1 ? "s" : ""}
                    </span>
                  )}
                  {mod.score > 0 && <span className="font-bold text-white/60">{mod.score}%</span>}
                </div>

                {mod.status === "LOCKED" ? (
                  <div className="flex items-center gap-1 text-[11px] text-white/20">
                    <Lock size={12} />
                    <span>{t.locked}</span>
                  </div>
                ) : mod.status === "PASSED" ? (
                  <button
                    onClick={() => router.push(`/training/${mod.id}`)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl glass text-xs font-semibold text-white/50 hover:text-white"
                  >
                    <RotateCcw size={12} />
                    <span>{t.redo}</span>
                  </button>
                ) : mod.status === "FAILED" ? (
                  <button
                    onClick={() => router.push(`/training/${mod.id}`)}
                    className="btn-aurora px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>{t.retry}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => router.push(`/training/${mod.id}`)}
                    className="btn-aurora px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1"
                  >
                    <Play size={12} />
                    <span>{t.start}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="modules" />
    </div>
  );
}
