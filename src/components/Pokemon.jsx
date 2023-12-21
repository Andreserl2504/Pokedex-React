import { ImgTypes } from "./ImgTypes";
import '../Styles/main.css'
import { PokemonContext } from "../context/Pokemon";
import { useContext } from "react";

export function Pokemon() {
  const { pokemonInfo, isLoading } = useContext(PokemonContext) 
  console.log(pokemonInfo)
  return (
    <main className="all-pokemones" id="pokemonList">
        {pokemonInfo?.length > 0 && !isLoading ? (
        pokemonInfo.map((pokemon) => (
          <div key={pokemon.id} className="pokemon">
            <span>{`#${String(pokemon.id).padStart(3, "0")}`}</span>
            <div className="pokemon-icon-container">
              <img src={pokemon.iconUrl} className="pokemon-icon" />
            </div>
            <div>
              <img src={pokemon.imageUrl} className="pokemon-img" />
            </div>
            <span>{pokemon.name}</span>
            <div className="types">
              <ImgTypes Types={pokemon.types} />
            </div>
          </div>
        ))
      ) : isLoading ? (
        <h1>loading...</h1>
        ) : !isLoading && pokemonInfo?.length == 0 ? (
        <h1>Not Found</h1>
      ) : <h1></h1>}
    </main>
  );
}
