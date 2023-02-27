<script>
    // this expects information as the props of the component
    export let pokemonInfo;
</script>
<div class="bg-slate-200 opacity-75 hover:opacity-100 transition-opacity ease-in-out hover:-translate-y-1 hover:scale-110 p-2">
    <p class="text-center text-2xl uppercase"> <span>{pokemonInfo.id}. </span>
        {pokemonInfo.name}</p>
    <img class="mx-auto aspect-square h-40 w-40" src={pokemonInfo.image} alt={`${pokemonInfo.name} sprite`}>

</div>