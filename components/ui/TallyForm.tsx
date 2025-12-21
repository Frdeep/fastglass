'use client'

import { useEffect } from 'react'

interface TallyFormProps {
  formId?: string
  className?: string
  minHeight?: number
}

const TallyForm = ({
  formId = 'xXj0Yv',
  className = '',
  minHeight = 500
}: TallyFormProps) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className={`w-full ${className}`}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height={minHeight}
        frameBorder="0"
        title="Formulaire de prise de rendez-vous"
        className="w-full"
        style={{ minHeight: `${minHeight}px` }}
      />
    </div>
  )
}

export default TallyForm
