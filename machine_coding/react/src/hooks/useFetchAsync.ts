import { useState, useEffect, useCallback } from 'react'

import debounce from 'lodash.debounce'

export interface IUseFetchAsyncProps {
  url: string
  query?: string
  debounceWait?: number
}
const useFetch = (props: IUseFetchAsyncProps) => {
  const { url, query, debounceWait = 0 } = props
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<unknown>(null)

  const fetchData = useCallback(
    debounce(async (fetchUrl: string) => {
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
    }, debounceWait),
    [url]
  )

  useEffect(() => {
    if (!query) {
      setData(null)
      setIsError(null)
      return
    }
    fetchData(`${url}${query}`)
  }, [fetchData, query, url])

  return {
    data,
    isLoading,
    isError,
    setData,
  }
}
export { useFetch }
