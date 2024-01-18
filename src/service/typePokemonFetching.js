const URLAPI = "https://pokeapi.co/api/v2/type/";

export function typesFetching(
  filter,
  setIsLoading,
  setIsError,
  setErrorMessage
) {
  setIsLoading(true);
  const fetchURL =
    filter.length === 1
      ? URLAPI + filter[0].toLowerCase()
      : URLAPI + filter[1].toLowerCase();

  return new Promise((res) => {
    fetch(fetchURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("fetching failed");
        }
      })
      .then((json) => {
        res(
          Array.from({ length: json.pokemon.length }, (_, i) => {
            return json.pokemon[i].pokemon.url;
          })
        );
      })
      .catch(() => {
        setIsError(true);
        setErrorMessage("❌ Fetching error...");
      });
  });
}
