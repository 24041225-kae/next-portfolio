import React, { useCallback, useEffect, useState } from 'react' // imports react hooks

export const useDotButton = (emblaApi) => { // hook for dots
  const [selectedIndex, setSelectedIndex] = useState(0) // state for selected index
  const [scrollSnaps, setScrollSnaps] = useState([]) // state for scroll snaps

  const onDotButtonClick = useCallback(
    (index) => { // handles dot click
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => { // handles init
    setScrollSnaps(emblaApi.scrollSnapList())  // gets scroll snaps
  }, [])

  const onSelect = useCallback((emblaApi) => { // handles select
    setSelectedIndex(emblaApi.selectedScrollSnap())  // gets selected snap
  }, [])

  useEffect(() => { // runs on init
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

export const DotButton = (props) => { // dot button component
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}