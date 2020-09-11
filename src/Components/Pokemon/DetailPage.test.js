import React from 'react'

import { shallow } from 'enzyme'
import DetailPage from './DetailPage'

test('<DetailPage> should receive the id props', () => {
    // when something beyond this point, makes a fetch call
    // mock the functionality of fetch, makes no API call, but return Promise.resolve()
    // as the API response
    jest.spyOn(global, 'fetch').mockImplementation(function(){
        return Promise.resolve({
            ok: true,
            json: () => {}
        })
    })

    // Render the DetailPage component with shallow tool
    // there is going to be a fetch call in here, that will activates our previous
    // line to overwrite fetch functionality
    var wrap = shallow(<DetailPage match={{ params: { id: 25 } }}/>)

    // we expect the fetch call to be triggered once at this point
    expect(global.fetch).toHaveBeenCalledTimes(1)

    // we expect the fetch call to be called with the following parameter
    expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25')

    // process.nextTick(() => {
    //     wrap.update()
    //     console.log(wrap.debug())
    //     done()
    // })       
});