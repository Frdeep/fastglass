import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remplacement Custode Paris | Vitre Fixe | Fastglass75',
  description: 'Remplacement de custode fixe ou ouvrante à Paris. Étanchéité parfaite assurée. Tous modèles de véhicules. 0€ à payer.',
}

export default function CustodePage() {
  return (
    <ServicePageTemplate
      title="Custode"
      subtitle="Remplacement de custodes fixes et ouvrantes"
      description="Votre custode est cassée ? Fastglass75 remplace vos custodes fixes et ouvrantes pour tous types de véhicules. Ces petites vitres latérales situées généralement à l\'arrière nécessitent une pose précise pour garantir une étanchéité parfaite. Nous intervenons rapidement avec des vitrages adaptés à votre véhicule."
      image="/images/-5927063639263218494_121.jpg"
      benefits={[
        'Custodes fixes et ouvrantes disponibles',
        'Étanchéité parfaite garantie',
        'Installation rapide en 1 heure',
        'Compatible tous modèles de véhicules',
        'Mécanisme d\'ouverture inclus si applicable',
        'Finitions soignées',
      ]}
      process={[
        {
          title: 'Diagnostic',
          description: 'Identification du type de custode (fixe ou ouvrante) et commande si nécessaire.',
        },
        {
          title: 'Dépose',
          description: 'Retrait de l\'ancienne custode et nettoyage du cadre.',
        },
        {
          title: 'Installation',
          description: 'Pose de la nouvelle custode avec joint d\'étanchéité.',
        },
        {
          title: 'Finition',
          description: 'Vérification de l\'étanchéité et test d\'ouverture si applicable.',
        },
      ]}
      faqs={[
        {
          question: 'Qu\'est-ce qu\'une custode ?',
          answer: 'Une custode est une petite vitre latérale, généralement fixe, située sur les montants arrière du véhicule ou sur les portes arrière. Certains modèles proposent des custodes ouvrantes.',
        },
        {
          question: 'Avez-vous des custodes pour tous les véhicules ?',
          answer: 'Oui, nous pouvons nous procurer des custodes pour la plupart des modèles de véhicules, y compris les utilitaires et monospaces. Délai de 24 à 48h si commande nécessaire.',
        },
        {
          question: 'Une custode cassée est-elle dangereuse ?',
          answer: 'Une custode cassée expose l\'intérieur du véhicule aux intempéries et peut poser des problèmes de sécurité (risque de vol). Nous recommandons un remplacement rapide.',
        },
        {
          question: 'Le remplacement affecte-t-il l\'étanchéité du véhicule ?',
          answer: 'Non, au contraire. Nous utilisons des joints d\'étanchéité de qualité professionnelle et vérifions systématiquement l\'étanchéité après installation.',
        },
      ]}
    />
  )
}
