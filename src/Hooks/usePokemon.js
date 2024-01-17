import { useState, useContext, useEffect, useRef } from "react";
import { pokemonFetching } from "../service/pokemonFetching";
import { typesFetching } from "../service/typePokemonFetching";
import { FilterContext } from "../context/Filters";
import { useIntersetionObserver } from "./useIntersectionObserver";

export function usePokemon() {
  const { filter } = useContext(FilterContext);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [prevFilter, setPrevFilter] = useState([...filter]);
  const [prevArrayURL, setPrevArrayURL] = useState([]);
  const [urlArrayFilter, setUrlArrayFilter] = useState([]);
  const pokemonElements = useRef();
  const [observer] = useIntersetionObserver(
    pokemonElements,
    urlArrayFilter,
    setPokemonInfo,
    setIsLoading,
    setIsError,
    setErrorMessage
  );

  useEffect(() => {
    if (
      pokemonElements.current !== undefined &&
      pokemonElements.current.children[0].children !== undefined &&
      pokemonElements.current.children[0].children.length > 1 &&
      !isLoading
    ) {
      console.log(
        pokemonElements.current.children[0].children[
          pokemonElements.current.children[0].children.length - 1
        ]
      );
      observer.observe(
        pokemonElements.current.children[0].children[
          pokemonElements.current.children[0].children.length - 1
        ]
      );
    }
  }, [isLoading]);

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
              console.log(infoFiltred);
              setUrlArrayFilter(...infoFiltred);
              return pokemonFetching(
                0,
                infoFiltred,
                setIsLoading,
                setIsError,
                setErrorMessage
              );
            }
          } else {
            console.log(info);
            setUrlArrayFilter([...info]);
            return pokemonFetching(
              0,
              info,
              setIsLoading,
              setIsError,
              setErrorMessage
            );
          }
        })
        .then((data) => {
          data
            ? setPokemonInfo(data.filter((element) => element !== undefined))
            : setPokemonInfo([]);
        })
        .finally(() => setIsLoading(false));
    } else if (filter[0] === "none") {
      setPokemonInfo([]);
      pokemonFetching(0, [], setIsLoading, setIsError, setErrorMessage)
        .then(setPokemonInfo)
        .finally(() => setIsLoading(false));
    }

    setPrevFilter([...filter]);
  }, [filter]);

  return { pokemonInfo, isError, isLoading, errorMessage, pokemonElements };
}
