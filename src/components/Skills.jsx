import React from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LanguageProvider'

const SkillCard = ({ icon, title, items }) => (
  <div className="card p-6">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-athar-olive/30 flex items-center justify-center text-athar-sand">{icon}</div>
      <h3 className="font-bold">{title}</h3>
    </div>
    <p className="text-white/80 leading-7">{items}</p>
  </div>
)

export default function Skills() {
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
          {t.skills.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard icon="📊" title={t.skills.data.title} items={t.skills.data.items} />
          <SkillCard icon="🤖" title={t.skills.ai.title} items={t.skills.ai.items} />
          <SkillCard icon="🛠️" title={t.skills.tools.title} items={t.skills.tools.items} />
        </div>
      </div>
    </section>
  )
}


