export function useScrollReveal(options?: { threshold?: number; rootMargin?: string }) {
  const threshold = options?.threshold ?? 0.1
  const rootMargin = options?.rootMargin ?? '0px 0px -80px 0px'

  const observer = ref<IntersectionObserver | null>(null)
  const observedElements = ref<Set<Element>>(new Set())

  function observe(el: HTMLElement | null) {
    if (!el || observedElements.value.has(el)) return
    observedElements.value.add(el)
    observer.value?.observe(el)
  }

  function unobserve(el: HTMLElement | null) {
    if (!el) return
    observer.value?.unobserve(el)
    observedElements.value.delete(el)
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (entry.isIntersecting) {
            target.classList.add('scroll-reveal-visible')
            unobserve(target)
          }
        })
      },
      { threshold, rootMargin }
    )
  })

  onUnmounted(() => {
    observedElements.value.forEach((el) => observer.value?.unobserve(el))
    observer.value?.disconnect()
  })

  return { observe, unobserve }
}
