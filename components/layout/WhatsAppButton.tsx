'use client'

import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '+33613667663'
  const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour mon pare-brise.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

export default WhatsAppButton
