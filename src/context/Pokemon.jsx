import { createContext, useState, useContext } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { typesFetching } from "../service/typePokemonFetching";
import { useEffect } from "react";
import { FilterContext } from "./Filters";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const { filter } = useContext(FilterContext);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [prevFilter, setPrevFilter] = useState([...filter]);
  const [prevArrayURL, setPrevArrayURL] = useState([]);

  // prevFilter.includes(filter[0]) && prevFilter.includes(filter[1]) ||

  useEffect(() => {
    if (filter[0] !== "none") {
      typesFetching(filter)
        .then((info) => {
          setPrevArrayURL([...info]);

          if (filter.length === 2) {
            const infoFiltred = prevArrayURL.filter((url) => {
              return info.some((secUrl) => secUrl === url);
            });
            pokemonFetching(
              setIsLoading,
              infoFiltred,
              setIsError,
              setErrorMessage
            ).then((data) => {
              setPokemonInfo(data.filter((element) => element !== undefined));
            });
          } else {
            pokemonFetching(
              setIsLoading,
              info,
              setIsError,
              setErrorMessage
            ).then(setPokemonInfo);
          }
        })
        .finally(() => setIsLoading(false));
    } else if (filter[0] === "none") {
      pokemonFetching(setIsLoading, [], setIsError, setErrorMessage)
        .then(setPokemonInfo)
        .finally(() => setIsLoading(false));
    }

    setPrevFilter([...filter]);
  }, [filter]);

  return (
    <PokemonContext.Provider
      value={{ pokemonInfo, isLoading, isError, errorMessage }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
