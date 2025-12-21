import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Clock, Euro, Gift } from 'lucide-react'

interface ServicePageTemplateProps {
  title: string
  subtitle: string
  description: string
  image: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  image,
  benefits,
  process,
  faqs,
}: ServicePageTemplateProps) {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <p className="text-secondary-700 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis-gratuit" className="btn-primary text-center">
                  Demander un devis
                </Link>
                <a href="tel:+33613667663" className="btn-secondary text-center">
                  06 13 66 76 63
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-primary rounded-3xl p-8 text-white">
              <Euro className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">0€ à payer</h3>
              <p className="text-white/90">
                Prise en charge directe par votre assurance. Aucune avance de frais nécessaire.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <Gift className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Cadeau jusqu'à 300€</h3>
              <p className="text-secondary-600">
                Bénéficiez d'un cadeau exceptionnel après votre intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Les Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <p className="text-secondary-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Le Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 relative"
              >
                <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-primary">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <h3 className="text-lg font-bold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Intervention rapide, 0€ à payer, cadeau jusqu'à 300€
          </p>
          <Link href="/devis-gratuit" className="btn-primary inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}
