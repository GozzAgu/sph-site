<template>
  <div class="min-h-screen bg-white">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[rgba(250,250,252,0.8)] backdrop-blur-xl backdrop-saturate-150">
      <nav class="mx-auto flex h-11 max-w-[1024px] items-center justify-between px-6 text-[12px] text-[#1d1d1f]/80">
        <NuxtLink to="/" class="flex items-center transition-opacity hover:opacity-70" aria-label="SmartPhoneHub home">
          <img src="/sphLogo.png" alt="SmartPhoneHub" class="h-6 w-auto">
        </NuxtLink>
        <div class="hidden items-center gap-10 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="transition-colors hover:text-[#1d1d1f]"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <div class="flex items-center gap-6">
          <button type="button" class="transition-colors hover:text-[#1d1d1f]" aria-label="Search">
            <svg class="h-[15px] w-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button type="button" class="transition-colors hover:text-[#1d1d1f]" aria-label="Bag">
            <svg class="h-[15px] w-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button
            type="button"
            class="transition-colors hover:text-[#1d1d1f] md:hidden"
            aria-label="Open menu"
            :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = true"
          >
            <svg class="h-[17px] w-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-show="mobileMenuOpen"
        class="fixed inset-0 z-[100] bg-white md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div class="flex h-11 items-center justify-end px-6">
          <button
            type="button"
            class="text-[#1d1d1f]/80 transition-colors hover:text-[#1d1d1f]"
            aria-label="Close menu"
            @click="mobileMenuOpen = false"
          >
            <svg class="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav class="px-12 pt-6">
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="block text-[28px] font-semibold tracking-tight text-[#1d1d1f] transition-opacity hover:opacity-60"
                @click="mobileMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>

    <main class="pt-11">
      <slot />
    </main>

    <footer class="bg-[#f5f5f7] text-[12px] leading-[1.33] text-[#6e6e73]">
      <div class="mx-auto max-w-[1024px] px-6 pb-8 pt-4">
        <p class="border-b border-[#d2d2d7] py-4">
          * Consumer finance is subject to eligibility and approval. Terms apply.
        </p>
        <nav class="grid gap-8 py-8 sm:grid-cols-2 md:grid-cols-4" aria-label="Footer">
          <div v-for="column in footerColumns" :key="column.title">
            <h3 class="font-semibold text-[#1d1d1f]">
              {{ column.title }}
            </h3>
            <ul class="mt-3 space-y-2.5">
              <li v-for="link in column.links" :key="link.label">
                <NuxtLink v-if="link.to" :to="link.to" class="transition-colors hover:text-[#1d1d1f] hover:underline">
                  {{ link.label }}
                </NuxtLink>
                <a v-else :href="link.href" class="transition-colors hover:text-[#1d1d1f] hover:underline">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="flex flex-col gap-2 border-t border-[#d2d2d7] pt-4 md:flex-row md:justify-between">
          <p>Copyright © 2026 SmartPhoneHub. All rights reserved.</p>
          <p>118 Aba Road, Garrison, Port Harcourt</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})

type FooterLink = { label: string; to?: string; href?: string }

const navLinks = [
  { label: 'Store', to: '/store' },
  { label: 'Repairs', to: '/repairs' },
  { label: 'Support', to: '/support' },
]

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Store', to: '/store' },
      { label: 'Phones', to: '/store/phones' },
      { label: 'Laptops', to: '/store/laptops' },
      { label: 'Accessories', to: '/store/accessories' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Support', to: '/support' },
      { label: 'Repairs', to: '/repairs' },
      { label: 'Contact', href: '#' },
      { label: 'Find a store', to: '/#find-us' },
    ],
  },
  {
    title: 'Orders',
    links: [
      { label: 'Order status', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Warranty', href: '#' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Find us', to: '/#find-us' },
      { label: 'Mon-Sat, 10:00-18:00', to: '/#find-us' },
    ],
  },
]

const mobileMenuOpen = ref(false)

const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

watch(mobileMenuOpen, (open) => {
  if (import.meta.client)
    document.body.style.overflow = open ? 'hidden' : ''
})
</script>
