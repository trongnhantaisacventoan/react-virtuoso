import React from 'react'

export type CallbackRefParam = HTMLElement | null

export function useSizeWithElRef(callback: (e: HTMLElement) => void, enabled = true, useMyWindow?: Window) {
  const ref = React.useRef<CallbackRefParam>(null)

  let callbackRef = (_el: CallbackRefParam) => {
    void 0
  }

  if (typeof ResizeObserver !== 'undefined') {
    const observer = React.useMemo(() => {
      return new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const element = entries[0].target as HTMLElement
        if (element.offsetParent !== null) {
          callback(element)
        }
      })
    }, [callback])

    const callBack1 = React.useCallback(() => {
      if (ref.current) {
        callback(ref.current)
      }
    }, [callback, ref])

    callbackRef = (elRef: CallbackRefParam) => {
      if (elRef && enabled) {
        observer.observe(elRef)
        useMyWindow?.addEventListener('resize', callBack1)
        ref.current = elRef
      } else {
        useMyWindow?.removeEventListener('resize', callBack1)
        if (ref.current) {
          observer.unobserve(ref.current)
        }
        ref.current = null
      }
    }
  }

  return { ref, callbackRef }
}

export default function useSize(callback: (e: HTMLElement) => void, enabled = true) {
  return useSizeWithElRef(callback, enabled).callbackRef
}
