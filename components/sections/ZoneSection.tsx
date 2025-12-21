'use client'

import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const ZoneSection = () => {
  const parisAreas = [
    'Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e',
    'Paris 5e', 'Paris 6e', 'Paris 7e', 'Paris 8e',
    'Paris 9e', 'Paris 10e', 'Paris 11e', 'Paris 12e',
    'Paris 13e', 'Paris 14e', 'Paris 15e', 'Paris 16e',
    'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e',
  ]

  const idfAreas = [
    'Hauts-de-Seine (92)',
    'Seine-Saint-Denis (93)',
    'Val-de-Marne (94)',
    'Essonne (91)',
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="section-title">Zone d'Intervention</h2>
          <p className="section-subtitle">
            Nous intervenons partout à Paris et en Île-de-France
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100 mb-8"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-primary mr-3" />
              Paris (75) - Tous arrondissements
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {parisAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center space-x-2 text-secondary-700"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-primary mr-3" />
              Île-de-France
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {idfAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center space-x-2 text-secondary-700"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link href="/zone-intervention" className="btn-primary inline-block">
              Voir la carte complète
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ZoneSection
