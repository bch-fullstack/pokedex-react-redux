const initialState = {
    pokemons: [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) { // check if action.type match any of the cases
        case 'GET_POKEMONS': // if action.type === 'GET_POKEMONS'
            console.log('Trying to get pokemons...');
            return state;
        default: // if non of the cases match
            return state;
    }
}

export default rootReducer