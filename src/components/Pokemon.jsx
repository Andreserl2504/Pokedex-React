import { usePokemon } from "../Hooks/usePokemon"
import { ImgTypes } from "./ImgTypes"

export function Pokemon() {
    const pokemonInfo = usePokemon()
    return (
        <main className="all-pokemones" id="pokemonList">
            {   
                pokemonInfo ?
                pokemonInfo.map(pokemon => (
                    <div key={pokemon.id} className="pokemon">
                        <span>{`#${String(pokemon.id).padStart(3, "0")}`}</span>
                        <div className="pokemon-icon-container">
                            <img src={pokemon.sprites.versions["generation-viii"].icons.front_default} className="pokemon-icon" />
                        </div>
                        <div>
                            <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokemon-img"/>
                        </div>
                        <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                        <div className="types">
                            <ImgTypes Types={pokemon.types}/>
                        </div>
                    </div>
                )) : 
                <h1>loading</h1>
            }
        </main>
    )
}
