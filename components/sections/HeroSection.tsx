'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, Gift, Euro } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-pulse-slow">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Service n°1 à Paris</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              Remplacement de{' '}
              <span className="text-gradient">pare-brise</span>
              {' '}à Paris
            </h1>

            <p className="text-xl md:text-2xl text-secondary-600 mb-8 leading-relaxed">
              Intervention rapide en 24h, 0€ à payer et recevez un cadeau jusqu'à 300€
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#formulaire" className="btn-primary text-center">
                Prendre rendez-vous
              </Link>
              <a href="tel:+33613667663" className="btn-secondary text-center flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>06 13 66 76 63</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-4 shadow-card"
              >
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-secondary-600 text-sm">Interventions réalisées</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow-card"
              >
                <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                <div className="text-secondary-600 text-sm">Satisfaction client</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-card"
              >
                <div className="text-3xl font-bold text-primary mb-1">24h</div>
                <div className="text-secondary-600 text-sm">Délai d'intervention</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/-5927063639263218497_121.jpg"
                alt="Technicien Fastglass75 en intervention"
                width={600}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-card-hover animate-float"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-3">
                  <Euro className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">0€</div>
                  <div className="text-secondary-600 text-sm">à payer</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-card-hover"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 rounded-full p-3">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">300€</div>
                  <div className="text-secondary-600 text-sm">de cadeau</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
