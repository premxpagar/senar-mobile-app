"use client";
import { useRouter } from "next/navigation";
import { HardHat, Home, RefreshCw } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-full items-center justify-center px-6 text-center gap-6 fade-up">
      <div className="relative">
        <span className="text-[80px] font-black text-white/5 select-none leading-none">404</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <HardHat size={48} className="text-[#F59E0B]" />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-white mb-2">Page Not Found</h1>
        <p className="text-[13px] text-white/40 leading-relaxed">The page you're looking for doesn't exist or has been moved.</p>
      </div>
      <div className="flex gap-3 w-full max-w-xs">
        <button onClick={() => router.back()} className="flex-1 flex items-center justify-center gap-2 glass rounded-2xl py-3 text-[13px] font-semibold text-white/60">
          <RefreshCw size={14} /> Go Back
        </button>
        <button onClick={() => router.push("/home")} className="flex-1 btn-aurora flex items-center justify-center gap-2 rounded-2xl py-3 text-[13px] font-semibold">
          <Home size={14} /> Home
        </button>
      </div>
      <p className="text-[10px] text-white/20 font-mono">SENAR · ERROR 404</p>
    </div>
  );
}
