<template>
  <div class="min-h-screen bg-neutral-950">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-3xl px-6 text-center">
        <p class="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Repairs & Care
        </p>
        <h1 class="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl">
          Expert repairs for your devices
        </h1>
        <p class="mt-5 text-lg text-white/60 md:text-xl">
          Genuine parts, trained technicians, and clear pricing, whether you’re in warranty or not.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            to="/#find-us"
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Find a store
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/support"
            class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            Support
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What we fix -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          What we fix
        </h2>
        <p class="mt-3 max-w-2xl text-white/50">
          Common repairs and diagnostics for phones, tablets, laptops, and wearables bought from SmartPhoneHub or brought in for service.
        </p>
        <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li
            v-for="item in repairServices"
            :key="item.title"
            class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/15 hover:bg-white/[0.05]"
          >
            <h3 class="text-base font-medium text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/55">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- How it works -->
    <section class="border-b border-white/5 py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          How it works
        </h2>
        <ol class="mt-10 grid gap-8 md:grid-cols-3 md:gap-10" role="list">
          <li v-for="(step, i) in steps" :key="step.title" class="relative">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-semibold text-white/90"
              aria-hidden="true"
            >{{ i + 1 }}</span>
            <h3 class="mt-4 text-lg font-medium text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/55">{{ step.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Warranty note -->
    <section class="border-b border-white/5 py-14 md:py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Warranty & out-of-warranty
        </h2>
        <p class="mt-6 text-base leading-relaxed text-white/60">
          In-warranty repairs follow manufacturer terms where applicable. Out-of-warranty work is quoted before we start. No surprises.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-2xl px-6 text-center">
        <h2 class="text-2xl font-light tracking-tight text-white md:text-3xl">
          Ready to book or ask a question?
        </h2>
        <p class="mt-4 text-white/55">
          Visit us in store or reach out through Support, and we’ll point you to the right next step.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Contact repairs
          </a>
          <NuxtLink
            to="/support"
            class="text-sm font-medium text-sky-300/90 transition hover:text-sky-200"
          >
            Go to Support
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'RepairsPage',
})

const repairServices = [
  {
    title: 'Screens & glass',
    description: 'Cracked or unresponsive displays replaced with quality parts and calibration checks.',
  },
  {
    title: 'Battery & power',
    description: 'Battery replacement and charging issues, with diagnostics included.',
  },
  {
    title: 'Camera & audio',
    description: 'Camera modules, speakers, and microphones tested and restored.',
  },
  {
    title: 'Water & liquid',
    description: 'Assessment and cleaning where possible; we’ll advise if a full repair is needed.',
  },
  {
    title: 'Software & setup',
    description: 'Recovery, updates, and data migration help when hardware is sound.',
  },
  {
    title: 'Diagnostics',
    description: 'Full device health check before you commit to any repair.',
  },
]

const steps = [
  {
    title: 'Book or drop in',
    body: 'Visit our store or start from Support with your device model and issue.',
  },
  {
    title: 'Assessment & quote',
    body: 'We inspect the device and share options and pricing before any work begins.',
  },
  {
    title: 'Repair & pickup',
    body: 'We complete the repair and test everything, and we’ll notify you when it’s ready.',
  },
]
</script>
