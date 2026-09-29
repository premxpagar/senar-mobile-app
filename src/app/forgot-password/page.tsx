"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "sent">("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep("sent");
  };

  return (
    <div className="flex flex-col min-h-full px-6 fade-up">
      <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>

      <button onClick={() => router.back()} className="flex items-center gap-2 text-white/40 hover:text-white text-[13px] mb-8 w-fit">
        <ArrowLeft size={15} /> Back to Sign In
      </button>

      {step === "email" ? (
        <>
          <div className="mb-8">
            <div className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center mb-5">
              <Mail size={26} className="text-[#F59E0B]" />
            </div>
            <h1 className="text-2xl font-semibold text-white mb-2">Reset Password</h1>
            <p className="text-[13px] text-white/40 leading-relaxed">
              Enter your registered email address. We'll send you a reset link.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="field-icon w-4 h-4" />
              <input
                className="field"
                type="email"
                placeholder="your.email@company.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !email}
              className="btn-aurora w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
              {loading ? "Sending…" : "Send Reset Link"}
            </button>
          </div>

          <div className="mt-6 glass rounded-2xl p-4 text-[12px] text-white/40 leading-relaxed">
            <p className="font-semibold text-white/60 mb-1">Don't have an email registered?</p>
            <p>Contact your supervisor or HR department to update your account details.</p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-6">
          <div className="w-20 h-20 rounded-3xl glass-amber flex items-center justify-center">
            <CheckCircle2 size={36} className="text-emerald-400" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">Email Sent!</h1>
            <p className="text-[13px] text-white/40 leading-relaxed px-4">
              A password reset link has been sent to <span className="text-[#F59E0B] font-mono">{email}</span>. Check your inbox.
            </p>
          </div>
          <div className="glass rounded-2xl p-4 text-[12px] text-white/40 text-left w-full">
            <p className="mb-1">• Link expires in <span className="text-white/70 font-semibold">30 minutes</span></p>
            <p className="mb-1">• Check your spam folder if not received</p>
            <p>• Contact IT support if the problem persists</p>
          </div>
          <button onClick={() => router.push("/login")} className="btn-aurora w-full py-4 rounded-2xl font-semibold">Back to Sign In</button>
        </div>
      )}
    </div>
  );
}
