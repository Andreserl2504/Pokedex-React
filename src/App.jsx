import { Nav } from "./components/nav";
import { Pokemon } from "./components/Pokemon";
import { Footer } from "./components/Footer";
import { PokemonProvider } from "./context/Pokemon";
import { FilterProvider } from "./context/Filters";

export function App() {
  // const pokemonInfo = [];
  // const { filter } = useContext(FilterContext);
  // const pokemonFilter = (pokemon) => {
  //   return pokemon.filter((pokemon) => {
  //     return (
  //       filter.includes("none") ||
  //       (pokemon.types.includes(filter[0]) && filter.length == 1) ||
  //       (pokemon.types.includes(filter[0]) &&
  //         pokemon.types.includes(filter[1]) &&
  //         filter.length == 2)
  //     );
  //   });
  // };

  // const pokemonFiltred = pokemonInfo ? pokemonFilter(pokemonInfo) : null;
  
  return (
    <PokemonProvider>
      <FilterProvider>
        <Nav />
        <Pokemon />
        <Footer />
      </FilterProvider>
    </PokemonProvider>
  );
}
