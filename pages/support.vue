<template>
  <div class="min-h-screen bg-neutral-950">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-white/5 pb-16 pt-14 md:pb-24 md:pt-20">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgba(120,119,198,0.18),transparent_55%)]"
        aria-hidden="true"
      />
      <div class="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-lg bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div class="relative mx-auto max-w-3xl px-6 text-center">
        <p class="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
          Help Center
        </p>
        <h1 class="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
          Support
        </h1>
        <p class="mt-4 text-lg text-white/55 md:text-xl">
          We’re here to help with your order, warranty, and devices.
        </p>

        <!-- Search -->
        <form
          class="support-search mx-auto mt-10 max-w-xl"
          role="search"
          aria-label="Search help articles"
          @submit.prevent="onSearchSubmit"
        >
          <div
            class="flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl transition focus-within:border-[rgba(120,119,198,0.35)] focus-within:ring-2 focus-within:ring-[rgba(120,119,198,0.2)]"
          >
            <svg class="h-5 w-5 flex-shrink-0 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="search"
              name="q"
              placeholder="Search help articles, orders, and topics…"
              class="support-search-input min-w-0 flex-1 bg-transparent text-[15px] text-white placeholder:text-white/35 focus:outline-none"
              autocomplete="off"
            >
          </div>
          <p class="mt-3 text-xs text-white/35">
            Try “return”, “battery”, or “trade in”.
          </p>
        </form>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <NuxtLink
            to="/repairs"
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Repairs
            <svg class="h-4 w-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/#find-us"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            Find a store
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Product help -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Product help
            </h2>
            <p class="mt-2 max-w-xl text-sm text-white/45">
              Browse guides and tips by device type.
            </p>
          </div>
        </div>
        <nav
          class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Product categories"
        >
          <NuxtLink
            v-for="cat in productCategories"
            :key="cat.label"
            :to="cat.to"
            class="support-cat-card group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 transition duration-300 hover:border-white/15 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.65)]"
          >
            <span
              class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(120,119,198,0.12)] text-[rgba(200,198,255,0.95)] ring-1 ring-white/10 transition duration-300 group-hover:bg-[rgba(120,119,198,0.2)]"
              aria-hidden="true"
            >
              <SupportProductIcon :name="cat.icon" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block text-base font-medium text-white">{{ cat.label }}</span>
              <span class="mt-1 block text-sm text-white/45">{{ cat.blurb }}</span>
              <span class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white/70 transition group-hover:text-white">
                View topics
                <svg class="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </NuxtLink>
        </nav>
      </div>
    </section>

    <!-- Contact -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Get in touch
        </h2>
        <p class="mt-2 max-w-xl text-sm text-white/45">
          Choose the option that works best for you.
        </p>
        <ul class="mt-10 grid gap-4 md:grid-cols-3" role="list">
          <li class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/12">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white/90 ring-1 ring-white/10" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
            <h3 class="mt-4 text-base font-medium text-white">
              Chat with us
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-white/50">
              Fast answers during store hours. Average reply under a few minutes.
            </p>
            <a href="#" class="support-inline-link mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-300/95 hover:text-sky-200">
              Start chat
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
          <li class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/12">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white/90 ring-1 ring-white/10" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <h3 class="mt-4 text-base font-medium text-white">
              Email
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-white/50">
              Send order numbers and photos. We reply within one business day.
            </p>
            <a href="mailto:support@example.com" class="support-inline-link mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-300/95 hover:text-sky-200">
              Email support
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
          <li class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/12">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white/90 ring-1 ring-white/10" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <h3 class="mt-4 text-base font-medium text-white">
              Call a store
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-white/50">
              Speak with the team at your nearest SmartPhoneHub location.
            </p>
            <NuxtLink to="/#find-us" class="support-inline-link mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-300/95 hover:text-sky-200">
              Find a store
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Quick links -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Quick links
        </h2>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="link in quickLinks" :key="link.label">
            <NuxtLink
              v-if="link.to"
              :to="link.to"
              class="support-quick-tile flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-[15px] font-medium text-white/90 transition hover:border-white/12 hover:bg-white/[0.06]"
            >
              {{ link.label }}
              <svg class="h-5 w-5 flex-shrink-0 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <a
              v-else
              :href="link.href"
              class="support-quick-tile flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-[15px] font-medium text-white/90 transition hover:border-white/12 hover:bg-white/[0.06]"
            >
              {{ link.label }}
              <svg class="h-5 w-5 flex-shrink-0 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Popular articles -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Popular articles
        </h2>
        <p class="mt-2 max-w-xl text-sm text-white/45">
          Short reads from our team.
        </p>
        <ul class="mt-10 grid gap-5 md:grid-cols-3" role="list">
          <li v-for="article in articles" :key="article.title">
            <a
              :href="article.href"
              class="support-article group block overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition hover:border-white/15"
            >
              <div class="relative aspect-[16/10] overflow-hidden bg-neutral-900/80">
                <NuxtImg
                  :src="article.image"
                  alt=""
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  format="webp"
                />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" aria-hidden="true" />
                <span class="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                  {{ article.tag }}
                </span>
              </div>
              <div class="p-4 md:p-5">
                <h3 class="text-[15px] font-medium leading-snug text-white">
                  {{ article.title }}
                </h3>
                <p class="mt-2 text-sm text-white/45">
                  {{ article.excerpt }}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- FAQ -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          FAQ
        </h2>
        <div class="mt-8 space-y-3">
          <details
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="support-faq group rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-1 open:border-white/12 open:bg-white/[0.05]"
            :open="i === 0"
          >
            <summary
              class="support-faq-summary cursor-pointer list-none py-4 pr-2 text-[15px] font-medium text-white/95 marker:content-none [&::-webkit-details-marker]:hidden"
            >
              <span class="flex items-center justify-between gap-3">
                {{ faq.q }}
                <svg class="support-faq-chevron h-5 w-5 flex-shrink-0 text-white/35 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p class="pb-4 text-sm leading-relaxed text-white/50">
              {{ faq.a }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- Repairs & Care -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[rgba(120,119,198,0.12)] via-white/[0.04] to-transparent p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10"
        >
          <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[rgba(120,119,198,0.15)] blur-3xl" aria-hidden="true" />
          <div class="relative max-w-xl">
            <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Repairs & Care
            </h2>
            <p class="mt-4 text-xl font-light text-white md:text-2xl">
              SmartPhoneHub Care covers repairs for devices bought from us, plus out-of-warranty options with a quote first.
            </p>
            <NuxtLink
              to="/repairs"
              class="support-inline-link mt-6 inline-flex items-center gap-2 text-base font-medium text-white"
            >
              Learn more
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="relative mt-8 flex-shrink-0 md:mt-0">
            <div class="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-black/30 text-white/90 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md md:h-32 md:w-32">
              <svg class="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SupportPage',
})

const searchQuery = ref('')

function onSearchSubmit() {
  if (import.meta.client && searchQuery.value.trim())
    console.info('[support search]', searchQuery.value.trim())
}

const productCategories = [
  { label: 'Phones', blurb: 'Setup, iCloud, and performance.', to: '/store/phones', icon: 'phone' as const },
  { label: 'Laptops', blurb: 'Battery, storage, and macOS tips.', to: '/store/laptops', icon: 'laptop' as const },
  { label: 'Tablets', blurb: 'Displays, accessories, and apps.', to: '/store', icon: 'tablet' as const },
  { label: 'Watches', blurb: 'Pairing, fitness, and updates.', to: '/store', icon: 'watch' as const },
  { label: 'Earbuds', blurb: 'Audio, fit, and charging cases.', to: '/store/audio', icon: 'earbuds' as const },
  { label: 'Accessories', blurb: 'Cases, chargers, and more.', to: '/store/accessories', icon: 'accessories' as const },
]

const quickLinks: { label: string; href?: string; to?: string }[] = [
  { label: 'Order status', href: '#' },
  { label: 'Returns & refunds', href: '#' },
  { label: 'Check warranty', href: '#' },
  { label: 'Contact us', href: '#' },
  { label: 'Find a store', to: '/#find-us' },
  { label: 'Trade-in questions', href: '#' },
]

const articles = [
  {
    tag: 'Orders',
    title: 'Track or change your delivery',
    excerpt: 'What to expect after checkout and how to update details.',
    image: '/images/iphone16-sph2.jpg',
    href: '#',
  },
  {
    tag: 'Devices',
    title: 'Get the most from your battery',
    excerpt: 'Simple habits to extend daily life between charges.',
    image: '/images/laptops-sph.jpg',
    href: '#',
  },
  {
    tag: 'Care',
    title: 'When to book a repair vs. a check-up',
    excerpt: 'How we assess devices and what happens in store.',
    image: '/images/beatsheadphone.jpg',
    href: '#',
  },
]

const faqs = [
  {
    q: 'How do I return something I bought online?',
    a: 'Bring your item and proof of purchase to any SmartPhoneHub store, or start a return from your order email. Eligibility depends on the product and timing.',
  },
  {
    q: 'Is my device still under warranty?',
    a: 'Warranty varies by manufacturer and purchase date. Bring your device in or email us with your serial number and we’ll confirm.',
  },
  {
    q: 'Can you transfer data to a new phone?',
    a: 'Yes. Book a slot at your local store and we can help move contacts, photos, and apps where supported.',
  },
  {
    q: 'Do you price-match or offer trade-in?',
    a: 'Trade-in values depend on device condition. Ask in store for current offers and how they apply to your next purchase.',
  },
]
</script>

<style scoped>
.support-search-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.support-quick-tile:focus-visible,
.support-article:focus-visible,
.support-faq summary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
}

.support-faq summary::-webkit-details-marker {
  display: none;
}

.support-faq[open] .support-faq-chevron {
  transform: rotate(180deg);
}

.support-inline-link:focus-visible {
  outline: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 2px rgba(125, 211, 252, 0.35);
}
</style>
