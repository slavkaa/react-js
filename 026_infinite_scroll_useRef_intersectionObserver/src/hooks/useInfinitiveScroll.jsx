import {useEffect, useRef} from 'react'

export const useInfinitiveScroll = (ref, isShallLoad, isLoadingInProgress, loadMoreCallback) => {

  const observer = useRef()

  useEffect(() => {
    if (false === isLoadingInProgress) {
      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries, observer) => {
        if (entries && entries[0] && entries[0].isIntersecting && isShallLoad) {
          loadMoreCallback()
        }
      })

      observer.current.observe(ref.current)
    }
  }, [isLoadingInProgress])
}