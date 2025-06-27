import debounce from "lodash.debounce"
import { useCallback, useEffect, useState } from "react"

const COUNTRIES_URL = "https://restcountries.com/v3.1/name"

export default function AutoCompleteSimpler() {
  /*
  Steps
  1. Create query and suggestions array
  2. Create input field
  3. Create a handler which updates input and calls the API
  4. Create a list component where all the results are rendered
  */

  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleOnChange = e => {
    setQuery(e.target.value)
  }

  const fetchSuggestions = useCallback(async () => {
    if (!query.trim()) {
      setSuggestions([])
      return
    }

    const res = await fetch(`${COUNTRIES_URL}/${query}`)
    const data = await res.json()
    setSuggestions(
      data.map(country => ({
        name: country.name.common,
        flag: country.flag,
      }))
    )
  }, [query])

  useEffect(() => {
    fetchSuggestions()
  }, [query, fetchSuggestions])

  console.log(suggestions)

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>Search Countries</h2>
      <input
        type="text"
        value={query}
        onChange={handleOnChange}
        placeholder="Type a country name"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "8px",
        }}
      />
      {suggestions.length > 0 && (
        <ul style={{ padding: 0, margin: 0 }}>
          {suggestions.map(country => (
            <li
              key={country.name}
              style={{
                listStyle: "none",
                padding: "8px 12px",
                borderBottom: "1px solid #ccc",
                cursor: "pointer",
              }}
              onClick={() => {
                setQuery(country.name)
                setSuggestions([])
              }}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
