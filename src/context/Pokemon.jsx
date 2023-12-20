import { createContext, useState } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  useEffect(() => {
    pokemonFetching().then(setPokemonInfo);
  }, [])
  
  // const refreshPokemon = () => {};
  
  return (
    <PokemonContext.Provider value={[pokemonInfo]}>
      {children}
    </PokemonContext.Provider>
  );
};
