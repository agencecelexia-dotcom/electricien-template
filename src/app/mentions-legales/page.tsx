import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'
import { clientConfig } from '@/config/client.config'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: 'Éditeur du site',
    content: (
      <>
        <p>Le site <strong>{clientConfig.DOMAINE}</strong> est édité par :</p>
        <ul className="mt-3 list-none space-y-1">
          <li><strong>Raison sociale :</strong> {clientConfig.NOM_LEGAL}</li>
          <li><strong>SIRET :</strong> {clientConfig.SIRET}</li>
          <li><strong>Siège social :</strong> {clientConfig.ADRESSE}, {clientConfig.CODE_POSTAL} {clientConfig.VILLE}</li>
          <li><strong>Téléphone :</strong> {COMPANY.phone}</li>
          <li><strong>Email :</strong> {COMPANY.email}</li>
          <li><strong>Directeur de la publication :</strong> {clientConfig.FONDATEUR}</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Hébergement',
    content: (
      <>
        <p>Le site est hébergé par :</p>
        <ul className="mt-3 list-none space-y-1">
          <li><strong>{clientConfig.HEBERGEUR}</strong></li>
          <li>{clientConfig.HEBERGEUR_ADRESSE}</li>
          <li>
            Site web :{' '}
            <a
              href={clientConfig.HEBERGEUR_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric underline hover:text-electric-dark"
            >
              {clientConfig.HEBERGEUR_SITE}
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Propriété intellectuelle',
    content: (
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes,
        icônes, sons, logiciels, etc.) est la propriété exclusive de {COMPANY.name}
        ou de ses partenaires et est protégé par les lois françaises et
        internationales relatives à la propriété intellectuelle. Toute
        reproduction, représentation, modification, publication, adaptation de
        tout ou partie des éléments du site, quel que soit le moyen ou le
        procédé utilisé, est interdite sans l&apos;autorisation écrite préalable
        de {COMPANY.name}.
      </p>
    ),
  },
  {
    title: 'Responsabilité',
    content: (
      <>
        <p>
          {COMPANY.name} s&apos;efforce de fournir sur le site des informations
          aussi précises que possible. Toutefois, la société ne pourra être tenue
          responsable des omissions, des inexactitudes et des carences dans la
          mise à jour, qu&apos;elles soient de son fait ou du fait des tiers
          partenaires qui lui fournissent ces informations.
        </p>
        <p className="mt-3">
          Toutes les informations indiquées sur le site sont données à titre
          indicatif et sont susceptibles d&apos;évoluer. Par ailleurs, les
          renseignements figurant sur le site ne sont pas exhaustifs. Ils sont
          donnés sous réserve de modifications ayant été apportées depuis leur
          mise en ligne.
        </p>
      </>
    ),
  },
  {
    title: 'Données personnelles',
    content: (
      <>
        <p>
          Les informations recueillies via les formulaires du site font l&apos;objet
          d&apos;un traitement informatique destiné à répondre à vos demandes de
          contact et de devis. Conformément au Règlement Général sur la
          Protection des Données (RGPD) et à la loi Informatique et Libertés,
          vous disposez de droits sur vos données personnelles.
        </p>
        <p className="mt-3">
          Pour en savoir plus sur le traitement de vos données, veuillez
          consulter notre{' '}
          <Link
            href="/politique-confidentialite"
            className="text-electric underline hover:text-electric-dark"
          >
            Politique de Confidentialité
          </Link>
          .
        </p>
        <p className="mt-3">
          Conformément à la réglementation, le site est déclaré auprès de la
          CNIL (Commission Nationale de l&apos;Informatique et des Libertés).
        </p>
      </>
    ),
  },
  {
    title: 'Cookies',
    content: (
      <p>
        Le site utilise uniquement des cookies techniques strictement nécessaires
        à son bon fonctionnement. Ces cookies ne collectent aucune donnée
        personnelle et ne sont pas utilisés à des fins de suivi publicitaire ou
        analytique. En poursuivant votre navigation sur ce site, vous acceptez
        l&apos;utilisation de ces cookies techniques.
      </p>
    ),
  },
  {
    title: 'Droit applicable',
    content: (
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, et à défaut de résolution amiable, les tribunaux compétents
        de Paris seront seuls compétents pour connaître de ce litige.
      </p>
    ),
  },
  {
    title: 'Crédits',
    content: (
      <p>
        Site conçu et développé par{' '}
        <a
          href="https://agencecelexia.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-electric underline hover:text-electric-dark"
        >
          Agence Celexia
        </a>
        .
      </p>
    ),
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-slate-900 md:text-6xl">
            Mentions <span className="text-electric">Légales</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Informations légales relatives au site {clientConfig.DOMAINE}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <article
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  {index + 1}. {section.title}
                </h2>
                <div className="text-slate-600 leading-relaxed">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            Dernière mise à jour : Février 2026
          </p>
        </div>
      </section>
    </>
  )
}
