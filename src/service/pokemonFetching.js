const URLAPI = "https://pokeapi.co/api/v2/pokemon/";
const pokemonLimit = 251;
let pokemonLength = 20;

export const pokemonFetching = (setIsLoading, filter) => {
  setIsLoading(true);
  return Promise.all(
    Array.from({ length: pokemonLength }, (_, i) =>
      fetch(URLAPI + parseInt(i + 1))
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Fetching error");
          }
        })
        .then((info) => {
          const types = [
            info.types[0].type.name.charAt(0).toUpperCase() +
            info.types[0].type.name.slice(1),
            info.types[1]
              ? info.types[1].type.name.charAt(0).toUpperCase() +
                info.types[1].type.name.slice(1)
              : null,
          ];
          if (filter) {
            return {
              id: info.id,
              name: info.name.charAt(0).toUpperCase() + info.name.slice(1),
              imageUrl: info.sprites.other["official-artwork"].front_default,
              iconUrl:
                info.sprites.versions["generation-viii"].icons.front_default,
              types: types,
            };
          } else {
            console.log("filter");
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        })
    )
  );
};
