"use client";
import UtilPage, { Section } from "../_components/UtilPage";

export default function PrivacyPage() {
  return (
    <UtilPage title="Privacy Policy" icon="🔒">
      <p className="text-[12px] text-white/30 font-mono">Last updated: 26 Sep 2026</p>

      <Section title="1. Information We Collect">
        <p>We collect information you provide directly: Worker ID, name, department, training scores, and session data. We also collect device and usage data to improve the platform.</p>
      </Section>

      <Section title="2. How We Use Your Data">
        <p>Your data is used to:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-white/50">
          <li>Track training progress and issue certificates</li>
          <li>Enable supervisor verification of workers</li>
          <li>Comply with Jharkhand industrial safety regulations</li>
          <li>Improve training content and platform performance</li>
        </ul>
      </Section>

      <Section title="3. Data Sharing">
        <p>We do not sell your personal data. We share data only with your employing organization and regulatory bodies as required by law.</p>
      </Section>

      <Section title="4. Camera Access">
        <p>Camera access is requested only for QR scanning and training simulations. Video is processed locally on your device and never stored on our servers.</p>
      </Section>

      <Section title="5. Data Retention">
        <p>Training records are retained for 3 years as required by Indian industrial safety law. You may request deletion of non-mandatory data by contacting support.</p>
      </Section>

      <Section title="6. Your Rights">
        <p>Under applicable law you have the right to access, correct, or delete your personal data. Contact your supervisor or our support team at support@senar.in.</p>
      </Section>

      <Section title="7. Contact">
        <p>SENAR Safety Platform<br />Jharkhand Industrial Safety Authority<br />support@senar.in · +91-651-000-0000</p>
      </Section>
    </UtilPage>
  );
}
