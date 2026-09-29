"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle, Phone, Mail, ChevronRight, ChevronDown, CheckCircle2, Loader2, HardHat } from "lucide-react";

const FAQS = [
  { q: "How do I reset my password?", a: "Go to the login screen and tap 'Forgot Password'. Enter your registered email and follow the link sent to you." },
  { q: "My certificate expired. What do I do?", a: "Retake the relevant training module and pass with ≥70%. A new certificate will be issued automatically upon passing." },
  { q: "Camera isn't working for QR scan", a: "Ensure your browser has camera permission enabled. Go to browser Settings → Site Settings → Camera and allow access for this site." },
  { q: "Can I use the app offline?", a: "Yes. Cached training content is available offline. However, certificate verification and score syncing require internet access." },
  { q: "How long are certificates valid?", a: "All safety training certificates are valid for 12 months from the date of issuance." },
  { q: "I passed but my certificate isn't showing", a: "Try refreshing the Certificates page. If the issue persists after 5 minutes, contact your supervisor or our support team." },
];

export default function SupportPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", id: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = async () => {
    if (!form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="page-scroll px-5">
        <div className="flex justify-between pt-1 pb-3 text-[11px] text-white/40"><span>9:41</span></div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <button onClick={() => router.back()} className="w-9 h-9 glass rounded-full flex items-center justify-center shrink-0">
            <ChevronRight size={17} className="text-white/60 rotate-180" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">Help & Support</h1>
            <p className="text-[11px] text-white/30">We're here to help</p>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-3 gap-2 mb-6 fade-up delay-1">
          {[
            { icon: Phone,         label: "Call",  sub: "Mon–Fri 9–6", action: () => {} },
            { icon: Mail,          label: "Email", sub: "24h reply",   action: () => {} },
            { icon: MessageCircle, label: "Chat",  sub: "Coming soon", action: () => {} },
          ].map(({ icon: Icon, label, sub, action }) => (
            <button key={label} onClick={action} className="glass-strong rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-all">
              <div className="w-9 h-9 glass-amber rounded-xl flex items-center justify-center"><Icon size={16} className="text-[#F59E0B]" /></div>
              <p className="text-[12px] font-semibold text-white">{label}</p>
              <p className="text-[10px] text-white/30">{sub}</p>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <h2 className="text-[13px] font-semibold text-white/40 uppercase tracking-wider mb-3 fade-up delay-1">Frequently Asked</h2>
        <div className="space-y-2 mb-6 fade-up delay-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left"
              >
                <span className="text-[13px] font-medium text-white pr-4">{faq.q}</span>
                <ChevronDown size={15} className={`text-white/40 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-[12px] text-white/50 leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <h2 className="text-[13px] font-semibold text-white/40 uppercase tracking-wider mb-3 fade-up delay-2">Send a Message</h2>
        {!sent ? (
          <div className="glass-strong rounded-3xl p-5 space-y-3 fade-up delay-3 mb-4">
            <div className="relative">
              <HardHat className="field-icon w-4 h-4" />
              <input className="field" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="relative">
              <Mail className="field-icon w-4 h-4" />
              <input className="field" placeholder="Worker ID or Email" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
            </div>
            <textarea
              className="field field-no-icon resize-none"
              placeholder="Describe your issue…"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              onClick={handleSend}
              disabled={sending || !form.message}
              className="btn-aurora w-full py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {sending ? <><Loader2 size={15} className="animate-spin" /> Sending…</> : "Submit Ticket"}
            </button>
          </div>
        ) : (
          <div className="glass-strong rounded-3xl p-6 flex flex-col items-center gap-4 text-center mb-4 fade-up">
            <CheckCircle2 size={36} className="text-emerald-400" />
            <div>
              <p className="text-[15px] font-semibold text-white mb-1">Ticket Submitted!</p>
              <p className="text-[12px] text-white/40">We'll respond within 24 hours. Ticket ID: <span className="font-mono text-[#F59E0B]">#TKT-{Date.now().toString().slice(-6)}</span></p>
            </div>
          </div>
        )}

        {/* Contact info */}
        <div className="glass rounded-2xl p-4 mb-4 space-y-2 text-[12px] text-white/40">
          <p className="font-semibold text-white/60 mb-1">Contact Details</p>
          <p>📞 +91-651-000-0000 (Mon–Fri, 9AM–6PM)</p>
          <p>✉️ support@senar.in</p>
          <p>🏢 SENAR Platform, Ranchi, Jharkhand – 834001</p>
        </div>
      </div>
    </div>
  );
}
