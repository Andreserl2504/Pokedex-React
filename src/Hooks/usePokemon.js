import { useEffect, useState } from "react";
// import { filter } from "../logic/filters"


const URLAPI = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonLength = 151;


export const usePokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    const pokemonFetching = async () => {
        let newPokemonInfo = [];
        for (let i = 1; i < pokemonLength + 1; i++) {
            try{
                const pokemonFetching = await fetch(URLAPI + i)
                const pokemonJSON = pokemonFetching.ok ? await pokemonFetching.json() : false;
                newPokemonInfo.push(pokemonJSON);
            }
            catch(e) {
                console.log('Error: ', e);
            }
        }
        setPokemonInfo(newPokemonInfo)
    }
    
    useEffect((()=> {
        pokemonFetching()
    }),[])
    
    return pokemonInfo
}