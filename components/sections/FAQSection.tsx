'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Est-ce que je dois payer quelque chose ?',
      answer: 'Non, absolument rien ! Nous prenons en charge directement avec votre assurance. Vous n\'avez aucune avance de frais à faire. Nous gérons toutes les démarches administratives pour vous.',
    },
    {
      question: 'Comment fonctionne le cadeau de 300€ ?',
      answer: 'Après votre intervention, vous recevez automatiquement un cadeau d\'une valeur pouvant aller jusqu\'à 300€. Il peut s\'agir de cartes cadeaux, bons d\'achat chez nos partenaires, ou autres avantages exclusifs.',
    },
    {
      question: 'Quel est le délai d\'intervention ?',
      answer: 'Nous nous engageons à intervenir dans les 24h suivant votre demande. Pour les cas urgents, nous pouvons même intervenir le jour même selon les disponibilités.',
    },
    {
      question: 'Le vitrage est-il de qualité ?',
      answer: 'Absolument ! Nous utilisons uniquement des vitrages certifiés équivalents à l\'origine constructeur. Tous nos remplacements sont garantis à vie contre les défauts de pose.',
    },
    {
      question: 'Puis-je avoir l\'intervention à domicile ?',
      answer: 'Oui, nous proposons un service d\'intervention à domicile ou sur votre lieu de travail partout à Paris et en Île-de-France. C\'est inclus dans nos services.',
    },
    {
      question: 'Ma franchise est-elle prise en charge ?',
      answer: 'Dans la majorité des cas, il n\'y a pas de franchise pour le bris de glace. Nous vérifions directement avec votre assurance et vous informons avant toute intervention.',
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
          <h2 className="section-title">Questions Fréquentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-secondary-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-secondary-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
