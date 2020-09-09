import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

test('SearchBar state should be updated upon input change', () => {
    const wrap = shallow(<SearchBar/>)
    
    expect(wrap.state()).toEqual({})

    wrap.find('input#search').simulate('change', {
        target: { 
            value: 'hello',
            id: 'search'
        }
    })

    expect(wrap.state()).toEqual({ search: 'hello' })
})

test('SearchBar state should be updated upon input change', () => {
    const wrap = shallow(<SearchBar/>)
    const searchBox = wrap.find('input#search')

    expect(searchBox.length).toEqual(1)
})

test('SearchBar state should be updated upon input change', () => {
    const wrap = shallow(<SearchBar/>)
    const submitBtn = wrap.find('.submit')

    expect(submitBtn.length).toEqual(1)
})