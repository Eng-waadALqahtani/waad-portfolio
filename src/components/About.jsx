import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LanguageProvider'

export default function About() {
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
          {t.about.title}
        </motion.h2>
        <div className="card p-6 leading-8 text-white/90">
          <p className="mb-3">{t.about.p1}</p>
          <p className="mb-3">{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
    </section>
  )
}


