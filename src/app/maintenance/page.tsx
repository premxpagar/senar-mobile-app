"use client";
import { useEffect, useState } from "react";
import { Wrench, Clock } from "lucide-react";

export default function MaintenancePage() {
  const [dots, setDots] = useState(".");
  const [eta] = useState("~30 minutes");

  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d.length >= 3 ? "." : d + ".")), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col min-h-full items-center justify-center px-6 text-center gap-6 fade-up">
      {/* Animated gear */}
      <div className="relative">
        <div className="w-24 h-24 rounded-3xl glass-strong flex items-center justify-center">
          <Wrench size={44} className="text-[#F59E0B] animate-pulse" />
        </div>
        {/* Orbit dots */}
        {[0,1,2].map((i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-[#F59E0B]/40" style={{ top: `${50 + 48 * Math.sin((i * 2 * Math.PI) / 3)}%`, left: `${50 + 48 * Math.cos((i * 2 * Math.PI) / 3)}%`, transform: "translate(-50%,-50%)" }} />
        ))}
      </div>

      <div>
        <p className="text-[11px] font-mono text-[#F59E0B]/70 uppercase tracking-widest mb-2">System Maintenance</p>
        <h1 className="text-2xl font-semibold text-white mb-2">We'll Be Back Soon{dots}</h1>
        <p className="text-[13px] text-white/40 leading-relaxed">
          SENAR is undergoing scheduled maintenance to improve the platform. All training data is safe and secure.
        </p>
      </div>

      <div className="glass-strong rounded-2xl p-4 w-full">
        <div className="flex items-center gap-3 mb-3">
          <Clock size={16} className="text-[#F59E0B]" />
          <span className="text-[13px] font-semibold text-white">Estimated Downtime</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[["ETA", eta], ["Status", "Ongoing"], ["Progress", "78%"]].map(([k, v]) => (
            <div key={k} className="glass rounded-xl p-2.5 text-center">
              <p className="text-[10px] text-white/30 mb-0.5">{k}</p>
              <p className="text-[12px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl p-4 w-full text-[12px] text-white/40 space-y-1">
        <p className="font-semibold text-white/60 mb-2">During maintenance:</p>
        <p>• Your training progress is saved</p>
        <p>• Issued certificates remain valid</p>
        <p>• Offline mode is available for recent content</p>
      </div>

      <p className="text-[11px] text-white/20">For urgent matters call: +91-651-000-0000</p>
    </div>
  );
}
