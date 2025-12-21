'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.sanishtech.com/u/0d429c5bf6c35261dd7e8a52d284e858.jpg"
          alt="Équipe Fastglass75"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-primary/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prêt à changer votre pare-brise ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Intervention rapide, 0€ à payer, cadeau jusqu'à 300€.
            Prenez rendez-vous dès maintenant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#formulaire"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33613667663"
              className="bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>06 13 66 76 63</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
