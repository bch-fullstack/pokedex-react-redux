import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme'

test('The <App> component structure', () => {
  const wrap = shallow(<App></App>)
  const container = wrap.find('.container')
  expect(container).toHaveLength(1)
});
