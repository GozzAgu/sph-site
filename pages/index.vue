<template>
  <div>
    <!-- Hero -->
    <section class="pt-14 text-center md:pt-20">
      <div class="sph-container">
        <p class="sph-eyebrow sph-intro">
          SmartPhoneHub
        </p>
        <h1 class="sph-headline-xl sph-intro mt-2 md:text-[64px]" style="--intro-step: 1">
          Shop smart.<br>
          <span class="sph-gradient-text">Everything in one hub.</span>
        </h1>
        <p class="sph-lead sph-intro mx-auto mt-4 max-w-xl text-[#6e6e73]" style="--intro-step: 2">
          Phones, laptops, gaming and more, with expert help right here in Port Harcourt.
        </p>
        <div class="sph-intro mt-8 flex items-center justify-center gap-4" style="--intro-step: 3">
          <NuxtLink to="/store" class="sph-btn">
            Shop now
          </NuxtLink>
          <NuxtLink to="/#find-us" class="sph-btn-outline">
            Visit us
          </NuxtLink>
        </div>
      </div>
      <div class="mx-auto mt-10 grid max-w-[1280px] grid-cols-2 gap-3 px-3 md:mt-14 md:px-6">
        <div class="overflow-hidden rounded-[28px]">
          <NuxtImg
            src="/images/hero-18pro.jpg"
            alt="Silver iPhone Pro held in golden evening light"
            class="sph-intro-image aspect-[2/3] w-full object-cover md:aspect-[4/5]"
            format="webp"
            loading="eager"
          />
        </div>
        <div class="overflow-hidden rounded-[28px]">
          <NuxtImg
            src="/images/hero-trio-pro.jpg"
            alt="Black iPhone Pro resting on an iPad Pro"
            class="sph-intro-image aspect-[2/3] w-full object-cover md:aspect-[4/5]"
            style="animation-delay: 0.5s"
            format="webp"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <!-- Promo tiles -->
    <section class="mx-auto mt-3 grid max-w-[1280px] gap-3 px-3 md:grid-cols-2 md:px-6">
      <article
        v-for="(tile, i) in promoTiles"
        :key="tile.title"
        v-reveal="i % 2"
        class="group flex flex-col items-center overflow-hidden rounded-[28px] pt-12 text-center md:pt-14"
        :class="tile.dark ? 'bg-black text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'"
      >
        <p class="sph-eyebrow" :class="tile.dark ? 'text-white/60' : ''">
          {{ tile.eyebrow }}
        </p>
        <h2 class="sph-headline-m mt-1">
          {{ tile.title }}
        </h2>
        <p class="mt-2 px-6 text-[17px] md:text-[19px]" :class="tile.dark ? 'text-white/80' : ''">
          {{ tile.tagline }}
        </p>
        <NuxtLink :to="tile.to" class="sph-btn mt-5">
          Shop
        </NuxtLink>
        <div class="mt-10 w-full overflow-hidden">
          <NuxtImg
            :src="tile.image"
            :alt="tile.title"
            class="sph-zoom aspect-[16/11] w-full object-cover"
            format="webp"
          />
        </div>
      </article>
    </section>

    <!-- Shop by category -->
    <section class="mt-3 bg-[#f5f5f7] py-20 md:py-28">
      <div class="sph-container">
        <div v-reveal class="text-center">
          <h2 class="sph-headline-l">
            Shop by category.
          </h2>
          <p class="sph-lead mx-auto mt-3 max-w-xl text-[#6e6e73]">
            {{ shopCategoryBlurb }}
          </p>
        </div>
        <ul class="mt-12 flex flex-wrap justify-center gap-5" role="list">
          <li
            v-for="(card, i) in indexCategoryCards"
            :key="card.slug"
            v-reveal="i % 3"
            class="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
          >
            <NuxtLink :to="card.to" class="sph-card group flex h-full flex-col">
              <div class="aspect-[4/3] overflow-hidden bg-[#f5f5f7]">
                <NuxtImg
                  :src="card.image"
                  :alt="card.title"
                  class="sph-zoom h-full w-full object-cover"
                  format="webp"
                />
              </div>
              <div class="flex flex-1 flex-col p-6">
                <h3 class="text-[21px] font-semibold tracking-tight">
                  {{ card.title }}
                </h3>
                <p class="mt-1 flex-1 text-[14px] leading-[1.43] text-[#6e6e73]">
                  {{ card.tagline }}
                </p>
                <span class="sph-chevron mt-4 text-[14px] text-[#0066cc] group-hover:underline">Shop</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Why buy from us -->
    <section class="py-20 md:py-28">
      <div class="sph-container">
        <h2 v-reveal class="sph-headline-l text-center">
          Why buy from us.
        </h2>
        <ul class="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" role="list">
          <li v-for="(item, i) in trustItems" :key="item.title" v-reveal="i" class="text-center">
            <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0098da]/[0.08] text-[#0098da] transition-transform duration-300 hover:scale-110">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  v-for="d in item.icon"
                  :key="d"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  :d="d"
                />
              </svg>
            </span>
            <h3 class="mt-5 text-[17px] font-semibold">
              {{ item.title }}
            </h3>
            <p class="mt-1 text-[14px] leading-[1.43] text-[#6e6e73]">
              {{ item.text }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Trade In -->
    <section class="pb-20 md:pb-28">
      <div class="sph-container">
        <div v-reveal class="sph-tile group pt-16 text-center md:pt-24">
          <p class="sph-eyebrow">
            SmartPhoneHub Trade In
          </p>
          <h2 class="sph-headline-l mx-auto mt-2 max-w-2xl px-6">
            Trade in. <span class="sph-gradient-text">Upgrade smart.</span>
          </h2>
          <p class="mx-auto mt-4 max-w-xl px-6 text-[17px] leading-[1.47] text-[#6e6e73]">
            Get credit toward your next device. Get an instant estimate in store and we’ll help you wipe your data safely.
          </p>
          <NuxtLink to="/store" class="sph-btn mt-8">
            Get your estimate
          </NuxtLink>
          <div class="mt-12 overflow-hidden md:mt-16">
            <NuxtImg
              src="/images/gadgets2-sph.jpg"
              alt="Apple Watch box beside a MacBook Pro and iPhone"
              class="sph-zoom aspect-[16/9] w-full object-cover md:aspect-[21/9]"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Help -->
    <section class="border-t border-[#d2d2d7] py-20 md:py-28">
      <div class="sph-container">
        <h2 v-reveal class="sph-headline-l text-center">
          Help is here.
        </h2>
        <ul class="mt-14 grid gap-12 md:grid-cols-3 md:gap-8" role="list">
          <li v-for="(item, i) in helpItems" :key="item.title" v-reveal="i" class="text-center">
            <h3 class="text-[21px] font-semibold tracking-tight">
              {{ item.title }}
            </h3>
            <p class="mx-auto mt-2 max-w-xs text-[17px] leading-[1.47] text-[#6e6e73]">
              {{ item.text }}
            </p>
            <NuxtLink v-if="item.to" :to="item.to" class="sph-link sph-chevron mt-3 inline-block text-[17px]">
              {{ item.cta }}
            </NuxtLink>
            <a v-else :href="item.href" class="sph-link sph-chevron mt-3 inline-block text-[17px]">
              {{ item.cta }}
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Find us -->
    <section id="find-us" class="scroll-mt-16 bg-[#f5f5f7] py-20 md:py-28">
      <div class="sph-container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div v-reveal>
          <h2 class="sph-headline-l">
            Visit us.
          </h2>
          <p class="sph-lead mt-4">
            118 Aba Road, Garrison, Port Harcourt
          </p>
          <dl class="mt-8 divide-y divide-[#d2d2d7] border-y border-[#d2d2d7] text-[17px]">
            <div class="flex justify-between gap-4 py-3">
              <dt class="text-[#6e6e73]">
                Mon-Sat
              </dt>
              <dd>10:00-18:00</dd>
            </div>
            <div class="flex justify-between gap-4 py-3">
              <dt class="text-[#6e6e73]">
                Sunday and holidays
              </dt>
              <dd>Call ahead</dd>
            </div>
          </dl>
          <div class="mt-8 flex flex-wrap items-center gap-6">
            <a :href="mapsDirectionsUrl" target="_blank" rel="noopener noreferrer" class="sph-btn">
              Get directions
            </a>
            <NuxtLink to="/support" class="sph-link sph-chevron text-[17px]">
              Contact support
            </NuxtLink>
          </div>
        </div>
        <div v-reveal="1" class="overflow-hidden rounded-[28px] bg-white">
          <iframe
            src="https://www.google.com/maps?q=118+aba+road+garrison+portharcourt&output=embed"
            title="SmartPhoneHub store location: 118 Aba Road, Garrison, Port Harcourt"
            class="block h-[320px] w-full border-0 md:h-[440px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const mapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=118+Aba+Road+Garrison+Port+Harcourt'

const { data: storeContent } = await useStoreContent()

const promoTiles = [
  {
    eyebrow: 'Devices',
    title: 'Laptop',
    tagline: 'Light. Powerful. Built to go anywhere.',
    image: '/images/laptops-sph.jpg',
    to: '/store/laptops',
    dark: false,
  },
  {
    eyebrow: 'Wearables',
    title: 'Watch',
    tagline: 'The ultimate way to watch your health.',
    image: '/images/applewatch-sph.jpg',
    to: '/store',
    dark: true,
  },
  {
    eyebrow: 'Phones',
    title: 'The latest lineup',
    tagline: 'Worth upgrading for, with great trade-in value.',
    image: '/images/iphone16-sph2.jpg',
    to: '/store/phones',
    dark: true,
  },
  {
    eyebrow: 'Gaming',
    title: 'Ready to play',
    tagline: 'Consoles, controllers and everything in between.',
    image: '/images/ps5.jpg',
    to: '/store/gaming',
    dark: false,
  },
]

const trustItems = [
  {
    title: 'Free delivery',
    text: 'On qualifying orders.',
    icon: ['M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'],
  },
  {
    title: 'Warranty',
    text: 'Coverage on every purchase.',
    icon: ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'],
  },
  {
    title: 'Expert support',
    text: 'Real people, in store and online.',
    icon: ['M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'],
  },
  {
    title: 'Secure payment',
    text: 'Safe checkout every time.',
    icon: ['M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'],
  },
]

const helpItems: { title: string; text: string; cta: string; to?: string; href?: string }[] = [
  { title: 'Support', text: 'Answers on orders, warranty and your devices.', cta: 'Get support', to: '/support' },
  { title: 'Repairs', text: 'Screens, batteries and more, fixed properly.', cta: 'Book a repair', to: '/repairs' },
  { title: 'Contact', text: 'Chat or email with our team.', cta: 'Contact us', href: '#' },
]

const indexCategoryBlurbFallback = 'Phones, audio, gaming, laptops and accessories.'

function formatCategoryNameList(names: string[]) {
  const parts = names.map(n => n.trim()).filter(Boolean)
  if (parts.length === 0)
    return ''
  const cased = parts.map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
  if (cased.length === 1)
    return `${cased[0]}.`
  if (cased.length === 2)
    return `${cased[0]} and ${cased[1]}.`
  return `${cased.slice(0, -1).join(', ')} and ${cased[cased.length - 1]}.`
}

const shopCategoryBlurb = computed(() => {
  const cats = storeContent.value?.categories ?? []
  return formatCategoryNameList(cats.map(c => c.name)) || indexCategoryBlurbFallback
})

const indexCategoryCards = computed(() => {
  const cats = storeContent.value?.categories ?? []
  return cats.map(cat => ({
    slug: cat.slug,
    title: cat.name,
    tagline: cat.description?.trim() || `Shop ${cat.name}.`,
    to: `/store/${cat.slug}`,
    image: cat.image,
  }))
})
</script>
