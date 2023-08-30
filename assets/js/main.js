const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

const convertPokemonToLi = (pokemon) => {
    return `
    <li class="list-item">
        <div class="card-header">
            <span class="name">${pokemon.name}</span>
            <span class="number">#001</span>
        </div>
        <div class="details">
            <ol class="types-list">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img class="img-list" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>
    `
}

// const pokemonList = document.getElementsById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody.results))
    .then((pokemons) => {
        const pokemonList = document.getElementsById('pokemonList')
        for(let i=0; i<pokemons.length; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHtml += convertPokemonToLi(pokemon)
        }
    })
    .catch((error) => console.log(error))