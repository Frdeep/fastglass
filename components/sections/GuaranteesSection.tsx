'use client'

import { Euro, Gift } from 'lucide-react'
import { motion } from 'framer-motion'

const GuaranteesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Notre Engagement Unique</h2>
          <p className="section-subtitle">
            Des avantages exclusifs pour tous nos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border-2 border-green-200 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              GARANTI
            </div>
            <div className="bg-green-100 rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Euro className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              0€ à payer
            </h3>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Prise en charge directe par votre assurance. Aucune avance de frais.
              Nous gérons toutes les démarches administratives pour vous.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-dark rounded-3xl p-8 md:p-10 shadow-card-hover relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              EXCLUSIF
            </div>
            <div className="bg-primary/20 rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Gift className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cadeau jusqu'à 300€
            </h3>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Profitez d'un cadeau exceptionnel après votre intervention.
              Cartes cadeaux, bons d'achat, et bien plus encore.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteesSection
