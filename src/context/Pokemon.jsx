import { createContext, useState } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  useEffect(() => {
    const { pokemonInfo: pokemonDataInfo } = pokemonFetching();
    setPokemonInfo([...pokemonDataInfo])
    console.log(pokemonDataInfo)
  }, [])
  // const refreshPokemon = () => {};

  return (
    <PokemonContext.Provider value={{ pokemonInfo: pokemonInfo }}>
      {children}
    </PokemonContext.Provider>
  );
};
