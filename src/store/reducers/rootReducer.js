const initialState = {
    pokemons: [],
    previousPage: null,
    nextPage: null,
    numberOfPage: 0,
    currentPage: 1
}

const getNumberOfPage = count => {
    return Math.ceil(count / 20);
}

const getCurrentPage = ({ next, count }) => {
    if (next === null) {
        return getNumberOfPage(count)
    }
    const queryString = next.split('?')[1]
    const searchParams = new URLSearchParams(queryString)
    const offset = searchParams.get('offset')
    return offset/20
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) { // check if action.type match any of the cases
        case 'INITIAL_API_CALL': // if action.type === 'GET_POKEMONS'
            console.log('Making the initial calls ...');

            return {
                ...state,
                previousPage: action.data.previous,
                nextPage: action.data.next,
                numberOfPage: getNumberOfPage(action.data.count),
                pokemons: action.data.results
            };
        
        case 'POKEMON_LIST_UPDATED':
            return {
                ...state,
                previousPage: action.data.previous,
                nextPage: action.data.next,
                pokemons: action.data.results,
                currentPage: getCurrentPage(action.data)
            }    

        default: // if non of the cases match
            return state;
    }
}

export default rootReducer