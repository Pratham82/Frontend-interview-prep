import { useState, useEffect, useCallback } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)

  const fetchData = useCallback(
    async (fetchUrl: string) => {
      setIsLoading(true)
      try {
        if (!url) {
          return
        }
        const res = await fetch(fetchUrl)
        const fetchedData = await res.json()
        if (fetchedData) {
          setData(fetchedData)
          setIsLoading(false)
        }
      } catch (e) {
        setIsError(e)
        setIsLoading(false)
      }
    },
    [url]
  )

  useEffect(() => {
    fetchData(url)
  }, [fetchData, url])

  return {
    data,
    isLoading,
    isError,
  }
}
export { useFetch }
