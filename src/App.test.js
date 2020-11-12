import React from 'react'
import { shallow } from 'enzyme'
import App from './App';

describe('Test App Component >>>: ', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	})

	test('will be mounted: ', () => {
		expect(wrapper.length).toBe(1);
	})
})
