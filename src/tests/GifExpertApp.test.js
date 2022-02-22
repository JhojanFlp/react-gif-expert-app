import React from 'react';
import { shallow } from 'enzyme';

import GifExpertApp from '../GifExpertApp.js';

describe('Test in GifExpertApp', () => {
  const categories = ['Kimetsu', 'Dragon Ball'];
  test('should render component', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })
  test('should categories', () => {
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Grid').length).toBe(categories.length)

  })
  
})
