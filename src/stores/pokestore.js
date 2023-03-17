import {writable} from "svelte/store";

export const pokemonList = writable([]);

const fetchTypes = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeData = await res.json();
    const pokeTypes = pokeData.types.map((type, index) => {
        return type.type.name
    })
    return [...pokeTypes]
}

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const res = await fetch(url);
    const data = await res.json();
    const pokemonPromises = data.results.map(async (data,index) => {
            const pokiTypes = await fetchTypes(index + 1);
            return {
                name: data.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
                types: pokiTypes
            }
    })
    // Once we have our writable store to export, we set it with the information from the fetch function
    const result = await Promise.all(pokemonPromises)
    pokemonList.set(result);
    // Now we can consume this pokemonList in other components
}
// To make sure everything happens, we need to call our fetch function
fetchPokemon();