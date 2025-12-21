import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Fastglass75',
  description: 'Politique de confidentialité et protection des données personnelles de Fastglass75.',
}

export default function ConfidentialitePage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">Politique de Confidentialité</h1>

          <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-8">
            <div>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Chez Fastglass75, nous accordons une grande importance à la protection de vos données
                personnelles. Cette politique de confidentialité vous informe sur la manière dont nous
                collectons, utilisons et protégeons vos informations personnelles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Données collectées</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre site ou
                nos services :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Informations sur votre véhicule (marque, modèle, immatriculation)</li>
                <li>Informations d'assurance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Utilisation des données</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Traiter vos demandes de devis et de rendez-vous</li>
                <li>Réaliser les prestations de remplacement ou réparation de vitrage</li>
                <li>Communiquer avec vous concernant nos services</li>
                <li>Gérer les démarches avec votre assurance</li>
                <li>Vous envoyer des informations sur nos offres et services (avec votre consentement)</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Base légale du traitement</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le traitement de vos données personnelles est basé sur :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2 mt-4">
                <li>L'exécution du contrat de prestation de services</li>
                <li>Votre consentement pour les communications marketing</li>
                <li>Nos obligations légales (notamment fiscales et comptables)</li>
                <li>Notre intérêt légitime à améliorer nos services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Partage des données</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent
                être partagées avec :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Votre compagnie d'assurance (dans le cadre de la prise en charge)</li>
                <li>Nos prestataires techniques (hébergement, formulaires en ligne)</li>
                <li>Les autorités légales si la loi l'exige</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Durée de conservation</h2>
              <p className="text-secondary-700 leading-relaxed">
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour
                lesquelles elles sont traitées, et conformément aux obligations légales (généralement 3
                ans après la dernière intervention pour les données clients, 10 ans pour les données
                comptables).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Vos droits</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certains cas</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : contact@fastglass75.fr
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Sécurité des données</h2>
              <p className="text-secondary-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                protéger vos données personnelles contre tout accès non autorisé, modification, divulgation
                ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les communications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Cookies</h2>
              <p className="text-secondary-700 leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser
                le trafic. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela
                peut affecter certaines fonctionnalités du site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Modifications</h2>
              <p className="text-secondary-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Contact</h2>
              <p className="text-secondary-700 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos
                données personnelles, contactez-nous :<br />
                Email : contact@fastglass75.fr<br />
                Téléphone : 06 13 66 76 63
              </p>
              <p className="text-secondary-700 leading-relaxed mt-4">
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL
                (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits
                ne sont pas respectés.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-secondary-500 text-sm">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
