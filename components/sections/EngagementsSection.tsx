'use client'

import { Shield, Clock, Award, FileCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const EngagementsSection = () => {
  const engagements = [
    {
      icon: Shield,
      title: 'Vitrage certifié origine',
      description: 'Nous utilisons uniquement des vitrages de qualité équivalente à l\'origine constructeur.',
    },
    {
      icon: Clock,
      title: 'Intervention en 24h max',
      description: 'Délai d\'intervention garanti sous 24h pour votre confort et votre sécurité.',
    },
    {
      icon: Award,
      title: 'Garantie à vie',
      description: 'Tous nos remplacements sont garantis à vie contre les défauts de pose.',
    },
    {
      icon: FileCheck,
      title: 'Démarches assurance incluses',
      description: 'Nous prenons en charge toutes vos démarches administratives auprès de votre assurance.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nos Engagements</h2>
          <p className="section-subtitle">
            Qualité, rapidité et transparence au cœur de nos services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {engagements.map((engagement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow"
            >
              <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
                <engagement.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{engagement.title}</h3>
              <p className="text-secondary-600 text-sm leading-relaxed">{engagement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngagementsSection
