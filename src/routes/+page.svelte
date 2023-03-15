<script>
    import {pokemonList} from "../stores/pokestore"
    import PokemonCard from "../components/pokemonCard.svelte";
    // $ sign is to actual access the data inside the writable store
    // console.log($pokemonList)
    let searchTerm = "";
    let filteredPokemon = [];

    $ : {
        // This will re-run as part of the reactivity any time something changes in this scope
        if (searchTerm){
            filteredPokemon = $pokemonList.filter(poke => poke.name.includes(searchTerm.toLowerCase()))
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
<h1 class="text-4xl font-bold underline text-center my-8 uppercase">Svelte Kit Pokedex</h1>
<input bind:value={searchTerm} type="text" placeholder="Search your pokemon" class="w-full my-8 bg-slate-50 rounded-lg p-4 text-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300" >
<div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
    {#each filteredPokemon as pokemon (pokemon.id) }
        <PokemonCard pokemonInfo={pokemon} />
    {/each}
</div>
