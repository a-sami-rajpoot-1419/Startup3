# Startup3 React Landing Site

Modern React + Vite migration of the original static Startup3 multi‑section landing page.

## Features
- Sections: Hero, Features, Product, Auth, Testimonials, CTA, Portfolio, Team, Pricing, Contact, Footer
- Responsive: fluid grids, clamp() typography, consolidated breakpoints
- Accessibility: focus-visible outlines, reduced-motion respect, semantic structure
- Performance: deduplicated CSS (52 KB source; ~34.75 KB built, ~7 KB gzip)
- Tooling: ESLint, Stylelint, Custom CSS audit (size + duplicate selectors)

## Scripts
```
npm run dev        # Start dev server
npm run build      # Production build to dist/
npm run lint       # JS/JSX lint
npm run lint:css   # Stylelint CSS
npm run audit:css  # CSS size & duplicate report
npm run verify     # Lint + CSS audit (fast pre-flight)
```

## Structure
```
src/
  components/      # React section components
  styles.css       # Global legacy + refactor layer
  assets/images    # Static images (large originals)
```

## Optimization Summary
- Legacy absolute layouts removed (portfolio/testimonials) → fluid grids
- Media queries consolidated (single main <=991px block + minimal others)
- Repeated selectors trimmed (103 → 75 duplicate entries)
- Typography unified with clamp() scale

Detailed stats in `README_OPTIMIZATION.md`.

## Next Improvements (optional)
1. Image optimization (WebP/AVIF + responsive srcset)
2. Further minor duplicate selector merging (<70 target)
3. Add Lighthouse/Playwright CI checks
4. Introduce code splitting for non-critical sections if routing added

## Getting Started
```
npm install
npm run dev
```
Visit: http://localhost:5173/

## Build
```
npm run build
```
Deploy contents of `dist/`.

## License
Internal project (no license specified).
