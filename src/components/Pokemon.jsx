import { PokemonContext } from "../context/Pokemon";
import { useContext } from "react";
import { AllPokemon } from "./pokemonComponents/AllPokemon";
import { IsLoading } from "./pokemonComponents/IsLoading";
import { NotFound } from "./pokemonComponents/NotFound";
import { IsMessageError } from "./pokemonComponents/IsMessageError";
import "../Styles/main.css";

export function Pokemon() {
  const { pokemonInfo, isLoading, isError, errorMessage, pokemonElements } =
    useContext(PokemonContext);

  return (
    <main className="all-pokemones" id="pokemonList" ref={pokemonElements}>
      {pokemonInfo?.length > 0 && !isLoading && !isError ? (
        <AllPokemon pokemon={pokemonInfo} />
      ) : pokemonInfo?.length > 0 && isLoading && !isError ? (
        <>
          <AllPokemon pokemon={pokemonInfo} />
          <IsLoading />
        </>
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
