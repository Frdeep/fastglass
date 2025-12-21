'use client'

import Image from 'next/image'
import { Calendar, Wrench, Gift } from 'lucide-react'
import { motion } from 'framer-motion'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Prenez rendez-vous',
      description: 'Remplissez notre formulaire en ligne ou appelez-nous. Nous vous proposons un créneau rapide.',
    },
    {
      icon: Wrench,
      title: 'Intervention rapide',
      description: 'Nos techniciens certifiés interviennent chez vous ou à notre atelier en moins de 24h.',
      image: 'https://img.sanishtech.com/u/7c29e7b17c01699f2b6bac784896ae99.jpg',
    },
    {
      icon: Gift,
      title: 'Recevez votre cadeau',
      description: 'Après l\'intervention, bénéficiez de votre cadeau jusqu\'à 300€. 100% garanti.',
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
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-subtitle">
            Un processus simple et rapide en 3 étapes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 h-full">
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-primary">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{step.title}</h3>
                <p className="text-secondary-600 leading-relaxed mb-6">{step.description}</p>

                {step.image && (
                  <div className="relative rounded-xl overflow-hidden h-48">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
