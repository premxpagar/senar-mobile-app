"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Home, BookOpen, ScanLine, Award, User2 } from "lucide-react";
import { useI18n } from "../_lib/I18nProvider";

export type NavItem = "home" | "modules" | "scan" | "certificates" | "profile";

export default function BottomNav({ active }: { active: NavItem }) {
  const router = useRouter();
  const { t } = useI18n();

  const items = [
    { id: "home"         as NavItem, label: t.home,        icon: Home,      size: 20, path: "/home" },
    { id: "modules"      as NavItem, label: t.modules,     icon: BookOpen,  size: 20, path: "/modules" },
    { id: "scan"         as NavItem, label: t.scan,        icon: ScanLine,  size: 22, path: "/scan" },
    { id: "certificates" as NavItem, label: t.certificates,icon: Award,     size: 20, path: "/certificates" },
    { id: "profile"      as NavItem, label: t.profile,     icon: User2,     size: 20, path: "/profile" },
  ];

  return (
    /* Sits inside phone-content, is NOT fixed — uses sticky + safe-area inset */
    <div className="nav-wrapper">
      <nav className="nav-bar">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const isScan = item.id === "scan";
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`nav-tab ${isActive ? "active" : ""} ${isScan ? "nav-scan-btn" : ""}`}
              aria-label={item.label}
            >
              {isScan ? (
                /* Floating elevated scan button */
                <span className={`nav-scan-pill ${isActive ? "nav-scan-pill-active" : ""}`}>
                  <Icon size={22} />
                </span>
              ) : (
                <Icon size={item.size} />
              )}
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
