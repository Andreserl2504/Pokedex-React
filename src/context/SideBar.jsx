import { createContext, useState } from 'react'
import { PokemonContext } from './Pokemon'
import { useContext } from 'react'

export const SideBarContext = createContext()

export function SideBarProvider({ children }) {
  const { pokemonInfo } = useContext(PokemonContext)
  const [sideBarBtn, setSideBarBtn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [pokemonInTeam, setPokemonInteam] = useState([])
  const handleSideBar = () => {
    setSideBarBtn((prevState) => !prevState)
  }
  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState)
    document.querySelector('html').classList.toggle('dark')
  }
  const addToTeam = (id) => {
    if (pokemonInTeam.length < 6) {
      const pokemonIndex = pokemonInfo.findIndex((pokemon) => pokemon.id === id)
      setPokemonInteam((prevState) => [...prevState, pokemonInfo[pokemonIndex]])
    }
  }
  const deletePokemon = (id) => {
    setPokemonInteam((prevState) =>
      prevState.filter((pokemon) => pokemon.id !== id)
    )
  }
  return (
    <SideBarContext.Provider
      value={{
        sideBarBtn,
        handleSideBar,
        darkMode,
        handleDarkMode,
        pokemonInTeam,
        addToTeam,
        deletePokemon
      }}
    >
      {children}
    </SideBarContext.Provider>
  )
}
