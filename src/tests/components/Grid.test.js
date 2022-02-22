import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import Grid from '../../components/Grid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test in Grid', () => {
  const category = 'Kimetsu';
  // const wrapper = shallow(<Grid category={category} />);
  test('should render component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<Grid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })
  test('should render component with gifs', () => {
    const gifs = [{ id: "1", url: "https://example.com/gif.gif" , title: "Título"}];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<Grid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })
  test('should render component with information', () => {
    const gifs = [{ id: "1", url: "https://example.com/gif.gif" , title: "Título"}];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<Grid category={category} />);
    // No tag p with loading...
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('Gif').length).toBe(gifs.length);
  })
})
