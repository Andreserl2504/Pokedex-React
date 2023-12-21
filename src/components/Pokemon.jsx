import { PokemonContext } from "../context/Pokemon";
import { useContext } from "react";
import { AllPokemon } from "./AllPokemon";
import { IsLoading } from "./isLoading";
import { NotFound } from "./NotFound";
import '../Styles/main.css'

export function Pokemon() {
  const { pokemonInfo, isLoading } = useContext(PokemonContext) 
  return (
    <main className="all-pokemones" id="pokemonList">
        {
        pokemonInfo?.length > 0 && !isLoading ? <AllPokemon pokemon={pokemonInfo}/>
        : isLoading ? <IsLoading/>
        : !isLoading && pokemonInfo?.length == 0 ? <NotFound/>
        : <h1></h1>
        }
    </main>
  );
}
