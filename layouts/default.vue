<template>
  <div class="min-h-screen bg-neutral-100 text-neutral-900">
    <!-- Sticky nav -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-xl' : 'bg-white/90 backdrop-blur-md'"
    >
      <nav class="mx-auto flex h-12 max-w-[980px] items-center justify-between px-6 text-sm">
        <NuxtLink to="/" class="flex items-center text-neutral-900 hover:opacity-80">
          <img src="/sphLogo.png" alt="Logo" class="h-7 w-auto">
        </NuxtLink>
        <div class="hidden items-center gap-8 md:flex">
          <NuxtLink to="/store" class="text-neutral-900 hover:opacity-80">Store</NuxtLink>
          <a href="/#phones" class="text-neutral-900 hover:opacity-80">Phones</a>
          <a href="/#tablets" class="text-neutral-900 hover:opacity-80">Tablets</a>
          <a href="/#watch" class="text-neutral-900 hover:opacity-80">Watches</a>
          <NuxtLink to="/support" class="text-neutral-900 hover:opacity-80">Support</NuxtLink>
        </div>
        <div class="flex items-center gap-6">
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
        </div>
      </nav>
    </header>

    <main class="pt-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-100 py-8 text-xs text-neutral-500">
      <div class="mx-auto max-w-[980px] px-6">
        <p class="border-b border-neutral-200 pb-4">
          * Consumer finance is subject to eligibility and approval. Terms apply.
        </p>
        <nav class="mt-4 grid gap-4 md:grid-cols-4">
          <div>
            <p class="font-semibold text-neutral-700">Shop and Learn</p>
            <ul class="mt-2 space-y-1">
              <li><NuxtLink to="/store" class="hover:underline">Store</NuxtLink></li>
              <li><a href="/#phones" class="hover:underline">Phones</a></li>
              <li><a href="/#tablets" class="hover:underline">Tablets</a></li>
              <li><a href="/#watch" class="hover:underline">Watches</a></li>
              <li><NuxtLink to="/support" class="hover:underline">Support</NuxtLink></li>
              <li><a href="#" class="hover:underline">Accessories</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-neutral-700">Account</p>
            <ul class="mt-2 space-y-1">
              <li><a href="#" class="hover:underline">Manage Your Account</a></li>
              <li><a href="#" class="hover:underline">Order Status</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-neutral-700">Entertainment</p>
            <ul class="mt-2 space-y-1">
              <li><a href="#" class="hover:underline">Music</a></li>
              <li><a href="#" class="hover:underline">TV+</a></li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-neutral-700">About</p>
            <ul class="mt-2 space-y-1">
              <li><a href="#" class="hover:underline">Newsroom</a></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
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

function setupScrollListener() {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
}

onMounted(() => {
  setupScrollListener()
})
</script>
