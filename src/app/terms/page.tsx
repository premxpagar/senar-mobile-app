"use client";
import UtilPage, { Section } from "../_components/UtilPage";

export default function TermsPage() {
  return (
    <UtilPage title="Terms & Conditions" icon="📋">
      <p className="text-[12px] text-white/30 font-mono">Effective: 01 Sep 2026 · Version 2.1</p>

      <Section title="1. Acceptance">
        <p>By accessing SENAR you agree to these Terms. If you do not agree, do not use the platform.</p>
      </Section>

      <Section title="2. Platform Purpose">
        <p>SENAR is a mandatory industrial safety training and certification platform for workers in Jharkhand. Completion of assigned modules is required for workplace compliance.</p>
      </Section>

      <Section title="3. Worker Obligations">
        <ul className="list-disc list-inside space-y-1 text-white/50">
          <li>Complete all mandatory training modules</li>
          <li>Provide accurate identification information</li>
          <li>Not share credentials with other workers</li>
          <li>Renew certifications before expiry dates</li>
        </ul>
      </Section>

      <Section title="4. Certification Validity">
        <p>Certificates are valid for 12 months from issuance. Expired certificates must be renewed before workers may continue operations in relevant areas.</p>
      </Section>

      <Section title="5. Score Policy">
        <p>A minimum score of 70% is required to pass each module. Workers may reattempt failed modules after a 24-hour cooling period.</p>
      </Section>

      <Section title="6. Prohibited Conduct">
        <ul className="list-disc list-inside space-y-1 text-white/50">
          <li>Sharing quiz answers with other workers</li>
          <li>Attempting to manipulate scores</li>
          <li>Using another worker's credentials</li>
          <li>Interfering with the verification system</li>
        </ul>
      </Section>

      <Section title="7. Liability">
        <p>SENAR provides training tools only. We are not liable for workplace incidents. Compliance with physical safety protocols remains the employer's responsibility.</p>
      </Section>

      <Section title="8. Changes">
        <p>We may update these terms. Continued use after notification constitutes acceptance of revised terms.</p>
      </Section>
    </UtilPage>
  );
}
