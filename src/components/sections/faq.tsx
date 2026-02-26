import { Accordion } from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/constants'

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
    <section className="bg-slate-50 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
            Questions <span className="text-electric">Fréquentes</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="text-slate-600">
            Trouvez rapidement les réponses à vos questions les plus courantes.
          </p>
        </div>

        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  )
}
