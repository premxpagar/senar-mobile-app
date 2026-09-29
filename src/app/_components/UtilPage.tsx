/* Shared utility page wrapper */
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function UtilPage({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5">
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>
        <div className="flex items-center gap-3 mb-6 fade-up">
          <button onClick={() => router.back()} className="w-9 h-9 glass rounded-full flex items-center justify-center shrink-0">
            <ChevronLeft size={17} className="text-white/60" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <h1 className="text-[17px] font-semibold text-white tracking-tight">{title}</h1>
          </div>
        </div>
        <div className="space-y-4 fade-up delay-1 pb-4">{children}</div>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-strong rounded-3xl p-5">
      <h2 className="text-[13px] font-semibold text-[#F59E0B] uppercase tracking-wider mb-3">{title}</h2>
      <div className="space-y-2 text-[13px] text-white/60 leading-relaxed">{children}</div>
    </div>
  );
}
