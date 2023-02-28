<script>
    export let type;

    $: borderTypeColor = type.type.name === "normal" ? "border-neutral-300" :
        type.type.name === "fighting" ? "border-amber-800" :
        type.type.name === "flying" ? "border-violet-300" :
        type.type.name === "poison" ? "border-fuchsia-700" :
        type.type.name === "ground" ? "border-amber-400" :
        type.type.name === "rock" ? "border-amber-200":
        type.type.name === "bug" ? "border-lime-300":
        type.type.name === "ghost" ? "border-purple-700" :
        type.type.name === "steel" ? "border-grey-300":
        type.type.name === "fire" ? "border-red-500":
        type.type.name === "water" ? "border-blue-500":
        type.type.name === "grass" ? "border-lime-600":
        type.type.name === "electric" ? "border-yellow-300":
        type.type.name === "psychic" ? "border-rose-400":
        type.type.name === "ice" ? "border-cyan-300":
        type.type.name === "dragon" ? "border-violet-600":
        type.type.name === "dark" ? "border-grey-700":
        type.type.name === "fairy" ? "border-pink-400":
        type.type.name === "shadow" ? "border-purple-900" :
        "";

</script>

<span class="inline-block px-2 border-4 rounded-xl {borderTypeColor}">{type.type.name}</span>