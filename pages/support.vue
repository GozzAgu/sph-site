<template>
  <div class="min-h-screen bg-neutral-950">
    <!-- Hero -->
    <section class="border-b border-white/5 py-20 md:py-28">
      <div class="mx-auto max-w-[720px] px-6 text-center">
        <h1 class="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Support
        </h1>
        <p class="mt-4 text-lg text-white/60 md:text-xl">
          We're here to help with your order and devices.
        </p>
      </div>
    </section>

    <!-- Product help -->
    <section class="border-b border-white/5 py-14 md:py-16">
      <div class="mx-auto max-w-[720px] px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Product help
        </h2>
        <nav class="mt-8 flex flex-wrap gap-x-10 gap-y-4 md:gap-x-12" aria-label="Product categories">
          <a
            v-for="item in productCategories"
            :key="item"
            href="#"
            class="support-link group inline-flex items-center text-base text-white/90"
          >
            <span class="transition-colors duration-200 group-hover:text-white">{{ item }}</span>
          </a>
        </nav>
      </div>
    </section>

    <!-- Quick links -->
    <section class="border-b border-white/5 py-14 md:py-16">
      <div class="mx-auto max-w-[720px] px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Quick links
        </h2>
        <ul class="mt-8 space-y-0" role="list">
          <li v-for="link in quickLinks" :key="link.label">
            <NuxtLink
              v-if="link.to"
              :to="link.to"
              class="support-quick-link block text-base text-white/90"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              v-else
              :href="link.href"
              class="support-quick-link block text-base text-white/90"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Repairs & Care -->
    <section class="py-14 md:py-16">
      <div class="mx-auto max-w-[720px] px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Repairs & Care
        </h2>
        <p class="mt-6 max-w-xl text-white/60 leading-relaxed">
          SmartPhoneHub Care covers repairs and support for devices bought from us. We can also help with out-of-warranty repairs.
        </p>
        <a
          href="#"
          class="support-link group mt-5 inline-flex items-center text-base font-medium text-white/90"
        >
          Learn more
          <svg class="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SupportPage',
})

const productCategories = ['Phones', 'Laptops', 'Tablets', 'Watches', 'Earbuds', 'Accessories']

const quickLinks = [
  { label: 'Order status', href: '#' },
  { label: 'Returns & refunds', href: '#' },
  { label: 'Check warranty', href: '#' },
  { label: 'Contact us', href: '#' },
  { label: 'Find a store', to: '/' },
]
</script>

<style scoped>
.support-link {
  @apply transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:rounded-sm;
}
.support-link:hover {
  @apply text-white;
}
.support-link.group:hover span {
  @apply text-white;
}

.support-quick-link {
  @apply -mx-3 rounded-lg px-3 py-3.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950;
}
.support-quick-link:hover {
  @apply text-white bg-white/5;
}
</style>
