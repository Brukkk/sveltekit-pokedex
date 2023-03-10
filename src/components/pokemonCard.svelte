<script>
    // this expects information as the props of the component
    export let pokemonInfo;
</script>
<a href={`/pokemon/${pokemonInfo.id}`} class="bg-slate-200 rounded-lg opacity-75 hover:opacity-100 transition-opacity ease-in-out hover:-translate-y-1 hover:scale-110 p-2">
    <div class="relative">
        <span class="absolute top-2 right-2 font-semibold">#{pokemonInfo.id}</span>
        <img class="mx-auto aspect-square h-40 w-40" src={pokemonInfo.image} alt={`${pokemonInfo.name} sprite`}>
        <p class="text-center text-2xl first-letter:uppercase">{pokemonInfo.name}</p>

    </div>
    
</a>