"use client";
import UtilPage, { Section } from "../_components/UtilPage";

export default function RefundPage() {
  return (
    <UtilPage title="Refund & Concession Policy" icon="💰">
      <p className="text-[12px] text-white/30 font-mono">Effective: 01 Sep 2026</p>

      <Section title="Platform Access">
        <p>SENAR is provided free of charge to all registered industrial workers in Jharkhand under the state safety initiative. No fees are charged for training or certification.</p>
      </Section>

      <Section title="Examination Fees">
        <p>Where examination fees apply (advanced certifications), the following refund policy applies:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-white/50">
          <li>Cancellation 7+ days before exam: <span className="text-white/70">100% refund</span></li>
          <li>Cancellation 3–6 days before: <span className="text-white/70">50% refund</span></li>
          <li>Cancellation within 48 hours: <span className="text-white/70">No refund</span></li>
          <li>No-show without notice: <span className="text-white/70">No refund</span></li>
        </ul>
      </Section>

      <Section title="Concession Eligibility">
        <p>Fee concessions are available for:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-white/50">
          <li>Workers from BPL families (Below Poverty Line)</li>
          <li>SC/ST workers (as per government norms)</li>
          <li>Differently-abled workers</li>
          <li>Workers affected by industrial accidents</li>
        </ul>
        <p className="mt-2">Present relevant documents to your HR department to apply for concessions.</p>
      </Section>

      <Section title="Refund Process">
        <p>Approved refunds are processed within 7–10 working days to the original payment method. Contact support@senar.in with your Worker ID and payment reference to initiate a refund request.</p>
      </Section>

      <Section title="Disputes">
        <p>Unresolved refund disputes may be escalated to the Jharkhand Industrial Safety Authority within 30 days of the payment date.</p>
      </Section>
    </UtilPage>
  );
}
