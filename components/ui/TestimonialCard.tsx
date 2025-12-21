'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  comment: string
  delay?: number
}

const TestimonialCard = ({ name, location, rating, comment, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
    >
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-secondary-700 leading-relaxed mb-6 italic">
        "{comment}"
      </p>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-secondary-900">{name}</div>
          <div className="text-secondary-500 text-sm">{location}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
