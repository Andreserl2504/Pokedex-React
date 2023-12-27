import { PokemonContext } from "../context/Pokemon";
import { useContext } from "react";
import { AllPokemon } from "./AllPokemon";
import { IsLoading } from "./isLoading";
import { NotFound } from "./NotFound";
import { IsMessageError } from "./IsMessageError";
import "../Styles/main.css";

export function Pokemon() {
  const { pokemonInfo, isLoading, isError, errorMessage } =
    useContext(PokemonContext);

  return (
    <main className="all-pokemones" id="pokemonList">
      {pokemonInfo?.length > 0 && !isLoading && !isError ? (
        <AllPokemon pokemon={pokemonInfo} />
      ) : isLoading && !isError ? (
        <IsLoading />
      ) : !isLoading && pokemonInfo?.length == 0 && !isError ? (
        <NotFound />
      ) : (
        <IsMessageError>{errorMessage}</IsMessageError>
      )}
    </main>
  );
}
