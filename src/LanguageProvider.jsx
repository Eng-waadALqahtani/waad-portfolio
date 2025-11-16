import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languages, messages } from './i18n'

const LangContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(languages.ar)

  useEffect(() => {
    const stored = localStorage.getItem('waad-lang')
    if (stored === languages.en || stored === languages.ar) {
      setLang(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = messages[lang].dir
    const body = document.body
    if (messages[lang].dir === 'rtl') {
      body.classList.add('font-cairo')
      body.classList.remove('font-inter')
    } else {
      body.classList.add('font-inter')
      body.classList.remove('font-cairo')
    }
    localStorage.setItem('waad-lang', lang)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: messages[lang] }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}


