import { createClient } from '@sanity/client'
import { fallbackStoreContent, type StoreContent } from '~/types/storeContent'

/** Shape returned by GROQ for nested / listed products */
type FetchedProduct = {
  title?: string | null
  slug?: string | null
  tagline?: string | null
  price?: string | null
  image?: string | null
}

type FetchedCategory = {
  name?: string | null
  slug?: string | null
  image?: string | null
  description?: string | null
  products?: (FetchedProduct | null | undefined)[] | null
}

type FetchedLatestProduct = FetchedProduct & {
  categorySlug?: string | null
}

export async function loadStoreContent(config: {
  projectId?: string
  dataset?: string
  apiVersion?: string
  useCdn?: boolean
}): Promise<StoreContent> {
  const projectId = config.projectId
  const dataset = config.dataset

  if (!projectId || !dataset)
    return fallbackStoreContent

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion: config.apiVersion ?? '2024-01-01',
      useCdn: config.useCdn !== false,
    })

    const [storePage, categories, latestProducts] = await Promise.all([
      client.fetch(`
          *[_type == "storePage"][0]{
            heroHeadline,
            latestHeadline,
            experienceCards[]{
              tag,
              title,
              subtitle
            },
            quickLinks[]{
              label,
              to,
              href,
              external
            }
          }
        `),
      client.fetch(`
          *[_type == "storeCategory"] | order(order asc, name asc){
            name,
            "slug": slug.current,
            "image": coalesce(image.asset->url, ""),
            description,
            "products": select(
              defined(products) && length(products) > 0 => products[]->{
                title,
                "slug": slug.current,
                tagline,
                price,
                "image": coalesce(image.asset->url, "")
              },
              *[_type == "product" && category._ref == ^._id] | order(title asc){
                title,
                "slug": slug.current,
                tagline,
                price,
                "image": coalesce(image.asset->url, "")
              }
            )
          }
        `),
      client.fetch(`
          *[_type == "product" && featuredOnStore == true] | order(featuredOrder asc, _updatedAt desc)[0...6]{
            title,
            "slug": slug.current,
            tagline,
            price,
            "image": coalesce(image.asset->url, ""),
            "categorySlug": category->slug.current
          }
        `),
    ])

    const normalizedCategories = ((categories ?? []) as FetchedCategory[]).map(category => ({
      name: category.name ?? 'Category',
      slug: category.slug ?? 'category',
      image: category.image || '/images/laptops-sph.jpg',
      description: category.description ?? '',
      products: (category.products ?? []).filter((p): p is FetchedProduct => p != null).map(product => ({
        title: product.title ?? 'Product',
        slug: product.slug ?? 'product',
        tagline: product.tagline ?? '',
        price: product.price ?? undefined,
        image: product.image || '/images/laptops-sph.jpg',
      })),
    }))

    const normalizedLatest = ((latestProducts ?? []) as FetchedLatestProduct[]).map(product => ({
      title: product.title ?? 'Product',
      slug: product.slug ?? 'product',
      tagline: product.tagline ?? '',
      price: product.price ?? undefined,
      image: product.image || '/images/laptops-sph.jpg',
      link: product.categorySlug ? `/store/${product.categorySlug}` : '#',
    }))

    return {
      heroHeadline: storePage?.heroHeadline ?? fallbackStoreContent.heroHeadline,
      latestHeadline: storePage?.latestHeadline ?? fallbackStoreContent.latestHeadline,
      categories: normalizedCategories.length > 0 ? normalizedCategories : fallbackStoreContent.categories,
      latestProducts: normalizedLatest.length > 0 ? normalizedLatest : fallbackStoreContent.latestProducts,
      experienceCards: storePage?.experienceCards?.length ? storePage.experienceCards : fallbackStoreContent.experienceCards,
      quickLinks: storePage?.quickLinks?.length ? storePage.quickLinks : fallbackStoreContent.quickLinks,
    }
  }
  catch {
    return fallbackStoreContent
  }
}
