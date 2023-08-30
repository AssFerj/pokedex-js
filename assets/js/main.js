const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída!'))