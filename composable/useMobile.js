// composables/useMobile.js
import { ref, onMounted, onUnmounted } from 'vue'

const MOBILE_BREAKPOINT = 768

export function useMobile() {
  const isMobile = ref(undefined)

  const update = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  }

  onMounted(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    update()
    mediaQuery.addEventListener('change', update)
    window.addEventListener('resize', update)

    onUnmounted(() => {
      mediaQuery.removeEventListener('change', update)
      window.removeEventListener('resize', update)
    })
  })

  return { isMobile }
}
