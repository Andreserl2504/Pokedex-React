import { useEffect, useState } from "react";
import { usePokemonFetching } from "./usePokemonFetching";

export const usePokemon = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const newPokemonInfo = usePokemonFetching();
  useEffect(() => {
    const catchData = () => {
      setPokemonInfo(newPokemonInfo);
    };
    catchData();
  }, []);
  console.log(pokemonInfo)
  return pokemonInfo;
};
