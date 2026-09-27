<template>
  <div class="bg-[#f5f5f7] pb-24">
    <!-- Header -->
    <section class="sph-container flex flex-col gap-6 pt-14 md:flex-row md:items-end md:justify-between md:pt-20">
      <h1 class="sph-headline-xl sph-intro max-w-2xl">
        <span class="sph-gradient-text">Store.</span>
        <span class="text-[#6e6e73]">{{ heroHeadline }}</span>
      </h1>
      <div class="flex flex-col gap-2 text-[14px] md:items-end md:pb-2">
        <a href="#" class="sph-link sph-chevron">Connect with a Specialist</a>
        <NuxtLink to="/#find-us" class="sph-link sph-chevron">
          Find a store
        </NuxtLink>
      </div>
    </section>

    <!-- Categories -->
    <section class="scrollbar-hide mt-12 overflow-x-auto md:mt-16" aria-label="Shop by category">
      <ul class="mx-auto flex w-max gap-4 px-6 pb-2 md:gap-8" role="list">
        <li v-for="cat in categories" :key="cat.slug" class="flex-shrink-0">
          <NuxtLink :to="`/store/${cat.slug}`" class="group flex w-[108px] flex-col items-center text-center md:w-[124px]">
            <div class="h-[78px] w-[108px] overflow-hidden rounded-[14px] bg-white md:h-[88px] md:w-[124px]">
              <NuxtImg
                :src="cat.image"
                alt=""
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                format="webp"
              />
            </div>
            <span class="mt-3 text-[14px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc]">{{ cat.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- The latest -->
    <section class="sph-container mt-20 md:mt-24">
      <h2 v-reveal class="sph-headline-m">
        The latest.
        <span class="text-[#6e6e73]">{{ latestHeadline }}</span>
      </h2>
      <ul class="mt-8 grid gap-5 md:grid-cols-3" role="list">
        <li v-for="(item, i) in latestProducts" :key="item.slug + i" v-reveal="i">
          <NuxtLink :to="item.link" class="sph-card group flex h-full flex-col">
            <div class="p-7 pb-0">
              <h3 class="text-[24px] font-semibold tracking-tight">
                {{ item.title }}
              </h3>
              <p class="mt-1 text-[17px] leading-[1.35]">
                {{ item.tagline }}
              </p>
              <p v-if="item.price" class="mt-3 text-[14px] text-[#6e6e73]">
                {{ item.price }}
              </p>
            </div>
            <div class="mt-auto overflow-hidden pt-6">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="sph-zoom aspect-[4/3] w-full object-cover"
                format="webp"
              />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Experience -->
    <section class="sph-container mt-20 md:mt-24">
      <h2 v-reveal class="sph-headline-m">
        The SmartPhoneHub experience.
        <span class="text-[#6e6e73]">Do even more with our products and services.</span>
      </h2>
      <ul class="mt-8 grid gap-5 md:grid-cols-3" role="list">
        <li v-for="(card, i) in experienceCards" :key="card.title" v-reveal="i">
          <div class="h-full rounded-[18px] bg-white p-7 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
            <p class="text-[12px] font-semibold uppercase tracking-wide text-[#6e6e73]">
              {{ card.tag }}
            </p>
            <h3 class="mt-2 text-[24px] font-semibold leading-[1.17] tracking-tight">
              {{ card.title }}
            </h3>
            <p v-if="card.subtitle" class="mt-2 text-[17px] leading-[1.35] text-[#6e6e73]">
              {{ card.subtitle }}
            </p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Quick links -->
    <section v-reveal class="sph-container mt-20 md:mt-24">
      <h2 class="text-[24px] font-semibold tracking-tight">
        Quick links
      </h2>
      <ul class="mt-5 flex flex-wrap gap-3" role="list">
        <li v-for="link in quickLinks" :key="link.label">
          <NuxtLink
            v-if="link.to"
            :to="link.to"
            class="inline-flex rounded-full border border-[#86868b] px-4 py-2 text-[14px] transition-colors hover:border-[#1d1d1f] hover:bg-white"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            v-else
            :href="link.href"
            class="inline-flex rounded-full border border-[#86868b] px-4 py-2 text-[14px] transition-colors hover:border-[#1d1d1f] hover:bg-white"
            :target="link.external && link.href !== '#' ? '_blank' : undefined"
            :rel="link.external && link.href !== '#' ? 'noopener noreferrer' : undefined"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StorePage',
})

const { data: storeContent } = await useStoreContent()

const heroHeadline = computed(() => storeContent.value?.heroHeadline ?? 'The best way to buy the products you love.')
const latestHeadline = computed(() => storeContent.value?.latestHeadline ?? 'Take a look at what’s new right now.')
const categories = computed(() => storeContent.value?.categories ?? [])
const latestProducts = computed(() => storeContent.value?.latestProducts ?? [])
const experienceCards = computed(() => storeContent.value?.experienceCards ?? [])
const quickLinks = computed(() => storeContent.value?.quickLinks ?? [])
</script>
