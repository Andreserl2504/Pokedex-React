import { useContext } from "react";
import { Nav } from "./components/nav";
import { Pokemon } from "./components/Pokemon";
import { usePokemon } from "./Hooks/usePokemon";
import { FilterContext } from "./context/Filters";
import { Footer } from "./components/Footer";

export function App() {
  const pokemonInfo = usePokemon();
  const { filter } = useContext(FilterContext);
  const pokemonFilter = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return (
        filter.includes("none") ||
        (pokemon.types.includes(filter[0]) && filter.length == 1) ||
        (pokemon.types.includes(filter[0]) &&
          pokemon.types.includes(filter[1]) &&
          filter.length == 2)
      );
    });
  };

  const pokemonFiltred = pokemonInfo ? pokemonFilter(pokemonInfo) : null;

  return (
    <>
      <Nav />
      <Pokemon pokemonInfo={pokemonFiltred} />
      <Footer/>
    </>
  );
}
