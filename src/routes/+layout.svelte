<script>
    import Nav from "../components/nav.svelte";
</script>

<Nav/>
<div class="p-4 max-w-6xl mx-auto">    
    <slot></slot>
</div>
<footer>
    <p>Visit <a href="https://www.youtube.com/watch?v=UU7MgYIbtAk&ab_channel=JamesQQuick">James Q Quick</a> to learn more!</p>
</footer>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>