import { useEffect, useRef } from "react";
import { pokemonFetching } from "../service/pokemonFetching";

export const useIntersetionObserver = (
  pokemonElements,
  urlArrayFilter,
  setPokemonInfo,
  setIsLoading,
  setIsError,
  setErrorMessage
) => {
  const observer = useRef(
    new IntersectionObserver((intersection) => {
      console.log(urlArrayFilter);
      if (
        intersection[0].isIntersecting &&
        pokemonElements.current.children[0].children.length % 30 === 0
      ) {
        observer.current.unobserve(
          pokemonElements.current.children[0].children[
            pokemonElements.current.children[0].children.length - 1
          ]
        );
        if (urlArrayFilter.length >= 1) {
          pokemonFetching(
            pokemonElements.current.children[0].children.length,
            urlArrayFilter,
            setIsLoading,
            setIsError,
            setErrorMessage
          )
            .then((info) => {
              setPokemonInfo((prevState) => prevState.concat(info));
            })
            .finally(() => setIsLoading(false));
        } else {
          pokemonFetching(
            pokemonElements.current.children[0].children.length,
            [],
            setIsLoading,
            setIsError,
            setErrorMessage
          )
            .then((info) => {
              setPokemonInfo((prevState) => prevState.concat(info));
            })
            .finally(() => setIsLoading(false));
        }
        console.log("hi");
      }
    }, {})
  );

  useEffect(() => {}, []);

  return [observer.current];
};
