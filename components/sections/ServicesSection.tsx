'use client'

import ServiceCard from '@/components/ui/ServiceCard'
import { motion } from 'framer-motion'

const ServicesSection = () => {
  const services = [
    {
      title: 'Remplacement Pare-brise',
      description: 'Remplacement complet de votre pare-brise avec vitrage certifié origine. Intervention rapide et garantie à vie.',
      image: '/images/-5927063639263218496_121.jpg',
      href: '/services/remplacement-pare-brise',
    },
    {
      title: 'Réparation Pare-brise',
      description: 'Réparation d\'impacts et fissures. Solution rapide et économique pour préserver votre pare-brise.',
      image: '/images/-5927063639263218489_121.jpg',
      href: '/services/reparation-pare-brise',
    },
    {
      title: 'Vitre Latérale',
      description: 'Remplacement de vitres latérales avant et arrière. Tous modèles de véhicules.',
      image: '/images/-5927063639263218493_121.jpg',
      href: '/services/vitre-laterale',
    },
    {
      title: 'Lunette Arrière',
      description: 'Remplacement de lunette arrière avec dégivrage. Installation professionnelle garantie.',
      image: '/images/-5927063639263218495_121.jpg',
      href: '/services/lunette-arriere',
    },
    {
      title: 'Custode',
      description: 'Remplacement de custodes fixes ou ouvrantes. Étanchéité parfaite assurée.',
      image: '/images/-5927063639263218494_121.jpg',
      href: '/services/custode',
    },
    {
      title: 'Intervention à Domicile',
      description: 'Nous venons chez vous ou sur votre lieu de travail. Service premium pour votre confort.',
      image: '/images/-5927063639263218488_121.jpg',
      href: '/devis-gratuit',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Une gamme complète de services pour tous vos besoins en vitrage automobile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
