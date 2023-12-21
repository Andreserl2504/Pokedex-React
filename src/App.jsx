import { Nav } from "./components/nav";
import { Pokemon } from "./components/Pokemon";
import { Footer } from "./components/Footer";
import { PokemonProvider } from "./context/Pokemon";
import { FilterProvider } from "./context/Filters";

export function App() {
  return (
    <FilterProvider>
      <PokemonProvider>
        <Nav />
        <Pokemon />
        <Footer />
      </PokemonProvider>
    </FilterProvider>
  );
}
