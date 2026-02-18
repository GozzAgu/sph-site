<template>
  <div>
    <!-- Hero: futuristic, clean, modern (parallax background) -->
    <section
      ref="heroRef"
      class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 py-32"
    >
      <div class="pointer-events-none absolute inset-0">
        <NuxtImg
          src="/images/gadgets2-sph.jpg"
          alt=""
          aria-hidden="true"
          class="h-full w-full object-cover object-center opacity-70 brightness-[0.35] contrast-125 saturate-75 will-change-transform"
          :style="heroBgStyle"
          format="webp"
          loading="eager"
        />
        <!-- Darken for contrast -->
        <div class="absolute inset-0 bg-neutral-950/55" />
        <!-- Minimal gradient + subtle glow -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,119,198,0.14),transparent)]" />
        <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        <!-- Very subtle grid -->
        <div
          class="absolute inset-0 opacity-[0.03]"
          style="background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size: 64px 64px"
        />
      </div>
      <div class="relative z-10 flex flex-col items-center text-center">
        <span class="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          Welcome
        </span>
        <h1 class="mt-4 text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
          SmartPhoneHub
        </h1>
        <p class="mt-5 max-w-md text-base text-neutral-400 md:text-lg">
          Say hello to the latest generation.
        </p>
        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <NuxtLink
            to="/store"
            class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/15"
          >
            Shop
          </NuxtLink>
          <a
            href="#watch"
            class="text-sm text-neutral-400 transition hover:text-white"
          >
            Learn more
          </a>
        </div>
      </div>
      <!-- Scroll cue -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span class="block h-8 w-px animate-pulse bg-gradient-to-b from-transparent to-neutral-500" />
      </div>
    </section>

    <!-- Laptop: clean, futuristic -->
    <section ref="hero2Ref" class="scroll-reveal relative overflow-hidden bg-white py-24 md:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(120,119,198,0.06),transparent)]" />
      <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20">
        <div class="flex-1 text-center lg:text-left">
          <span class="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Devices</span>
          <h2 class="mt-3 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
            Laptop
          </h2>
          <p class="mt-4 max-w-md text-neutral-500 md:text-lg">
            Light. Powerful. Built to go anywhere.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <NuxtLink
              to="/store"
              class="inline-flex items-center rounded-full border border-neutral-300 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              Buy
            </NuxtLink>
            <a href="#" class="inline-flex items-center text-sm text-neutral-500 transition hover:text-neutral-900">Learn more</a>
          </div>
        </div>
        <div class="w-full max-w-lg flex-shrink-0">
          <div class="sph-float relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/50 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]">
            <div class="sph-sheen" />
            <NuxtImg
              src="/images/laptops-sph.jpg"
              alt="SmartPhoneHub Laptops"
              class="aspect-[4/3] w-full object-cover object-center"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Watch: image as bg, text above the watch -->
    <section
      id="watch"
      ref="hero3Ref"
      class="scroll-reveal relative flex min-h-[90vh] flex-col overflow-hidden bg-neutral-950 px-6 pt-24 pb-20 md:min-h-[95vh] md:pt-32 md:pb-28"
    >
      <!-- Full-bleed watch image as background -->
      <div class="pointer-events-none absolute inset-0">
        <NuxtImg
          src="/images/applewatch-sph.jpg"
          alt=""
          aria-hidden="true"
          class="h-full w-full object-cover object-center object-[center_55%] md:object-[center_60%]"
          format="webp"
        />
        <!-- Gradient overlay: darker at top so text reads, lighter at bottom so watch shows -->
        <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-neutral-950/30" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_85%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      <!-- Text and CTAs sitting above the watch -->
      <div class="relative z-10 flex flex-1 flex-col items-center justify-start pt-8 text-center md:pt-12">
        <span class="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Wearables</span>
        <h2 class="mt-3 text-4xl font-light tracking-tight text-white md:text-6xl">
          Watch
        </h2>
        <p class="mt-4 max-w-md text-neutral-300 md:text-lg">
          The ultimate way to watch your health.
        </p>
        <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <NuxtLink
            to="/store"
            class="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15"
          >
            Buy
          </NuxtLink>
          <a href="#" class="text-sm text-neutral-400 transition hover:text-white">Learn more</a>
        </div>
      </div>
    </section>

    <!-- Shop by category: clean, futuristic -->
    <section ref="gridRef" class="scroll-reveal relative overflow-hidden bg-white py-24 md:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(120,119,198,0.04),transparent)]" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <div class="text-center">
          <span class="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Explore</span>
          <h2 class="mt-3 text-4xl font-light tracking-tight text-neutral-900 md:text-4xl">
            Shop by category
          </h2>
          <p class="mx-auto mt-4 max-w-md text-neutral-500">
            Phones, audio, gaming, laptops and accessories.
          </p>
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <article
            v-for="card in productCards"
            :key="card.title"
            class="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-neutral-300/80 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]"
          >
            <NuxtLink :to="card.buyLink" class="block">
              <div class="aspect-[4/3] overflow-hidden bg-neutral-100">
                <NuxtImg
                  :src="card.image"
                  :alt="card.title"
                  class="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  format="webp"
                />
              </div>
              <div class="border-t border-neutral-100 px-6 py-5">
                <h3 class="text-lg font-medium text-neutral-900">
                  {{ card.title }}
                </h3>
                <p class="mt-1 text-sm text-neutral-500">
                  {{ card.tagline }}
                </p>
                <span class="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-400 transition group-hover:text-neutral-900">
                  Shop
                  <span class="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Trust strip: free delivery, warranty, support, secure payment -->
    <section ref="trustRef" class="scroll-reveal border-t border-neutral-200 bg-white py-14 md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col items-center">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <h3 class="mt-3 text-sm font-semibold text-neutral-900">Free delivery</h3>
            <p class="mt-1 text-sm text-neutral-500">On orders over a set amount</p>
          </div>
          <div class="flex flex-col items-center">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <h3 class="mt-3 text-sm font-semibold text-neutral-900">Warranty</h3>
            <p class="mt-1 text-sm text-neutral-500">Coverage on every purchase</p>
          </div>
          <div class="flex flex-col items-center">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <h3 class="mt-3 text-sm font-semibold text-neutral-900">Expert support</h3>
            <p class="mt-1 text-sm text-neutral-500">We're here when you need us</p>
          </div>
          <div class="flex flex-col items-center">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <h3 class="mt-3 text-sm font-semibold text-neutral-900">Secure payment</h3>
            <p class="mt-1 text-sm text-neutral-500">Safe checkout every time</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trade In -->
    <section ref="tradeRef" class="scroll-reveal border-t border-neutral-200 bg-neutral-50 py-16 text-center">
      <h2 class="text-2xl font-semibold text-neutral-900 md:text-3xl">
        Trade In
      </h2>
      <p class="mx-auto mt-2 max-w-lg text-neutral-600">
        Get credit when you trade in your eligible device.
      </p>
      <NuxtLink
        to="/store"
        class="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800"
      >
        Get your estimate
      </NuxtLink>
    </section>

    <!-- Need help? Support strip -->
    <section ref="supportStripRef" class="scroll-reveal border-t border-neutral-200 bg-white py-16 md:py-20">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="text-2xl font-light tracking-tight text-neutral-900 md:text-3xl">
          Need help?
        </h2>
        <p class="mt-3 text-neutral-500">
          We're here to help. Get in touch or find a store near you.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-6">
          <NuxtLink
            to="/support"
            class="text-base font-medium text-blue-600 hover:underline"
          >
            Support
          </NuxtLink>
          <a
            href="#"
            class="text-base font-medium text-blue-600 hover:underline"
          >
            Contact
          </a>
          <a
            href="#"
            class="text-base font-medium text-blue-600 hover:underline"
          >
            Find a store
          </a>
        </div>
      </div>
    </section>

    <!-- Find us: map and address -->
    <section ref="mapRef" class="scroll-reveal border-t border-neutral-200 bg-neutral-50 py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-2xl font-light tracking-tight text-neutral-900 md:text-3xl">
          Find us
        </h2>
        <p class="mt-2 text-neutral-600">
          118 Aba Road, Garrison, Port Harcourt
        </p>
        <div class="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=118+aba+road+garrison+portharcourt&output=embed"
            title="SmartPhoneHub store location: 118 Aba Road, Garrison, Port Harcourt"
            class="h-[320px] w-full border-0 md:h-[400px]"
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

const heroRef = ref<HTMLElement | null>(null)
const heroBgOffsetY = ref(0)
const heroBgStyle = computed(() => ({
  transform: `translate3d(0, ${heroBgOffsetY.value}px, 0) scale(1.12)`,
}))

const hero2Ref = ref<HTMLElement | null>(null)
const hero3Ref = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const tradeRef = ref<HTMLElement | null>(null)
const supportStripRef = ref<HTMLElement | null>(null)
const mapRef = ref<HTMLElement | null>(null)

const productCards = [
  { title: 'Phones', tagline: 'Our most powerful phones.', buyLink: '/store', image: '/images/iphone16-sph2.jpg' },
  { title: 'Audio', tagline: 'Premium sound.', buyLink: '/store', image: '/images/beatsheadphone.jpg' },
  { title: 'Gaming', tagline: 'Next-level play.', buyLink: '/store', image: '/images/ps5.jpg' },
  { title: 'Laptops', tagline: 'Power and portability.', buyLink: '/store', image: '/images/laptops-sph.jpg' },
  { title: 'Accessories', tagline: 'Complete your setup.', buyLink: '/store', image: '/images/metaglass.jpg' },
]

const { observe } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

onMounted(() => {
  if (import.meta.client) {
    ;[hero2Ref, hero3Ref, gridRef, trustRef, tradeRef, supportStripRef, mapRef].forEach((r) => observe(r.value))

    let raf = 0
    const updateHeroParallax = () => {
      raf = 0
      const el = heroRef.value
      if (!el) return
      const rect = el.getBoundingClientRect()
      heroBgOffsetY.value = Math.round(rect.top * 0.18)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(updateHeroParallax)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateHeroParallax()

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    })
  }
})
</script>
