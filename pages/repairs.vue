<template>
  <div class="pb-24">
    <!-- Hero -->
    <section class="sph-container pt-14 text-center md:pt-20">
      <p class="sph-eyebrow">
        Repairs & Care
      </p>
      <h1 class="sph-headline-xl mx-auto mt-2 max-w-3xl">
        Expert repairs. Done right.
      </h1>
      <p class="sph-lead mx-auto mt-4 max-w-2xl text-[#6e6e73]">
        Quality parts, trained technicians and clear pricing, whether you’re in warranty or not.
      </p>
      <div class="mt-8 flex items-center justify-center gap-4">
        <NuxtLink to="/#find-us" class="sph-btn">
          Visit the store
        </NuxtLink>
        <NuxtLink to="/support" class="sph-btn-outline">
          Get support
        </NuxtLink>
      </div>
    </section>

    <!-- What we fix -->
    <section class="mt-20 bg-[#f5f5f7] py-20 md:mt-24 md:py-28">
      <div class="sph-container">
        <h2 v-reveal class="sph-headline-l text-center">
          What we fix.
        </h2>
        <ul class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li
            v-for="(item, i) in repairServices"
            :key="item.title"
            v-reveal="i % 3"
            class="rounded-[18px] bg-white p-7"
          >
            <h3 class="text-[21px] font-semibold tracking-tight">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-[17px] leading-[1.47] text-[#6e6e73]">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- How it works -->
    <section class="sph-container py-20 md:py-28">
      <h2 v-reveal class="sph-headline-l text-center">
        How it works.
      </h2>
      <ol class="mt-14 grid gap-12 md:grid-cols-3 md:gap-8" role="list">
        <li v-for="(step, i) in steps" :key="step.title" v-reveal="i" class="text-center">
          <span class="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#1d1d1f] text-[17px] font-semibold text-white" aria-hidden="true">
            {{ i + 1 }}
          </span>
          <h3 class="mt-5 text-[21px] font-semibold tracking-tight">
            {{ step.title }}
          </h3>
          <p class="mx-auto mt-2 max-w-xs text-[17px] leading-[1.47] text-[#6e6e73]">
            {{ step.body }}
          </p>
        </li>
      </ol>
    </section>

    <!-- Warranty + CTA -->
    <section class="sph-container">
      <div v-reveal class="sph-tile px-6 py-16 text-center md:py-24">
        <h2 class="sph-headline-l mx-auto max-w-2xl">
          No surprises.
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-[17px] leading-[1.47] text-[#6e6e73]">
          In-warranty repairs follow manufacturer terms where applicable. Out-of-warranty work is always quoted before we start.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a href="#" class="sph-btn">Contact repairs</a>
          <NuxtLink to="/support" class="sph-link sph-chevron text-[17px]">
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
    title: 'Screens and glass',
    description: 'Cracked or unresponsive displays replaced and calibrated.',
  },
  {
    title: 'Battery and power',
    description: 'Battery replacement and charging issues, with diagnostics included.',
  },
  {
    title: 'Camera and audio',
    description: 'Cameras, speakers and microphones tested and restored.',
  },
  {
    title: 'Liquid damage',
    description: 'Assessment and cleaning where possible, with honest advice on next steps.',
  },
  {
    title: 'Software and setup',
    description: 'Recovery, updates and data transfer when the hardware is sound.',
  },
  {
    title: 'Diagnostics',
    description: 'A full health check before you commit to any repair.',
  },
]

const steps = [
  {
    title: 'Drop in',
    body: 'Bring your device to the store, or start from Support with your model and issue.',
  },
  {
    title: 'Get a quote',
    body: 'We inspect the device and share your options and pricing before any work begins.',
  },
  {
    title: 'Pick it up',
    body: 'We repair and test everything, then let you know when it’s ready.',
  },
]
</script>
