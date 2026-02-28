'use client'

import { MapPin } from 'lucide-react'
import { SERVICE_AREAS, COMPANY } from '@/lib/constants'
import { clientConfig } from '@/config/client.config'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ServiceArea() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
            Zone d&apos;<span className="text-electric">Intervention</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-slate-600">
            Nous intervenons à {clientConfig.VILLE} et {clientConfig.ZONE_INTERVENTION},
            dans un rayon de {clientConfig.ZONE_KM} km.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {SERVICE_AREAS.map((area) => (
              <div key={area.department}>
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
                  <MapPin className="h-5 w-5 text-electric" />
                  {area.department}
                </h3>
                <div className="flex flex-wrap gap-2 pl-7">
                  {area.cities.map((city) => (
                    <Badge key={city} variant="outline">{city}</Badge>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-amber/20 bg-amber/5 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-amber-dark">
                <MapPin className="h-4 w-4" />
                Intervention dans un rayon de {clientConfig.ZONE_KM} km autour de {clientConfig.VILLE}
              </p>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center rounded-2xl bg-slate-100 p-8"
          >
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-electric/30" />
              <p className="text-lg font-semibold text-slate-600">{clientConfig.VILLE} & {clientConfig.ZONE_INTERVENTION}</p>
              <p className="mt-1 text-sm text-slate-500">{COMPANY.address}</p>
              <p className="mt-4 text-xs text-slate-400">
                Carte interactive disponible prochainement
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
