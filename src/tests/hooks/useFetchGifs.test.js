import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test in useFetchGifs', () => {
  const category = 'Kimetsu';
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })
  test('should return gifs and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
})
