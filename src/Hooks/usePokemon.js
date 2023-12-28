import { useState, useContext, useEffect } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { typesFetching } from "../service/typePokemonFetching";
import { FilterContext } from "../context/Filters";

export function usePokemon() {
  const { filter } = useContext(FilterContext);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [prevFilter, setPrevFilter] = useState([...filter]);
  const [prevArrayURL, setPrevArrayURL] = useState([]);
  const [pokemonInScreen, setPokemonInScreen] = useState(0);

  useEffect(() => {
    if (
      filter[0] !== "none" &&
      !(prevFilter.includes(filter[0]) && prevFilter.includes(filter[1]))
    ) {
      typesFetching(filter, setIsLoading, setIsError, setErrorMessage)
        .then((info) => {
          setPrevArrayURL([...info]);
          setPokemonInfo([]);
          if (filter.length === 2) {
            const infoFiltred = prevArrayURL.filter((url) => {
              return info.some((secUrl) => secUrl === url);
            });
            if (infoFiltred.length > 0) {
              return pokemonFetching(
                infoFiltred,
                setIsLoading,
                setIsError,
                setErrorMessage
              );
            }
          } else {
            return pokemonFetching(
              info,
              setIsLoading,
              setIsError,
              setErrorMessage
            );
          }
        })
        .then((data) => {
          data ? setPokemonInfo(data.filter((element) => element !== undefined)) : setPokemonInfo([]);
        })
        .finally(() => setIsLoading(false));
    } else if (filter[0] === "none") {
      setPokemonInfo([]);
      pokemonFetching([], setIsLoading, setIsError, setErrorMessage)
        .then(setPokemonInfo)
        .finally(() => setIsLoading(false));
    }

    setPrevFilter([...filter]);
  }, [filter]);

  return { pokemonInfo, isError, isLoading, errorMessage };
}
