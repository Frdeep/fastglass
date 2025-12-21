import Image from 'next/image'
import Link from 'next/link'
import { Euro, Gift, Clock, Shield, Users, Award } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre Concept - 0€ + Cadeau 300€ | Fastglass75',
  description: 'Découvrez le concept unique Fastglass75 : remplacement pare-brise 0€ à payer + cadeau jusqu\'à 300€. Comment ça marche ? Explications complètes.',
}

export default function NotreConceptPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Notre <span className="text-gradient">Concept Unique</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Découvrez comment Fastglass75 révolutionne le remplacement de pare-brise
              avec une offre exclusive : 0€ à payer + cadeau jusqu'à 300€
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/-5927063639263218493_121.jpg"
                alt="Technicien Fastglass75"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Un concept gagnant-gagnant
              </h2>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                Chez Fastglass75, nous avons développé un concept unique qui vous permet
                de remplacer votre pare-brise sans aucun frais à avancer, tout en recevant
                un cadeau exceptionnel jusqu'à 300€.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                Grâce à nos partenariats avec les assureurs et notre réseau de partenaires
                commerciaux, nous pouvons vous offrir cette double garantie : qualité de
                service premium et avantages financiers exclusifs.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Notre objectif ? Transformer une situation contraignante (un pare-brise
                endommagé) en une expérience positive et avantageuse pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Les Deux Piliers de Notre Offre</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-primary rounded-3xl p-10 text-white">
              <Euro className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">0€ à payer</h3>
              <div className="space-y-4 text-white/90 text-lg">
                <p>
                  <strong>Prise en charge directe</strong><br />
                  Nous facturons directement votre assurance
                </p>
                <p>
                  <strong>Aucune avance de frais</strong><br />
                  Pas de débours, pas de remboursement à attendre
                </p>
                <p>
                  <strong>Démarches simplifiées</strong><br />
                  Nous gérons toute l'administratif pour vous
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-card-hover border-2 border-primary">
              <Gift className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Cadeau jusqu'à 300€</h3>
              <div className="space-y-4 text-secondary-700 text-lg">
                <p>
                  <strong>Cartes cadeaux</strong><br />
                  Amazon, Fnac, Decathlon et plus encore
                </p>
                <p>
                  <strong>Bons d'achat</strong><br />
                  Enseignes partenaires multiples
                </p>
                <p>
                  <strong>100% garanti</strong><br />
                  Cadeau systématique après intervention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-16">Pourquoi Choisir Fastglass75 ?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Rapidité</h3>
              <p className="text-secondary-600 leading-relaxed">
                Intervention garantie sous 24h. Nous savons qu'un pare-brise endommagé
                est une urgence, nous agissons en conséquence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Qualité</h3>
              <p className="text-secondary-600 leading-relaxed">
                Vitrages certifiés origine, techniciens qualifiés, garantie à vie.
                Nous ne faisons aucun compromis sur la qualité.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Service</h3>
              <p className="text-secondary-600 leading-relaxed">
                Intervention à domicile, prise en charge complète, accompagnement
                personnalisé. Votre satisfaction est notre priorité.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <Euro className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Transparence</h3>
              <p className="text-secondary-600 leading-relaxed">
                Pas de frais cachés, pas de mauvaise surprise. Le 0€ à payer est
                une réalité, pas un argument marketing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Expérience</h3>
              <p className="text-secondary-600 leading-relaxed">
                Plus de 500 interventions réalisées avec un taux de satisfaction
                de 4.9/5. Notre expertise est reconnue.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <Gift className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Générosité</h3>
              <p className="text-secondary-600 leading-relaxed">
                Le cadeau jusqu'à 300€ est notre façon de vous remercier de votre
                confiance et de rendre l'expérience encore plus positive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à profiter de notre offre unique ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Rejoignez les centaines de clients satisfaits qui ont fait confiance à Fastglass75
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis-gratuit" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                Demander un devis gratuit
              </Link>
              <a href="tel:+33613667663" className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                06 13 66 76 63
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
