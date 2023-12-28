const URLAPI = "https://pokeapi.co/api/v2/pokemon/";
// const pokemonLimit = 251;
let pokemonLength = 30;

export const pokemonFetching = (
  urlArray,
  setIsLoading,
  setIsError,
  setErrorMessage
) => {
  setIsLoading(true);
  return Promise.all(
    Array.from(
      {
        length:
          urlArray.length < pokemonLength && urlArray.length > 0
            ? urlArray.length
            : pokemonLength,
      },
      (_, i) =>
        fetch(
          `${urlArray.length === 0 ? URLAPI + parseInt(i + 1) : urlArray[i]}`
        )
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
            return {
              id: info.id,
              name: info.name.charAt(0).toUpperCase() + info.name.slice(1),
              imageUrl: info.sprites.other["official-artwork"].front_default,
              iconUrl:
                info.sprites.versions["generation-viii"].icons.front_default,
              types: types,
            };
          })
          .catch((e) => {
            console.log(e);
            setIsError(true);
            setErrorMessage("❌ Fetching Error...");
          })
    )
  );
};
