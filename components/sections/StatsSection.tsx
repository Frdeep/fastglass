'use client'

import { Users, Star, Clock } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'

const StatsSection = () => {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <StatCard
            value="500+"
            label="Clients satisfaits"
            icon={Users}
            delay={0}
          />
          <StatCard
            value="4.9/5"
            label="Note moyenne"
            icon={Star}
            delay={0.1}
          />
          <StatCard
            value="24h"
            label="Intervention rapide"
            icon={Clock}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}

export default StatsSection
