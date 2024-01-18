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
  const observer = useRef()
  const options = {
    root: null,
    rootMargion: '0',
    threshold: 1.0
  }

  useEffect(() => {
    observer.current = new IntersectionObserver((intersection) => {
      if (
        intersection[0].isIntersecting &&
        pokemonElements.current.children.length % 30 === 0
      ) {
        observer.current.unobserve(
          pokemonElements.current.children[
            pokemonElements.current.children.length - 1
          ],
        )
        if (urlArrayFilter.length >= 1) {
          pokemonFetching(
            pokemonElements.current.children.length,
            urlArrayFilter,
            setIsLoading,
            setIsError,
            setErrorMessage,
          )
            .then((info) => {
              setPokemonInfo((prevState) => prevState.concat(info.filter(element => {
                return element !== undefined && element.id <= 890;
              })))
            })
            .finally(() => setIsLoading(false))
        } else {
          pokemonFetching(
            pokemonElements.current.children.length,
            [],
            setIsLoading,
            setIsError,
            setErrorMessage,
          )
            .then((info) => {
              setPokemonInfo((prevState) => prevState.concat(info.filter(element => {
                return element !== undefined && element.id <= 890;
              })))
            })
            .finally(() => setIsLoading(false))
        }
      }
    }, options)

  }, [
    pokemonElements,
    urlArrayFilter,
    setPokemonInfo,
    setIsLoading,
    setIsError,
    setErrorMessage,
  ])

  return [observer.current];
};
