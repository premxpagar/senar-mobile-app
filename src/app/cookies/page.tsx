"use client";
import UtilPage, { Section } from "../_components/UtilPage";

export default function CookiesPage() {
  return (
    <UtilPage title="Cookie Policy" icon="🍪">
      <p className="text-[12px] text-white/30 font-mono">Last updated: 26 Sep 2026</p>

      <Section title="What Are Cookies">
        <p>Cookies are small text files stored on your device. SENAR uses session storage (not persistent cookies) to keep you logged in during a session.</p>
      </Section>

      <Section title="What We Store">
        <ul className="list-disc list-inside space-y-1 text-white/50">
          <li><strong className="text-white/70">Session data</strong> — Worker ID, name, role (cleared on logout)</li>
          <li><strong className="text-white/70">Last result</strong> — Most recent training attempt score</li>
          <li><strong className="text-white/70">Language preference</strong> — Your selected interface language</li>
        </ul>
      </Section>

      <Section title="What We Don't Store">
        <p>We do not use tracking cookies, third-party advertising cookies, or persistent fingerprinting. No data is sent to ad networks.</p>
      </Section>

      <Section title="PWA Cache">
        <p>For offline use, training content and certificates may be cached using Service Workers. This allows the app to function without internet access on-site.</p>
      </Section>

      <Section title="Managing Storage">
        <p>You can clear all stored data by tapping "Sign Out" in the Profile page, or clearing your browser's site data for this app. This will require you to log in again.</p>
      </Section>
    </UtilPage>
  );
}
