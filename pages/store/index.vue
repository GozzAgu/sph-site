<template>
  <div class="min-h-screen bg-neutral-950">
    <!-- Hero: dark, futuristic -->
    <section class="relative flex min-h-[70vh] flex-col justify-center overflow-hidden px-6 py-24 md:py-32">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.12),transparent_50%)]" />
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.04]"
        style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 64px 64px"
      />
      <div class="relative z-10 mx-auto w-full max-w-4xl">
        <span class="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Store</span>
        <h1 class="mt-4 text-4xl font-light tracking-tight text-white md:text-6xl">
          The best way to buy the products you love.
        </h1>
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            class="store-cta inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Connect with a Specialist
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <NuxtLink
            to="/"
            class="store-cta inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Find a store
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Categories: horizontal strip, glass cards -->
    <section class="border-t border-white/5 py-12 md:py-16">
      <div class="relative mx-auto max-w-6xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Shop by category</p>
        <div class="mt-6 flex items-center gap-3">
          <button
            type="button"
            class="store-nav-btn flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Scroll left"
            @click="scrollCategoryStrip(-1)"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref="categoryStripRef"
            class="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth py-2 md:gap-8"
          >
            <NuxtLink
              v-for="cat in categories"
              :key="cat.slug"
              :to="`/store/${cat.slug}`"
              class="store-category group flex flex-shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 md:p-6"
            >
              <div class="relative h-16 w-16 overflow-hidden rounded-xl bg-neutral-800/80 md:h-20 md:w-20">
                <NuxtImg
                  :src="cat.image"
                  :alt="cat.name"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  format="webp"
                />
              </div>
              <span class="text-sm font-medium text-white/90 group-hover:text-white">{{ cat.name }}</span>
            </NuxtLink>
          </div>
          <button
            type="button"
            class="store-nav-btn flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10 hover:text-white md:hidden"
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

    <!-- The latest: product cards, scroll-reveal -->
    <section ref="latestRef" class="scroll-reveal border-t border-white/5 py-20 md:py-28">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(120,119,198,0.06),transparent)]" />
      <div class="relative mx-auto max-w-6xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">The latest</p>
        <h2 class="mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">
          Take a look at what's new right now.
        </h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <NuxtLink
            v-for="item in latestProducts"
            :key="item.title"
            :to="item.link"
            class="store-product group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm transition hover:border-white/20"
          >
            <div class="relative aspect-[4/3] overflow-hidden bg-neutral-800">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                format="webp"
              />
              <div class="store-product-shine" />
            </div>
            <div class="border-t border-white/5 p-6 md:p-8">
              <h3 class="text-xl font-medium text-white md:text-2xl">{{ item.title }}</h3>
              <p class="mt-1 text-white/70">{{ item.tagline }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Experience: 3 cards, light contrast -->
    <section ref="experienceRef" class="scroll-reveal border-t border-white/5 py-20 md:py-28">
      <div class="relative mx-auto max-w-6xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">The SmartPhoneHub experience</p>
        <h2 class="mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">
          Do even more with our products and services.
        </h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="card in experienceCards"
            :key="card.tag"
            class="store-experience overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/15 hover:bg-white/[0.07] md:p-8"
          >
            <span class="text-xs font-medium uppercase tracking-wider text-neutral-500">{{ card.tag }}</span>
            <h3 class="mt-3 text-xl font-medium text-white md:text-2xl">
              {{ card.title }}
            </h3>
            <p v-if="card.subtitle" class="mt-2 text-sm text-white/60">{{ card.subtitle }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Quick links: minimal strip -->
    <section ref="quickLinksRef" class="scroll-reveal border-t border-white/5 py-16 md:py-20">
      <div class="mx-auto max-w-4xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Quick links</p>
        <ul class="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          <li v-for="link in quickLinks" :key="link.label">
            <NuxtLink
              v-if="link.to"
              :to="link.to"
              class="text-white/80 transition hover:text-white"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              v-else
              :href="link.href"
              class="text-white/80 transition hover:text-white"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              {{ link.label }}
            </a>
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
  el.scrollBy({ left: direction * 240, behavior: 'smooth' })
}

const categories = [
  { name: 'Phones', slug: 'phones', image: '/images/iphone16-sph2.jpg' },
  { name: 'Audio', slug: 'audio', image: '/images/beatsheadphone.jpg' },
  { name: 'Gaming', slug: 'gaming', image: '/images/ps5.jpg' },
  { name: 'Laptops', slug: 'laptops', image: '/images/laptops-sph.jpg' },
  { name: 'Accessories', slug: 'accessories', image: '/images/metaglass.jpg' },
]

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

const quickLinks = [
  { label: 'Find a Store', to: '/', external: false },
  { label: 'Order Status', href: '#', external: true },
  { label: 'Shopping Help', href: '#', external: true },
  { label: 'Returns', href: '#', external: true },
  { label: 'Your Saves', href: '#', external: true },
]

const latestRef = ref<HTMLElement | null>(null)
const experienceRef = ref<HTMLElement | null>(null)
const quickLinksRef = ref<HTMLElement | null>(null)

const { observe } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

onMounted(() => {
  if (import.meta.client) {
    ;[latestRef, experienceRef, quickLinksRef].forEach((r) => observe(r.value))
  }
})
</script>

<style scoped>
.store-product-shine {
  position: absolute;
  inset: -40%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 45%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.06) 55%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.store-product:hover .store-product-shine {
  opacity: 1;
  animation: store-shine 2.5s ease-in-out;
}
@keyframes store-shine {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(100%) skewX(-12deg); }
}
</style>
