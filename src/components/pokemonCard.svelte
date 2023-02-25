<script>
    // this expects information as the props of the component
    export let pokemonInfo;
</script>
<div class="bg-slate-200 opacity-75 hover:opacity-100 transition-opacity ease-in-out hover:-translate-y-1 hover:scale-110 p-2">
    <span class=" block text-center">ID: {pokemonInfo.id}</span>
    <img class="mx-auto" src={pokemonInfo.image} alt={`${pokemonInfo.name} sprite`}>
    <p class="text-center">{pokemonInfo.name}</p>

</div>