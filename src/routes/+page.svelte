<script>
    import {pokemonList} from "../stores/pokestore"
    // $ sign is to actual access the data inside the writable store
    // console.log($pokemonList)
</script>
<svelte:head>
    <title>
        Svelte Pokedex
    </title>
</svelte:head>
<h1>Svelte Kit Pokedex</h1>
{#each $pokemonList as pokemon }
<img src={pokemon.image} alt={`${pokemon.name} image`}>
<p> {pokemon.name} <span> ID: {pokemon.id}</span></p>
    
{/each}
