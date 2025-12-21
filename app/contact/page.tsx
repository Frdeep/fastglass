import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Fastglass75 Paris | Devis Gratuit',
  description: 'Contactez Fastglass75 pour votre remplacement de pare-brise à Paris. Téléphone, email, formulaire. Réponse rapide garantie.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Contactez-<span className="text-gradient">nous</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              et vous accompagner dans votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Téléphone</h3>
                    <p className="text-secondary-600 mb-3">
                      Appelez-nous directement pour un devis ou une urgence
                    </p>
                    <a
                      href="tel:+33613667663"
                      className="text-2xl font-bold text-primary hover:text-primary-600 transition-colors"
                    >
                      06 13 66 76 63
                    </a>
                    <p className="text-sm text-secondary-500 mt-2">
                      Disponible 7j/7 de 8h à 20h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Email</h3>
                    <p className="text-secondary-600 mb-3">
                      Envoyez-nous un email, nous vous répondons sous 2h
                    </p>
                    <a
                      href="mailto:contact@fastglass75.fr"
                      className="text-lg font-semibold text-primary hover:text-primary-600 transition-colors"
                    >
                      contact@fastglass75.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">WhatsApp</h3>
                    <p className="text-secondary-600 mb-3">
                      Contactez-nous directement sur WhatsApp
                    </p>
                    <a
                      href="https://wa.me/33613667663"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-primary hover:text-primary-600 transition-colors"
                    >
                      Ouvrir WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Zone d'intervention</h3>
                    <p className="text-secondary-600 mb-3">
                      Paris & Île-de-France
                    </p>
                    <Link
                      href="/zone-intervention"
                      className="text-primary hover:text-primary-600 font-semibold transition-colors"
                    >
                      Voir toutes les zones →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-card p-8 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Horaires</h3>
                    <div className="text-secondary-600 space-y-1">
                      <p>Lundi - Vendredi : 8h - 20h</p>
                      <p>Samedi : 9h - 19h</p>
                      <p>Dimanche : 9h - 17h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 sticky top-24">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  Demander un devis gratuit
                </h2>
                <p className="text-secondary-600 mb-8">
                  Remplissez notre formulaire en ligne pour obtenir votre devis personnalisé.
                  0€ à payer + cadeau jusqu'à 300€ garanti.
                </p>
                <Link
                  href="/devis-gratuit"
                  className="btn-primary w-full text-center block mb-6"
                >
                  Accéder au formulaire
                </Link>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-bold text-secondary-900 mb-4">Pourquoi nous contacter ?</h3>
                  <ul className="space-y-3 text-secondary-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Obtenir un devis gratuit et sans engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Poser vos questions sur nos services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Prendre rendez-vous rapidement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Vérifier notre zone d'intervention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Obtenir des conseils personnalisés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une question urgente ?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Pour les interventions urgentes, n'hésitez pas à nous appeler directement
          </p>
          <a
            href="tel:+33613667663"
            className="bg-primary hover:bg-primary-600 text-white font-bold text-2xl py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3"
          >
            <Phone className="w-6 h-6" />
            <span>06 13 66 76 63</span>
          </a>
        </div>
      </section>
    </div>
  )
}
