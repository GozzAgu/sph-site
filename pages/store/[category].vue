<template>
  <div class="min-h-screen bg-neutral-950">
    <!-- Back + Hero -->
    <section class="border-b border-white/5 py-12 md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        <NuxtLink
          to="/store"
          class="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Store
        </NuxtLink>
        <h1 class="mt-6 text-4xl font-light tracking-tight text-white md:text-5xl">
          {{ categoryName }}
        </h1>
        <p class="mt-3 max-w-xl text-white/60">
          {{ categoryDescription }}
        </p>
      </div>
    </section>

    <!-- Products placeholder -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="product in categoryProducts"
            :key="product.title"
            class="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm transition hover:border-white/20"
          >
            <div class="aspect-[4/3] overflow-hidden bg-neutral-800">
              <NuxtImg
                :src="product.image"
                :alt="product.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                format="webp"
              />
            </div>
            <div class="border-t border-white/5 p-5 md:p-6">
              <h2 class="text-lg font-medium text-white">{{ product.title }}</h2>
              <p class="mt-1 text-sm text-white/60">{{ product.tagline }}</p>
            </div>
          </article>
        </div>
        <p v-if="categoryProducts.length === 0" class="py-12 text-center text-white/50">
          More {{ categoryName }} products coming soon.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StoreCategoryPage',
})

const route = useRoute()
const category = computed(() => (route.params.category as string) ?? '')
const { data: storeContent } = await useStoreContent()

const categoryData = computed(() => storeContent.value?.categories.find(c => c.slug === category.value))
const categoryName = computed(() => categoryData.value?.name ?? formatCategoryName(category.value))
const categoryDescription = computed(() => categoryData.value?.description ?? `Shop ${categoryName.value} at SmartPhoneHub.`)
const categoryProducts = computed(() => categoryData.value?.products ?? [])

function formatCategoryName(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()
}
</script>
