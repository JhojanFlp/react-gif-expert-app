import React from 'react';
import { shallow } from 'enzyme';

import Gif from '../../components/Gif';

describe('Test in Gif.js', () => {
  const props = { id: '1', url: 'https://example.com', title: 'Título' };
  const wrapper = shallow(<Gif {...props} />);
  test('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  })
  test('should title prop in a p tag', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(props.title || props.id);
  })
  test('should img with props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(props.url);
    expect(img.prop('alt')).toBe(props.title)
  })
  test('should class animate__backInUp', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(div.hasClass('animate__backInUp')).toBe(true)
    expect(className.includes('animate__backInUp')).toBe(true);
  })
  
})
