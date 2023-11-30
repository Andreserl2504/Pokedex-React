const URLAPI = "https://pokeapi.co/api/v2/pokemon/";
const pokemonLength = 151;

export const pokemonFetching = async () => {
  let newPokemonInfo = [];
  for (let i = 1; i < pokemonLength + 1; i++) {
    try {
      const pokemonFetching = await fetch(URLAPI + i);
      const pokemonJSON = pokemonFetching.ok
        ? await pokemonFetching.json()
        : false;
      newPokemonInfo.push(pokemonJSON);
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  return newPokemonInfo.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    imageUrl: pokemon.sprites.other["official-artwork"].front_default,
    iconUrl: pokemon.sprites.versions["generation-viii"].icons.front_default,
    types: [
      pokemon.types[0].type.name.charAt(0).toUpperCase() +
        pokemon.types[0].type.name.slice(1),
      pokemon.types[1]
        ? pokemon.types[1].type.name.charAt(0).toUpperCase() +
          pokemon.types[1].type.name.slice(1)
        : null,
    ],
  }));
};
