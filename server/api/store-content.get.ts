import { loadStoreContent } from '../utils/loadStoreContent'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const pub = config.public
  return loadStoreContent({
    projectId: pub.sanityProjectId as string | undefined,
    dataset: pub.sanityDataset as string | undefined,
    apiVersion: pub.sanityApiVersion as string | undefined,
    useCdn: pub.sanityUseCdn as boolean | undefined,
  })
})
