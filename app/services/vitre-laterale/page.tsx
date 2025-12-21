import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remplacement Vitre Latérale Paris | Fastglass75',
  description: 'Remplacement de vitre latérale avant et arrière à Paris. Tous modèles de véhicules. Intervention rapide, 0€ à payer.',
}

export default function VitreLateralePage() {
  return (
    <ServicePageTemplate
      title="Vitre Latérale"
      subtitle="Remplacement de vitres latérales avant et arrière"
      description="Votre vitre latérale est cassée ou fissurée ? Fastglass75 intervient rapidement pour remplacer vos vitres latérales avant et arrière. Nous disposons d\'un large stock de vitrages pour tous modèles de véhicules. Intervention rapide, prise en charge assurance, et garantie sur la pose."
      image="/images/-5927063639263218493_121.jpg"
      benefits={[
        'Large stock disponible tous modèles',
        'Vitrages athermiques et teintés disponibles',
        'Installation rapide en 1-2 heures',
        'Étanchéité parfaite garantie',
        'Réglage des mécanismes inclus',
        'Nettoyage complet de l\'habitacle',
      ]}
      process={[
        {
          title: 'Identification',
          description: 'Identification précise du modèle et du type de vitre nécessaire.',
        },
        {
          title: 'Dépose',
          description: 'Retrait de l\'ancienne vitre et nettoyage du mécanisme.',
        },
        {
          title: 'Installation',
          description: 'Pose de la nouvelle vitre et vérification de l\'étanchéité.',
        },
        {
          title: 'Réglage',
          description: 'Réglage du mécanisme de lève-vitre et test de fonctionnement.',
        },
      ]}
      faqs={[
        {
          question: 'Avez-vous des vitres pour tous les modèles ?',
          answer: 'Oui, nous disposons d\'un réseau de fournisseurs nous permettant d\'obtenir des vitrages pour la quasi-totalité des modèles, même anciens ou rares. Nous vous confirmons la disponibilité lors de votre prise de rendez-vous.',
        },
        {
          question: 'Puis-je choisir une vitre teintée ?',
          answer: 'Oui, nous proposons différents niveaux de teinte selon la réglementation en vigueur. Les vitres arrières peuvent être plus foncées que les vitres avant.',
        },
        {
          question: 'Le mécanisme de lève-vitre est-il inclus ?',
          answer: 'Le réglage du mécanisme existant est inclus. Si le mécanisme est défaillant, nous pouvons également le remplacer (prestation additionnelle).',
        },
        {
          question: 'Combien de temps dure le remplacement ?',
          answer: 'Le remplacement d\'une vitre latérale prend généralement entre 1 et 2 heures selon le modèle du véhicule et l\'accessibilité.',
        },
      ]}
    />
  )
}
