<template>
  <div class="min-h-screen bg-neutral-100 text-neutral-900">
    <!-- Sticky nav -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-xl' : 'bg-white/90 backdrop-blur-md'"
    >
      <nav class="relative mx-auto flex h-12 max-w-[980px] items-center justify-between px-6 text-sm">
        <NuxtLink to="/" class="flex items-center text-neutral-900 hover:opacity-80" @click="mobileMenuOpen = false">
          <img src="/sphLogo.png" alt="Logo" class="h-7 w-auto">
        </NuxtLink>
        <div class="hidden items-center gap-8 md:flex">
          <NuxtLink to="/store" class="text-neutral-900 hover:opacity-80">Store</NuxtLink>
          <NuxtLink to="/support" class="text-neutral-900 hover:opacity-80">Support</NuxtLink>
        </div>
        <div class="flex items-center gap-5">
          <button type="button" class="text-neutral-900 hover:opacity-80" aria-label="Search">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button type="button" class="text-neutral-900 hover:opacity-80" aria-label="Bag">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <!-- Mobile menu (hamburger) -->
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center text-neutral-900 hover:opacity-80 md:hidden"
            aria-label="Open menu"
            :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = true"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile full-screen overlay (Apple-style) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="mobileMenuOpen"
        class="fixed inset-0 z-[100] bg-neutral-100 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div class="flex h-full flex-col">
          <div class="flex h-14 flex-shrink-0 items-center justify-end px-6">
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 hover:bg-neutral-200"
              aria-label="Close menu"
              @click="mobileMenuOpen = false"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav class="flex-1 overflow-auto px-8 pt-4 pb-12">
            <ul class="space-y-1">
              <li>
                <NuxtLink
                  to="/store"
                  class="block py-4 text-[1.75rem] font-semibold leading-tight text-neutral-900 hover:opacity-70"
                  @click="mobileMenuOpen = false"
                >
                  Store
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/support"
                  class="block py-4 text-[1.75rem] font-semibold leading-tight text-neutral-900 hover:opacity-70"
                  @click="mobileMenuOpen = false"
                >
                  Support
                </NuxtLink>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-4 text-[1.75rem] font-semibold leading-tight text-neutral-900 hover:opacity-70"
                  @click="mobileMenuOpen = false"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>

    <main class="pt-12">
      <slot />
    </main>

    <!-- Back to top (glassy) -->
    <button
      type="button"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 focus:ring-offset-2"
      :class="showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'"
      @click="scrollToTop"
    >
      <svg class="h-5 w-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>

    <!-- Footer -->
    <footer class="bg-neutral-100 py-8 text-xs text-neutral-500">
      <div class="mx-auto max-w-[980px] px-6">
        <p class="border-b border-neutral-200 pb-4">
          * Consumer finance is subject to eligibility and approval. Terms apply.
        </p>
        <nav class="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-4" aria-label="Footer">
          <div>
            <p class="font-semibold text-neutral-700">Shop</p>
            <ul class="mt-2 space-y-1">
              <li><NuxtLink to="/store" class="hover:underline">Store</NuxtLink></li>
              <li><NuxtLink to="/store/phones" class="hover:underline">Phones</NuxtLink></li>
              <li><NuxtLink to="/store/laptops" class="hover:underline">Laptops</NuxtLink></li>
              <li><NuxtLink to="/store/accessories" class="hover:underline">Accessories</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-neutral-700">Support</p>
            <ul class="mt-2 space-y-1">
              <li><NuxtLink to="/support" class="hover:underline">Support</NuxtLink></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
              <li><NuxtLink to="/#find-us" class="hover:underline">Find a store</NuxtLink></li>
              <li><a href="#" class="hover:underline">Repairs & Care</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-neutral-700">Orders</p>
            <ul class="mt-2 space-y-1">
              <li><a href="#" class="hover:underline">Order status</a></li>
              <li><a href="#" class="hover:underline">Returns</a></li>
              <li><a href="#" class="hover:underline">Warranty</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-neutral-700">About</p>
            <ul class="mt-2 space-y-1">
              <li><a href="#" class="hover:underline">Contact</a></li>
              <li><NuxtLink to="/#find-us" class="hover:underline">Find us</NuxtLink></li>
            </ul>
          </div>
        </nav>
        <p class="mt-8 border-t border-neutral-200 pt-4">
          Copyright © 2026 SmartPhoneHub. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})

const isScrolled = ref(false)
const showBackToTop = ref(false)
const mobileMenuOpen = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function setupScrollListener() {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 20
    showBackToTop.value = window.scrollY > 400
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
}

const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

watch(mobileMenuOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => {
  setupScrollListener()
})
</script>
