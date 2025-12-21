'use client'

import { motion } from 'framer-motion'
import { Shield, Wrench, Car, Eye, Grid, Home } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Remplacement Pare-brise',
      description: 'Remplacement complet avec vitrage certifié origine. Intervention rapide et garantie à vie.',
      image: 'https://i.imgur.com/Usjh9X2.jpg',
      icon: Shield,
    },
    {
      title: 'Réparation Pare-brise',
      description: 'Réparation d\'impacts et fissures. Solution rapide et économique.',
      image: 'https://i.imgur.com/Nf99YK3.jpg',
      icon: Wrench,
    },
    {
      title: 'Vitre Latérale',
      description: 'Remplacement de vitres latérales avant et arrière. Tous modèles.',
      image: 'https://i.imgur.com/ffTYnmn.jpg',
      icon: Car,
    },
    {
      title: 'Lunette Arrière',
      description: 'Remplacement de lunette arrière avec dégivrage inclus.',
      image: 'https://i.imgur.com/jTwZu7l.jpg',
      icon: Eye,
    },
    {
      title: 'Custode',
      description: 'Remplacement de custodes fixes ou ouvrantes. Étanchéité parfaite.',
      image: 'https://i.imgur.com/ci4NhpP.jpg',
      icon: Grid,
    },
    {
      title: 'Intervention à Domicile',
      description: 'Nous venons chez vous ou au travail. Service premium inclus.',
      image: 'https://i.imgur.com/htPOGK3.jpg',
      icon: Home,
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Une gamme complète de services pour tous vos besoins en vitrage automobile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-2">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
