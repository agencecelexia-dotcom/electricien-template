# AI-PERSONALIZATION-GUIDE.md — Guide Complet Personnalisation

**Pour agents IA & développeurs**
**Durée estimation** : 45 minutes
**Dernière mise à jour** : 2026-02-28

---

## TABLE DES MATIÈRES

1. [Vue d'ensemble](#1-vue-densemble)
2. [Étape 1 : Configuration CLIENT.md](#étape-1--configuration-clientmd)
3. [Étape 2 : Synchronisation config](#étape-2--synchronisation-config)
4. [Étape 3 : Personnalisation contenu](#étape-3--personnalisation-contenu)
5. [Étape 4 : Images](#étape-4--images)
6. [Étape 5 : Déploiement Vercel](#étape-5--déploiement-vercel)
7. [Checklist complète](#checklist-complète)

---

## 1. VUE D'ENSEMBLE

### Flux de travail (3 étapes)

```
┌─────────────────────────────────────────────────┐
│ 1. REMPLIR CLIENT.md (infos métier)            │
│    → 100+ variables KEY: "value"               │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│ 2. npm run sync-client                         │
│    → Parse CLIENT.md                           │
│    → Génère src/config/client.config.ts        │
│    → Mise à jour globals.css (couleurs/fonts)  │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│ 3. ÉDITER src/data/ & pages                    │
│    → Descriptions longues services             │
│    → Projets portfolio                         │
│    → Articles blog                             │
│    → FAQ & à-propos                            │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│ 4. DÉPOSER IMAGES (19 fichiers)               │
│    → Hero, 6 services, 12 before/after, etc.   │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│ 5. npm run build && git push                    │
│    → Vercel auto-deploy                        │
└─────────────────────────────────────────────────┘
```

**Temps par étape** :
- Étape 1 (CLIENT.md) : **10 min**
- Étape 2 (sync) : **1 min**
- Étape 3 (contenu) : **15 min**
- Étape 4 (images) : **10 min**
- Étape 5 (déploiement) : **5 min**

**Total : ~45 minutes**

---

## ÉTAPE 1 : Configuration CLIENT.md

**Objectif** : Remplir le fichier `CLIENT.md` à la racine du projet.

**Format** : `CLE: "valeur"`

**Outil** : Ouvrir `CLIENT.md` dans ton IDE et éditer.

### 1.1 IDENTITÉ (12 variables)

```markdown
## IDENTITE
NOM_ENTREPRISE: "ÉlectroPro"            # Nom commercial (visible partout)
NOM_LEGAL: "ÉlectroPro SARL"            # Raison sociale (mentions légales)
SIRET: "123 456 789 00012"              # SIRET (mentions légales)
METIER: "Électricien"                   # Métier (hero, schema.org)
FONDATEUR: "Marc Durand"                # Prenom Nom (à propos)
GENRE_DIRIGEANT: "M"                    # "M" ou "F" (template textes)
ANNEES_EXPERIENCE: "15"                 # Nombre (displays stats)
ANNEE_CREATION: "2009"                  # Année fondation (timeline)
CERTIFICATIONS: "Qualifelec, RGE"       # Certifications (footer, hero)
QUALIFICATION_CODE: "QUALIBAT"          # Code si applicable
DESCRIPTION_COURTE: "..."               # 1 phrase (meta description)
DESCRIPTION_LONGUE: "..."               # 2-3 phrases (à propos intro)
```

**Exemples** :
```markdown
NOM_ENTREPRISE: "Électricité Dupont"
FONDATEUR: "Jean Dupont"
GENRE_DIRIGEANT: "M"
```

### 1.2 CONTACT (11 variables)

```markdown
## CONTACT
TELEPHONE: "01 23 45 67 89"             # Format: "0X XX XX XX XX"
TELEPHONE_HREF: "tel:+33123456789"      # Format: "tel:+33..." (clickable)
EMAIL: "contact@example.fr"             # Email (visible, clickable)
ADRESSE: "15 Rue Voltaire, 75011 Paris" # Adresse complète (maps, schema)
CODE_POSTAL: "75011"                    # Code postal (schema)
VILLE: "Paris"                          # Ville (schema, pages)
DEPARTEMENT: "Paris"                    # Département (maps, localisation)
REGION: "Île-de-France"                 # Région (schema)
LATITUDE: "48.8566"                     # Coordonnées (Google Maps embed)
LONGITUDE: "2.3522"                     # Coordonnées (Google Maps embed)
ZONE_INTERVENTION: "Paris et Île-de-France"  # Zone (footer, hero, FAQ)
ZONE_KM: "50"                           # Rayon km (FAQ "combien km")
WHATSAPP: "https://wa.me/33123456789"   # URL WhatsApp (contact shortcuts)
```

**Notes** :
- TELEPHONE & TELEPHONE_HREF doivent se matcher
- LATITUDE/LONGITUDE pour Google Maps précis
- ZONE_INTERVENTION utilisée dans FAQ (interpolation)

### 1.3 HORAIRES (4 variables)

```markdown
## HORAIRES
HORAIRES_SEMAINE: "Lun-Ven: 8h-19h"     # Horaires semaine (footer)
HORAIRES_SAMEDI: "Sur rendez-vous"      # Samedi (footer)
HORAIRES_DIMANCHE: "Urgences uniquement" # Dimanche (footer)
URGENCE: "24/7"                         # Urgence (badge hero, FAQ)
```

### 1.4 BRANDING (2 variables) — IMPORTANT

```markdown
## BRANDING
PRIMARY_HUE: "217"                      # Teinte primaire (0-360°)
ACCENT_HUE: "44"                        # Teinte accent (0-360°)
```

**Valeurs teintes** :
- `0` = Rouge
- `45` = Orange/Jaune
- `100` = Vert
- `217` = Bleu ardoise (défaut)
- `260` = Violet

**Impact** : `npm run sync-client` régénère `globals.css` avec ces teintes.

### 1.5 SEO (5 variables)

```markdown
## SEO
DOMAINE: "https://electropro.fr"         # Domaine complet (sitemap, robots)
META_TITLE_ACCUEIL: "ÉlectroPro — Électricien..."  # Title tag home
META_DESC_ACCUEIL: "Électricien certifié..."       # Meta description home
META_KEYWORDS: "électricien, paris, installation..." # Keywords (comma-separated)
SCHEMA_TYPE: "Electrician"               # Schema.org type
```

**Bonnes pratiques** :
- Title ≤ 60 caractères
- Description ≤ 160 caractères
- Keywords : 5-10 mots pertinents

### 1.6 CONTENU (5 variables)

```markdown
## CONTENU
SLOGAN: "L'électricité, autrement."           # Tagline (header, hero)
ACCROCHE_HERO: "Votre électricien de confiance"   # Heading hero
DESCRIPTION_ENTREPRISE: "Électricien certifié..." # Sous-heading hero (max 100 chars)
DESCRIPTION_FOOTER: "Entreprise d'électricité..."# Footer description (50 words max)
DESCRIPTION_A_PROPOS: "Fondée en 2009..."       # Intro à propos (max 150 words)
```

### 1.7 STATS (6 variables) — Nombre interventions, avis, délai

```markdown
## CHIFFRES
NOMBRE_INTERVENTIONS: "2500"            # Projets réalisés (counters)
NOTE_GOOGLE: "4.9"                      # Note Google (badge footer)
NOMBRE_AVIS: "250"                      # Nombre avis (footer)
DELAI_INTERVENTION: "30"                # Minutes (badge hero, FAQ)
DISPONIBILITE: "24/7"                   # Disponibilité urgences (hero)
TAUX_SATISFACTION: "98"                 # % satisfaction (stats)
```

### 1.8 SERVICES (6 × 2 variables = 12 variables)

```markdown
## SERVICES
SERVICE_1_TITRE: "Installation Électrique"
SERVICE_1_DESC: "On câble votre habitat de A à Z..."
SERVICE_2_TITRE: "Rénovation Électrique"
SERVICE_2_DESC: "Votre installation a 15 ans ? On la modernise..."
SERVICE_3_TITRE: "Dépannage & Urgence"
SERVICE_3_DESC: "Panne à 3h du matin ? On est là..."
SERVICE_4_TITRE: "Mise aux Normes"
SERVICE_4_DESC: "Vente, location ou simple tranquillité ?..."
SERVICE_5_TITRE: "Domotique & Maison Connectée"
SERVICE_5_DESC: "Pilotez tout du bout des doigts..."
SERVICE_6_TITRE: "Éclairage"
SERVICE_6_DESC: "On transforme vos espaces avec la lumière..."
```

**Notes** :
- DESC ≈ 100 caractères max (une ligne)
- Descriptions longues vont dans `src/data/services.ts`

### 1.9 RÉSEAUX SOCIAUX (4 variables)

```markdown
## RESEAUX SOCIAUX
GOOGLE_MAPS: "https://maps.google.com/?q=..."   # URL Google Maps
GOOGLE_REVIEWS: "https://g.page/..."            # Google Reviews link
FACEBOOK: "https://facebook.com/..."            # Facebook page
INSTAGRAM: "https://instagram.com/..."          # Instagram account
LINKEDIN: "https://linkedin.com/..."            # LinkedIn company
```

**Notes** :
- Laisser `#` si pas de social media
- Utiliser URLs complètes (https://)

### 1.10 TÉMOIGNAGES (3 × 4 variables = 12 variables)

```markdown
## TEMOIGNAGES
TEMOIGNAGE_1_NOM: "Marie D."
TEMOIGNAGE_1_VILLE: "Paris 11e"
TEMOIGNAGE_1_TEXTE: "Rénovation complète de notre appartement..."
TEMOIGNAGE_1_NOTE: "5"
TEMOIGNAGE_2_NOM: "Jean-Pierre M."
TEMOIGNAGE_2_VILLE: "Boulogne"
TEMOIGNAGE_2_TEXTE: "Du premier contact au Consuel, tout était carré..."
TEMOIGNAGE_2_NOTE: "5"
TEMOIGNAGE_3_NOM: "Sophie L."
TEMOIGNAGE_3_VILLE: "Vincennes"
TEMOIGNAGE_3_TEXTE: "Notre maison obéit au doigt et à la voix..."
TEMOIGNAGE_3_NOTE: "5"
```

**Format NOTE** : "1", "2", "3", "4", ou "5"

### 1.11 ZONES D'INTERVENTION (1 variable)

```markdown
## ZONES
ZONES_LISTE: "Paris,Boulogne-Billancourt,Neuilly-sur-Seine,Levallois-Perret,Montreuil,Saint-Denis,Vincennes,Créteil"
```

**Format** : Comma-separated list (pas d'espaces)

### 1.12 HÉBERGEMENT & AUTRES (9 variables)

```markdown
## HEBERGEMENT
HEBERGEUR: "Vercel Inc."
HEBERGEUR_ADRESSE: "440 N Barranca Ave #4133, Covina, CA 91723, USA"
HEBERGEUR_EMAIL: "support@vercel.com"
HEBERGEUR_PHONE: "+1 (888) 322-2955"

## ADMIN
ADMIN_PASSWORD: "1234"                  # Mot de passe admin (/admin/login)
N8N_WEBHOOK: ""                         # URL n8n webhook (formulaire → automation)

## OPTIONNEL
GOOGLE_ANALYTICS_ID: "UA-000000000-0"   # Google Analytics tracking
FACEBOOK_PIXEL_ID: "000000000000000"    # Facebook Pixel
```

**Notes** :
- HEBERGEUR : Vercel pour production
- ADMIN_PASSWORD : Change par défaut !
- N8N_WEBHOOK : Optionnel (pour envoyer form → automation)

---

## ÉTAPE 2 : Synchronisation Config

**Objectif** : Générer `client.config.ts` depuis `CLIENT.md`.

### Commande

```bash
npm run sync-client
```

**Outputs attendus** :
```
[sync-client] 78+ cles extraites de CLIENT.md
[sync-client] Fichier genere : src/config/client.config.ts
```

### Vérification

**Ouvrir** : `src/config/client.config.ts`

```typescript
// AUTO-GENERATED from CLIENT.md — NE PAS MODIFIER MANUELLEMENT
// Genere par: npm run sync-client

export const clientConfig = {
  NOM_ENTREPRISE: 'ÉlectroPro',
  TELEPHONE: '01 23 45 67 89',
  EMAIL: 'contact@electropro.fr',
  // ... 75+ clés
} as const
```

✅ Vérifier :
- [ ] Fichier généré sans erreurs
- [ ] Toutes les clés présentes
- [ ] Pas de `undefined` values

### Troubleshooting

| Erreur | Solution |
|--------|----------|
| "Aucune paire clé-valeur trouvée" | Vérifier CLIENT.md existe à la racine du projet |
| client.config.ts vide | Vérifier format CLIENT.md : `KEY: "value"` |
| Variables ne se mettent pas à jour | Lancer `npm run sync-client` à nouveau après éditer CLIENT.md |

---

## ÉTAPE 3 : Personnalisation Contenu

**Objectif** : Éditer contenu détaillé (descriptions longues, articles, projets).

**Fichiers à éditer** (dans `src/data/` et `src/app/`) :

### 3.1 Services détaillés

**Fichier** : `src/data/services.ts`

```typescript
export const SERVICES: Service[] = [
  {
    slug: 'installation-electrique',
    title: 'Installation Électrique',        // ← Depuis CLIENT.md SERVICE_1_TITRE
    shortTitle: 'Installation',              // Abrégé
    description: '...',                      // ← Depuis CLIENT.md SERVICE_1_DESC (court)
    longDescription: `Installation complète de votre habitat...`, // ← À ÉCRIRE (150 words)
    features: [                              // ← À ÉCRIRE (6 features)
      'Tableau électrique dernière génération',
      'Câblage structuré et organisé',
      // ...
    ],
    benefits: [                              // ← À ÉCRIRE (4 benefits)
      'Sécurité maximale pour votre famille',
      'Conformité totale aux normes',
      // ...
    ],
    process: [                               // ← À ÉCRIRE (4 étapes)
      { step: 1, title: 'Étude & Devis', description: '...' },
      // ...
    ],
  },
  // SERVICE_2_TITRE → SERVICE_6_TITRE (5 de plus)
]
```

**À écrire par service** :
- `longDescription` : 150-200 mots (détails complets)
- `features[]` : 6 points (ce qui est livré)
- `benefits[]` : 4 points (bénéfices clients)
- `process[]` : 4 étapes (comment ça marche)

### 3.2 Projets portfolio

**Fichier** : `src/data/projects.ts`

```typescript
export interface Project {
  id: number
  title: string
  slug: string
  category: string
  description: string
  challenge: string            // Problématique projet
  solution: string             // Comment on l'a résolu
  beforeImage: string          // '/images/realisations/projet-X-avant.webp'
  afterImage: string           // '/images/realisations/projet-X-apres.webp'
  tags: string[]
  featured: boolean            // Affiché en home ?
  location: string
  duration: string
}
```

**Template projet** :
```typescript
{
  id: 1,
  title: 'Rénovation Tableau Électrique',
  slug: 'renovation-tableau-electrique',
  category: 'renovation',
  description: 'Remplacement complet d\'un tableau électrique vétuste...',
  challenge: 'L\'ancien tableau à fusibles ne comportait aucun différentiel...',
  solution: 'Installation d\'un tableau Legrand 4 rangées...',
  beforeImage: '/images/realisations/projet-1-avant.webp',
  afterImage: '/images/realisations/projet-1-apres.webp',
  tags: ['Rénovation', 'Mise aux Normes'],
  featured: true,
  location: 'Paris 11e',
  duration: '2 jours',
}
```

**À écrire par projet** :
- `title` : Titre court (~50 chars)
- `description` : 1 ligne (100 chars)
- `challenge` : Problématique (100 words)
- `solution` : Comment résolu (100 words)
- `tags` : 2-3 tags pertinents
- `featured` : true si affiché home (max 6 projects, actuellement 6)

### 3.3 Articles blog

**Fichier** : `src/data/blog-posts.ts`

```typescript
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string                // 1 ligne (100 chars)
  category: string               // "technique", "conseil", etc.
  author: string                 // Nom auteur
  publishDate: string            // "2026-02-28"
  readingTime: number            // Minutes
  featuredImage: string          // Pas d'image définie, laisser ""
  tags: string[]
  content: BlogContent[]          // Structuré
}

type BlogContent =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "image"; src: string; alt: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; content: string }
```

**Template article** :
```typescript
{
  id: '1',
  slug: 'renovation-electrique-quand-et-pourquoi',
  title: 'Rénovation Électrique : Quand et Pourquoi ?',
  excerpt: 'Guide complet pour savoir quand faire rénover son électricité...',
  category: 'technique',
  author: 'Marc Durand',
  publishDate: '2026-02-15',
  readingTime: 5,
  featuredImage: '',
  tags: ['Rénovation', 'Norme', 'Sécurité'],
  content: [
    {
      type: "paragraph",
      content: "Une installation électrique vieillit. Au fil des années..."
    },
    {
      type: "heading",
      level: 2,
      content: "Quand rénover ?"
    },
    {
      type: "list",
      items: [
        "Installation + de 20 ans",
        "Signes de vieillissement",
        // ...
      ]
    },
    // ...
  ]
}
```

**6 articles suggérés** :
1. "Rénovation électrique : quand et pourquoi"
2. "Mise aux normes NF C 15-100"
3. "Domotique : guide pour débutants"
4. "Dépannage électrique : les bons réflexes"
5. "Éclairage LED : économies et design"
6. "Panneaux solaires : ce qu'il faut savoir"

### 3.4 FAQ

**Fichier** : `src/data/faq.ts`

```typescript
import { clientConfig } from "@/config/client.config";

export const faqItems = [
  {
    question: "Combien coûte une installation complète ?",
    answer: `Le coût dépend de la surface et de la complexité.
      Nous établissons un devis détaillé gratuit après visite technique
      à ${clientConfig.TELEPHONE}.`
  },
  {
    question: "Êtes-vous disponible pour les urgences ?",
    answer: `Oui, notre service d'urgence fonctionne ${clientConfig.URGENCE}.
      Appelez ${clientConfig.TELEPHONE} pour intervention rapide.`
  },
  // ...
]
```

**À faire** :
- [ ] 7 questions FAQ (remplacer/ajouter)
- [ ] Interpoler variables depuis `clientConfig` (téléphone, urgence, zone, etc.)
- [ ] Réponses claires et concises (~150 words max)

### 3.5 À-propos page

**Fichier** : `src/app/a-propos/page.tsx`

```typescript
export default function AboutPage() {
  const certifications = [
    { name: "Qualibat RGE", description: "..." },     // Adapter
    { name: "Qualifelec", description: "..." },       // Adapter
  ];

  const timeline = [
    { year: 2009, label: "Création de l'entreprise" }, // Depuis ANNEE_CREATION
    { year: 2015, label: "Expansion" },                // À ajouter
    // ...
  ];

  const values = [
    "Matériaux de qualité",
    "Équipes certifiées",
    "Intervention rapide",
  ];

  // ...
}
```

**À personnaliser** :
- [ ] Certifications (ajouter/supprimer selon réalité)
- [ ] Timeline (année création, jalons importants)
- [ ] Values (vrais points forts)
- [ ] Texte descriptif entreprise

### 3.6 Autres fichiers

**`src/data/team.ts`** — Membres équipe
- Ajouter/éditer fondateur + équipe

**`src/data/navigation.ts`** — Menu nav
- Ajouter liens si pages supplémentaires

---

## ÉTAPE 4 : Images

**19 images requises** pour un site complet.

### 4.1 Hero Image (1 fichier)

| Chemin | Dimensions | Taille | Format | Contenu |
|--------|-----------|--------|--------|---------|
| `public/images/hero/accueil.webp` | 1920×1080 | ~500KB | WebP | Électricien au travail, atmosphère profesionnelle, mise en avant équipements |

**Prompt (Midjourney/DALL-E)** :
```
Professional electrician working on electrical panel, modern workshop,
natural lighting, wearing safety uniform, tool belt, close-up on hands,
high quality photography, bright and clean environment, 4K, 16:9 aspect ratio
```

### 4.2 Service Images (6 fichiers)

| Chemin | Dimensions | Taille | Format | Service |
|--------|-----------|--------|--------|---------|
| `public/images/services/installation-electrique.webp` | 800×600 | ~300KB | WebP | Installation neuve maison |
| `public/images/services/renovation-electrique.webp` | 800×600 | ~300KB | WebP | Rénovation tableau/câblage |
| `public/images/services/depannage-urgence.webp` | 800×600 | ~300KB | WebP | Technicien intervenant urgence |
| `public/images/services/mise-aux-normes.webp` | 800×600 | ~300KB | WebP | Diagnostic inspection électrique |
| `public/images/services/domotique-maison-connectee.webp` | 800×600 | ~300KB | WebP | Maison connectée appareils smart |
| `public/images/services/eclairage.webp` | 800×600 | ~300KB | WebP | Intérieur bien éclairé moderne |

### 4.3 Realisations — Before/After (12 fichiers = 6 pairs)

| Avant | Après | Dimensions | Taille | Sujet |
|-------|-------|-----------|--------|-------|
| `projet-1-avant.webp` | `projet-1-apres.webp` | 1200×800 | ~400KB | Tableau électrique vétuste → neuf |
| `projet-2-avant.webp` | `projet-2-apres.webp` | 1200×800 | ~400KB | Extérieur sombre → éclairé |
| `projet-3-avant.webp` | `projet-3-apres.webp` | 1200×800 | ~400KB | Maison neuve installation complète |
| `projet-4-avant.webp` | `projet-4-apres.webp` | 1200×800 | ~400KB | Villa domotique avant/après |
| `projet-5-avant.webp` | `projet-5-apres.webp` | 1200×800 | ~400KB | Immeuble parties communes |
| `projet-6-avant.webp` | `projet-6-apres.webp` | 1200×800 | ~400KB | Dépannage urgence commerce |

**Prompts exemples** :

**Avant** : Vieille installation électrique désorganisée
```
Old electrical panel with outdated wiring, messy cables, worn components,
dim lighting, 1970s installation, industrial setting, before renovation
```

**Après** : Installation moderne professionnelle
```
Modern electrical panel with organized wiring, latest equipment,
clean professional installation, bright modern aesthetic,
safety certifications visible, 2024 quality
```

### 4.4 Team Images (1 fichier)

| Chemin | Dimensions | Taille | Format | Contenu |
|--------|-----------|--------|--------|---------|
| `public/images/team/equipe-fondateur.webp` | 400×400 | ~200KB | WebP | Fondateur portrait professionnel |

**Prompt** :
```
Professional headshot of electrician expert, confident pose, wearing branded uniform,
safety gear visible, modern office background, well-lit studio photography,
trustworthy professional appearance, high quality portrait
```

### 4.5 OG Image (1 fichier)

| Chemin | Dimensions | Taille | Format | Contenu |
|--------|-----------|--------|--------|---------|
| `public/images/og-image.webp` | 1200×630 | ~300KB | WebP | Thumbnail partage social |

**Contenu** : Logo/nom entreprise + slogan sur background élégant

### Récapitulatif

```bash
public/images/
├── hero/
│   └── accueil.webp                                    (1 image)
├── services/
│   ├── installation-electrique.webp
│   ├── renovation-electrique.webp
│   ├── depannage-urgence.webp
│   ├── mise-aux-normes.webp
│   ├── domotique-maison-connectee.webp
│   └── eclairage.webp                                 (6 images)
├── realisations/
│   ├── projet-1-avant.webp ├── projet-1-apres.webp
│   ├── projet-2-avant.webp ├── projet-2-apres.webp
│   ├── projet-3-avant.webp ├── projet-3-apres.webp
│   ├── projet-4-avant.webp ├── projet-4-apres.webp
│   ├── projet-5-avant.webp ├── projet-5-apres.webp
│   └── projet-6-avant.webp ├── projet-6-apres.webp  (12 images)
├── team/
│   └── equipe-fondateur.webp                          (1 image)
└── og-image.webp                                       (1 image)

TOTAL: 19 images
```

---

## ÉTAPE 5 : Déploiement Vercel

### 5.1 Build local

```bash
npm run build
```

**Sortie attendue** :
```
✓ Compiled successfully in 13.5s
...
✓ Generating static pages (35/35) in 13.4s
```

✅ Vérifier : Pas d'erreurs TypeScript, pas de warnings.

### 5.2 Git commit

```bash
git add -A
git commit -m "feat: personnalisation electricien [NOM_ENTREPRISE]"
git push origin main
```

### 5.3 Déploiement Vercel

**Options** :

**Option A : GitHub + Vercel Auto-Deploy**
1. Créer repo GitHub (ou utiliser fork)
2. Connecter Vercel à GitHub
3. Chaque push → auto-déploie (60 secondes)

**Option B : Vercel CLI**
```bash
npm install -g vercel
vercel deploy --prod
```

### 5.4 Vérifier site live

```
https://[domaine].vercel.app
```

✅ Checklist :
- [ ] Accueil charge rapidement
- [ ] Toutes les sections visible
- [ ] Images chargées
- [ ] Formulaire contact fonctionne
- [ ] Mobile responsive (test iPhone 12)
- [ ] Menu mobile fonctionne
- [ ] Footer visible
- [ ] Admin login accessible (`/admin/login`)

---

## CHECKLIST COMPLÈTE

### Phase 1 : CLIENT.md (10 min)

- [ ] IDENTITÉ : Tous les 12 champs
- [ ] CONTACT : Tous les 11 champs
- [ ] HORAIRES : 4 champs
- [ ] BRANDING : PRIMARY_HUE, ACCENT_HUE
- [ ] SEO : 5 champs (title, description, keywords)
- [ ] CONTENU : 5 champs (slogan, hero, descriptions)
- [ ] CHIFFRES : 6 stats
- [ ] SERVICES : 6 × 2 = 12 champs (titres + descriptions)
- [ ] RÉSEAUX : 5 URLs sociales
- [ ] TÉMOIGNAGES : 3 × 4 = 12 champs
- [ ] ZONES : Zone intervention
- [ ] HÉBERGEMENT & ADMIN : 9 champs

**Total CLIENT.md : 78+ variables ✅**

### Phase 2 : Sync Config (1 min)

- [ ] `npm run sync-client` exécuté sans erreurs
- [ ] `src/config/client.config.ts` généré
- [ ] Fichier contient 78+ clés
- [ ] Pas de `undefined` values
- [ ] Vérifier import dans composants marche

### Phase 3 : Contenu (15 min)

#### Services

- [ ] `src/data/services.ts` — 6 services avec :
  - [ ] `longDescription` (150 words)
  - [ ] `features[]` (6 items)
  - [ ] `benefits[]` (4 items)
  - [ ] `process[]` (4 étapes)

#### Projets

- [ ] `src/data/projects.ts` — 6 projets avec :
  - [ ] `title` (~50 chars)
  - [ ] `description` (100 chars)
  - [ ] `challenge` (100 words)
  - [ ] `solution` (100 words)
  - [ ] `tags` (2-3)
  - [ ] `featured` (6 projects featured)
  - [ ] `location`, `duration` remplis

#### Blog

- [ ] `src/data/blog-posts.ts` — 6 articles avec :
  - [ ] `title`, `slug`, `excerpt`
  - [ ] `content[]` structuré (paragraphs, headings, lists, quotes)
  - [ ] `tags` pertinents
  - [ ] `publishDate`, `readingTime`

#### FAQ

- [ ] `src/data/faq.ts` — 7 questions avec :
  - [ ] Questions claires
  - [ ] Réponses interpolées `${clientConfig.X}`
  - [ ] Max 150 words par réponse

#### À-propos

- [ ] `src/app/a-propos/page.tsx` — Personnalisé :
  - [ ] Certifications correctes
  - [ ] Timeline avec vraies années
  - [ ] Values adapter à l'entreprise
  - [ ] Textes descriptions OK

### Phase 4 : Images (10 min)

- [ ] `public/images/hero/accueil.webp` (1920×1080)
- [ ] 6 images services (800×600)
- [ ] 12 images realisations (6 paires, 1200×800)
  - [ ] `projet-1-{avant,apres}.webp`
  - [ ] `projet-2-{avant,apres}.webp`
  - [ ] `projet-3-{avant,apres}.webp`
  - [ ] `projet-4-{avant,apres}.webp`
  - [ ] `projet-5-{avant,apres}.webp`
  - [ ] `projet-6-{avant,apres}.webp`
- [ ] `public/images/team/equipe-fondateur.webp` (400×400)
- [ ] `public/images/og-image.webp` (1200×630)
- [ ] Tous les fichiers en format `.webp`
- [ ] Vérifier tailles fichiers (≤ 500KB chacun)
- [ ] `src/config/images.ts` a jour avec les chemins

### Phase 5 : Déploiement (5 min)

- [ ] `npm run build` sans erreurs
- [ ] Pas de warnings TypeScript
- [ ] `npm run dev` fonctionne localement
- [ ] Git commit + push
- [ ] Vercel auto-déploie
- [ ] Site accessible en https://[domaine]
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] Forms functional
- [ ] Images optimized
- [ ] No 404s or errors

### Déploiement DNS (si nouveau domaine)

- [ ] Domaine acheté (Namecheap, OVH, etc.)
- [ ] Nameservers pointent vers Vercel
  - [ ] `NS1.VERCEL-DNS.COM`
  - [ ] `NS2.VERCEL-DNS.COM`
  - [ ] `V1.VERCEL-DNS.COM`
  - [ ] `V2.VERCEL-DNS.COM`
- [ ] DNS propagation vérifié (24-48h max)
- [ ] HTTPS actif (Let's Encrypt automatique)

---

## RESSOURCES & DOCS

- **CLAUDE.md** — Architecture complète
- **README.md** — Quick start
- **CLIENT.md** — Configuration source
- **src/types/index.ts** — Types TypeScript
- **Vercel Docs** : https://vercel.com/docs

---

## SUPPORT AGENTS IA

### Si tu es agent IA :

1. **Lire ce guide complet** avant de personnaliser
2. **Remplir CLIENT.md** en demandant infos à utilisateur (ou utiliser données fournis)
3. **Lancer sync-client** après chaque édition CLIENT.md
4. **Éditer src/data/** avec contenu pertinent (descriptions, projets, articles)
5. **Ajouter/mettre à jour images** (ou générer via Gemini/Midjourney/DALL-E)
6. **Tester build** : `npm run build`
7. **Commit et push** pour Vercel deployment

### Dépannage

| Erreur | Solution |
|--------|----------|
| Client.config vide | Lancer `npm run sync-client` après CLIENT.md |
| Types undefined | Vérifier imports depuis `@/config/client.config` |
| Images 404 | Vérifier chemins dans `images.ts` matchent `public/images/` |
| Build échoue | Lancer `npm run lint` pour voir erreurs TypeScript |
| Form ne marche pas | Vérifier `/api/contact` route existe |

---

**Bon développement !** 🚀

Template conçu par **Agence Celexia** — Duplicable & Scalable
