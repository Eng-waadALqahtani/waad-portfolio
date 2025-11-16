import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../LanguageProvider'

const ProjectCard = ({ index, title, description, repo }) => (
  <motion.a
    href={repo}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ delay: index * 0.1 }}
    className="card overflow-hidden group hover:shadow-[0_0_20px_#C9A66B55] transition-shadow duration-300"
  >
    <div className="h-40 bg-white/5 relative">
      <img
        src={`/project${(index % 6) + 1}.png`}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
    <div className="p-5">
      <h3 className="font-bold mb-2 group-hover:text-athar-highlight transition-colors">{title}</h3>
      <p className="text-white/75 leading-7">{description}</p>
    </div>
  </motion.a>
)

export default function Projects() {
  const { t, lang } = useLang()
  const categories = t.projects.categories
  const defaultCategory = lang === 'ar' ? 'الذكاء الاصطناعي' : 'Artificial Intelligence'
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [direction, setDirection] = useState(0)

  const handleCategoryChange = (newCategory) => {
    const currentIndex = categories.indexOf(activeCategory)
    const newIndex = categories.indexOf(newCategory)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setActiveCategory(newCategory)
  }

  const projects = t.projects.data[activeCategory] || []

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section className="py-20">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-8"
        >
          {t.projects.title}
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full font-bold border transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'bg-athar-sand text-athar-bg border-athar-sand'
                    : 'bg-transparent text-athar-text border-athar-sand hover:bg-gradient-to-r hover:from-athar-sand hover:to-athar-olive hover:border-transparent'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Projects Grid with Slide Animation */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeCategory}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.repo}
                  index={index}
                  title={project.title}
                  description={project.description}
                  repo={project.repo}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
