"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, ShieldCheck, CheckCircle2, Loader2, ChevronRight } from "lucide-react";

const PLANS = [
  { id: "basic", name: "Basic Access", price: "Free", desc: "All mandatory safety modules + certificates", features: ["5 Training Modules", "Digital Certificates", "QR Verification", "Offline Access"] },
  { id: "pro",   name: "Pro Worker", price: "₹199/yr", desc: "Advanced modules + priority support", features: ["All Basic features", "Advanced Modules", "Priority Support", "Analytics Dashboard", "Multi-device Sync"], highlight: true },
  { id: "org",   name: "Enterprise", price: "Custom", desc: "For organizations & large teams", features: ["All Pro features", "Bulk Worker Enroll", "Admin Dashboard", "Custom Branding", "SLA Support"] },
];

export default function PaymentPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("basic");
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);

  const handlePay = async () => {
    if (selected === "basic") return;
    setPaying(true);
    await new Promise((r) => setTimeout(r, 1500));
    setPaying(false);
    setPaid(true);
  };

  const plan = PLANS.find((p) => p.id === selected)!;

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5">
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>
        <div className="flex items-center gap-3 mb-6 fade-up">
          <button onClick={() => router.back()} className="w-9 h-9 glass rounded-full flex items-center justify-center shrink-0">
            <ChevronRight size={17} className="text-white/60 rotate-180" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">Plans & Payment</h1>
            <p className="text-[11px] text-white/30">Choose a plan that fits your needs</p>
          </div>
        </div>

        {!paid ? (
          <>
            {/* Plan cards */}
            <div className="space-y-3 mb-6 fade-up delay-1">
              {PLANS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`w-full text-left rounded-3xl p-4 transition-all ${selected === p.id ? (p.highlight ? "glass-amber border border-[#F59E0B]" : "glass-strong border border-[#F59E0B]/40") : "glass"}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-semibold text-white">{p.name}</p>
                        {p.highlight && <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] uppercase">Popular</span>}
                      </div>
                      <p className="text-[11px] text-white/40 mt-0.5">{p.desc}</p>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <p className="text-[17px] font-bold text-white">{p.price}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-[11px] text-white/50">
                        <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />{f}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Payment method (if not free) */}
            {selected !== "basic" && (
              <div className="glass-strong rounded-3xl p-5 mb-5 fade-up delay-2">
                <p className="text-[12px] font-semibold text-white/40 uppercase tracking-wider mb-3">Payment Method</p>
                <div className="flex items-center gap-3 p-3 glass rounded-2xl">
                  <CreditCard size={18} className="text-[#F59E0B]" />
                  <div className="flex-1">
                    <p className="text-[13px] font-medium text-white">UPI / Card / Net Banking</p>
                    <p className="text-[11px] text-white/30">Secured by Razorpay</p>
                  </div>
                  <ShieldCheck size={14} className="text-emerald-400" />
                </div>
              </div>
            )}

            <button
              onClick={handlePay}
              disabled={paying}
              className="btn-aurora w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 mb-4 fade-up delay-3"
            >
              {paying ? <><Loader2 size={16} className="animate-spin" /> Processing…</> : selected === "basic" ? "Start Free — No Payment" : `Pay ${plan.price}`}
            </button>

            <p className="text-center text-[10px] text-white/20">🔒 256-bit SSL Encrypted · Powered by Razorpay</p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 pt-8 fade-up text-center">
            <div className="w-20 h-20 rounded-3xl glass-amber flex items-center justify-center">
              <CheckCircle2 size={36} className="text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Payment Successful!</h2>
              <p className="text-[13px] text-white/40">Your <span className="text-[#F59E0B]">{plan.name}</span> plan is now active.</p>
            </div>
            <button onClick={() => router.push("/home")} className="btn-aurora w-full py-4 rounded-2xl font-semibold">Go to Home</button>
          </div>
        )}
      </div>
    </div>
  );
}
