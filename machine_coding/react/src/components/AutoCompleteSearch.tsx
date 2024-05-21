import React, { ChangeEvent, useState } from 'react'
import { useFetch } from '../hooks'

interface IAutoCompleteSearchProps {
  id: string
  name: string
  label: string
  placeholder: string
  autoComplete: boolean
  maxItems: number
  debounceWait: number
  listBox: (items: any, activeIndex: number) => JSX.Element
  noItemsMessage: () => JSX.Element
  errorMessage: () => JSX.Element
  styles: {
    input: React.CSSProperties
    label: React.CSSProperties
  }
}
export default function AutoCompleteSearch(props: IAutoCompleteSearchProps) {
  const {
    id,
    name,
    label,
    placeholder,
    autoComplete,
    maxItems,
    listBox,
    styles,
  } = props

  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(null)
  const { data, isError, isLoading, setData } = useFetch({
    url: `https://swapi.dev/api/people/?search=`,
    query,
    debounceWait: 400,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const matchingCharacters = data?.results
  const handleKeyUp = e => {
    const keyCode = e.keyCode
    switch (true) {
      case keyCode === 13: {
        // enter
        if (activeIndex === null) return
        setQuery(matchingCharacters[activeIndex].name)
        setData(null)
        setActiveIndex(null)
        break
      }
      case keyCode === 38: {
        // up
        if (activeIndex === 0) setActiveIndex(matchingCharacters.length - 1)
        else setActiveIndex(prevIdx => prevIdx - 1)
        break
      }
      case keyCode === 40: {
        // down
        if (
          activeIndex === null ||
          activeIndex === matchingCharacters.length - 1
        ) {
          setActiveIndex(0)
        } else setActiveIndex(prevIdx => prevIdx + 1)
        break
      }
      default:
        return
    }
  }

  return (
    <div style={{}}>
      <label>{label}</label>
      <br />
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        style={styles.input}
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        onKeyDown={handleKeyUp}
      />
      {matchingCharacters &&
        matchingCharacters.length > 0 &&
        listBox(matchingCharacters, activeIndex)}
    </div>
  )
}
