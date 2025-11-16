import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LanguageProvider'

export default function Contact() {
  const { t } = useLang()
  return (
    <section className="py-20">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-6"
        >
          {t.contact.title}
        </motion.h2>
        <div className="card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/85">{t.contact.desc}</p>
          <div className="flex gap-3">
            <a href="mailto:contact@waad.dev" className="btn-accent-outline">{t.contact.ctas.email}</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="btn-accent-outline">{t.contact.ctas.linkedin}</a>
          </div>
        </div>
        <div className="text-center text-white/40 mt-8 text-sm">© {new Date().getFullYear()} Waad Alqahtani</div>
      </div>
    </section>
  )
}


