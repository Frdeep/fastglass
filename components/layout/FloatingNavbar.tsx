'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['accueil', 'services', 'formulaire', 'concept', 'temoignages', 'zone', 'faq']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#formulaire', label: 'Devis' },
    { href: '#concept', label: 'Concept' },
    { href: '#temoignages', label: 'Avis' },
    { href: '#zone', label: 'Zone' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-[95%] max-w-6xl' : 'w-[95%] max-w-7xl'
      }`}
    >
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary/10'
            : 'bg-white/80 backdrop-blur-md shadow-md'
        }`}
      >
        <Link href="#accueil" className="flex items-center space-x-2 group">
          <div className="bg-gradient-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-secondary-900">
            Fast<span className="text-gradient">glass75</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-secondary-600 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+33613667663"
          className="flex items-center space-x-2 bg-gradient-primary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">06 13 66 76 63</span>
        </a>
      </nav>
    </header>
  )
}

export default FloatingNavbar
