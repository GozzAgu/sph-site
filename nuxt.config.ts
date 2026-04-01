// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'SmartPhoneHub',
      link: [
        { rel: 'icon', type: 'image/png', href: '/sphLogo.png' }
      ]
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID,
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production',
      sanityApiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
      sanityUseCdn: (process.env.SANITY_USE_CDN || 'true') === 'true',
    },
  },
})