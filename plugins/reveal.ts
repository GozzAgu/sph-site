export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  function getObserver() {
    observer ??= new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting)
          continue
        entry.target.classList.add('is-revealed')
        observer?.unobserve(entry.target)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    return observer
  }

  // Put v-reveal on wrappers, not on elements with their own hover transitions.
  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: () => ({}),
    mounted(el, binding) {
      if (!('IntersectionObserver' in window))
        return
      // Content already on screen at hydration stays put instead of flashing.
      if (el.getBoundingClientRect().top < window.innerHeight)
        return
      el.classList.add('reveal')
      if (binding.value)
        el.style.transitionDelay = `${binding.value * 80}ms`
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
