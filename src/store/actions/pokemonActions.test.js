import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './pokemonActions'
import * as pokemonMock from './pokemonMock'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Test action creators >>>: ', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    test('initPokemon action: ', () => {
        fetchMock.getOnce('https://pokeapi.co/api/v2/pokemon/', {
            body: pokemonMock.response,
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [{
            type: 'INITIAL_API_CALL',
            data: pokemonMock.response
        }]

        const store = mockStore({ pokemons: [] })

        // (dispatch) => fetch('something from somewhere').then().then(() => dispatch())
        return store.dispatch(actions.initPokemon).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })


})
