<template>
  <div>
    <!-- Hero: futuristic, clean, modern (parallax background) -->
    <section
      ref="heroRef"
      class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 py-32"
    >
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="hero-home-parallax absolute top-1/2 left-1/2 h-[118%] w-[118%] will-change-transform"
          :style="heroBgParallaxStyle"
        >
          <div class="hero-home-bg-drift h-full w-full">
            <NuxtImg
              src="/images/gadgets2-sph.jpg"
              alt=""
              aria-hidden="true"
              class="h-full w-full object-cover object-center opacity-70 brightness-[0.35] contrast-125 saturate-75"
              format="webp"
              loading="eager"
            />
          </div>
        </div>
        <!-- Darken for contrast -->
        <div class="absolute inset-0 bg-neutral-950/55" />
        <!-- Minimal gradient + subtle glow -->
        <div
          class="hero-home-ambient absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,119,198,0.14),transparent)]"
        />
        <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        <!-- Very subtle grid -->
        <div
          class="absolute inset-0 opacity-[0.03]"
          style="background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size: 64px 64px"
        />
      </div>
      <div class="relative z-10 flex flex-col items-center text-center">
        <span
          class="hero-home-enter hero-home-enter--welcome text-xs font-medium uppercase tracking-[0.3em] text-neutral-500"
        >
          Welcome
        </span>
        <h1
          class="hero-home-enter hero-home-enter--title mt-4 text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          SmartPhoneHub
        </h1>
        <p
          class="hero-home-enter hero-home-enter--sub mx-auto mt-5 max-w-md text-base text-neutral-400 md:text-lg"
          :aria-label="heroSubline"
        >
          <span class="relative block text-center">
            <span class="invisible block select-none">{{ heroSubline }}</span>
            <span class="absolute top-0 left-0 w-full text-center">
              {{ heroSubTyped }}<span
                class="hero-home-typewriter-cursor"
                :class="{ 'hero-home-typewriter-cursor--done': heroSubComplete }"
                aria-hidden="true"
              />
            </span>
          </span>
        </p>
        <div class="hero-home-enter hero-home-enter--cta mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <NuxtLink
            to="/store"
            class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md transition duration-500 ease-out hover:border-white/45 hover:bg-white/[0.18] hover:shadow-[0_0_28px_-8px_rgba(255,255,255,0.22)] active:scale-[0.98]"
          >
            Shop
          </NuxtLink>
          <a
            href="#watch"
            class="relative text-sm text-neutral-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:ease-out hover:text-white hover:after:w-full"
          >
            Learn more
          </a>
        </div>
      </div>
      <!-- Scroll cue -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span class="hero-home-scroll-line block h-8 w-px bg-gradient-to-b from-transparent to-neutral-500" />
      </div>
    </section>

    <!-- Laptop: rich product story -->
    <section
      ref="hero2Ref"
      class="index-laptop-section scroll-reveal relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div
        class="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[rgba(120,119,198,0.12)] blur-3xl md:-left-10"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[rgba(120,119,198,0.08)] blur-3xl"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(120,119,198,0.07),transparent)]" />
      <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20">
        <div class="flex-1 text-center lg:text-left">
          <span
            class="index-reveal-item index-reveal-item--1 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
          >Devices</span>
          <h2
            class="index-reveal-item index-reveal-item--2 mt-3 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl"
          >
            Laptop
          </h2>
          <p
            class="index-reveal-item index-reveal-item--3 mx-auto mt-4 max-w-md text-neutral-500 md:mx-0 md:text-lg lg:max-w-sm"
          >
            Light. Powerful. Built to go anywhere.
          </p>
          <div
            class="index-reveal-item index-reveal-item--4 mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <NuxtLink
              to="/store"
              class="inline-flex items-center rounded-full border border-neutral-900/15 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_14px_36px_-8px_rgba(0,0,0,0.45)] active:scale-[0.98]"
            >
              Buy
            </NuxtLink>
            <a
              href="#"
              class="relative text-sm text-neutral-500 transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-[width] after:duration-300 hover:text-neutral-900 hover:after:w-full"
            >Learn more</a>
          </div>
        </div>
        <div
          class="index-reveal-item index-reveal-item--5 w-full max-w-lg flex-shrink-0 [perspective:1400px]"
        >
          <div
            ref="laptopVisualRef"
            class="index-laptop-visual cursor-default"
            @mousemove="onLaptopPointerMove"
            @mouseleave="onLaptopPointerLeave"
          >
            <div
              class="index-laptop-tilt sph-float relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-gradient-to-br from-white via-neutral-50/90 to-neutral-100/80 shadow-[0_28px_64px_-20px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.9)_inset] ring-1 ring-neutral-900/[0.04] transition-[box-shadow] duration-500 hover:shadow-[0_36px_72px_-24px_rgba(0,0,0,0.28)]"
              :style="laptopTiltStyle"
            >
              <div class="sph-sheen !opacity-40" />
              <div class="absolute inset-0 bg-gradient-to-tr from-[rgba(120,119,198,0.06)] via-transparent to-transparent opacity-80" />
              <NuxtImg
                src="/images/laptops-sph.jpg"
                alt="SmartPhoneHub Laptops"
                class="index-laptop-img relative z-[1] aspect-[4/3] w-full object-cover object-center"
                format="webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Watch: cinematic bg + layered copy -->
    <section
      id="watch"
      ref="hero3Ref"
      class="index-watch-section scroll-reveal relative flex min-h-[90vh] flex-col overflow-hidden bg-neutral-950 px-6 pt-24 pb-20 md:min-h-[95vh] md:pt-32 md:pb-28"
    >
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 will-change-transform"
          :style="watchBgParallaxStyle"
        >
          <div class="index-watch-bg-drift h-full w-full">
            <NuxtImg
              src="/images/applewatch-sph.jpg"
              alt=""
              aria-hidden="true"
              class="h-full w-full object-cover object-[center_55%] md:object-[center_60%]"
              format="webp"
            />
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/92 via-neutral-950/48 to-neutral-950/25" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_82%,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
        <div
          class="index-watch-violet-halo pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(120,119,198,0.12),transparent_65%)]"
          aria-hidden="true"
        />
      </div>
      <div class="relative z-10 flex flex-1 flex-col items-center justify-start pt-8 text-center md:pt-12">
        <span
          class="index-reveal-item index-reveal-item--1 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
        >Wearables</span>
        <h2 class="index-reveal-item index-reveal-item--2 mt-3 text-4xl font-light tracking-tight text-white md:text-6xl">
          Watch
        </h2>
        <p
          class="index-reveal-item index-reveal-item--3 mt-4 max-w-md text-neutral-200/90 md:text-lg"
        >
          The ultimate way to watch your health.
        </p>
        <div
          class="index-reveal-item index-reveal-item--4 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <NuxtLink
            to="/store"
            class="inline-flex rounded-full border border-white/30 bg-white/12 px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md transition duration-500 ease-out hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.2] hover:shadow-[0_0_32px_-8px_rgba(120,119,198,0.45)] active:scale-[0.98]"
          >
            Buy
          </NuxtLink>
          <a
            href="#"
            class="relative text-sm text-sky-300/90 transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-sky-300 after:transition-[width] after:duration-300 hover:text-sky-200 hover:after:w-full"
          >Learn more</a>
        </div>
      </div>
    </section>

    <!-- Shop by category -->
    <section ref="gridRef" class="index-shop-section scroll-reveal relative overflow-hidden bg-white py-24 md:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.06),transparent)]" />
      <div class="pointer-events-none absolute inset-x-0 top-20 mx-auto h-40 max-w-3xl bg-[rgba(120,119,198,0.05)] blur-3xl" aria-hidden="true" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <div class="index-shop-header text-center">
          <span
            class="index-reveal-item index-reveal-item--1 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
          >Explore</span>
          <h2
            class="index-reveal-item index-reveal-item--2 mt-3 text-4xl font-light tracking-tight text-neutral-900 md:text-[2.75rem]"
          >
            Shop by category
          </h2>
          <p
            class="index-reveal-item index-reveal-item--3 mx-auto mt-4 max-w-md text-neutral-500 md:text-lg"
          >
            Phones, audio, gaming, laptops and accessories.
          </p>
        </div>
        <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:mt-16 md:gap-6">
          <article
            v-for="card in productCards"
            :key="card.title"
            class="index-cat-card group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-gradient-to-b from-white to-neutral-50/90 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.12)] ring-1 ring-neutral-900/[0.03] hover:-translate-y-2 hover:border-neutral-300/90 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.22)]"
          >
            <NuxtLink :to="card.buyLink" class="block outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2">
              <div class="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <NuxtImg
                  :src="card.image"
                  :alt="card.title"
                  class="index-cat-card-img h-full w-full object-cover object-center"
                  format="webp"
                />
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.08] opacity-70 transition duration-500 group-hover:opacity-95"
                  aria-hidden="true"
                />
              </div>
              <div class="relative border-t border-neutral-100/90 px-5 py-5">
                <h3 class="text-base font-medium tracking-tight text-neutral-900">
                  {{ card.title }}
                </h3>
                <p class="mt-1 text-sm text-neutral-500">
                  {{ card.tagline }}
                </p>
                <span
                  class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition duration-300 group-hover:text-neutral-900"
                >
                  Shop
                  <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Trust strip -->
    <section ref="trustRef" class="index-trust-section scroll-reveal border-t border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50/50 py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-6 text-center sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          <div
            class="index-trust-pillar group flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white/80 px-5 py-8 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(120,119,198,0.2)] to-[rgba(120,119,198,0.06)] text-neutral-800 shadow-inner ring-1 ring-white/60 transition duration-500 group-hover:scale-105 group-hover:from-[rgba(120,119,198,0.28)] group-hover:to-[rgba(120,119,198,0.1)]"
              aria-hidden="true"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <h3 class="mt-4 text-sm font-semibold text-neutral-900">Free delivery</h3>
            <p class="mt-1.5 text-sm leading-snug text-neutral-500">On orders over a set amount</p>
          </div>
          <div
            class="index-trust-pillar group flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white/80 px-5 py-8 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(120,119,198,0.2)] to-[rgba(120,119,198,0.06)] text-neutral-800 shadow-inner ring-1 ring-white/60 transition duration-500 group-hover:scale-105 group-hover:from-[rgba(120,119,198,0.28)] group-hover:to-[rgba(120,119,198,0.1)]"
              aria-hidden="true"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <h3 class="mt-4 text-sm font-semibold text-neutral-900">Warranty</h3>
            <p class="mt-1.5 text-sm leading-snug text-neutral-500">Coverage on every purchase</p>
          </div>
          <div
            class="index-trust-pillar group flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white/80 px-5 py-8 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(120,119,198,0.2)] to-[rgba(120,119,198,0.06)] text-neutral-800 shadow-inner ring-1 ring-white/60 transition duration-500 group-hover:scale-105 group-hover:from-[rgba(120,119,198,0.28)] group-hover:to-[rgba(120,119,198,0.1)]"
              aria-hidden="true"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <h3 class="mt-4 text-sm font-semibold text-neutral-900">Expert support</h3>
            <p class="mt-1.5 text-sm leading-snug text-neutral-500">We're here when you need us</p>
          </div>
          <div
            class="index-trust-pillar group flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white/80 px-5 py-8 shadow-[0_12px_32px_-20px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(120,119,198,0.2)] to-[rgba(120,119,198,0.06)] text-neutral-800 shadow-inner ring-1 ring-white/60 transition duration-500 group-hover:scale-105 group-hover:from-[rgba(120,119,198,0.28)] group-hover:to-[rgba(120,119,198,0.1)]"
              aria-hidden="true"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <h3 class="mt-4 text-sm font-semibold text-neutral-900">Secure payment</h3>
            <p class="mt-1.5 text-sm leading-snug text-neutral-500">Safe checkout every time</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trade In -->
    <section
      ref="tradeRef"
      class="index-trade-section scroll-reveal relative overflow-hidden border-t border-neutral-200/80 bg-neutral-950 py-20 text-center md:py-24"
    >
      <div
        class="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[rgba(120,119,198,0.35)] blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[rgba(120,119,198,0.2)] blur-3xl"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />
      <div class="relative z-10 mx-auto max-w-2xl px-6">
        <h2
          class="index-reveal-item index-reveal-item--1 text-3xl font-light tracking-tight text-white md:text-4xl"
        >
          Trade In
        </h2>
        <p
          class="index-reveal-item index-reveal-item--2 mx-auto mt-4 max-w-lg text-base text-neutral-400 md:text-lg"
        >
          Get credit when you trade in your eligible device.
        </p>
        <NuxtLink
          to="/store"
          class="index-reveal-item index-reveal-item--3 index-trade-cta group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-neutral-950 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-[0_18px_48px_-14px_rgba(120,119,198,0.45)] active:scale-[0.98]"
        >
          Get your estimate
          <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Need help? -->
    <section ref="supportStripRef" class="index-support-section scroll-reveal border-t border-neutral-200/80 bg-gradient-to-b from-white to-neutral-50/40 py-20 md:py-24">
      <div class="mx-auto max-w-4xl px-6">
        <h2
          class="index-reveal-item index-reveal-item--1 text-center text-2xl font-light tracking-tight text-neutral-900 md:text-3xl"
        >
          Need help?
        </h2>
        <p
          class="index-reveal-item index-reveal-item--2 mx-auto mt-3 max-w-lg text-center text-neutral-500 md:text-base"
        >
          We're here to help. Get in touch or find a store near you.
        </p>
        <div class="mt-12 grid gap-5 sm:grid-cols-3 md:mt-14 md:gap-6">
          <NuxtLink
            to="/support"
            class="index-help-card group relative flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/90 p-8 text-center shadow-[0_16px_40px_-28px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:border-[rgba(120,119,198,0.35)] hover:bg-white hover:shadow-[0_24px_48px_-28px_rgba(120,119,198,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/15 focus-visible:ring-offset-2"
          >
            <span
              class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(120,119,198,0.5)] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span
              class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition duration-500 group-hover:scale-110 group-hover:from-[rgba(120,119,198,0.15)] group-hover:to-white group-hover:text-neutral-900"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span class="mt-4 font-semibold text-neutral-900">Support</span>
            <span class="mt-1.5 text-sm text-neutral-500">FAQs, warranty & repairs</span>
          </NuxtLink>
          <a
            href="#"
            class="index-help-card group relative flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/90 p-8 text-center shadow-[0_16px_40px_-28px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:border-[rgba(120,119,198,0.35)] hover:bg-white hover:shadow-[0_24px_48px_-28px_rgba(120,119,198,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/15 focus-visible:ring-offset-2"
          >
            <span
              class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(120,119,198,0.5)] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span
              class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition duration-500 group-hover:scale-110 group-hover:from-[rgba(120,119,198,0.15)] group-hover:to-white group-hover:text-neutral-900"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span class="mt-4 font-semibold text-neutral-900">Contact</span>
            <span class="mt-1.5 text-sm text-neutral-500">Chat or email us</span>
          </a>
          <a
            href="#find-us"
            class="index-help-card group relative flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/90 p-8 text-center shadow-[0_16px_40px_-28px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-500 ease-out hover:border-[rgba(120,119,198,0.35)] hover:bg-white hover:shadow-[0_24px_48px_-28px_rgba(120,119,198,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/15 focus-visible:ring-offset-2"
          >
            <span
              class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(120,119,198,0.5)] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span
              class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 text-neutral-700 shadow-sm ring-1 ring-neutral-200/80 transition duration-500 group-hover:scale-110 group-hover:from-[rgba(120,119,198,0.15)] group-hover:to-white group-hover:text-neutral-900"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span class="mt-4 font-semibold text-neutral-900">Find a store</span>
            <span class="mt-1.5 text-sm text-neutral-500">Locations & hours</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Find us -->
    <section
      id="find-us"
      ref="mapRef"
      class="index-map-section scroll-reveal border-t border-neutral-200/80 bg-gradient-to-b from-neutral-50 to-white py-16 md:py-20"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-2xl font-light tracking-tight text-neutral-900 md:text-3xl">
          Find us
        </h2>
        <p class="mt-2 max-w-xl text-neutral-600">
          118 Aba Road, Garrison, Port Harcourt
        </p>
        <div class="mt-5 flex flex-wrap items-center gap-4">
          <a
            :href="mapsDirectionsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 rounded-full border border-neutral-300/90 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md"
          >
            Get directions
            <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div
          class="index-map-frame group mt-8 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_20px_48px_-28px_rgba(0,0,0,0.14)] ring-1 ring-neutral-900/[0.03] transition duration-500 ease-out hover:shadow-[0_28px_56px_-32px_rgba(0,0,0,0.18)]"
        >
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
const heroBgParallaxStyle = computed(() => ({
  transform: `translate(-50%, calc(-50% + ${heroBgOffsetY.value}px))`,
}))

const laptopVisualRef = ref<HTMLElement | null>(null)
const laptopTilt = ref({ rx: 0, ry: 0 })
const laptopTiltStyle = computed(() => ({
  transform: `perspective(1400px) rotateX(${laptopTilt.value.rx}deg) rotateY(${laptopTilt.value.ry}deg)`,
  transition: 'transform 0.15s ease-out',
}))

function onLaptopPointerMove(e: MouseEvent) {
  const el = laptopVisualRef.value
  if (!el || (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches))
    return
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  laptopTilt.value = { rx: py * -9, ry: px * 10 }
}

function onLaptopPointerLeave() {
  laptopTilt.value = { rx: 0, ry: 0 }
}

const watchBgParallaxY = ref(0)
const watchBgParallaxStyle = computed(() => ({
  transform: `translate(-50%, calc(-50% + ${watchBgParallaxY.value}px))`,
}))

const heroSubline = 'Say hello to the latest generation.'
const heroSubTyped = ref('')
const heroSubComplete = ref(false)
let heroSubTimer: ReturnType<typeof setTimeout> | null = null

const hero2Ref = ref<HTMLElement | null>(null)
const hero3Ref = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const tradeRef = ref<HTMLElement | null>(null)
const supportStripRef = ref<HTMLElement | null>(null)
const mapRef = ref<HTMLElement | null>(null)

const mapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=118+Aba+Road+Garrison+Port+Harcourt'

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
      const watchEl = hero3Ref.value
      if (watchEl) {
        const wr = watchEl.getBoundingClientRect()
        watchBgParallaxY.value = Math.round(wr.top * 0.12)
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(updateHeroParallax)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateHeroParallax()

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      heroSubTyped.value = heroSubline
      heroSubComplete.value = true
    }
    else {
      heroSubTimer = setTimeout(() => {
        heroSubTimer = null
        const msPerChar = 38
        let i = 0
        const tick = () => {
          if (i <= heroSubline.length) {
            heroSubTyped.value = heroSubline.slice(0, i)
            i += 1
            heroSubTimer = setTimeout(tick, msPerChar)
          }
          else {
            heroSubComplete.value = true
          }
        }
        tick()
      }, 640)
    }

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
      if (heroSubTimer != null) clearTimeout(heroSubTimer)
    })
  }
})
</script>

<style scoped>
.hero-home-bg-drift {
  height: 100%;
  animation: hero-home-bg-drift 28s ease-in-out infinite;
  will-change: transform;
}
@keyframes hero-home-bg-drift {
  0%,
  100% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.1);
  }
}
.hero-home-ambient {
  animation: hero-home-ambient-pulse 16s ease-in-out infinite;
}
@keyframes hero-home-ambient-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
}
.hero-home-enter {
  opacity: 0;
  animation: hero-home-enter-up 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.hero-home-enter--welcome {
  animation-delay: 0.06s;
}
.hero-home-enter--title {
  animation-delay: 0.22s;
}
.hero-home-enter--sub {
  animation-delay: 0.38s;
}
.hero-home-enter--cta {
  animation-delay: 0.52s;
}
@keyframes hero-home-enter-up {
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-home-scroll-line {
  opacity: 0.5;
  animation: hero-home-scroll-line-hint 2.8s ease-in-out infinite;
}
@keyframes hero-home-scroll-line-hint {
  0%,
  100% {
    opacity: 0.35;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(6px);
  }
}
.hero-home-typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 0.85em;
  margin-left: 1px;
  vertical-align: -0.06em;
  background-color: rgba(255, 255, 255, 0.55);
  animation: hero-home-cursor-blink 1s step-end infinite;
}
.hero-home-typewriter-cursor--done {
  animation: hero-home-cursor-out 0.45s ease forwards;
}
@keyframes hero-home-cursor-blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}
@keyframes hero-home-cursor-out {
  to {
    opacity: 0;
    width: 0;
    margin-left: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-home-bg-drift,
  .hero-home-ambient,
  .hero-home-scroll-line {
    animation: none !important;
  }
  .hero-home-enter {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .hero-home-scroll-line {
    opacity: 0.55;
  }
}

/* ---- Homepage sections: scroll stagger + motion ---- */
.index-laptop-section .index-reveal-item,
.index-watch-section .index-reveal-item,
.index-shop-header .index-reveal-item,
.index-trade-section .index-reveal-item,
.index-support-section .index-reveal-item {
  opacity: 0;
  transform: translateY(1.375rem);
  transition:
    opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.index-laptop-section.scroll-reveal-visible .index-reveal-item,
.index-watch-section.scroll-reveal-visible .index-reveal-item,
.index-shop-section.scroll-reveal-visible .index-shop-header .index-reveal-item,
.index-trade-section.scroll-reveal-visible .index-reveal-item,
.index-support-section.scroll-reveal-visible .index-reveal-item {
  opacity: 1;
  transform: translateY(0);
}
.index-reveal-item--1 {
  transition-delay: 0.06s;
}
.index-reveal-item--2 {
  transition-delay: 0.14s;
}
.index-reveal-item--3 {
  transition-delay: 0.22s;
}
.index-reveal-item--4 {
  transition-delay: 0.3s;
}
.index-reveal-item--5 {
  transition-delay: 0.38s;
}

.index-shop-section .index-cat-card {
  opacity: 0;
  transition:
    opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.5s ease,
    border-color 0.45s ease;
}
.index-shop-section.scroll-reveal-visible .index-cat-card {
  opacity: 1;
}
.index-shop-section.scroll-reveal-visible .index-cat-card:nth-child(1) {
  transition-delay: 0.08s;
}
.index-shop-section.scroll-reveal-visible .index-cat-card:nth-child(2) {
  transition-delay: 0.14s;
}
.index-shop-section.scroll-reveal-visible .index-cat-card:nth-child(3) {
  transition-delay: 0.2s;
}
.index-shop-section.scroll-reveal-visible .index-cat-card:nth-child(4) {
  transition-delay: 0.26s;
}
.index-shop-section.scroll-reveal-visible .index-cat-card:nth-child(5) {
  transition-delay: 0.32s;
}

.index-cat-card-img {
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.index-cat-card:hover .index-cat-card-img {
  transform: scale(1.06);
}

.index-watch-bg-drift {
  height: 100%;
  animation: index-watch-bg-drift 32s ease-in-out infinite;
  will-change: transform;
}
@keyframes index-watch-bg-drift {
  0%,
  100% {
    transform: scale(1.04);
  }
  50% {
    transform: scale(1.09);
  }
}
.index-watch-violet-halo {
  animation: index-watch-halo 14s ease-in-out infinite;
}
@keyframes index-watch-halo {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
}

.index-trust-section .index-trust-pillar {
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.index-trust-section.scroll-reveal-visible .index-trust-pillar {
  opacity: 1;
}
.index-trust-section.scroll-reveal-visible .index-trust-pillar:nth-child(1) {
  transition-delay: 0.06s;
}
.index-trust-section.scroll-reveal-visible .index-trust-pillar:nth-child(2) {
  transition-delay: 0.12s;
}
.index-trust-section.scroll-reveal-visible .index-trust-pillar:nth-child(3) {
  transition-delay: 0.18s;
}
.index-trust-section.scroll-reveal-visible .index-trust-pillar:nth-child(4) {
  transition-delay: 0.24s;
}

.index-support-section .index-help-card {
  opacity: 0;
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.index-support-section.scroll-reveal-visible .index-help-card {
  opacity: 1;
}
.index-support-section.scroll-reveal-visible .index-help-card:nth-child(1) {
  transition-delay: 0.1s;
}
.index-support-section.scroll-reveal-visible .index-help-card:nth-child(2) {
  transition-delay: 0.18s;
}
.index-support-section.scroll-reveal-visible .index-help-card:nth-child(3) {
  transition-delay: 0.26s;
}

.index-laptop-img {
  transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}
.index-laptop-tilt:hover .index-laptop-img {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  .index-laptop-section .index-reveal-item,
  .index-watch-section .index-reveal-item,
  .index-shop-header .index-reveal-item,
  .index-trade-section .index-reveal-item,
  .index-support-section .index-reveal-item {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .index-shop-section .index-cat-card,
  .index-trust-section .index-trust-pillar,
  .index-support-section .index-help-card {
    opacity: 1 !important;
    transition: none !important;
  }
  .index-watch-bg-drift,
  .index-watch-violet-halo {
    animation: none !important;
  }
  .index-cat-card:hover .index-cat-card-img,
  .index-laptop-tilt:hover .index-laptop-img {
    transform: none;
  }
}
</style>
