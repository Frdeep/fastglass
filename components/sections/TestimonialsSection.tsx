'use client'

import TestimonialCard from '@/components/ui/TestimonialCard'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sophie Martin',
      location: 'Paris 15e',
      rating: 5,
      comment: 'Service impeccable ! Intervention rapide en moins de 24h, technicien professionnel et j\'ai reçu mon cadeau comme promis. Je recommande vivement Fastglass75.',
    },
    {
      name: 'Marc Dubois',
      location: 'Boulogne-Billancourt',
      rating: 5,
      comment: 'Très satisfait du service. Prise en charge directe par l\'assurance, aucune avance de frais. Le technicien est venu à mon domicile, c\'est très pratique.',
    },
    {
      name: 'Fatima Benali',
      location: 'Paris 18e',
      rating: 5,
      comment: 'Excellent rapport qualité-prix. Le pare-brise a été remplacé rapidement et le résultat est parfait. Le cadeau de 300€ est un vrai plus !',
    },
  ]

  return (
    <section id="temoignages" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Témoignages Clients</h2>
          <p className="section-subtitle">
            Découvrez ce que nos clients disent de nos services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
