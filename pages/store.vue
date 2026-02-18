<template>
  <div class="min-h-screen bg-white">
    <!-- Hero: Store title left, CTAs right (Apple layout) -->
    <section class="border-b border-neutral-200 bg-white py-10 md:py-14">
      <div class="mx-auto flex max-w-[980px] flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 class="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Store
          </h1>
          <p class="mt-2 text-xl text-neutral-600">
            The best way to buy the products you love.
          </p>
        </div>
        <div class="flex flex-col items-start gap-3 md:items-end">
          <a href="#" class="inline-flex items-center gap-1.5 text-blue-600 hover:underline">
            Connect with a Specialist
            <svg class="h-4 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#" class="inline-flex items-center gap-1.5 text-blue-600 hover:underline">
            Find a store
            <svg class="h-4 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Category strip: horizontal scroll -->
    <section class="border-b border-neutral-200 bg-white py-6">
      <div class="relative mx-auto max-w-[980px] px-6">
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
            aria-label="Scroll left"
            @click="scrollCategoryStrip(-1)"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref="categoryStripRef"
            class="scrollbar-hide flex gap-8 overflow-x-auto scroll-smooth py-2 md:gap-12"
          >
            <div class="flex flex-shrink-0 flex-col items-center gap-2">
              <div class="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 md:h-16 md:w-16">
                <NuxtImg src="/images/iphone16-sph2.jpg" alt="" class="h-full w-full object-cover" format="webp" />
              </div>
              <span class="text-sm font-medium text-neutral-900">Phones</span>
            </div>
            <div class="flex flex-shrink-0 flex-col items-center gap-2">
              <div class="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 md:h-16 md:w-16">
                <NuxtImg src="/images/beatsheadphone.jpg" alt="" class="h-full w-full object-cover" format="webp" />
              </div>
              <span class="text-sm font-medium text-neutral-900">Audio</span>
            </div>
            <div class="flex flex-shrink-0 flex-col items-center gap-2">
              <div class="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 md:h-16 md:w-16">
                <NuxtImg src="/images/ps5.jpg" alt="" class="h-full w-full object-cover" format="webp" />
              </div>
              <span class="text-sm font-medium text-neutral-900">Gaming</span>
            </div>
            <div class="flex flex-shrink-0 flex-col items-center gap-2">
              <div class="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 md:h-16 md:w-16">
                <NuxtImg src="/images/laptops-sph.jpg" alt="" class="h-full w-full object-cover" format="webp" />
              </div>
              <span class="text-sm font-medium text-neutral-900">Laptops</span>
            </div>
            <div class="flex flex-shrink-0 flex-col items-center gap-2">
              <div class="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 md:h-16 md:w-16">
                <NuxtImg src="/images/metaglass.jpg" alt="" class="h-full w-full object-cover" format="webp" />
              </div>
              <span class="text-sm font-medium text-neutral-900">Accessories</span>
            </div>
          </div>
          <button
            type="button"
            class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
            aria-label="Scroll right"
            @click="scrollCategoryStrip(1)"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- The latest: 3 product cards -->
    <section class="border-b border-neutral-200 bg-white py-12 md:py-16">
      <div class="mx-auto max-w-[980px] px-6">
        <h2 class="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          The latest. Take a look at what's new right now.
        </h2>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <NuxtLink
            v-for="item in latestProducts"
            :key="item.title"
            :to="item.link"
            class="group overflow-hidden rounded-2xl bg-neutral-900"
          >
            <div class="p-6 text-white md:p-8">
              <h3 class="text-xl font-semibold md:text-2xl">{{ item.title }}</h3>
              <p class="mt-1 text-white/80">{{ item.tagline }}</p>
              <p class="mt-2 text-sm text-white/70">{{ item.price }}</p>
            </div>
            <div class="aspect-[4/3] overflow-hidden bg-neutral-800">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                format="webp"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- The SmartPhoneHub experience: 3 feature cards -->
    <section class="border-b border-neutral-200 bg-white py-12 md:py-16">
      <div class="mx-auto max-w-[980px] px-6">
        <h2 class="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          The SmartPhoneHub experience. Do even more with our products and services.
        </h2>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <article
            v-for="card in experienceCards"
            :key="card.tag"
            class="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
          >
            <span class="text-xs font-medium uppercase tracking-wider text-neutral-500">{{ card.tag }}</span>
            <h3 class="mt-2 text-xl font-semibold text-neutral-900 md:text-2xl">
              {{ card.title }}
            </h3>
            <p v-if="card.subtitle" class="mt-2 text-neutral-600">{{ card.subtitle }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="border-b border-neutral-200 py-12 md:py-14">
      <div class="mx-auto max-w-[980px] px-6">
        <h2 class="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Quick Links
        </h2>
        <ul class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Find a Store</a>
            <span class="ml-1.5 text-sm text-neutral-400">(opens in new window)</span>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Order Status</a>
            <span class="ml-1.5 text-sm text-neutral-400">(opens in new window)</span>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Shopping Help</a>
            <span class="ml-1.5 text-sm text-neutral-400">(opens in new window)</span>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Returns</a>
            <span class="ml-1.5 text-sm text-neutral-400">(opens in new window)</span>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Your Saves</a>
            <span class="ml-1.5 text-sm text-neutral-400">(opens in new window)</span>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StorePage',
})

const categoryStripRef = ref<HTMLElement | null>(null)

function scrollCategoryStrip(direction: number) {
  const el = categoryStripRef.value
  if (!el) return
  el.scrollBy({ left: direction * 200, behavior: 'smooth' })
}

const latestProducts = [
  { title: 'Pro 17', tagline: 'All out Pro.', price: 'From £1,099 or £36.63/mo. for 30 mo. at 0% interest*', image: '/images/17pro.jpg', link: '#' },
  { title: 'Laptop', tagline: 'Speed of lightness.', price: 'From £999 or £29.84/mo. for 36 mo. at 4.9% interest', image: '/images/laptops-sph.jpg', link: '#' },
  { title: 'Watch', tagline: 'Inspired by the power of connection.', price: 'From £99', image: '/images/applewatch-sph.jpg', link: '#' },
]

const experienceCards = [
  { tag: 'SMARTPHONEHUB', title: 'SmartPhoneHub experience.', subtitle: 'Get things done effortlessly across your devices.', dark: false },
  { tag: 'CONTINUITY', title: 'Powerful alone. Superpowered together.', subtitle: null, dark: false },
  { tag: 'STORE APP', title: 'Put your bow on it.', subtitle: 'Make the gift unmistakably theirs with a personalised message.', dark: false },
]

</script>
