import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export default function AutoCompleteSearch() {
  /**
   * 1. Create input box
   * 2. Create input handler for updated query
   * 3. Create a function for fetching data from api
   * 4. Create an input handler for up, down and enter button
   */

  const [query, setQuery] = useState(null)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setIsError] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)

  const onHandleInputChange = e => {
    setQuery(e.target.value)
  }

  const onHandleKeyUp = e => {
    // handle enter, up and down
    const keyCode = e.keyCode
    switch (true) {
      // Enter
      case keyCode === 13: {
        if (activeIndex === null) return
        setQuery(data?.[activeIndex]?.name)
        setData(null)
        setActiveIndex(null)
        break
      }
      // up
      case keyCode === 38: {
        if (activeIndex === 0) {
          setActiveIndex(data.length - 1)
        } else {
          setActiveIndex(prevIdx => prevIdx - 1)
        }
        break
      }
      // down
      case keyCode === 40: {
        if (activeIndex === null || activeIndex === data.length - 1) {
          setActiveIndex(0)
        } else {
          setActiveIndex(prevIdx => prevIdx + 1)
        }
        break
      }
      default:
        return
    }
  }

  const fetchData = useCallback(
    debounce(async () => {
      if (!query) {
        return
      }
      setIsLoading(true)
      try {
        const data = await fetch(
          `https://swapi.dev/api/people/?search=${query}`
        )
        const res = await data.json()
        setData(res.results)
        setIsLoading(false)
      } catch (error) {
        setIsError(e)
        setIsLoading(false)
      }
    }, 400),
    [query]
  )

  useEffect(() => {
    fetchData()
  }, [fetchData, query])

  return (
    <div>
      <p>Star wars Characters</p>
      <p>Query: {query}</p>
      <input
        type="text"
        onChange={onHandleInputChange}
        onKeyDown={onHandleKeyUp}
        style={{
          padding: '10px 5px',
          width: '100%',
        }}
        value={query}
      />
      {data && (
        <ul
          style={{
            padding: 0,
            // border: `1px solid white`,
            marginTop: 0,
            width: '100%',
          }}
        >
          {data &&
            data.map((result, i) => {
              return (
                <li
                  style={{
                    paddingLeft: '8px',
                    listStyle: 'none',
                    padding: `10px 5px`,
                    borderBottom: `1px solid white`,
                    backgroundColor: activeIndex === i ? 'red' : 'transparent',
                  }}
                >
                  {result.name}
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}
