import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réparation Pare-brise Paris | Impact & Fissure | Fastglass75',
  description: 'Réparation d\'impact et fissure sur pare-brise à Paris. Intervention rapide, 0€ à payer avec assurance. Solution économique et écologique.',
}

export default function ReparationPareBrisePage() {
  return (
    <ServicePageTemplate
      title="Réparation Pare-brise"
      subtitle="Réparation rapide et économique d\'impacts et fissures"
      description="Un impact ou une petite fissure sur votre pare-brise ? La réparation est souvent possible et vous évite un remplacement coûteux. Notre technique professionnelle permet de réparer les impacts jusqu\'à 2cm de diamètre et les fissures jusqu\'à 15cm. Intervention rapide, prise en charge assurance, et résultat invisible."
      image="https://img.sanishtech.com/u/0d429c5bf6c35261dd7e8a52d284e858.jpg"
      benefits={[
        'Réparation invisible et durable',
        'Solution économique vs remplacement',
        'Préservation du vitrage d\'origine',
        'Intervention rapide en 30 minutes',
        'Prise en charge assurance bris de glace',
        'Technique professionnelle par injection résine',
      ]}
      process={[
        {
          title: 'Diagnostic',
          description: 'Évaluation de l\'impact ou fissure pour confirmer la possibilité de réparation.',
        },
        {
          title: 'Préparation',
          description: 'Nettoyage de la zone endommagée et préparation du support.',
        },
        {
          title: 'Injection résine',
          description: 'Injection de résine spéciale sous vide pour combler l\'impact.',
        },
        {
          title: 'Finition',
          description: 'Durcissement UV, polissage et contrôle qualité final.',
        },
      ]}
      faqs={[
        {
          question: 'Tous les impacts sont-ils réparables ?',
          answer: 'La plupart des impacts peuvent être réparés s\'ils font moins de 2cm de diamètre et ne sont pas dans le champ de vision direct du conducteur. Les fissures jusqu\'à 15cm peuvent également être traitées.',
        },
        {
          question: 'La réparation est-elle visible ?',
          answer: 'Notre technique professionnelle par injection de résine rend la réparation quasi invisible. On peut parfois apercevoir une légère trace, mais elle n\'affecte pas la vision ni la solidité du vitrage.',
        },
        {
          question: 'Combien de temps dure une réparation ?',
          answer: 'Une réparation d\'impact prend généralement 30 minutes. Vous pouvez reprendre la route immédiatement après l\'intervention.',
        },
        {
          question: 'La réparation est-elle prise en charge par l\'assurance ?',
          answer: 'Oui, la réparation de pare-brise est généralement prise en charge à 100% par l\'assurance bris de glace, sans application de franchise. C\'est une solution encouragée par les assureurs.',
        },
      ]}
    />
  )
}
