"use client";
import { useRouter } from "next/navigation";
import { ShieldOff, Home, Mail } from "lucide-react";

export default function AccessDeniedPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-full items-center justify-center px-6 text-center gap-6 fade-up">
      <div className="relative">
        <div className="w-24 h-24 rounded-3xl flex items-center justify-center" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)" }}>
          <ShieldOff size={44} className="text-red-400" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">!</div>
      </div>

      <div>
        <p className="text-[11px] font-mono text-red-400/70 uppercase tracking-widest mb-2">Error 403</p>
        <h1 className="text-2xl font-semibold text-white mb-2">Access Denied</h1>
        <p className="text-[13px] text-white/40 leading-relaxed">
          You don't have permission to view this page. This area requires additional clearance or a different role.
        </p>
      </div>

      <div className="glass-strong rounded-2xl p-4 w-full text-left space-y-2 text-[12px] text-white/50">
        <p className="font-semibold text-white/70 mb-2">Why am I seeing this?</p>
        <p>• Your role does not have access to this section</p>
        <p>• Your session may have expired</p>
        <p>• You may need to complete prerequisite training</p>
        <p>• Contact your supervisor for access requests</p>
      </div>

      <div className="flex gap-3 w-full">
        <button onClick={() => router.push("/home")} className="flex-1 btn-aurora flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-[13px]">
          <Home size={15} /> Home
        </button>
        <button onClick={() => router.push("/support")} className="flex-1 glass flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-[13px] text-white/60">
          <Mail size={15} /> Support
        </button>
      </div>
    </div>
  );
}
