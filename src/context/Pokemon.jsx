import { createContext} from "react";
import { usePokemon } from "../Hooks/usePokemon";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const { pokemonInfo,isError,isLoading,errorMessage } = usePokemon()

  return (
    <PokemonContext.Provider
      value={{ pokemonInfo, isLoading, isError, errorMessage }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
