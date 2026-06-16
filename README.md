# Fawaz Oyebode — Portfolio

A cyberpunk "developer command center" portfolio. Dark-purple theme, glassmorphism,
animated particle background, interactive terminal mode, and a live GitHub activity feed.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve production build
```

## Customize (everything lives in one file)

Edit **`src/data/portfolio.ts`** — profile, projects, skills, build log, certifications.
No need to touch component code for content changes.

### Add your resume
Drop your CV into the `public/` folder named exactly:

```
public/Fawaz_Oyebode_Software_CV.pdf
```

The "download_resume" button links to `/Fawaz_Oyebode_Software_CV.pdf`.
(Change `resumeUrl` in `src/data/portfolio.ts` if you use a different name.)

### Social links
Update `profile.socials` in `src/data/portfolio.ts`. The live GitHub feed uses
`profile.githubUser` (currently `fawazdevx`).

## Sections
- **Hero** — animated typewriter roles + CTAs
- **About** — focus areas + "currently building"
- **Projects** — filterable lab dashboard (real projects)
- **Skills** — categorized matrix
- **Build Log** — timeline + live GitHub activity
- **Contact** — channels, terminal block, certifications
- **Terminal Mode** — click `▸ terminal` in the nav (or the floating button). Try:
  `help`, `whoami`, `projects`, `skills`, `contact`, `resume`, `clear`, `exit`.

## Deploy to Vercel (recommended)

```bash
npm i -g vercel
vercel            # follow prompts
vercel --prod
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
Deploys to Netlify and Cloudflare Pages work too (build command `next build`).

## Theme

Colors are defined in `src/app/globals.css` under `@theme`:
`--color-base #0a0a0f`, `--color-purple #8b5cf6`, `--color-cyan #22d3ee`.

## Optional add-ons (not included, hooks left clean)
- **Connect Wallet** — add `wagmi` + `viem`, then a button in `Hero.tsx`.
- **3D hero** — swap `ParticleField` for a `react-three-fiber` scene.
- **GitHub contribution heatmap** — add `react-github-calendar` in `BuildLog`.
