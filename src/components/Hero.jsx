import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LanguageProvider'

export default function Hero() {
  const { t } = useLang()

  return (
    <div className="container-width min-h-[80vh] grid md:grid-cols-2 gap-10 items-center py-16">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug"
        >
          <span className="block text-athar-text">{t.hero.heading1}</span>
          <span className="block text-athar-sand">{t.hero.heading2}</span>
          <span className="block text-white/80 text-xl sm:text-2xl font-normal">{t.hero.heading3}</span>
        </motion.h1>

        <div className="flex gap-4">
          <a href="#about" className="btn-accent-outline">{t.hero.aboutBtn}</a>
          <a href="#projects" className="btn-accent-outline">{t.hero.projectsBtn}</a>
        </div>
      </div>

      <div className="relative flex justify-center md:justify-end">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-athar-sand/15 blur-2xl"></div>
          <div className="absolute -top-8 -start-8 w-64 h-64 rounded-full bg-athar-sand/25 blur-3xl"></div>
          <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border border-white/10 ring-2 ring-athar-sand/60 overflow-hidden shadow-2xl shadow-black">
            <div className="absolute -inset-1 rounded-full bg-athar-sand/20"></div>
            <img
              src="/waad-photo.png"
              alt="Waad Alqahtani"
              className="relative w-full h-full object-cover"
              onError={(e) => {
                // Hide the <img> if the user hasn't added waad-photo.png yet
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="md:col-span-2 flex justify-center pt-8">
        <a href="#about" className="animate-bounce text-athar-highlight" aria-label="Scroll down">↓</a>
      </div>
    </div>
  )
}


