<script>
    import {pokemonList} from "../stores/pokestore"
    import PokemonCard from "../components/pokemonCard.svelte";
    // $ sign is to actual access the data inside the writable store
    // console.log($pokemonList)
</script>
<svelte:head>
    <title>
        Svelte Pokedex
    </title>
</svelte:head>
<h1 class="text-4xl font-bold underline text-center my-8 uppercase">Svelte Kit Pokedex</h1>
<input type="text" placeholder="Search your pokemon" class="w-full bg-slate-50 rounded-lg p-4 text-lg border border-slate-300 mb-2 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300">
<div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
    {#each $pokemonList as pokemon }
        <PokemonCard pokemonInfo={pokemon} />
    {/each}
</div>
