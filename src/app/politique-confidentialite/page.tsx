import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: 'Responsable du traitement',
    content: (
      <>
        <p>Le responsable du traitement des données personnelles est :</p>
        <ul className="mt-3 list-none space-y-1">
          <li><strong>ÉlectroPro SARL</strong></li>
          <li>15 Rue Voltaire, 75011 Paris</li>
          <li>SIRET : 123 456 789 00012</li>
          <li>Email : contact@electropro.fr</li>
          <li>Téléphone : 01 23 45 67 89</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Données collectées',
    content: (
      <>
        <p>
          Nous collectons uniquement les données que vous nous fournissez
          volontairement via le formulaire de contact du site :
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Contenu du message</li>
        </ul>
        <p className="mt-3">
          Aucune donnée n&apos;est collectée automatiquement lors de votre
          navigation sur le site.
        </p>
      </>
    ),
  },
  {
    title: 'Finalité du traitement',
    content: (
      <>
        <p>Les données personnelles collectées sont utilisées pour :</p>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>Répondre à vos demandes de renseignements</li>
          <li>Établir et transmettre des devis personnalisés</li>
          <li>Assurer le suivi de vos demandes de contact</li>
          <li>Vous recontacter dans le cadre de votre projet électrique</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Base légale du traitement',
    content: (
      <p>
        Le traitement de vos données personnelles repose sur votre
        <strong> consentement</strong> (article 6.1.a du Règlement Général sur la
        Protection des Données — RGPD). En soumettant le formulaire de contact,
        vous consentez expressément au traitement de vos données pour les
        finalités décrites ci-dessus. Vous pouvez retirer votre consentement à
        tout moment en nous contactant à l&apos;adresse contact@electropro.fr.
      </p>
    ),
  },
  {
    title: 'Durée de conservation',
    content: (
      <p>
        Vos données personnelles sont conservées pendant une durée maximale de
        <strong> 3 ans</strong> à compter de votre dernier contact avec notre
        entreprise. Passé ce délai, vos données sont automatiquement supprimées
        de nos systèmes. En cas de relation commerciale établie, les données
        liées à la facturation sont conservées conformément aux obligations
        légales comptables (10 ans).
      </p>
    ),
  },
  {
    title: 'Destinataires des données',
    content: (
      <p>
        Vos données personnelles sont traitées exclusivement par le personnel
        habilité d&apos;ÉlectroPro SARL dans le cadre de leurs fonctions.
        <strong> Aucune donnée n&apos;est transmise à des tiers</strong>, vendue ou
        louée à quelque organisme que ce soit. Vos données ne font l&apos;objet
        d&apos;aucun transfert en dehors de l&apos;Union européenne.
      </p>
    ),
  },
  {
    title: 'Droits des utilisateurs',
    content: (
      <>
        <p>
          Conformément au RGPD (articles 15 à 21), vous disposez des droits
          suivants sur vos données personnelles :
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
          <li><strong>Droit de rectification :</strong> corriger les données inexactes ou incomplètes</li>
          <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
          <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
          <li><strong>Droit à la limitation :</strong> demander la limitation du traitement</li>
        </ul>
        <p className="mt-3">
          Pour exercer l&apos;un de ces droits, contactez-nous par email à{' '}
          <a
            href="mailto:contact@electropro.fr"
            className="text-electric underline hover:text-electric-dark"
          >
            contact@electropro.fr
          </a>{' '}
          ou par courrier à l&apos;adresse : ÉlectroPro SARL, 15 Rue Voltaire,
          75011 Paris.
        </p>
        <p className="mt-3">
          Nous nous engageons à répondre à votre demande dans un délai de 30
          jours. En cas de litige, vous pouvez également introduire une
          réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique
          et des Libertés) :{' '}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric underline hover:text-electric-dark"
          >
            www.cnil.fr
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: 'Sécurité des données',
    content: (
      <>
        <p>
          Nous mettons en place les mesures techniques et organisationnelles
          appropriées pour garantir la sécurité de vos données personnelles :
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>Chiffrement SSL/TLS de toutes les communications</li>
          <li>Hébergement sécurisé chez Vercel (infrastructure conforme aux standards de sécurité)</li>
          <li>Accès aux données limité au personnel autorisé</li>
          <li>Mises à jour régulières des systèmes de sécurité</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cookies',
    content: (
      <p>
        Le site utilise uniquement des <strong>cookies techniques</strong>{' '}
        strictement nécessaires à son bon fonctionnement. Aucun cookie
        analytique, publicitaire ou de suivi tiers n&apos;est utilisé. Ces cookies
        techniques ne collectent aucune donnée personnelle et ne nécessitent pas
        votre consentement préalable conformément à la réglementation en vigueur.
      </p>
    ),
  },
  {
    title: 'Modifications de la politique',
    content: (
      <p>
        ÉlectroPro SARL se réserve le droit de modifier la présente politique de
        confidentialité à tout moment. Les modifications prennent effet dès leur
        publication sur cette page. Nous vous invitons à consulter régulièrement
        cette page pour prendre connaissance des éventuelles mises à jour. La
        date de dernière mise à jour est indiquée en bas de cette page.
      </p>
    ),
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-slate-900 md:text-6xl">
            Politique de{' '}
            <span className="text-electric">Confidentialité</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Comment nous protégeons vos données personnelles conformément au RGPD.
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

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Dernière mise à jour : Février 2026
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Voir aussi nos{' '}
              <Link
                href="/mentions-legales"
                className="text-electric underline hover:text-electric-dark"
              >
                Mentions Légales
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
