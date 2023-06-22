<svelte:head>
    <title>
        About the Svelte Pokedex
    </title>
</svelte:head>
<script>
    let milestones = 
    [
        {
            id:1,
            objective: "Deploy in vercel",
            done: true
        },
        {
            id:2,
            objective: "Pagination",
            done: false
        },
        {
            id:3,
            objective: "Data visualization on pokemons",
            done: false
        },
        {
            id:4,
            objective: "All pokemons available",
            done: false
        },
    ];
</script>
<h1 class="text-4xl text-center">About section</h1>
<section class="p-4">
    <h2 class="text-xl">Hey everyone 👋</h2>
    <cite class="block p-6">"Thank you everyone for using this pokedex. I'm really exited to keep upgrading this Svelte proyect and make it more informative and visually stunning."<br>
    </cite>
    <span class="text-gray-600">Here are some of my milestones to keep on track:</span>
    <div class="p-2">
        {#each milestones as milestone (milestone.id) }
            <label class="block">
                <input type="checkbox" disabled checked={milestone.done} >{milestone.objective}
            </label>
        {/each}
    </div>
</section>

