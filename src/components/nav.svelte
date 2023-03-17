<script>
    import SearchIcon from "../assets/static/searchIcon.svg";
</script>
<nav class=" text-white flex w-full justify-around items-center gap-2 fixed bottom-0 left-0 right-0 pb-2 bg-cyan-600 z-10 shadow-lg">
    <a  class="text-xl" href="/">Home</a>
    <a href="#search" class="flex items-center justify-center rounded-full p-2 z-10 -mt-4 bg-cyan-600">
        <img src={SearchIcon} alt="" class="h-8 w-8 stroke-white">
    </a>
    <a class="text-xl" href="/about">About</a>
</nav>