"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MailCheck, Loader2, RefreshCw, CheckCircle2 } from "lucide-react";

export default function EmailVerifyPage() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = async () => {
    setResending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setResending(false);
    setCountdown(60);
    setCanResend(false);
  };

  // Simulate auto-verify after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setVerified(true), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col min-h-full items-center justify-center px-6 text-center gap-6 fade-up">
      {!verified ? (
        <>
          <div className="w-20 h-20 rounded-3xl glass-strong flex items-center justify-center">
            <MailCheck size={36} className="text-[#F59E0B]" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">Verify Your Email</h1>
            <p className="text-[13px] text-white/40 leading-relaxed">
              We've sent a verification link to your registered email. Open the link to activate your account.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-4 w-full text-left space-y-2">
            <div className="flex items-center gap-2 text-[12px]">
              <Loader2 size={14} className="text-[#F59E0B] animate-spin shrink-0" />
              <span className="text-white/50">Waiting for verification…</span>
            </div>
            <div className="w-full h-1 glass rounded-full overflow-hidden">
              <div className="h-full bg-[#F59E0B]/30 rounded-full animate-pulse w-2/3" />
            </div>
          </div>

          <div className="glass rounded-2xl p-4 text-[12px] text-white/40 text-left w-full space-y-1">
            <p>• Check your inbox and spam folder</p>
            <p>• The link expires in <span className="text-white/70">24 hours</span></p>
            <p>• Make sure your device has internet access</p>
          </div>

          <button
            onClick={handleResend}
            disabled={!canResend || resending}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl glass text-[13px] font-semibold text-white/60 disabled:opacity-40"
          >
            {resending ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />}
            {canResend ? "Resend Email" : `Resend in ${countdown}s`}
          </button>
        </>
      ) : (
        <>
          <div className="w-20 h-20 rounded-3xl glass-amber flex items-center justify-center">
            <CheckCircle2 size={36} className="text-emerald-400" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">Email Verified!</h1>
            <p className="text-[13px] text-white/40">Your account is now active. You can sign in.</p>
          </div>
          <button onClick={() => router.push("/login")} className="btn-aurora w-full py-4 rounded-2xl font-semibold">Continue to Sign In</button>
        </>
      )}
    </div>
  );
}
