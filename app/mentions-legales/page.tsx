import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Fastglass75',
  description: 'Mentions légales de Fastglass75, service de remplacement et réparation de pare-brise à Paris.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary-900 mb-8">Mentions Légales</h1>

          <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Éditeur du site</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le site Fastglass75 est édité par :<br />
                <strong>Fastglass75</strong><br />
                Service de remplacement et réparation de pare-brise<br />
                Paris, France<br />
                Email : contact@fastglass75.fr<br />
                Téléphone : 06 13 66 76 63
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Directeur de la publication</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le directeur de la publication est le représentant légal de Fastglass75.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Hébergement</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété
                exclusive de Fastglass75 ou de ses partenaires.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Toute reproduction, représentation, modification, publication, transmission, dénaturation,
                totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur
                quelque support que ce soit est interdite sans l'autorisation écrite préalable de Fastglass75.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Données personnelles</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Conformément à la loi n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux
                fichiers et aux libertés, et au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux
                données personnelles vous concernant.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse :
                contact@fastglass75.fr ou consulter notre{' '}
                <a href="/confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Cookies</h2>
              <p className="text-secondary-700 leading-relaxed">
                Le site peut être amené à vous demander l'acceptation de cookies pour des besoins de
                statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur
                par le serveur du site que vous visitez. Vous pouvez désactiver l'usage de cookies via
                les paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Limitation de responsabilité</h2>
              <p className="text-secondary-700 leading-relaxed">
                Fastglass75 s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
                sur ce site. Toutefois, Fastglass75 ne peut garantir l'exactitude, la précision ou
                l'exhaustivité des informations mises à disposition sur ce site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Droit applicable</h2>
              <p className="text-secondary-700 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige et à
                défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément
                aux règles de compétence en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Contact</h2>
              <p className="text-secondary-700 leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :<br />
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
