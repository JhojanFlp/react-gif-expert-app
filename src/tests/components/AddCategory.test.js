import React from 'react';
import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory.js';

describe('Test in AddCategory', () => {
  const addCategory = jest.fn();
  const value = 'Dragon Ball Super';
  let wrapper = shallow(<AddCategory addCategory={addCategory} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory addCategory={addCategory} />);
  })
  test('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  })
  // test('should change input', () => {
  //   const input = wrapper.find('input');
  //   input.simulate('change', { target: { value } })
  // })
  test('should no add category', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });
    expect(addCategory).not.toHaveBeenCalled();
  })
  test('should add category and clean input', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value }});
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    // expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledTimes(1);
    expect(input.prop('value')).toBe('')
  })
  
})
