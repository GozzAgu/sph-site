import type { StoreContent } from '~/types/storeContent'

export function useStoreContent() {
  return useAsyncData<StoreContent>('store-content', () => $fetch<StoreContent>('/api/store-content'))
}
