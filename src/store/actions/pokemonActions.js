export const getPokemons = dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'GET_POKEMONS',
                pokemons: data.results
            })
        })
        .catch(err => console.log(err))
    
}