import { useState, useEffect } from 'react'
import { DEBOUNCE_DELAY } from '@/shared/constants/app'

export const useDebounce = (value: string, delay: number = DEBOUNCE_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
