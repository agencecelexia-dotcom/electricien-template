# Electricien Template — Duplicable & Scalable

**A modern, fully-personalized website template for electrician businesses.**

Built by **Agence Celexia** with Next.js 16, Tailwind CSS 4, and Framer Motion.

**Version:** 1.0
**Last Updated:** 2026-02-28

---

## 🚀 Quick Start — 3 Steps

### Step 1️⃣ : Fill `CLIENT.md` (10 min)

Edit the `CLIENT.md` file at the root with your business info:

```markdown
NOM_ENTREPRISE: "Your Business Name"
TELEPHONE: "01 23 45 67 89"
EMAIL: "contact@example.fr"
ACCROCHE_HERO: "Your Tagline Here"
# ... 100+ variables
```

📖 **Full guide:** See [AI-PERSONALIZATION-GUIDE.md](./AI-PERSONALIZATION-GUIDE.md) for all variables explained.

### Step 2️⃣ : Sync Config (1 min)

Generate TypeScript config from `CLIENT.md`:

```bash
npm install
npm run sync-client
```

**Output:**
- ✅ `src/config/client.config.ts` generated (78+ keys)
- ✅ `src/app/globals.css` updated (colors, fonts)

### Step 3️⃣ : Run & Deploy (2 min)

```bash
npm run dev        # Local: http://localhost:3000
npm run build      # Production build
git push origin    # Auto-deploys via Vercel
```

**Total setup: ~15 minutes** ⏱️

---

## 📚 Complete Workflow

This is a **fully duplicable template**. Here's the complete personalization flow:

```
CLIENT.md (source of truth)
    ↓
npm run sync-client (auto-generate config)
    ↓
Edit src/data/ (descriptions, projects, articles)
    ↓
Add images (19 files required)
    ↓
npm run build (verify no errors)
    ↓
git push (Vercel auto-deploys)
```

### Documentation

| Document | Purpose |
|----------|---------|
| **[CLAUDE.md](./CLAUDE.md)** | Architecture, code patterns, development rules |
| **[AI-PERSONALIZATION-GUIDE.md](./AI-PERSONALIZATION-GUIDE.md)** | Complete step-by-step guide (45 min) |
| **[CLIENT.md](./CLIENT.md)** | Configuration source (100+ variables) |

### What's Included

✅ **Pages** (all responsive, SEO-optimized)
- Home (9 sections)
- Services (grid + individual pages)
- Projects (portfolio gallery with filters)
- Blog (articles with metadata)
- About (team, certifications, timeline)
- Contact (form with validation)
- Legal (mentions, privacy)
- Admin Dashboard (6 tabs)

✅ **Features**
- Contact form with validation (Zod)
- Before/After project slider
- Testimonials carousel
- FAQ accordion
- Google Maps embed
- Cookie consent banner
- Scroll progress bar
- Animations (Framer Motion)

✅ **Admin Panel** (`/admin/login`)
- Dashboard (submissions, stats)
- Content editor (inline)
- Projects CRUD
- Services CRUD
- Testimonials CRUD
- Photos gallery

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | Next.js 16.1.6 (App Router) |
| **Language** | TypeScript 5 (strict mode) |
| **Styling** | Tailwind CSS 4 (oklch colors) |
| **Components** | React 19.2.3 |
| **Animations** | Framer Motion 12.34.3 |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Hosting** | Vercel (auto-deploy) |

---

## 📁 Project Structure

```
electricien-template/
├── CLIENT.md                          ← Configuration (edit this!)
├── CLAUDE.md                          ← Architecture & patterns
├── AI-PERSONALIZATION-GUIDE.md        ← Full personalization guide
├── scripts/sync-client.ts             ← Auto-config generator
├── src/
│   ├── app/                          ← Pages (Next.js App Router)
│   ├── components/                   ← Reusable UI components
│   ├── config/client.config.ts       ← Generated config (auto)
│   ├── data/                         ← Services, projects, blog, etc.
│   └── lib/                          ← Utilities, validation, storage
├── public/images/                    ← 19 image files required
└── storage/                          ← JSON data (admin)
```

**See [CLAUDE.md](./CLAUDE.md)** for detailed architecture.

---

## 🎨 Customization Hierarchy

**Easiest → Hardest:**

| Level | What | Where | Time |
|-------|------|-------|------|
| 1️⃣ | Brand name, contact, slogan | `CLIENT.md` | 5 min |
| 2️⃣ | Service descriptions, projects | `src/data/` | 10 min |
| 3️⃣ | Blog articles, FAQ | `src/data/` | 15 min |
| 4️⃣ | Images (19 files) | `public/images/` | 10 min |
| 5️⃣ | Pages, sections | `src/app/`, `src/components/` | 30+ min |

---

## 📋 Required Images (19 files)

```
public/images/
├── hero/
│   └── accueil.webp                    (1920×1080, ~500KB)
├── services/
│   ├── installation-electrique.webp    (800×600, ~300KB each)
│   ├── renovation-electrique.webp
│   ├── depannage-urgence.webp
│   ├── mise-aux-normes.webp
│   ├── domotique-maison-connectee.webp
│   └── eclairage.webp
├── realisations/
│   ├── projet-1-avant.webp             (1200×800, ~400KB each)
│   ├── projet-1-apres.webp
│   ├── projet-2-avant.webp
│   ├── projet-2-apres.webp
│   ├── projet-3-avant.webp
│   ├── projet-3-apres.webp
│   ├── projet-4-avant.webp
│   ├── projet-4-apres.webp
│   ├── projet-5-avant.webp
│   ├── projet-5-apres.webp
│   ├── projet-6-avant.webp
│   └── projet-6-apres.webp
├── team/
│   └── equipe-fondateur.webp           (400×400, ~200KB)
└── og-image.webp                       (1200×630, ~300KB)
```

See **[AI-PERSONALIZATION-GUIDE.md § Image Prompts](./AI-PERSONALIZATION-GUIDE.md#étape-4--images)** for detailed image generation prompts.

---

## 📜 Scripts

```bash
npm run dev           # Start dev server (localhost:3000)
npm run build         # Production build
npm run start         # Run production server
npm run lint          # ESLint check
npm run sync-client   # Generate config from CLIENT.md
```

---

## 🔐 Admin Panel

Access admin dashboard:

```
http://localhost:3000/admin/login
Password: (set in CLIENT.md ADMIN_PASSWORD)
```

**6 Tabs:**
- Dashboard (submissions, stats)
- Contenu (edit config)
- Projets (CRUD)
- Services (CRUD)
- Temoignages (CRUD)
- Photos (gallery)

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Commit & Push**
   ```bash
   git add -A
   git commit -m "feat: personalization [COMPANY_NAME]"
   git push origin main
   ```

2. **Auto-deploy**
   - Vercel automatically deploys on every push
   - Takes ~60 seconds

3. **Custom Domain**
   - Add domain in Vercel dashboard
   - Configure DNS (nameservers)
   - HTTPS automatic

**Your site:** `https://yourcompany.com`

---

## 📖 Complete Guides

- **[CLAUDE.md](./CLAUDE.md)** — Full architecture & patterns
- **[AI-PERSONALIZATION-GUIDE.md](./AI-PERSONALIZATION-GUIDE.md)** — 45-minute personalization walkthrough
- **[CLIENT.md](./CLIENT.md)** — All 100+ configuration variables

---

## ⚡ Performance

- ✅ **Full static generation** (all pages pre-rendered)
- ✅ **Image optimization** (WebP, responsive sizes)
- ✅ **SEO optimized** (metadata, sitemap, Schema.org)
- ✅ **Lighthouse score:** 95+ (Vercel)
- ✅ **Bundle size:** ~50KB gzipped

---

## 🤖 For AI Agents

If you're personalizing this template:

1. **Read [CLAUDE.md](./CLAUDE.md)** — Understand architecture & patterns
2. **Follow [AI-PERSONALIZATION-GUIDE.md](./AI-PERSONALIZATION-GUIDE.md)** — Step-by-step walkthrough
3. **Edit [CLIENT.md](./CLIENT.md)** — Main configuration file
4. **Run `npm run sync-client`** — Generate config
5. **Edit `src/data/`** — Descriptions, projects, articles
6. **Add images** — 19 files in `public/images/`
7. **Test** — `npm run build` (should complete without errors)
8. **Deploy** — `git push origin main` (Vercel auto-deploys)

See **checklist** in [AI-PERSONALIZATION-GUIDE.md § Checklist](./AI-PERSONALIZATION-GUIDE.md#checklist-complète).

---

## 📝 License

This template is designed for use with Agence Celexia projects.

---

## 🙋 Support

For issues or questions:
- Check **[CLAUDE.md](./CLAUDE.md)** (architecture & troubleshooting)
- Check **[AI-PERSONALIZATION-GUIDE.md](./AI-PERSONALIZATION-GUIDE.md)** (step-by-step help)
- Check **[CLIENT.md](./CLIENT.md)** (configuration)

---

**Made with ❤️ by [Agence Celexia](https://agencecelexia.com)**

**Happy building!** 🚀
