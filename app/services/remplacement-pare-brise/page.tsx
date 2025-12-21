import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remplacement Pare-brise Paris | 0€ à Payer | Fastglass75',
  description: 'Remplacement de pare-brise à Paris. Vitrage certifié origine, intervention rapide 24h, 0€ à payer, cadeau 300€. Prise en charge assurance 100%.',
}

export default function RemplacementPareBrisePage() {
  return (
    <ServicePageTemplate
      title="Remplacement Pare-brise"
      subtitle="Service professionnel de remplacement de pare-brise à Paris et Île-de-France"
      description="Votre pare-brise est endommagé et nécessite un remplacement ? Fastglass75 vous propose un service complet avec vitrage certifié origine, intervention rapide en moins de 24h, et prise en charge directe par votre assurance. Profitez de notre offre exclusive : 0€ à payer et un cadeau jusqu'à 300€."
      image="https://img.sanishtech.com/u/7c29e7b17c01699f2b6bac784896ae99.jpg"
      benefits={[
        'Vitrage certifié équivalent origine constructeur',
        'Installation professionnelle par techniciens certifiés',
        'Garantie à vie sur la pose et l\'étanchéité',
        'Prise en charge directe assurance',
        'Intervention à domicile ou en atelier',
        'Recalibrage des systèmes ADAS inclus',
      ]}
      process={[
        {
          title: 'Prise de rendez-vous',
          description: 'Contactez-nous par téléphone ou formulaire en ligne. Nous vérifions votre couverture assurance.',
        },
        {
          title: 'Choix du lieu',
          description: 'Intervention à domicile, au travail ou dans notre atelier selon votre préférence.',
        },
        {
          title: 'Remplacement',
          description: 'Dépose de l\'ancien pare-brise et installation du nouveau vitrage en 2-3h.',
        },
        {
          title: 'Contrôle qualité',
          description: 'Vérification de l\'étanchéité, recalibrage caméra, nettoyage complet.',
        },
      ]}
      faqs={[
        {
          question: 'Combien de temps dure le remplacement ?',
          answer: 'Le remplacement d\'un pare-brise prend généralement entre 2 et 3 heures, incluant le temps de séchage des colles. Nous vous conseillons d\'attendre 1 heure supplémentaire avant de prendre la route.',
        },
        {
          question: 'Puis-je rouler immédiatement après ?',
          answer: 'Nous recommandons d\'attendre au moins 1 heure après la pose pour que les colles sèchent correctement. Vous pouvez ensuite rouler normalement, mais évitez les secousses importantes pendant 24h.',
        },
        {
          question: 'Le vitrage est-il de même qualité que l\'origine ?',
          answer: 'Oui, nous utilisons uniquement des vitrages certifiés équivalents à l\'origine constructeur. Ils respectent les mêmes normes de sécurité et de qualité.',
        },
        {
          question: 'Qu\'en est-il des systèmes ADAS et caméra ?',
          answer: 'Le recalibrage de la caméra frontale et des systèmes ADAS est inclus dans notre prestation. Nous disposons du matériel professionnel nécessaire.',
        },
      ]}
    />
  )
}
