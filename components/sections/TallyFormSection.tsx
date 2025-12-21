'use client'

import TallyForm from '@/components/ui/TallyForm'
import { motion } from 'framer-motion'

const TallyFormSection = () => {
  return (
    <section id="formulaire" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Réservez votre intervention</h2>
            <p className="section-subtitle">
              Remplissez le formulaire en 2 minutes. 0€ à payer + Cadeau jusqu'à 300€
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <TallyForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TallyFormSection
