const URLAPI = "https://pokeapi.co/api/v2/pokemon/";
const pokemonLength = 3;

export const pokemonFetching = () => {
  const pokemonInfo = []
  for (let i = 1; i < pokemonLength + 1; i++) {
    fetch(URLAPI + i).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Fetching error')
      }
    }).then(info => {
      pokemonInfo.push({
        id: info.id,
        name: info.name.charAt(0).toUpperCase() + info.name.slice(1),
        imageUrl: info.sprites.other["official-artwork"].front_default,
        iconUrl: info.sprites.versions["generation-viii"].icons.front_default,
        types: [
          info.types[0].type.name.charAt(0).toUpperCase() +
          info.types[0].type.name.slice(1),
    
          info.types[1]
            ? info.types[1].type.name.charAt(0).toUpperCase() +
            info.types[1].type.name.slice(1)
            : null,
        ]})
    }).catch(e => {
      console.log(e)
    })
      
  }
  return { pokemonInfo }
};