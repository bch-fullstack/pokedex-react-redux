export const initPokemon = dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'INITIAL_API_CALL',
                data: data
            })
        })
        .catch(err => console.log(err)) 
}

export const getPokemons = (dispatch, index, specificUrl) => {
    const params = '?limit=20&offset=' + (index - 1) * 20
    const apiUrl = specificUrl ? specificUrl : 'https://pokeapi.co/api/v2/pokemon/' + params;

    fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'POKEMON_LIST_UPDATED',
                data: data
            })
        })
        .catch(err => console.log(err)) 
}