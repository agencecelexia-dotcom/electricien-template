import { Accordion } from '@/components/ui/accordion'
import { FAQ_ITEMS, SERVICE_AREAS } from '@/lib/constants'
import { MapPin } from 'lucide-react'

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
    <section className="bg-cream py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: FAQ */}
          <div>
            <h2 className="mb-8 font-heading text-4xl font-bold text-navy md:text-5xl">
              Questions <span className="text-gradient-static">fréquentes</span>
            </h2>
            <Accordion items={FAQ_ITEMS} />
          </div>

          {/* Right: Service Area (merged) */}
          <div>
            <h2 className="mb-8 font-heading text-4xl font-bold text-navy md:text-5xl">
              Zone d&apos;<span className="text-gradient-static">intervention</span>
            </h2>

            <div className="space-y-5">
              {SERVICE_AREAS.map((area) => (
                <div key={area.department}>
                  <h3 className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-navy">
                    <MapPin className="h-4 w-4 text-electric" />
                    {area.department}
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {area.cities.map((city) => (
                      <span key={city} className="rounded-lg bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-amber/20 bg-amber/5 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-amber-dark">
                <MapPin className="h-4 w-4" />
                Rayon de 50 km autour de Paris
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
