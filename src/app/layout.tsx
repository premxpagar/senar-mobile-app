import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "./_lib/I18nProvider";

export const metadata: Metadata = {
  title: "SENAR — Industrial Safety Training",
  description: "AR-powered safety training platform for Jharkhand industrial workers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <I18nProvider>
          <div className="phone-host">
            <div className="phone-frame">
              <div className="phone-bg" />
              <div className="phone-overlay" />
              <div className="dynamic-island" />
              <div className="phone-content">
                {children}
              </div>
            </div>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
