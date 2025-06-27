const ALL_POKEMONS_API_URL = "https://pokeapi.co/api/v2/pokemon/"

const pokemonCache = new Map()

const fetchPokemons = async (pokemonId = "") => {
  if (pokemonCache.has(pokemonId)) {
    return pokemonCache.get(pokemonId)
  } else {
    const res = await fetch(`${ALL_POKEMONS_API_URL}/${pokemonId}`)
    const data = await res.json()
    pokemonCache.set(pokemonId, data)
    return data
  }
}

const showPokemons = async () => {
  const pokemonList = await fetchPokemons()
  console.log(pokemonList)
  // create pokemon select
  const pokemonSelect = document.getElementById("pokemon-select")
  const pokemonDetailsDiv = document.getElementById("pokemon-details")

  // create pokemon options
  // All pokemons
  pokemonList?.results?.forEach(pokemon => {
    const option = document.createElement("option")
    option.value = pokemon.name
    option.textContent = pokemon.name
    pokemonSelect.appendChild(option)
  })

  if (pokemonSelect) {
    pokemonSelect.addEventListener("change", async e => {
      const pokemonName = e.target.value
      const pokeData = await fetchPokemons(pokemonName)

      // set pookedata in the dom
      const newDiv = document.createElement("div")
      newDiv.style.cssText =
        "display:flex;justify-content:center;align-items:center;flex-direction:column"

      const pokemonDisplayName = document.createElement("p")
      pokemonDisplayName.textContent = pokeData.name

      const pokemonImage = document.createElement("img")
      pokemonImage.style.width = "150px"
      pokemonImage.style.height = "150px"
      pokemonImage.src = pokeData.sprites.front_default

      newDiv.appendChild(pokemonImage)
      newDiv.appendChild(pokemonDisplayName)
      pokemonDetailsDiv.replaceChildren(newDiv)
    })
  }
}

export function init() {
  const template = document.getElementById("pokemon-template")
  if (template) {
    // const select = document.getElementById("pokmon-select")

    const clone = template.content.cloneNode(true)
    document.getElementById("app").appendChild(clone)

    showPokemons()
  }
}
