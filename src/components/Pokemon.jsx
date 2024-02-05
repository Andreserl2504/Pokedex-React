import { PokemonContext } from '../context/Pokemon'
import { useContext } from 'react'
import { AllPokemon } from './pokemonComponents/AllPokemon'
import { IsLoading } from './pokemonComponents/IsLoading'
import { NotFound } from './pokemonComponents/NotFound'
import { IsMessageError } from './pokemonComponents/IsMessageError'

export function Pokemon() {
  const { pokemonInfo, isLoading, isError, errorMessage, pokemonElements } =
    useContext(PokemonContext)

  return (
    <main
      className=' dark:bg-black-darkMode  min-w-[calc(200px + 2rem)] flex justify-center flex-wrap gap-5 bg-white-default mx-10 mt-[50px] mb-[100px] p-10 rounded-md shadow-md'
      ref={pokemonElements}
    >
      {pokemonInfo?.length > 0 && !isLoading && !isError ? (
        <AllPokemon pokemon={pokemonInfo}/>
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
  )
}
