<script>
    import Nav from "../components/nav.svelte";
</script>

<Nav/>
<div class="p-4 max-w-6xl mx-auto bg-slate-100 lg:mt-10">    
    <slot></slot>
</div>
<footer class="py-4 max-lg:mb-10">
    <p class="text-center">Visit <a class="text-blue-300" href="https://www.youtube.com/watch?v=UU7MgYIbtAk&ab_channel=JamesQQuick">James Q Quick</a> to learn more!</p>
</footer>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>