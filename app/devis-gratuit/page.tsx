import TallyForm from '@/components/ui/TallyForm'
import { CheckCircle, Euro, Gift, Clock, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Devis Gratuit - Remplacement Pare-brise | Fastglass75',
  description: 'Obtenez votre devis gratuit pour le remplacement de votre pare-brise. 0€ à payer, cadeau jusqu\'à 300€. Intervention rapide à Paris et IDF.',
}

export default function DevisGratuitPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Demandez votre <span className="text-gradient">devis gratuit</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Remplissez le formulaire en 2 minutes et bénéficiez de notre offre exclusive
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
                <TallyForm minHeight={600} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Euro className="w-10 h-10" />
                  <div className="text-3xl font-bold">0€</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Aucun frais à avancer</h3>
                <p className="text-white/90">
                  Prise en charge directe par votre assurance. Nous gérons tout pour vous.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Gift className="w-10 h-10 text-primary" />
                  <div className="text-3xl font-bold text-primary">300€</div>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Cadeau garanti</h3>
                <p className="text-secondary-600">
                  Recevez un cadeau jusqu'à 300€ après votre intervention.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Nos garanties</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600 text-sm">Vitrage certifié origine</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600 text-sm">Intervention sous 24h</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600 text-sm">Garantie à vie sur la pose</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600 text-sm">Démarches assurance incluses</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-secondary-900 mb-2">Besoin d'aide ?</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Notre équipe est disponible pour vous accompagner
                </p>
                <a
                  href="tel:+33613667663"
                  className="btn-primary w-full text-center block"
                >
                  06 13 66 76 63
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
