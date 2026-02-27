# CLAUDE.md — Architecture & Gouvernance du Template Électricien

**Dernière mise à jour** : 2026-02-28
**Version** : 1.0
**Template** : ÉlectroPro — Électricien

---

## 1. VISION & CONTEXTE

Ce template est un **site web moderne et duplicable** pour les électriciens et artisans en électricité. Conçu par **Agence Celexia**, il suit la même architecture que les templates plombier, paysagiste et couvreur pour garantir une **cohérence et une maintenance facile** entre les différents métiers.

**Objectif** : Dupliquer ce repo, remplir un fichier `CLIENT.md`, lancer `npm run sync-client`, et avoir un site web **complètement personnalisé** en 15 minutes.

### Cas d'usage
- ✅ Électriciens indépendants
- ✅ Petites/moyennes entreprises électricité
- ✅ Agences créant des sites pour artisans
- ✅ Déploiement rapide sur Vercel avec CI/CD

---

## 2. STACK TECHNIQUE

### Framework & Core
| Package | Version | Raison |
|---------|---------|--------|
| **Next.js** | 16.1.6 | App Router, SSR, Static Generation, API routes |
| **React** | 19.2.3 | Components, hooks (useState, useEffect, useRef) |
| **TypeScript** | 5.x | Strict mode, type safety à la compilation |
| **Node.js** | 20+ | Runtime server-side |

### Styling & Animation
| Package | Version | Raison |
|---------|---------|--------|
| **Tailwind CSS** | 4 | Utility-first, oklch color system, clamp() responsive |
| **Framer Motion** | 12.34.3 | Animations scroll, hover, parallax, stagger |
| **Lucide React** | 0.575.0 | 24×24 icons, 48 icons utilisés |

### Forms & Validation
| Package | Version | Raison |
|---------|---------|--------|
| **React Hook Form** | 7.71.2 | Form state management, uncontrolled inputs |
| **Zod** | 4.3.6 | Schema validation (client + serveur) |

### UI & Utilities
| Package | Version | Raison |
|---------|---------|--------|
| **clsx** | Latest | Conditional className generation |
| **tailwind-merge** | Latest | Remove Tailwind conflicts |

### Déploiement
- **Vercel** — Hosting Next.js optimisé, auto-deploy via git push
- **GitHub** — Version control

---

## 3. DESIGN SYSTEM

### Couleurs (oklch — Perceptual Color Space)

```css
/* Variables dynamiques basées sur CLIENT.md */
--color-primary-900:   oklch(0.22 0.06 220);  /* Bleu ardoise (HAUT CONTRASTE) */
--color-primary-800:   oklch(0.32 0.08 220);  /* Bleu ardoise foncé */
--color-primary-700:   oklch(0.42 0.10 220);  /* Bleu ardoise moyen */
--color-primary-600:   oklch(0.50 0.12 220);  /* Bleu ardoise clair */
--color-primary-500:   oklch(0.60 0.14 220);  /* Bleu ardoise très clair */
--color-primary-100:   oklch(0.95 0.02 220);  /* Bleu ardoise très très clair */

--color-accent-500:    oklch(0.64 0.16 44);   /* Orange vif (CALLS-TO-ACTION) */

--color-neutral-900:   oklch(0.10 0.01 0);    /* Noir quasi-pur (texte) */
--color-neutral-800:   oklch(0.20 0.01 0);    /* Gris très foncé */
--color-neutral-700:   oklch(0.30 0.01 0);    /* Gris foncé */
--color-neutral-600:   oklch(0.40 0.01 0);    /* Gris moyen */
--color-neutral-500:   oklch(0.50 0.01 0);    /* Gris clair */
--color-neutral-400:   oklch(0.70 0.01 0);    /* Gris très clair */
--color-neutral-100:   oklch(0.95 0.002 0);   /* Blanc quasi-pur */
--color-neutral-50:    oklch(0.985 0.001 0);  /* Blanc pur (backgrounds) */

--color-success:       oklch(0.64 0.15 142);  /* Vert succès */
--color-error:         oklch(0.60 0.22 25);   /* Rouge erreur */
```

**Génération** : Les valeurs oklch sont **générées dynamiquement** par `sync-client.ts` à partir de :
```
PRIMARY_HUE: "217"      # Teinte primaire (0-360°)
ACCENT_HUE: "44"        # Teinte accent (0-360°)
```

### Typographie

```css
--font-heading:  "Nunito Sans", sans-serif;    /* Display: titres, headings */
--font-body:     "Nunito Sans", sans-serif;    /* Body: paragraphes, ui */

/* Hiérarchie des tailles (clamp pour responsive) */
--size-h1:       clamp(2rem, 5vw, 3.5rem);     /* 32px → 56px */
--size-h2:       clamp(1.75rem, 4vw, 3rem);    /* 28px → 48px */
--size-h3:       clamp(1.5rem, 3vw, 2.25rem);  /* 24px → 36px */
--size-body-lg:  clamp(1.125rem, 2vw, 1.25rem); /* 18px → 20px */
--size-body:     1rem;                         /* 16px (base) */
--size-body-sm:  0.875rem;                     /* 14px */
```

### Shadows (Depth & Elevation)

```css
--shadow-sm:     0 1px 2px oklch(0.2 0.01 50 / 0.05);
--shadow-md:     0 4px 6px oklch(0.2 0.01 50 / 0.07);
--shadow-lg:     0 10px 25px oklch(0.2 0.01 50 / 0.10);
--shadow-xl:     0 20px 40px oklch(0.2 0.01 50 / 0.15);
--shadow-card:   0 4px 20px oklch(0.2 0.01 50 / 0.08);
```

### Spacing (8px base)

```
0, 2px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px
```

Utiliser via Tailwind : `px-4`, `py-8`, `gap-6`, etc.

---

## 4. ARCHITECTURE FICHIERS

```
electricien-template/
│
├── CLIENT.md                                  ← SOURCE UNIQUE DE VÉRITÉ (~100 variables)
├── CLAUDE.md                                  ← Ce fichier (architecture)
├── AI-PERSONALIZATION-GUIDE.md               ← Guide personnalisation pour agents IA
├── README.md                                  ← Instructions setup & workflow
├── package.json                               ← Scripts (dev, build, sync-client)
├── next.config.ts                             ← Config Next.js (minimaliste)
├── tsconfig.json                              ← TypeScript strict
├── tailwind.config.ts                         ← Tailwind config
│
├── public/                                    ← Actifs statiques (servis directement)
│   └── images/
│       ├── hero/
│       │   └── accueil.webp                   ← Hero image (1920×1080, ~500KB)
│       ├── services/                          ← 6 service images (4:3)
│       ├── realisations/                      ← 12 before/after images (3:2)
│       ├── team/
│       │   └── equipe-fondateur.webp          ← Team photo (1:1)
│       └── og-image.webp                      ← Social share (1.91:1)
│
├── src/
│   ├── app/                                   ← Next.js App Router (pages)
│   │   ├── layout.tsx                         ← Root layout + metadata + Schema.org JSON-LD
│   │   ├── page.tsx                           ← Accueil (9 sections)
│   │   ├── globals.css                        ← Design system (CSS variables)
│   │   ├── sitemap.ts                         ← Sitemap dynamique SEO
│   │   ├── robots.ts                          ← robots.txt
│   │   ├── services/
│   │   │   ├── page.tsx                       ← Liste services (SSR)
│   │   │   └── [slug]/page.tsx                ← Page service dynamique (SSG)
│   │   ├── realisations/
│   │   │   ├── page.tsx                       ← Galerie projets filtrée
│   │   │   └── [slug]/page.tsx                ← Détail projet dynamique (SSG)
│   │   ├── blog/
│   │   │   ├── page.tsx                       ← Liste articles
│   │   │   └── [slug]/page.tsx                ← Article détail
│   │   ├── a-propos/page.tsx                  ← À propos + fondateur
│   │   ├── contact/page.tsx                   ← Formulaire devis + Google Maps
│   │   ├── mentions-legales/page.tsx
│   │   ├── politique-confidentialite/page.tsx
│   │   ├── admin/
│   │   │   ├── login/page.tsx                 ← Page login (formulaire simple)
│   │   │   └── (dashboard)/dashboard/page.tsx ← Dashboard tabbed (6 onglets)
│   │   └── api/
│   │       ├── contact/route.ts               ← POST contact form (Zod validation)
│   │       └── admin/
│   │           ├── login/route.ts             ← POST login (set cookie httpOnly)
│   │           ├── save-client/route.ts       ← PUT CLIENT.md via API (admin)
│   │           ├── services/route.ts          ← CRUD services
│   │           ├── testimonials/route.ts      ← CRUD témoignages
│   │           ├── projects/route.ts          ← CRUD projets
│   │           └── submissions/route.ts       ← CRUD form submissions (devis)
│   │
│   ├── components/                            ← Composants réutilisables
│   │   ├── layout/
│   │   │   ├── Header.tsx                     ← Navigation sticky + logo + burger menu mobile
│   │   │   └── Footer.tsx                     ← Footer 3 colonnes + credit Celexia
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx                ← Hero + CTA + badge response time
│   │   │   ├── ServicesOverview.tsx           ← Grid 6 services, 2 large + 4 small
│   │   │   ├── RealisationsPreview.tsx        ← Galerie 6 before/after avec slider
│   │   │   ├── StatsSection.tsx               ← Compteurs animés au scroll
│   │   │   ├── TestimonialsSection.tsx        ← Carrousel 3 témoignages
│   │   │   ├── WhyChooseUs.tsx                ← 4 points forts + icônes + metrics
│   │   │   ├── FaqSection.tsx                 ← Accordéon FAQ (6 questions)
│   │   │   └── CTASection.tsx                 ← CTA orange réutilisable
│   │   ├── features/
│   │   │   ├── ContactForm.tsx                ← Formulaire devis (6 champs + honeypot)
│   │   │   ├── BeforeAfterSlider.tsx          ← Comparateur avant/après (slider)
│   │   │   ├── GoogleMap.tsx                  ← Iframe Google Maps
│   │   │   ├── BlogCard.tsx                   ← Card article blog (featured)
│   │   │   └── FilterBar.tsx                  ← Filtre catégories realisations
│   │   ├── animations/
│   │   │   ├── FadeIn.tsx                     ← Fade in au scroll (Intersection Observer)
│   │   │   ├── FadeUp.tsx                     ← Fade + translate Y
│   │   │   ├── CountUp.tsx                    ← Compteur animé (numbers 0→N)
│   │   │   ├── SplitText.tsx                  ← Animation lettre par lettre
│   │   │   └── StaggerChildren.tsx            ← Animation cascade enfants
│   │   ├── admin/
│   │   │   ├── AdminSidebar.tsx               ← Sidebar 6 onglets + logout
│   │   │   ├── DashboardTab.tsx               ← Onglet principal (stats + submissions)
│   │   │   ├── ContenuTab.tsx                 ← Édition contenu inline (~75 champs)
│   │   │   ├── PhotosTab.tsx                  ← Galerie gestion photos
│   │   │   ├── ServicesTab.tsx                ← CRUD services (table)
│   │   │   ├── TemoignagesTab.tsx             ← CRUD témoignages (table)
│   │   │   └── ProjetsTab.tsx                 ← CRUD projets (table)
│   │   └── ui/
│   │       ├── Button.tsx                     ← Bouton réutilisable (variants: primary, outline, ghost)
│   │       ├── Badge.tsx                      ← Badge tags
│   │       ├── SectionHeading.tsx             ← Titre section standardisé
│   │       ├── CookieBanner.tsx               ← Cookie consent RGPD
│   │       └── ScrollProgress.tsx             ← Barre progression scroll (top)
│   │
│   ├── config/
│   │   ├── client.config.ts                   ← AUTO-GÉNÉRÉ par sync-client (NE PAS ÉDITER)
│   │   └── images.ts                          ← Registre paths images
│   │
│   ├── data/                                  ← Données métier (TypeScript)
│   │   ├── company.ts                         ← Infos entreprise (lues depuis client.config)
│   │   ├── services.ts                        ← 6 services (titres depuis config, fullDesc codée)
│   │   ├── projects.ts                        ← 6 projets portfolio (avant/après)
│   │   ├── testimonials.ts                    ← 6 témoignages (extensible)
│   │   ├── blog-posts.ts                      ← 6 articles SEO (contenu structuré)
│   │   ├── team.ts                            ← 1 membre équipe (fondateur)
│   │   ├── faq.ts                             ← 7 questions FAQ (interpolées)
│   │   └── navigation.ts                      ← Menu navigation
│   │
│   ├── hooks/
│   │   ├── use-scroll-animation.ts            ← Intersection Observer pour animations
│   │   └── use-form-state.ts                  ← Gestion état formulaire
│   │
│   ├── lib/
│   │   ├── utils.ts                           ← Utilitaires (cn, formatDate, truncate)
│   │   ├── validation.ts                      ← Zod schemas (forms, API)
│   │   ├── storage.ts                         ← File-based JSON (lecture/écriture)
│   │   ├── actions.ts                         ← Server Actions (contact form)
│   │   └── animations.ts                      ← Variants Framer Motion (réutilisables)
│   │
│   └── types/index.ts                         ← Types TypeScript centralisés
│       (Service, Project, Testimonial, BlogPost, etc.)
│
├── scripts/
│   └── sync-client.ts                         ← CLÉS : Parse CLIENT.md → génère client.config.ts
│
├── storage/                                   ← Stockage JSON local (admin)
│   ├── submissions.json                       ← Soumissions formulaire (devis, contact)
│   ├── services.json                          ← Services (stockage admin)
│   ├── testimonials.json                      ← Témoignages (stockage admin)
│   └── projects.json                          ← Projets (stockage admin)
│
└── .env.example                               ← Template variables d'environnement
```

---

## 5. CYCLE DE DÉVELOPPEMENT PERSONNALISATION

### Phase 1 : Configuration (5 min)

**Tâche** : Remplir `CLIENT.md` avec infos métier

```bash
# Éditer CLIENT.md manuellement
NOM_ENTREPRISE: "Votre Entreprise"
TELEPHONE: "01 23 45 67 89"
EMAIL: "contact@example.fr"
# ... 100+ variables
```

**Points clés** :
- Toutes les variables sont dans `CLIENT.md`
- Format simple : `KEY: "value"`
- JAMAIS éditer `client.config.ts` manuellement

### Phase 2 : Synchronisation (1 min)

**Tâche** : Générer config TypeScript + CSS

```bash
npm run sync-client
```

**Outputs** :
- ✅ `src/config/client.config.ts` — généré (78+ clés)
- ✅ `src/app/globals.css` — couleurs/polices mises à jour

### Phase 3 : Contenu métier (15 min)

**Tâche** : Personnaliser contenu long (TypeScript)

```typescript
// src/data/services.ts — Services avec descriptions longues
// src/data/projects.ts — Projets avec challges/solutions
// src/data/faq.ts — FAQ avec réponses interpolées
// src/data/blog-posts.ts — Articles SEO
// src/app/a-propos/page.tsx — À propos personnalisé
```

### Phase 4 : Images (10 min)

**Tâche** : Déposer 19 images dans `public/images/`

```
hero/accueil.webp                    (1920×1080, ~500KB)
services/*.webp                      (6 images, 4:3)
realisations/projet-*-{avant,apres}.webp (12 images, 3:2)
team/*.webp                          (1 photo, 1:1)
og-image.webp                        (1.91:1)
```

### Phase 5 : Déploiement (5 min)

**Tâche** : Build & push sur Vercel

```bash
npm run build          # Vérifier pas d'erreurs
git add -A
git commit -m "feat: personnalisation [NOM]"
git push origin main   # Vercel auto-deploys
```

**Total** : ~35 minutes pour un site complet 🚀

---

## 6. PATTERNS DE CODE CLÉS

### A) Imports depuis Config

```typescript
// ✅ CORRECT : Importer depuis config
import { clientConfig } from "@/config/client.config";

export default function Header() {
  return <h1>{clientConfig.NOM_ENTREPRISE}</h1>;
}
```

### B) Données dynamiques dans FAQ/Contact

```typescript
// src/data/faq.ts
import { clientConfig } from "@/config/client.config";

export const faqItems = [
  {
    question: "Comment contacter ?",
    answer: `Appelez ${clientConfig.TELEPHONE} ou envoyez un email à ${clientConfig.EMAIL}`
  }
];
```

### C) Routes statiquement générées

```typescript
// src/app/services/[slug]/page.tsx
import { services } from "@/data/services";

// ← Next.js génère 6 pages statiques (une par service)
export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default async function ServicePage({ params }) {
  const service = services.find(s => s.slug === (await params).slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
```

### D) Validation Zod

```typescript
// src/lib/validation.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2),
  email: z.string().email(),
  serviceType: z.string().min(1),
  // ...
});

// Utilisation
const result = contactFormSchema.safeParse(data);
if (!result.success) {
  console.log(result.error.issues);
}
```

### E) Server Actions

```typescript
// src/lib/actions.ts
"use server";

import { contactFormSchema } from "@/lib/validation";

export async function submitContact(formData: unknown) {
  const parsed = contactFormSchema.safeParse(formData);
  if (!parsed.success) {
    return { errors: parsed.error.flatten() };
  }

  // Sauvegarder dans storage/submissions.json
  // Envoyer email via N8N webhook (optionnel)

  return { message: "Merci !" };
}
```

### F) Animations Framer Motion

```typescript
// src/components/animations/FadeUp.tsx
"use client";

import { motion } from "framer-motion";

export function FadeUp({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 7. RÈGLES DÉVELOPPEMENT

### TypeScript
- ✅ `strict: true` en tout temps
- ✅ Types centralisés dans `src/types/index.ts`
- ❌ JAMAIS utiliser `any`

### Composants
- ✅ Server Components par défaut (`async`)
- ✅ `"use client"` uniquement quand nécessaire (state, hooks, events)
- ✅ Placer `"use client"` en haut du fichier

### Fichiers données
- ✅ Importer `clientConfig` dans `src/data/*.ts` pour interpolation
- ❌ JAMAIS éditer `client.config.ts` directement

### Validation
- ✅ Toujours valider côté serveur (API routes, Server Actions)
- ✅ Validation Zod sur tous les formulaires
- ❌ Ne JAMAIS faire confiance aux données client

### CSS
- ✅ Tailwind CSS utility classes
- ✅ Variables CSS dans `globals.css` pour design system
- ❌ JAMAIS ajouter CSS-in-JS (styled-components)
- ❌ JAMAIS ajouter fichiers `.css` isolés

### Accessibilité
- ✅ `aria-label` sur icônes
- ✅ `role` sur éléments custom
- ✅ Navigation au clavier possible
- ✅ Contraste couleurs ≥ 4.5:1 WCAG AA

### SEO
- ✅ Metadata sur chaque page
- ✅ Schema.org JSON-LD dans root layout
- ✅ `canonical` URLs
- ✅ `og:` og: og:description, og:image

### Performance
- ✅ Images Next.js `<Image>` avec `sizes`
- ✅ Routes statiquement générées quand possible (`generateStaticParams`)
- ✅ Lazy loading images (`loading="lazy"` par défaut)
- ✅ Déférer scripts externes

### Git
- ✅ Commit atomiques avec messages clairs
- ✅ `feat:` pour nouvelles features
- ✅ `fix:` pour corrections bugs
- ✅ `refactor:` pour restructuration code

---

## 8. POINTS D'EXTENSION COURANTS

**Si tu veux ajouter ...** :

| Feature | Fichiers à modifier | Exemple |
|---------|-------------------|---------|
| Nouveau service (7e) | `services.ts`, `services/[slug]/page.tsx` | Ajouter objet + generateStaticParams |
| Nouveau projet | `projects.ts`, `realisations/[slug]/page.tsx`, créer images | Ajouter avant/après |
| Nouvel article blog | `blog-posts.ts`, `blog/[slug]/page.tsx` | Ajouter contenu structuré |
| Nouvelle zone intervention | `CLIENT.md` → `ZONE_INTERVENTION` | Remplir CLIENT.md + sync |
| Nouveau champ form | `validation.ts`, `ContactForm.tsx`, API route contact | Ajouter Zod + form input |
| Nouvelle section home | Créer `src/components/sections/NewSection.tsx` | Composer page.tsx avec sections |
| Admin feature (nouvel onglet) | `DashboardTab.tsx`, `AdminSidebar.tsx`, API route | Ajouter onglet + tab switcher |

---

## 9. TROUBLESHOOTING

| Problème | Solution |
|----------|----------|
| `client.config.ts` est vide | Tirer `npm run sync-client` après éditer `CLIENT.md` |
| Variables `clientConfig.X` undefined | Vérifier `CLIENT.md` a la bonne clé (UPPERCASE) |
| Couleurs ne se mettent pas à jour | Lancer `npm run sync-client` pour réécrire `globals.css` |
| Build échoue (types) | Vérifier `tsconfig.json` a `strict: true` |
| Admin login ne marche pas | Vérifier `.env` a `ADMIN_PASSWORD` ou `CLIENT.md` a `ADMIN_PASSWORD` |
| Images ne s'affichent pas | Vérifier `public/images/` chemin exact dans `images.ts` |
| Form submission ne marche pas | Vérifier `/api/contact` existe et validation Zod pas trop stricte |

---

## 10. RESSOURCES & DOCUMENTATION

- **CLIENT.md** — Configuration source unique
- **README.md** — Setup & workflow
- **AI-PERSONALIZATION-GUIDE.md** — Guide détaillé personnalisation
- **src/types/index.ts** — Types TypeScript
- **next.config.ts** — Config Next.js

---

**Dernière note** : Ce template est conçu pour être **duplicable facilement**. La clé est **CLIENT.md** + **sync-client**. Tout le reste suit logiquement.

Bonne personnalisation ! 🚀
