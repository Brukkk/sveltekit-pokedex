<script>
    import { onMount } from "svelte";
    import {pokemonList} from "../stores/pokestore"
    import PokemonCard from "../components/pokemonCard.svelte";
    import { fade } from 'svelte/transition';
    // $ sign is to actual access the data inside the writable store
    // console.log($pokemonList)
    let searchTerm = "";
    let filteredPokemon = null;
    let storeLoaded;

    onMount(async () => {
        storeLoaded = await $pokemonList
    });

    $ : {
        // This will re-run as part of the reactivity any time something changes in this scope
        if (searchTerm){
            filteredPokemon = $pokemonList.filter(poke => poke.name.includes(searchTerm.toLowerCase()) || poke.id == searchTerm)
        } else {
            filteredPokemon = [...$pokemonList]
        }
    }
</script>
<svelte:head>
    <title>
        Svelte Pokedex
    </title>
</svelte:head>
<h1 class="text-4xl font-bold underline text-center my-8 uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Svelte Kit Pokedex</h1>
<section id="search" class=" scroll-m-8">
    <input bind:value={searchTerm} type="text" placeholder="Search your pokemon" class="w-full my-8 bg-slate-50 rounded-lg p-4 text-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300" >
</section>
<div class="grid grid-cols-1 gap-8 sm sm:grid-cols-2 lg:grid-cols-3">
    {#if storeLoaded}
        {#each filteredPokemon as pokemon (pokemon.id) }
            <PokemonCard pokemonInfo={pokemon} />
        {/each}
    {:else}    
        <div transition:fade class="w-[352px] h-52 bg-slate-500 rounded-lg animate-pulse"></div>
        <div transition:fade class="w-[352px] h-52 bg-slate-500 rounded-lg animate-pulse"></div>
        <div transition:fade class="w-[352px] h-52 bg-slate-500 rounded-lg animate-pulse"></div>
        <div transition:fade class="w-[352px] h-52 bg-slate-500 rounded-lg animate-pulse"></div>
        <div transition:fade class="w-[352px] h-52 bg-slate-500 rounded-lg animate-pulse"></div>
        <div transition:fade class="w-[352px] h-52 bg-slate-500 rounded-lg animate-pulse"></div>
    {/if}
</div>
