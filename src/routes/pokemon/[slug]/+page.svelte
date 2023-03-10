<script>
    // universal data prop
    // https://kit.svelte.dev/docs/load#page-data
    /** @type {import('./$types').PageData} */
    import PokemonType from '../../../components/pokemonType.svelte';
    export let data;
    // console.log(data)
</script>
<svelte:head>
    <title>
        Pokedex: {data.pokeData.name.charAt(0).toUpperCase() + data.pokeData.name.slice(1)}
    </title>
</svelte:head>
<h1 class="text-3xl text-center">{data.pokeData.name.toUpperCase()}</h1>
<div class="flex flex-col items-center">
    <span class="block text-slate-500">{data.pokeData.id}</span>
    <img class="h-40 w-40" src={data.pokeData.sprites.other["official-artwork"]["front_default"]} alt={`Pokemon ${data.pokeData.name} official default artwork`}>
    <div class="flex gap-2">
    {#each data.pokeData.types as type }
            <PokemonType {type} />
    {/each}
    </div>
    <p>Height: <span>{data.pokeData.height / 10} m</span></p>
    <p>Weight: <span>{(data.pokeData.weight / 10).toFixed(1)} kg</span></p>
</div>