'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  value: string
  label: string
  icon?: LucideIcon
  delay?: number
}

const StatCard = ({ value, label, icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-secondary-300 text-lg">{label}</div>
    </motion.div>
  )
}

export default StatCard
