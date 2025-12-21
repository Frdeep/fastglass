'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: 'Remplacement Pare-brise', href: '/services/remplacement-pare-brise' },
    { name: 'Réparation Pare-brise', href: '/services/reparation-pare-brise' },
    { name: 'Vitre Latérale', href: '/services/vitre-laterale' },
    { name: 'Lunette Arrière', href: '/services/lunette-arriere' },
    { name: 'Custode', href: '/services/custode' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-secondary-900">
              Fast<span className="text-gradient">glass75</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-secondary-700 hover:text-primary font-medium transition-colors">
              Accueil
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-secondary-700 hover:text-primary font-medium transition-colors">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-card-hover border border-gray-200 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/notre-concept" className="text-secondary-700 hover:text-primary font-medium transition-colors">
              Notre Concept
            </Link>

            <Link href="/zone-intervention" className="text-secondary-700 hover:text-primary font-medium transition-colors">
              Zone d'intervention
            </Link>

            <Link href="/contact" className="text-secondary-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+33613667663" className="flex items-center space-x-2 text-primary hover:text-primary-600 font-semibold transition-colors">
              <Phone className="w-5 h-5" />
              <span>06 13 66 76 63</span>
            </a>
            <Link href="/devis-gratuit" className="btn-primary">
              Devis Gratuit
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-secondary-700 hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-secondary-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-secondary-700 hover:text-primary font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-secondary-600 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/notre-concept"
                className="text-secondary-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Notre Concept
              </Link>

              <Link
                href="/zone-intervention"
                className="text-secondary-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zone d'intervention
              </Link>

              <Link
                href="/contact"
                className="text-secondary-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <a href="tel:+33613667663" className="flex items-center space-x-2 text-primary hover:text-primary-600 font-semibold transition-colors">
                <Phone className="w-5 h-5" />
                <span>06 13 66 76 63</span>
              </a>

              <Link
                href="/devis-gratuit"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
