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

    <!-- Watch: clean, futuristic -->
    <section
      id="watch"
      ref="hero3Ref"
      class="scroll-reveal relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 py-24"
    >
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(120,119,198,0.08),transparent_70%)]" />
      <div class="pointer-events-none absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 48px 48px" />
      <div class="relative z-10 flex flex-col items-center text-center">
        <span class="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">Wearables</span>
        <h2 class="mt-3 text-4xl font-light tracking-tight text-white md:text-6xl">
          Watch
        </h2>
        <p class="mt-4 max-w-md text-neutral-400 md:text-lg">
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
        <div class="mt-16 w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
          <NuxtImg
            src="/images/applewatch.jpg"
            alt="SmartPhoneHub Watch"
            class="aspect-square w-full object-cover object-center"
            format="webp"
          />
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
            Phones, audio, gaming and more.
          </p>
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
const tradeRef = ref<HTMLElement | null>(null)

const productCards = [
  { title: 'Pro 17', tagline: 'Our most powerful phone.', buyLink: '/store', image: '/images/17pro.jpg' },
  { title: 'Phone 16', tagline: 'Brilliant in every way.', buyLink: '/store', image: '/images/iphone-16.jpg' },
  { title: 'Beats Headphones', tagline: 'Premium sound.', buyLink: '/store', image: '/images/beatsheadphone.jpg' },
  { title: 'Onyx Speaker', tagline: 'Room-filling audio.', buyLink: '/store', image: '/images/onyxspeaker.jpg' },
  { title: 'Meta Glass', tagline: 'See the future.', buyLink: '/store', image: '/images/metaglass.jpg' },
  { title: 'Gaming', tagline: 'Next-level play.', buyLink: '/store', image: '/images/ps5.jpg' },
]

const { observe } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

onMounted(() => {
  ;[hero2Ref, hero3Ref, gridRef, tradeRef].forEach((r) => observe(r.value))

  let raf = 0
  const updateHeroParallax = () => {
    raf = 0
    const el = heroRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    // Move background slightly slower than scroll for a parallax feel.
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
})
</script>
