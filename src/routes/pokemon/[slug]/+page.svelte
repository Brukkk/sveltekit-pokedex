<script>
    // universal data prop
    // https://kit.svelte.dev/docs/load#page-data
    /** @type {import('./$types').PageData} */

    export let data;
    console.log(data)
</script>
<svelte:head>
    <title>
        Pokedex: {data.pokeData.name.charAt(0).toUpperCase() + data.pokeData.name.slice(1)}
    </title>
</svelte:head>
<h1>{data.pokeData.name.toUpperCase()}</h1>