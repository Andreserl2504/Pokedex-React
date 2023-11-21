import { useEffect, useState } from "react";
import { pokemonFetching } from "../logic/pokemonFetching";


export const usePokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    useEffect((() => {
        const catchData = async () => {
            const newPokemonInfo = await pokemonFetching()
            setPokemonInfo(newPokemonInfo)
        }
        catchData()
    }),[])
    
    return pokemonInfo
}