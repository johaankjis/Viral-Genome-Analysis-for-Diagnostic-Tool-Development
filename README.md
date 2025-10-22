# Viral Genome Analysis for Diagnostic Tool Development

This repository contains a Next.js 15 dashboard that showcases an end-to-end microbiome genomics pipeline. It provides interactive views for dataset intake, pipeline configuration, and analysis reporting tailored for pathogen surveillance and diagnostic tool prototyping.

## Features

- **Operations dashboard** – Live-style overview page with KPIs, run activity, and tool status indicators drawn from the simulated pipeline state (`app/page.tsx`).
- **Data management console** – Upload workflows and tabular summaries for genomic datasets including status indicators, filtering, and bulk actions (`app/data/page.tsx`).
- **Pipeline orchestration UI** – Configurable pipeline steps, tool toggles, and run monitoring tabs implemented with client-side state (`app/pipeline/page.tsx`).
- **Results analytics** – Rich visualization suite covering taxonomy, pathogen detection, diversity metrics, abundance timelines, and quality checks (`app/results/page.tsx`).
- **Reusable component library** – Shadcn-inspired UI primitives in `components/ui` and higher level charts/widgets in `components/` reused across route segments.
- **Responsive layout** – Shared `SidebarNav` and `Header` components establish consistent navigation and adapt to viewport changes.

## Tech Stack

- [Next.js 15 App Router](https://nextjs.org/docs) with React 19 and TypeScript.
- Tailwind CSS 4 for styling with utility classes defined in `app/globals.css`.
- Radix UI + Shadcn component patterns for accessible UI primitives.
- Lucide React icons for status indicators.
- Vercel Analytics integration (`app/layout.tsx`).

## Project Structure

```
app/
  layout.tsx           # Root layout, fonts, analytics, and global styles
  page.tsx             # Dashboard landing page
  data/                # Data management route segment
  pipeline/            # Pipeline configuration and monitoring route
  results/             # Analysis results dashboards and charts
components/
  ui/                  # Shadcn-style reusable primitives (buttons, cards, etc.)
  header.tsx           # Top navigation and account actions
  sidebar-nav.tsx      # Primary navigation links and responsive behavior
  *-chart.tsx          # Visualization components used by results pages
hooks/                 # Custom hooks (mobile detection, toast helper)
lib/utils.ts           # Shared utility helpers (className merging)
public/                # Static assets served by Next.js
styles/globals.css     # Tailwind layer configuration and CSS resets
```

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open `http://localhost:3000` to view the dashboard.

3. **Run checks and production build**

   ```bash
   pnpm lint
   pnpm build
   pnpm start
   ```

## Customization Notes

- Most screens rely on static mock data arrays. Replace the inline objects in the `app/**/page.tsx` files with API calls or data-fetching logic when integrating with a backend.
- UI primitives under `components/ui` are generated via Shadcn patterns and can be extended or regenerated as needed.
- Tailwind tokens and theme colors are defined in `globals.css` and the Tailwind config (`tailwind.config.mjs` / `postcss.config.mjs`).
- To add additional navigation items, update `components/sidebar-nav.tsx` so the new route appears globally.

## Available Scripts

The following commands are defined in `package.json`:

- `pnpm dev` – Start the local development server.
- `pnpm build` – Create an optimized production build.
- `pnpm start` – Serve the prebuilt application.
- `pnpm lint` – Run ESLint against the project.

## License

This project is provided as-is for demonstration purposes. Add your license information here if you plan to distribute or open-source the application.
