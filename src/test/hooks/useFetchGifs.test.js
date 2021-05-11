import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('tests in useFetrchGifs', () => {
  it('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('test'))
    const { images, loading } = result.current;
    await waitForNextUpdate();
    expect(images).toEqual([]);
    expect(loading).toBeTruthy();
  });
  it('should return a list of images and the loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('test'))
    await waitForNextUpdate();
    const { images, loading } = result.current;
    expect(images.length).toBe(10);
    expect(loading).toBe(false);
  });
});

