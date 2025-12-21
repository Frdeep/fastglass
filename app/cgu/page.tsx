import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation | Fastglass75',
  description: 'Conditions générales d\'utilisation du site Fastglass75.',
}

export default function CGUPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>

          <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-8">
            <div>
              <p className="text-secondary-700 leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site
                Fastglass75 et des services proposés. En accédant au site et en utilisant nos services,
                vous acceptez sans réserve ces conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Objet</h2>
              <p className="text-secondary-700 leading-relaxed">
                Les présentes CGU ont pour objet de définir les modalités et conditions d'utilisation
                du site Fastglass75 ainsi que les droits et obligations des parties dans ce cadre.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Services proposés</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Fastglass75 propose les services suivants :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Remplacement de pare-brise</li>
                <li>Réparation de pare-brise</li>
                <li>Remplacement de vitre latérale</li>
                <li>Remplacement de lunette arrière</li>
                <li>Remplacement de custode</li>
                <li>Intervention à domicile ou en atelier</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Accès au site</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
                Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique,
                logiciels, connexion Internet, etc.) sont à sa charge. Fastglass75 se réserve le droit
                de suspendre, d'interrompre ou de limiter l'accès à tout ou partie du site, notamment
                pour des raisons de maintenance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Commande de prestations</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Pour commander une prestation :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Remplissez le formulaire de devis en ligne ou contactez-nous par téléphone</li>
                <li>Un devis vous sera communiqué gratuitement et sans engagement</li>
                <li>Après acceptation du devis, un rendez-vous sera fixé</li>
                <li>La prestation sera réalisée à la date et au lieu convenus</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Prix et paiement</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Les prix des prestations sont indiqués en euros TTC. Dans le cadre de notre offre "0€ à
                payer", la facturation est effectuée directement auprès de votre compagnie d'assurance.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Pour bénéficier de cette prise en charge, vous devez disposer d'une assurance bris de
                glace en cours de validité. Si votre assurance ne couvre pas intégralement les frais,
                le montant restant vous sera communiqué avant l'intervention.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Cadeau promotionnel</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le cadeau jusqu'à 300€ est offert après réalisation de la prestation, sous réserve de
                conditions spécifiques qui vous seront communiquées lors de votre prise de rendez-vous.
                La nature et la valeur du cadeau peuvent varier selon les périodes et les prestations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Annulation et report</h2>
              <p className="text-secondary-700 leading-relaxed">
                Toute annulation ou report de rendez-vous doit être communiqué au moins 24h à l'avance.
                En cas d'annulation tardive sans motif valable, des frais de déplacement pourront être
                facturés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Garanties</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Nos prestations bénéficient des garanties suivantes :
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-2">
                <li>Garantie à vie sur la pose et l'étanchéité</li>
                <li>Vitrages certifiés équivalents à l'origine constructeur</li>
                <li>Techniciens qualifiés et certifiés</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Responsabilité</h2>
              <p className="text-secondary-700 leading-relaxed">
                Fastglass75 s'engage à apporter tout le soin nécessaire à la réalisation des prestations.
                Notre responsabilité ne saurait être engagée en cas de dommages indirects ou de
                circonstances indépendantes de notre volonté.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Propriété intellectuelle</h2>
              <p className="text-secondary-700 leading-relaxed">
                Tous les éléments du site (textes, images, logos, etc.) sont protégés par le droit
                d'auteur et le droit des marques. Toute reproduction ou utilisation non autorisée est
                interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">11. Données personnelles</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le traitement de vos données personnelles est effectué conformément à notre{' '}
                <a href="/confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">12. Litiges</h2>
              <p className="text-secondary-700 leading-relaxed">
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
                À défaut d'accord amiable, le litige sera porté devant les tribunaux compétents français.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">13. Modifications des CGU</h2>
              <p className="text-secondary-700 leading-relaxed">
                Fastglass75 se réserve le droit de modifier les présentes CGU à tout moment. Les nouvelles
                conditions seront applicables dès leur mise en ligne sur le site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">14. Contact</h2>
              <p className="text-secondary-700 leading-relaxed">
                Pour toute question concernant ces CGU, contactez-nous :<br />
                Email : contact@fastglass75.fr<br />
                Téléphone : 06 13 66 76 63
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
