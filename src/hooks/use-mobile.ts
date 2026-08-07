import * as React from "react"

const MOBILE_BREAKPOINT = 1024
const MOBILE_MEDIA_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

export function useIsMobile() {
  return React.useSyncExternalStore(
    (onStoreChange) => {
      const mql = window.matchMedia(MOBILE_MEDIA_QUERY)
      mql.addEventListener("change", onStoreChange)

      return () => mql.removeEventListener("change", onStoreChange)
    },
    () => window.matchMedia(MOBILE_MEDIA_QUERY).matches,
    () => false
  )
}
