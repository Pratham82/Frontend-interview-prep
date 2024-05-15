import { useState, useEffect } from 'react'

const useDebounce = (value: string, delay = 500) => {
  const [debouncedText, setDebouncedText] = useState<string>(value)

  useEffect(() => {
    // * add delay for setting the valye
    const timeOut = setTimeout(() => {
      setDebouncedText(debouncedText)
    }, delay)

    // * run clearTimeout in a cleanup function
    return () => clearTimeout(timeOut)
  }, [debouncedText, delay])

  return debouncedText
}
export { useDebounce }
