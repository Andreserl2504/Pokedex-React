import { Delete } from '../icons/icons'

export function WithPokemon({ teamPokemonInfo, deletePokemon }) {
  return (
    <section className=' grid gap-3 rounded-lg shadow-md border-2 border-white-default p-5'>
      {teamPokemonInfo?.map((pokemon) => (
        <div
          className=' flex items-center justify-between bg-white-default rounded-lg shadow-sm'
          key={self.crypto.randomUUID()}
        >
          <div className=' bg-gray-default min-w-18 h-full rounded-l-lg flex items-center justify-center'>
            <img className=' select-none' src={pokemon.iconUrl} />
          </div>
          <div className=' flex flex-col gap-[2px] my-2 font-kanit w-full px-4'>
            <span className=' select-none'>{pokemon.name}</span>

            <section className='flex gap-2 justify-start'>
              {pokemon.types.map((type) => {
                return type !== null ? (
                  <span
                    key={type}
                    className={`${
                      type === 'Dark'
                        ? type.toLowerCase() + '-btn'
                        : type.toLowerCase()
                    } text-white-default px-2 rounded-md text-sm select-none`}
                  >
                    {type}
                  </span>
                ) : (
                  ''
                )
              })}
            </section>
          </div>
          <div>
            <button
              onClick={() => deletePokemon(pokemon.id)}
              className=' flex justify-center items-center w-8 h-8 mr-4 bg-gray-default rounded-md'
            >
              <Delete />
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
