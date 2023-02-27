export async function load({ fetch, params}) {
    const id = params.slug;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeData = await res.json();
    return { pokeData };
}