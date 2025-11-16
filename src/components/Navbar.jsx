import React from 'react'
import { useLang } from '../LanguageProvider'

export default function Navbar() {
  const { t, lang, setLang } = useLang()

  const toggle = () => setLang(lang === 'ar' ? 'en' : 'ar')

  const Item = ({ href, children }) => (
    <a href={href} className="hover:text-athar-highlight transition-colors">
      {children}
    </a>
  )

  return (
    <header className="sticky top-0 z-50 bg-athar-bg/80 backdrop-blur border-b border-white/5">
      <nav className="container-width flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-athar-highlight"></div>
          <span className="font-bold tracking-wide">Waad Alqahtani</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Item href="#home">{t.nav.home}</Item>
          <Item href="#about">{t.nav.about}</Item>
          <Item href="#skills">{t.nav.skills}</Item>
          <Item href="#projects">{t.nav.projects}</Item>
          <Item href="#contact">{t.nav.contact}</Item>
        </div>
        <button
          onClick={toggle}
          className="glass px-3 py-1.5 text-sm flex items-center gap-2"
          aria-label="Toggle language"
        >
          <span>{lang === 'ar' ? '🇬🇧' : '🇸🇦'}</span>
          <span>{t.toggleLabel}</span>
        </button>
      </nav>
    </header>
  )
}


