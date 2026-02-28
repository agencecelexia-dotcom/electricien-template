import { Accordion } from '@/components/ui/accordion'
import { FAQ_ITEMS, SERVICE_AREAS } from '@/lib/constants'
import { MapPin } from 'lucide-react'
import { clientConfig } from '@/config/client.config'

export function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: FAQ */}
          <div>
            <h2 className="mb-8 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Questions <span className="text-electric">fréquentes</span>
            </h2>
            <Accordion items={FAQ_ITEMS} />
          </div>

          {/* Right: Service Area */}
          <div>
            <h2 className="mb-8 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Zone d&apos;<span className="text-electric">intervention</span>
            </h2>

            <div className="space-y-5">
              {SERVICE_AREAS.map((area) => (
                <div key={area.department}>
                  <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
                    <MapPin className="h-4 w-4 text-electric" />
                    {area.department}
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {area.cities.map((city) => (
                      <span
                        key={city}
                        className="cursor-pointer rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-electric"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Rayon intervention */}
            <div className="mt-8 rounded-xl border border-electric/20 bg-electric/5 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-electric">
                <MapPin className="h-4 w-4" />
                Rayon de {clientConfig.ZONE_KM} km autour de {clientConfig.VILLE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
