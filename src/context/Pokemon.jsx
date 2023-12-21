import { createContext, useState, useContext } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { useEffect } from "react";
import { FilterContext } from "./Filters";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    if (filter.length < 3) {
      pokemonFetching(setIsLoading,filter).then(data => {
        setPokemonInfo(data.filter(element => element !== undefined))
        setIsLoading(false);
      })
    }
  }, [filter])
  
  
  return (
    <PokemonContext.Provider value={{pokemonInfo , isLoading}}>
      {children}
    </PokemonContext.Provider>
  );
};
