import '../Styles/types_btn.css'
import { useContext } from "react";
import {PokemonContext} from "../context/Pokemon"

export function TypeButton() {
  const pokemonTypes = [
    "normal",
    "fire",
    "water",
    "grass",
    "ground",
    "rock",
    "poison",
    "bug",
    "electric",
    "flying",
    "fighting",
    "ice",
    "steel",
    "dark",
    "ghost",
    "psychic",
    "fairy",
    "dragon",
  ];

  const {refreshPokemon} = useContext(PokemonContext)

  return (
    <>
      {pokemonTypes.map((type) => (
        <li key={type} className="nav-item">
          <button className={`btn btn-header ${type}`} onClick={refreshPokemon}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </li>
      ))}
    </>
  );
}
