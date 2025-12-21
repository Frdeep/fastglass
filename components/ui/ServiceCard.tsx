'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  delay?: number
}

const ServiceCard = ({ title, description, image, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-card card-hover border border-gray-100">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-secondary-600 mb-4 leading-relaxed">{description}</p>
            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
              <span>En savoir plus</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard
