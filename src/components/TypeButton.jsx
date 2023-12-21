import '../Styles/types_btn.css'
import { useContext } from "react";
import { FilterContext } from '../context/Filters';

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

  const {changeFilter} = useContext(FilterContext)

  return (
    <>
      {pokemonTypes.map((type) => (
        <li key={type} className="nav-item">
          <button className={`btn btn-header ${type}`} onClick={changeFilter}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </li>
      ))}
    </>
  );
}
