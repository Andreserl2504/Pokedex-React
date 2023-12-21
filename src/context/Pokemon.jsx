import { createContext, useState, useContext } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { useEffect } from "react";
import { FilterContext } from "./Filters";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { changeFilter, filter } = useContext(FilterContext);
  const refreshPokemon = (event) => {
    changeFilter(event)
    console.log(filter)
    pokemonFetching(setIsLoading,filter).then(setPokemonInfo)
  };

  useEffect(() => {
    if (filter.length < 3) {
      pokemonFetching(setIsLoading,filter).then(setPokemonInfo)
    }
  }, [])
  
  
  return (
    <PokemonContext.Provider value={{pokemonInfo , isLoading, refreshPokemon}}>
      {children}
    </PokemonContext.Provider>
  );
};
