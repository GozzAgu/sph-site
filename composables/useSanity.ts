import { createClient } from '@sanity/client'

export function useSanity() {
  const config = useRuntimeConfig()

  return createClient({
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    apiVersion: config.public.sanityApiVersion,
    useCdn: config.public.sanityUseCdn,
  })
}
