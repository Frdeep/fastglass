import Link from 'next/link'
import { MapPin, CheckCircle, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zone d\'Intervention Paris & IDF | Fastglass75',
  description: 'Fastglass75 intervient dans tous les arrondissements de Paris (75) et en Île-de-France. Service de remplacement pare-brise à domicile ou en atelier.',
}

export default function ZoneInterventionPage() {
  const parisZones = [
    { name: 'Paris 1er', code: '75001' },
    { name: 'Paris 2e', code: '75002' },
    { name: 'Paris 3e', code: '75003' },
    { name: 'Paris 4e', code: '75004' },
    { name: 'Paris 5e', code: '75005' },
    { name: 'Paris 6e', code: '75006' },
    { name: 'Paris 7e', code: '75007' },
    { name: 'Paris 8e', code: '75008' },
    { name: 'Paris 9e', code: '75009' },
    { name: 'Paris 10e', code: '75010' },
    { name: 'Paris 11e', code: '75011' },
    { name: 'Paris 12e', code: '75012' },
    { name: 'Paris 13e', code: '75013' },
    { name: 'Paris 14e', code: '75014' },
    { name: 'Paris 15e', code: '75015' },
    { name: 'Paris 16e', code: '75016' },
    { name: 'Paris 17e', code: '75017' },
    { name: 'Paris 18e', code: '75018' },
    { name: 'Paris 19e', code: '75019' },
    { name: 'Paris 20e', code: '75020' },
  ]

  const idfDepartments = [
    {
      name: 'Hauts-de-Seine (92)',
      cities: ['Boulogne-Billancourt', 'Nanterre', 'Courbevoie', 'Levallois-Perret', 'Issy-les-Moulineaux', 'Neuilly-sur-Seine', 'Clichy', 'Rueil-Malmaison'],
    },
    {
      name: 'Seine-Saint-Denis (93)',
      cities: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Pantin', 'Bobigny', 'Saint-Ouen', 'Noisy-le-Grand', 'Bondy'],
    },
    {
      name: 'Val-de-Marne (94)',
      cities: ['Créteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne', 'Ivry-sur-Seine', 'Maisons-Alfort', 'Vincennes', 'Fontenay-sous-Bois', 'Saint-Maur-des-Fossés'],
    },
    {
      name: 'Essonne (91)',
      cities: ['Évry', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Palaiseau', 'Yerres', 'Viry-Châtillon', 'Sainte-Geneviève-des-Bois'],
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Notre Zone d'<span className="text-gradient">Intervention</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Fastglass75 intervient partout à Paris et en Île-de-France.
              Service à domicile ou en atelier selon votre préférence.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-12">
            <div className="flex items-center justify-center mb-8">
              <CheckCircle className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-secondary-900">
                Paris (75) - Tous Arrondissements
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {parisZones.map((zone) => (
                <div
                  key={zone.code}
                  className="bg-primary-50 rounded-xl p-4 text-center hover:bg-primary-100 transition-colors"
                >
                  <div className="text-lg font-bold text-secondary-900 mb-1">
                    {zone.name}
                  </div>
                  <div className="text-sm text-secondary-600">{zone.code}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {idfDepartments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white rounded-3xl shadow-card p-8 md:p-10"
              >
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-secondary-900">{dept.name}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {dept.cities.map((city) => (
                    <div
                      key={city}
                      className="flex items-center space-x-2 text-secondary-700"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{city}</span>
                    </div>
                  ))}
                </div>

                <p className="text-secondary-600 text-sm mt-6 italic">
                  Et de nombreuses autres communes du département
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intervention à Domicile ou en Atelier
              </h2>
              <p className="text-xl text-secondary-300">
                Vous choisissez le lieu qui vous convient le mieux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">À Domicile</h3>
                <ul className="space-y-3 text-secondary-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Nous venons chez vous ou au travail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Pas besoin de vous déplacer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Service premium inclus</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">En Atelier</h3>
                <ul className="space-y-3 text-secondary-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Atelier équipé professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Intervention encore plus rapide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Espace d'attente confortable</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Votre commune n'est pas listée ?</h3>
              <p className="text-white/90 mb-6 text-lg">
                Contactez-nous ! Nous intervenons également dans de nombreuses autres communes d'Île-de-France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis-gratuit" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all">
                  Demander un devis
                </Link>
                <a href="tel:+33613667663" className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>06 13 66 76 63</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
