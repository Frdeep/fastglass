import ServiceCard from '@/components/ui/ServiceCard'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Services - Vitrage Automobile Paris | Fastglass75',
  description: 'Découvrez tous nos services de vitrage automobile : remplacement pare-brise, réparation, vitre latérale, lunette arrière. Intervention rapide à Paris.',
}

export default function NosServicesPage() {
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
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Nos <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Une gamme complète de services pour tous vos besoins en vitrage automobile.
              Intervention rapide, 0€ à payer, cadeau jusqu'à 300€.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              et vous fournir un devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis-gratuit" className="btn-primary">
                Demander un devis
              </Link>
              <a href="tel:+33613667663" className="btn-secondary">
                06 13 66 76 63
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
