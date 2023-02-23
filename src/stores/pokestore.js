import {writable} from "svelte/store";

export const pokemonList = writable([]);

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data,index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    })
    // Once we have our writable store to export, we set it with the information from the fetch function
    pokemonList.set(loadedPokemon);
    // Now we can consume this pokemonList in other components
}
// To make sure everything happens, we need to call our fetch function
fetchPokemon();