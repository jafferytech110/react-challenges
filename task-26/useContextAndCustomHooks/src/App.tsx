import { useEffect, useState, createContext, useContext } from 'react'
import './App.css'

interface Pokemon {
  id: number
  name: string
  type: string[]
  hp: number
  attack: number
  defence: number
  special_attack: number
  special_defence: number
  speed: number
}

function usePokemon ():{
  pokemon: Pokemon[]
} {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(() => {
    fetch('/pokemon.json')
    .then(res => res.json())
    .then(data => setPokemon(data))
  },[])
  return {pokemon}
}

const PokemonList = () => {
  // context using
  const {pokemon} = useContext(PokemonContext)
  return (
    <div>
      {pokemon.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  )
}

// context creation
const PokemonContext = createContext({
  pokemon: [] as Pokemon[]
})

function App() {
  const {pokemon} = usePokemon()

  return (
    // context provider
    <PokemonContext.Provider value={usePokemon()}>
    <div className="App">
      <PokemonList />
    </div>
    </PokemonContext.Provider>
  )
}

export default App
