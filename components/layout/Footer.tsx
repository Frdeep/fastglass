import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">
                Fast<span className="text-gradient">glass75</span>
              </span>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Service n°1 de remplacement et réparation de pare-brise à Paris et Île-de-France.
              Intervention rapide, 0€ à payer, cadeau jusqu'à 300€.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/remplacement-pare-brise" className="text-secondary-300 hover:text-primary transition-colors">
                  Remplacement Pare-brise
                </Link>
              </li>
              <li>
                <Link href="/services/reparation-pare-brise" className="text-secondary-300 hover:text-primary transition-colors">
                  Réparation Pare-brise
                </Link>
              </li>
              <li>
                <Link href="/services/vitre-laterale" className="text-secondary-300 hover:text-primary transition-colors">
                  Vitre Latérale
                </Link>
              </li>
              <li>
                <Link href="/services/lunette-arriere" className="text-secondary-300 hover:text-primary transition-colors">
                  Lunette Arrière
                </Link>
              </li>
              <li>
                <Link href="/services/custode" className="text-secondary-300 hover:text-primary transition-colors">
                  Custode
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/notre-concept" className="text-secondary-300 hover:text-primary transition-colors">
                  Notre Concept
                </Link>
              </li>
              <li>
                <Link href="/zone-intervention" className="text-secondary-300 hover:text-primary transition-colors">
                  Zone d'intervention
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-secondary-300 hover:text-primary transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-secondary-300 hover:text-primary transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-secondary-300 hover:text-primary transition-colors">
                  CGU
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300 text-sm mb-1">Appelez-nous</p>
                  <a href="tel:+33613667663" className="text-white hover:text-primary transition-colors font-semibold">
                    06 13 66 76 63
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300 text-sm mb-1">Email</p>
                  <a href="mailto:contact@fastglass75.fr" className="text-white hover:text-primary transition-colors">
                    contact@fastglass75.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300 text-sm mb-1">Zone d'intervention</p>
                  <p className="text-white">Paris & Île-de-France</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center">
          <p className="text-secondary-400">
            © {currentYear} Fastglass75. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
