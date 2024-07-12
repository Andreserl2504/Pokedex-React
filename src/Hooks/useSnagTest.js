import { useQuery } from '@tanstack/react-query'
import { Snag } from 'snag-query'

export function useSnagTest() {
  const snag = new Snag({ URL: 'https://pokeapi.co/api/v2/', header: 'JSON' })
  const { data } = useQuery({
    queryKey: ['pokemonTest'],
    queryFn: async () => {
      const { data: pokemon } = snag.getSnags({
        // paths: ['pokemon/1','pokemon/4','pokemon/7'],
        format: (pokemon) => {
          return {
            name: pokemon.name,
            id: pokemon.id
          }
        },
        createPathsFn: () => {
            return Array.from({length: 3}, (_,i) => {
                return `https://pokeapi.co/api/v2/pokemon/${i}`
            })
        }
      })
      return pokemon
    }
  })
  console.log(data)
}
