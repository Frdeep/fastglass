import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remplacement Lunette Arrière Paris | Fastglass75',
  description: 'Remplacement de lunette arrière avec dégivrage à Paris. Installation professionnelle, garantie étanchéité. 0€ à payer.',
}

export default function LunetteArrierePage() {
  return (
    <ServicePageTemplate
      title="Lunette Arrière"
      subtitle="Remplacement professionnel de lunette arrière avec dégivrage"
      description="Lunette arrière cassée ou fissurée ? Fastglass75 vous propose un remplacement complet avec raccordement du système de dégivrage. Nous utilisons des vitrages de qualité avec résistances chauffantes intégrées. Installation professionnelle garantie, prise en charge assurance, intervention rapide."
      image="/images/-5927063639263218495_121.jpg"
      benefits={[
        'Vitrage avec dégivrage intégré',
        'Raccordement électrique inclus',
        'Test de fonctionnement complet',
        'Étanchéité parfaite garantie',
        'Compatible tous systèmes (essuie, caméra)',
        'Pose professionnelle certifiée',
      ]}
      process={[
        {
          title: 'Dépose',
          description: 'Retrait de l\'ancienne lunette et déconnexion du dégivrage.',
        },
        {
          title: 'Préparation',
          description: 'Nettoyage du cadre et préparation de la surface de collage.',
        },
        {
          title: 'Installation',
          description: 'Pose de la nouvelle lunette avec colle polyuréthane haute résistance.',
        },
        {
          title: 'Raccordement',
          description: 'Connexion du dégivrage et test complet de fonctionnement.',
        },
      ]}
      faqs={[
        {
          question: 'Le dégivrage sera-t-il fonctionnel ?',
          answer: 'Oui, nous testons systématiquement le fonctionnement du dégivrage après installation. Toutes nos lunettes sont équipées de résistances chauffantes de qualité équivalente à l\'origine.',
        },
        {
          question: 'Qu\'en est-il de la caméra de recul ?',
          answer: 'Si votre véhicule est équipé d\'une caméra de recul intégrée à la lunette, nous la réinstallons et vérifions son bon fonctionnement.',
        },
        {
          question: 'Combien de temps dure le remplacement ?',
          answer: 'Le remplacement d\'une lunette arrière prend généralement 2 à 3 heures, incluant le temps de séchage de la colle et le test des systèmes électriques.',
        },
        {
          question: 'Puis-je rouler immédiatement après ?',
          answer: 'Nous recommandons d\'attendre au moins 2 heures après la pose pour que la colle durcisse correctement. Évitez les fortes secousses pendant les 24 premières heures.',
        },
      ]}
    />
  )
}
