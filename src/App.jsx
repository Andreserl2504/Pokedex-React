import { useState } from "react"
import { Nav } from "./components/nav"
import { Pokemon } from "./components/Pokemon"
import { usePokemon } from "./Hooks/usePokemon"

export function App() {
    const pokemonInfo = usePokemon()
    const [filter, setFilter] = useState(['none']);
    const pokemonFilter = pokemon =>{
        return pokemon.filter(pokemon => {
            return (
                filter.includes('none') || (filter.includes(pokemon.types[0]) && filter.length == 1) || (filter.includes(pokemon.types[0]) && filter.includes(pokemon.types[1]) && filter.length == 2)
                )})
    }

    function useFilter(event) {
        if (!filter.includes(event.target.innerHTML) && filter.length < 2) {
            if (![...event.target.classList].includes(event.target.innerHTML + `-active`)) event.target.classList.value += ` ` + event.target.innerHTML.toLowerCase() + `-active`
            filter[0] == 'none' ? setFilter([event.target.innerHTML]) : setFilter([...filter, event.target.innerHTML])
        }
        else {
            if ([...event.target.classList].includes(event.target.innerHTML.toLowerCase() + `-active`)) {
                event.target.classList.value = event.target.classList.value.split(' ').slice(0,3).join(' ')
            }
            setFilter(filter.filter(type => type != event.target.innerHTML))
            if (filter && filter.length == 1) setFilter(['none'])
        }
    }
    const pokemonFiltred = pokemonInfo ? pokemonFilter(pokemonInfo) : null;

    return(
        <>
            <Nav filter={ useFilter }/>
            <Pokemon pokemonInfo={ pokemonFiltred }/>
        </>
    )
}