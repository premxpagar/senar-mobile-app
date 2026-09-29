"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, LANGUAGES, type LangCode, type Translations, type Lang } from "./i18n";

interface I18nContextValue {
  t: Translations;
  lang: LangCode;
  setLang: (l: LangCode) => void;
  languages: Lang[];
}

const I18nContext = createContext<I18nContextValue>({
  t: TRANSLATIONS.en,
  lang: "en",
  setLang: () => {},
  languages: LANGUAGES,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const stored = (localStorage.getItem("senar_lang") || sessionStorage.getItem("senar_lang")) as LangCode | null;
    if (stored && TRANSLATIONS[stored]) { setLangState(stored); return; }
    const user = sessionStorage.getItem("senar_user");
    if (user) {
      const parsed = JSON.parse(user);
      if (parsed.language && TRANSLATIONS[parsed.language as LangCode]) {
        setLangState(parsed.language as LangCode);
      }
    }
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    localStorage.setItem("senar_lang", l);
    sessionStorage.setItem("senar_lang", l);
    const user = sessionStorage.getItem("senar_user");
    if (user) {
      const parsed = JSON.parse(user);
      sessionStorage.setItem("senar_user", JSON.stringify({ ...parsed, language: l }));
    }
  };


  return (
    <I18nContext.Provider value={{ t: TRANSLATIONS[lang], lang, setLang, languages: LANGUAGES }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
