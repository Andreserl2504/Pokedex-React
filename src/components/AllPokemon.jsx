import { ImgTypes } from "./ImgTypes";

export function AllPokemon({ pokemon }) {
    return(
        pokemon.map((pokemon) => (
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
    )
}