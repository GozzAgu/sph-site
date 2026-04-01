# Store CMS Guide (Sanity)

This project is now wired to Sanity for store content:

- `storePage` document: hero + latest headlines, experience cards, quick links
- `storeCategory` documents: category metadata, image, linked products
- `product` documents: card data and featured controls

## 1) Configure environment

Copy `.env.example` to `.env` and set:

- `NUXT_PUBLIC_SANITY_PROJECT_ID` (or `SANITY_PROJECT_ID`)
- `NUXT_PUBLIC_SANITY_DATASET` (or `SANITY_DATASET`)
- `SANITY_API_VERSION` (example: `2024-01-01`)
- `SANITY_USE_CDN` (`true` for speed)

If you run Studio locally, also set:

- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

## 2) Run Nuxt

```bash
npm run dev
```

When Sanity vars are missing or the dataset is empty, the store pages use safe fallback content.

## 3) Run Sanity Studio locally

```bash
npx sanity dev
```

Open [http://localhost:3333/studio](http://localhost:3333/studio) by default.

## 4) Seed minimum content

Create:

1. One `Store Page Settings` document
2. `Store Category` documents (phones/audio/gaming/laptops/accessories)
3. `Product` documents and assign each to a category
4. Toggle `Featured on Store Home` for products shown in "The latest"
5. Set `Featured Order` to control ordering

## 5) Deploy schema (optional)

```bash
npx sanity schema deploy
```

## Notes

- Store routes consume CMS data in:
  - `pages/store/index.vue`
  - `pages/store/[category].vue`
- Query/fallback logic lives in:
  - `composables/useStoreContent.ts`
