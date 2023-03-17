<script>
    // this expects information as the props of the component
    export let pokemonInfo;
    import { getBackgroundColor } from "../utils/bgColor"
    import { fromTypeColor, toTypeColor } from "../utils/gradientTypeColor"
    let bgColor = getBackgroundColor(pokemonInfo.types[0], pokemonInfo.types[1])
    let fromColor = "";
    let toColor = "";
    if ( pokemonInfo.types.length >= 2){
        fromColor = fromTypeColor(pokemonInfo.types[0])
        toColor = toTypeColor(pokemonInfo.types[1])
    }
</script>

<a href={`/pokemon/${pokemonInfo.id}`} class="block w-full h-full {bgColor} {fromColor} {toColor} rounded-lg lg:opacity-75 lg:hover:opacity-100 transition-opacity lg:hover:-translate-y-1 lg:hover:scale-110">
    <div class="relative">
        <span class="absolute text-slate-600 top-1 right-2 font-semibold text-2xl">#{pokemonInfo.id}</span>
        <img class="mx-auto aspect-square h-40 w-40" src={pokemonInfo.image} alt={`${pokemonInfo.name} sprite`}>
        <p class=" py-1 rounded-b-lg text-center text-2xl first-letter:uppercase text-white bg-gradient-to-t from-gray-500 ">{pokemonInfo.name}</p>

    </div>
    
</a>