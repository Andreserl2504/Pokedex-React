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

  const urlArrayFilter = useRef([]);
  const prevArrayURL = useRef([]);
  const prevFilter = useRef([...filter]);
  const pokemonElements = useRef();

  const [observer] = useIntersetionObserver(
    pokemonElements,
    urlArrayFilter.current,
    setPokemonInfo,
    setIsLoading,
    setIsError,
    setErrorMessage
  );

  useEffect(() => {
    if (
      pokemonElements.current !== undefined &&
      pokemonElements.current.children !== undefined &&
      pokemonElements.current.children.length > 1 &&
      pokemonElements.current.children.length % 30 === 0 &&
      pokemonElements.current.children.length < 890 &&
      !isLoading
    ) {
      observer?.observe(
        pokemonElements.current.children[
          pokemonElements.current.children.length - 1
        ]
      );
    }
    return () => {
      observer?.disconnect();
    };
  }, [observer, isLoading]);

  useEffect(() => {
    if (
      filter[0] !== "none" &&
      !(
        prevFilter.current.includes(filter[0]) &&
        prevFilter.current.includes(filter[1])
      )
    ) {
      typesFetching(filter, setIsLoading, setIsError, setErrorMessage)
        .then((info) => {
          setPokemonInfo([]);
          if (filter.length === 2) {
            const infoFiltred = prevArrayURL.current.filter((url) => {
              return info.some((secUrl) => secUrl === url);
            });
            if (infoFiltred.length > 0) {
              prevArrayURL.current = [...info];
              urlArrayFilter.current = [...infoFiltred];
              return pokemonFetching(
                0,
                infoFiltred,
                setIsLoading,
                setIsError,
                setErrorMessage
              );
            }
          } else {
            prevArrayURL.current = [...info];
            urlArrayFilter.current = [...info];
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
            ? setPokemonInfo(
                data.filter((element) => {
                  return element !== undefined && element.id <= 890;
                })
              )
            : setPokemonInfo([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (filter[0] === "none") {
      setPokemonInfo([]);
      pokemonFetching(0, [], setIsLoading, setIsError, setErrorMessage)
        .then(setPokemonInfo)
        .finally(() => setIsLoading(false));
    }

    prevFilter.current = [...filter];
  }, [filter]);

  return { pokemonInfo, isError, isLoading, errorMessage, pokemonElements };
}
