import { useCallback, useEffect, useState } from 'react'
const POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/'

export default function PokemonDropDown() {
  const [pokemonData, setPokemonData] = useState(null)
  const [activePokemon, setActivePokemon] = useState('')
  const [abilities, setAbilities] = useState(null)
  const [visitedPokemons, setVisitedPokemons] = useState({})

  const fetchPokemonData = useCallback(async () => {
    try {
      const res = await fetch(POKEMONS_URL)
      const data = await res.json()
      setPokemonData(data?.results)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchAbilities = useCallback(async () => {
    try {
      // caching requests
      if (visitedPokemons?.[activePokemon]) {
        setAbilities(visitedPokemons[activePokemon])
        return
      }
      const res = await fetch(activePokemon)
      const data = await res.json()
      setVisitedPokemons(prevPokemons => ({
        ...prevPokemons,
        [activePokemon]: data?.abilities,
      }))
      setAbilities(data?.abilities)
    } catch (error) {
      console.log(error)
    }
  }, [activePokemon])

  useEffect(() => {
    fetchPokemonData()
  }, [fetchPokemonData])

  useEffect(() => {
    fetchAbilities()
  }, [activePokemon, fetchAbilities])

  const handlePokemonSelect = e => {
    setActivePokemon(e.target.value)
  }
  console.log({ visitedPokemons })

  return (
    <div>
      <h1>Pokemon Data</h1>
      <h2>List of Pokemon Available:</h2>
      {pokemonData && pokemonData?.length > 0 && (
        <select onChange={handlePokemonSelect}>
          {pokemonData?.map(pokemon => {
            return (
              <option key={pokemon?.url} value={pokemon?.url}>
                {pokemon?.name}
              </option>
            )
          })}
        </select>
      )}
      {abilities && (
        <div>
          <h3>Abilities</h3>
          <ul>
            {abilities?.map(({ ability, id }) => {
              return <li key={id}>{ability.name}</li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
