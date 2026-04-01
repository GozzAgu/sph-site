<template>
  <div class="min-h-screen bg-neutral-950">
    <!-- Hero: dark, futuristic -->
    <section class="relative flex min-h-[70vh] flex-col justify-center overflow-hidden px-6 py-24 md:py-32">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.12),transparent_50%)]" />
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.04]"
        style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 64px 64px"
      />
      <div class="relative z-10 mx-auto w-full max-w-4xl">
        <span class="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Store</span>
        <h1
          class="mt-4 text-4xl font-light tracking-tight text-white md:text-6xl"
          :aria-label="heroHeadline"
        >
          <span class="relative block">
            <span class="invisible block select-none">{{ heroHeadline }}</span>
            <span class="absolute left-0 top-0 w-full text-left">
              {{ heroTyped }}<span
                class="typewriter-cursor"
                :class="{ 'typewriter-cursor--done': typewriterComplete }"
                aria-hidden="true"
              />
            </span>
          </span>
        </h1>
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            class="store-cta inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Connect with a Specialist
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <NuxtLink
            to="/"
            class="store-cta inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Find a store
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Categories: horizontal strip, image-forward tiles -->
    <section class="border-t border-white/[0.06] py-14 md:py-20">
      <div class="relative mx-auto max-w-6xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Shop by category</p>
        <div class="mt-8 flex items-center gap-3 md:mt-10">
          <button
            type="button"
            class="store-nav-btn flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-neutral-400 backdrop-blur-xl transition duration-300 ease-out hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:hidden"
            aria-label="Scroll left"
            @click="scrollCategoryStrip(-1)"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref="categoryStripRef"
            class="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-1 pt-1 md:gap-5"
          >
            <NuxtLink
              v-for="cat in categories"
              :key="cat.slug"
              :to="`/store/${cat.slug}`"
              class="store-category group relative flex w-[148px] flex-shrink-0 flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:w-[180px]"
            >
              <div class="relative aspect-square w-full overflow-hidden bg-neutral-900/60">
                <NuxtImg
                  :src="cat.image"
                  :alt="cat.name"
                  class="store-category-img h-full w-full object-cover"
                  format="webp"
                />
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.04] opacity-90"
                  aria-hidden="true"
                />
              </div>
              <div class="flex flex-col items-center px-4 pb-5 pt-4 md:px-5 md:pb-6 md:pt-5">
                <span
                  class="text-center text-[0.8125rem] font-medium leading-snug tracking-tight text-white/95 md:text-sm"
                >{{ cat.name }}</span>
              </div>
            </NuxtLink>
          </div>
          <button
            type="button"
            class="store-nav-btn flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-neutral-400 backdrop-blur-xl transition duration-300 ease-out hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:hidden"
            aria-label="Scroll right"
            @click="scrollCategoryStrip(1)"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- The latest: product cards, scroll-reveal -->
    <section ref="latestRef" class="scroll-reveal relative overflow-hidden border-t border-white/[0.06] py-14 md:py-20">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(120,119,198,0.06),transparent)]"
      />
      <div class="relative mx-auto max-w-6xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">The latest</p>
        <h2
          class="mt-4 text-3xl font-light tracking-tight text-white md:mt-5 md:text-4xl"
          :aria-label="latestHeadline"
        >
          <span class="relative block">
            <span class="invisible block select-none">{{ latestHeadline }}</span>
            <span class="absolute left-0 top-0 w-full text-left">
              {{ latestTyped }}<span
                class="typewriter-cursor"
                :class="{ 'typewriter-cursor--done': latestTypewriterComplete }"
                aria-hidden="true"
              />
            </span>
          </span>
        </h2>
        <div class="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
          <NuxtLink
            v-for="item in latestProducts"
            :key="item.title"
            :to="item.link"
            class="store-product group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
          >
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900/60">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="store-product-img h-full w-full object-cover object-center"
                format="webp"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[0.04] opacity-90"
                aria-hidden="true"
              />
              <div class="store-product-shine" />
            </div>
            <div class="flex flex-1 flex-col border-t border-white/[0.06] p-6 md:p-8">
              <h3 class="text-xl font-medium tracking-tight text-white md:text-2xl">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-white/65 md:text-[0.9375rem]">{{ item.tagline }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Experience: 3 cards, light contrast -->
    <section ref="experienceRef" class="scroll-reveal border-t border-white/5 py-20 md:py-28">
      <div class="relative mx-auto max-w-6xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">The SmartPhoneHub experience</p>
        <h2 class="mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">
          Do even more with our products and services.
        </h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="card in experienceCards"
            :key="card.tag"
            class="store-experience overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/15 hover:bg-white/[0.07] md:p-8"
          >
            <span class="text-xs font-medium uppercase tracking-wider text-neutral-500">{{ card.tag }}</span>
            <h3 class="mt-3 text-xl font-medium text-white md:text-2xl">
              {{ card.title }}
            </h3>
            <p v-if="card.subtitle" class="mt-2 text-sm text-white/60">{{ card.subtitle }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Quick links: minimal strip -->
    <section ref="quickLinksRef" class="scroll-reveal border-t border-white/5 py-16 md:py-20">
      <div class="mx-auto max-w-4xl px-6">
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Quick links</p>
        <ul class="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          <li v-for="link in quickLinks" :key="link.label">
            <NuxtLink
              v-if="link.to"
              :to="link.to"
              class="text-white/80 transition hover:text-white"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              v-else
              :href="link.href"
              class="text-white/80 transition hover:text-white"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StorePage',
})

const { data: storeContent } = await useStoreContent()

const heroHeadline = computed(() => storeContent.value?.heroHeadline ?? 'The best way to buy the products you love.')
const latestHeadline = computed(() => storeContent.value?.latestHeadline ?? "Take a look at what's new right now.")

const heroTyped = ref('')
const typewriterComplete = ref(false)
let typewriterTimer: ReturnType<typeof setTimeout> | null = null

const latestTyped = ref('')
const latestTypewriterComplete = ref(false)
let latestTypewriterTimer: ReturnType<typeof setTimeout> | null = null
let latestTypewriterStarted = false

function startLatestTypewriter() {
  if (!import.meta.client || latestTypewriterStarted)
    return
  latestTypewriterStarted = true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    latestTyped.value = latestHeadline.value
    latestTypewriterComplete.value = true
    return
  }
  const msPerChar = 42
  let i = 0
  const tick = () => {
    if (i <= latestHeadline.value.length) {
      latestTyped.value = latestHeadline.value.slice(0, i)
      i += 1
      latestTypewriterTimer = setTimeout(tick, msPerChar)
    }
    else {
      latestTypewriterComplete.value = true
    }
  }
  tick()
}

const categoryStripRef = ref<HTMLElement | null>(null)

function scrollCategoryStrip(direction: number) {
  const el = categoryStripRef.value
  if (!el) return
  el.scrollBy({ left: direction * 296, behavior: 'smooth' })
}

const categories = computed(() => storeContent.value?.categories ?? [])
const latestProducts = computed(() => storeContent.value?.latestProducts ?? [])
const experienceCards = computed(() => storeContent.value?.experienceCards ?? [])
const quickLinks = computed(() => storeContent.value?.quickLinks ?? [])

const latestRef = ref<HTMLElement | null>(null)
const experienceRef = ref<HTMLElement | null>(null)
const quickLinksRef = ref<HTMLElement | null>(null)

const { observe } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

onMounted(() => {
  if (!import.meta.client)
    return

  ;[latestRef, experienceRef, quickLinksRef].forEach((r) => observe(r.value))

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) {
    heroTyped.value = heroHeadline.value
    typewriterComplete.value = true
    latestTyped.value = latestHeadline.value
    latestTypewriterComplete.value = true
    latestTypewriterStarted = true
    return
  }

  const msPerChar = 42
  let hi = 0
  const heroTick = () => {
    if (hi <= heroHeadline.value.length) {
      heroTyped.value = heroHeadline.value.slice(0, hi)
      hi += 1
      typewriterTimer = setTimeout(heroTick, msPerChar)
    }
    else {
      typewriterComplete.value = true
    }
  }
  heroTick()

  const latestEl = latestRef.value
  if (latestEl) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting)) {
          startLatestTypewriter()
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )
    io.observe(latestEl)
  }
})

onUnmounted(() => {
  if (typewriterTimer != null)
    clearTimeout(typewriterTimer)
  if (latestTypewriterTimer != null)
    clearTimeout(latestTypewriterTimer)
})
</script>

<style scoped>
.store-category {
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.45s ease,
    box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.store-category:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow:
    0 28px 64px -24px rgba(0, 0, 0, 0.92),
    0 0 0 1px rgba(255, 255, 255, 0.06);
}
.store-category:focus-visible {
  outline: none;
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35), 0 28px 64px -24px rgba(0, 0, 0, 0.85);
}
.store-category-img {
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.store-category:hover .store-category-img {
  transform: scale(1.06);
}
@media (prefers-reduced-motion: reduce) {
  .store-category,
  .store-category-img,
  .store-product,
  .store-product-img {
    transition: none;
  }
  .store-category:hover,
  .store-product:hover {
    transform: none;
  }
  .store-category:hover .store-category-img,
  .store-product:hover .store-product-img {
    transform: none;
  }
}

.store-product {
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.45s ease,
    box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.store-product:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow:
    0 28px 64px -24px rgba(0, 0, 0, 0.92),
    0 0 0 1px rgba(255, 255, 255, 0.06);
}
.store-product:focus-visible {
  outline: none;
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35), 0 28px 64px -24px rgba(0, 0, 0, 0.85);
}
.store-product-img {
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.store-product:hover .store-product-img {
  transform: scale(1.06);
}

.store-product-shine {
  position: absolute;
  inset: -40%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 45%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.06) 55%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.store-product:hover .store-product-shine {
  opacity: 1;
  animation: store-shine 2.5s ease-in-out;
}
@keyframes store-shine {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(100%) skewX(-12deg); }
}

.typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 0.85em;
  margin-left: 1px;
  vertical-align: -0.06em;
  background-color: rgba(255, 255, 255, 0.95);
  animation: typewriter-blink 1s step-end infinite;
}
.typewriter-cursor--done {
  animation: typewriter-cursor-out 0.45s ease forwards;
}
@keyframes typewriter-blink {
  0%,
  50% { opacity: 1; }
  50.01%,
  100% { opacity: 0; }
}
@keyframes typewriter-cursor-out {
  to {
    opacity: 0;
    width: 0;
    margin-left: 0;
  }
}
</style>
