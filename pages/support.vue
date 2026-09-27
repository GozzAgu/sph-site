<template>
  <div class="pb-24">
    <!-- Hero -->
    <section class="sph-container pt-14 text-center md:pt-20">
      <h1 class="sph-headline-xl sph-intro">
        SmartPhoneHub <span class="sph-gradient-text">Support</span>
      </h1>
      <ul class="sph-intro mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-10" style="--intro-step: 1" role="list">
        <li v-for="cat in productCategories" :key="cat.label">
          <NuxtLink :to="cat.to" class="group flex w-20 flex-col items-center">
            <span class="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition-[background-color,color,transform] duration-300 group-hover:scale-110 group-hover:bg-[#0098da]/[0.08] group-hover:text-[#0098da]">
              <SupportProductIcon :name="cat.icon" />
            </span>
            <span class="mt-3 text-[14px] text-[#1d1d1f] group-hover:text-[#0066cc]">{{ cat.label }}</span>
          </NuxtLink>
        </li>
      </ul>

      <form class="sph-intro mx-auto mt-14 max-w-xl" style="--intro-step: 2" role="search" aria-label="Search support" @submit.prevent>
        <label class="flex items-center gap-3 rounded-[12px] border border-[#d2d2d7] bg-white px-4 py-3.5 transition focus-within:border-[#0071e3] focus-within:ring-4 focus-within:ring-[#0071e3]/15">
          <svg class="h-[18px] w-[18px] flex-shrink-0 text-[#6e6e73]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="sr-only">Search support</span>
          <input
            v-model="searchQuery"
            type="search"
            name="q"
            placeholder="Search Support"
            class="min-w-0 flex-1 bg-transparent text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none"
            autocomplete="off"
          >
        </label>
      </form>
    </section>

    <!-- Get in touch -->
    <section class="sph-container mt-24 border-t border-[#d2d2d7] pt-20">
      <h2 v-reveal class="sph-headline-l text-center">
        Get in touch.
      </h2>
      <ul class="mt-14 grid gap-12 md:grid-cols-3 md:gap-8" role="list">
        <li v-for="(ch, i) in contactChannels" :key="ch.title" v-reveal="i" class="text-center">
          <svg class="mx-auto h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" :d="ch.icon" />
          </svg>
          <h3 class="mt-4 text-[21px] font-semibold tracking-tight">
            {{ ch.title }}
          </h3>
          <p class="mx-auto mt-2 max-w-xs text-[17px] leading-[1.47] text-[#6e6e73]">
            {{ ch.description }}
          </p>
          <NuxtLink v-if="ch.to" :to="ch.to" class="sph-link sph-chevron mt-3 inline-block text-[17px]">
            {{ ch.action }}
          </NuxtLink>
          <a v-else :href="ch.href" class="sph-link sph-chevron mt-3 inline-block text-[17px]">
            {{ ch.action }}
          </a>
        </li>
      </ul>
    </section>

    <!-- Quick links + articles -->
    <section class="mt-24 bg-[#f5f5f7] py-20 md:py-24">
      <div class="sph-container grid gap-16 lg:grid-cols-2 lg:gap-12">
        <div v-reveal>
          <h2 class="sph-headline-m">
            Quick links
          </h2>
          <ul class="mt-6 divide-y divide-[#d2d2d7] border-y border-[#d2d2d7]" role="list">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink v-if="link.to" :to="link.to" class="flex items-center justify-between py-4 text-[17px] transition-colors hover:text-[#0066cc]">
                {{ link.label }}
                <span class="text-[#86868b]" aria-hidden="true">›</span>
              </NuxtLink>
              <a v-else :href="link.href" class="flex items-center justify-between py-4 text-[17px] transition-colors hover:text-[#0066cc]">
                {{ link.label }}
                <span class="text-[#86868b]" aria-hidden="true">›</span>
              </a>
            </li>
          </ul>
        </div>
        <div v-reveal="1">
          <h2 class="sph-headline-m">
            Popular topics
          </h2>
          <ul class="mt-6 space-y-4" role="list">
            <li v-for="article in articles" :key="article.title">
              <a :href="article.href" class="sph-card group block p-6">
                <p class="text-[12px] font-semibold uppercase tracking-wide text-[#6e6e73]">
                  {{ article.tag }}
                </p>
                <h3 class="mt-1 text-[19px] font-semibold tracking-tight group-hover:text-[#0066cc]">
                  {{ article.title }}
                </h3>
                <p class="mt-1 text-[14px] leading-[1.43] text-[#6e6e73]">
                  {{ article.excerpt }}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="sph-container mt-24 max-w-[760px]">
      <h2 v-reveal class="sph-headline-l text-center">
        Frequently asked questions.
      </h2>
      <div v-reveal class="mt-12 border-t border-[#d2d2d7]">
        <details
          v-for="faq in faqs"
          :key="faq.q"
          class="support-faq group border-b border-[#d2d2d7]"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold">
            {{ faq.q }}
            <span class="support-faq-icon flex-shrink-0 text-[24px] font-light leading-none text-[#6e6e73] transition-transform duration-300" aria-hidden="true">+</span>
          </summary>
          <p class="pb-6 pr-10 text-[17px] leading-[1.47] text-[#6e6e73]">
            {{ faq.a }}
          </p>
        </details>
      </div>
    </section>

    <!-- Repairs -->
    <section class="sph-container mt-24">
      <div v-reveal class="sph-tile px-6 py-16 text-center md:py-20">
        <p class="sph-eyebrow">
          Repairs & Care
        </p>
        <h2 class="sph-headline-l mx-auto mt-2 max-w-2xl">
          Get your device back to its best.
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-[17px] leading-[1.47] text-[#6e6e73]">
          SmartPhoneHub Care covers repairs for devices bought from us, plus out-of-warranty options with a quote first.
        </p>
        <NuxtLink to="/repairs" class="sph-btn mt-8">
          Learn about repairs
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SupportPage',
})

const searchQuery = ref('')

const productCategories = [
  { label: 'Phones', to: '/store/phones', icon: 'phone' as const },
  { label: 'Laptops', to: '/store/laptops', icon: 'laptop' as const },
  { label: 'Tablets', to: '/store', icon: 'tablet' as const },
  { label: 'Watches', to: '/store', icon: 'watch' as const },
  { label: 'Audio', to: '/store/audio', icon: 'earbuds' as const },
  { label: 'Accessories', to: '/store/accessories', icon: 'accessories' as const },
]

const contactChannels: { title: string; description: string; action: string; icon: string; to?: string; href?: string }[] = [
  {
    title: 'Chat',
    description: 'Quick answers from our team during store hours.',
    action: 'Start a chat',
    href: '#',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Email',
    description: 'Send your order number and photos. We reply within one business day.',
    action: 'Email us',
    href: 'mailto:support@example.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Visit',
    description: '118 Aba Road, Garrison, Port Harcourt. Mon-Sat, 10:00-18:00.',
    action: 'Find the store',
    to: '/#find-us',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
]

const quickLinks: { label: string; href?: string; to?: string }[] = [
  { label: 'Order status', href: '#' },
  { label: 'Returns and refunds', href: '#' },
  { label: 'Check your warranty', href: '#' },
  { label: 'Book a repair', to: '/repairs' },
  { label: 'Trade In', to: '/store' },
]

const articles = [
  {
    tag: 'Orders',
    title: 'Track or change your delivery',
    excerpt: 'What to expect after checkout and how to update your details.',
    href: '#',
  },
  {
    tag: 'Devices',
    title: 'Get the most from your battery',
    excerpt: 'Simple habits that extend battery life between charges.',
    href: '#',
  },
  {
    tag: 'Care',
    title: 'Repair or check-up?',
    excerpt: 'How we assess devices and what happens in store.',
    href: '#',
  },
]

const faqs = [
  {
    q: 'How do I return something I bought online?',
    a: 'Bring your item and proof of purchase to the store, or start a return from your order email. Eligibility depends on the product and timing.',
  },
  {
    q: 'Is my device still under warranty?',
    a: 'Warranty varies by manufacturer and purchase date. Bring your device in or email us your serial number and we’ll confirm.',
  },
  {
    q: 'Can you transfer data to my new phone?',
    a: 'Yes. Visit the store and we can help move contacts, photos and apps where supported.',
  },
  {
    q: 'Do you offer trade-in?',
    a: 'Yes. Trade-in value depends on your device’s condition. Ask in store for current offers and how they apply to your next purchase.',
  },
]
</script>

<style scoped>
.support-faq summary::-webkit-details-marker {
  display: none;
}

.support-faq[open] .support-faq-icon {
  transform: rotate(45deg);
}

.support-faq summary:focus-visible {
  outline: 2px solid #0071e3;
  outline-offset: 4px;
  border-radius: 4px;
}
</style>
