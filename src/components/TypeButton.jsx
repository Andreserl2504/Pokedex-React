import { useContext } from 'react'
import { FilterContext } from '../context/Filters'

export function TypeButton() {
  const pokemonTypes = [
    'normal',
    'fire',
    'water',
    'grass',
    'ground',
    'rock',
    'poison',
    'bug',
    'electric',
    'flying',
    'fighting',
    'ice',
    'steel',
    'dark',
    'ghost',
    'psychic',
    'fairy',
    'dragon'
  ]

  const { changeFilter } = useContext(FilterContext)

  return (
    <>
      <li className='flex flex-wrap justify-center items-center'>
        {pokemonTypes.map((type) => (
          <button
            key={type}
            className={` ${type === 'dark' ? type + '-btn': type} text-white-default rounded-md m-1 p-2 
                        drop-shadow-md relative duration-300 hover:translate-y-[-2px]
                        `}
            onClick={changeFilter}
          >
            {type[0].toUpperCase() + type.slice(1)}
          </button>
        ))}
      </li>
    </>
  )
}
