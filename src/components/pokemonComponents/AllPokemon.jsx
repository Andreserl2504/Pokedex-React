import { ImgTypes } from '../ImgTypes'
import { Plus } from '../icons/icons'

export function AllPokemon({ pokemon }) {
  return pokemon?.map((pokemon) => (
    <div
      key={pokemon.id}
      className={` dark:bg-gray-darkMode dark:hover:bg-solidGray-darkMode flex justify-center items-center flex-col min-w-[200px] h-[220px] 
                bg-gray-default rounded-md shadow-md relative duration-150 
                hover:bg-gray-10 hover:shadow-lg hover:translate-y-[-2px]
                [&_span]:select-none [&_span]:font-kanit`}
    >
      <button className=' dark:bg-white-darkMode dark:[&_svg]:fill-white-default bg-white-default w-8 h-8 rounded-lg flex justify-center items-center absolute top-2 left-2 shadow-sm'>
        <Plus />
      </button>
      <span>{`#${String(pokemon.id).padStart(3, '0')}`}</span>
      <div className='dark:bg-white-darkMode flex justify-center w-[50px] h-[50px] pb-3 absolute top-2 right-2 bg-white-default rounded-lg shadow-sm select-none'>
        <img src={pokemon.iconUrl} />
      </div>
      <div className=' min-h-[100px] min-w-[100px]'>
        <img
          src={pokemon.imageUrl}
          className='max-h-[100px] max-w-[100px] select-none'
        />
      </div>
      <span>{pokemon.name}</span>
      <div className=' flex items-center gap-[2px] min-w-[35px] px-1 max-w-[80px] h-[35px] shadow-sm rounded-[25px] bg-white-default [&_img]:select-none [&_img]:w-[30px]'>
        <ImgTypes Types={pokemon.types} />
      </div>
    </div>
  ))
}
