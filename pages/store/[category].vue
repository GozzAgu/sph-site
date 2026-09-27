<template>
  <div class="min-h-screen bg-[#f5f5f7] pb-24">
    <section class="sph-container pt-10 md:pt-14">
      <NuxtLink to="/store" class="sph-link text-[14px]">
        ‹ Store
      </NuxtLink>
      <h1 class="sph-headline-xl mt-6">
        {{ categoryName }}
      </h1>
      <p class="sph-lead mt-3 max-w-2xl text-[#6e6e73]">
        {{ categoryDescription }}
      </p>
    </section>

    <section class="sph-container mt-12 md:mt-16">
      <ul v-if="categoryProducts.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(product, i) in categoryProducts" :key="product.slug + i" v-reveal="i % 3">
          <article class="sph-card flex h-full flex-col">
            <div class="aspect-[4/3] overflow-hidden bg-[#f5f5f7]">
              <NuxtImg
                :src="product.image"
                :alt="product.title"
                class="h-full w-full object-cover"
                format="webp"
              />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h2 class="text-[21px] font-semibold tracking-tight">
                {{ product.title }}
              </h2>
              <p v-if="product.tagline" class="mt-1 text-[14px] leading-[1.43] text-[#6e6e73]">
                {{ product.tagline }}
              </p>
              <p v-if="product.price" class="mt-4 text-[14px] font-semibold">
                {{ product.price }}
              </p>
            </div>
          </article>
        </li>
      </ul>
      <div v-else class="rounded-[18px] bg-white px-6 py-20 text-center">
        <p class="text-[21px] font-semibold tracking-tight">
          More {{ categoryName }} coming soon.
        </p>
        <NuxtLink to="/store" class="sph-link sph-chevron mt-3 inline-block text-[17px]">
          Browse the Store
        </NuxtLink>
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
const categoryDescription = computed(() => categoryData.value?.description || `Shop ${categoryName.value} at SmartPhoneHub.`)
const categoryProducts = computed(() => categoryData.value?.products ?? [])

function formatCategoryName(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()
}
</script>
