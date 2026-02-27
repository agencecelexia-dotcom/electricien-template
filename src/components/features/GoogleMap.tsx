'use client'

import { cn } from '@/lib/utils'

interface GoogleMapProps {
  address?: string
  className?: string
}

export function GoogleMap({ address = '15 Rue Voltaire, 75011 Paris', className }: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address)

  return (
    <div className={cn('overflow-hidden rounded-xl border border-slate-200', className)}>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation"
      />
    </div>
  )
}
