async function FetchMon () {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/quilava/');
    const data = await promise.json();

    
}