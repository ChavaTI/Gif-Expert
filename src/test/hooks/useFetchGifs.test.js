import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('tests in useFetrchGifs', () => {
  it('should return the initial state', () => {
    const { result } = renderHook( () => useFetchGifs('test') )  
    const { images, loading } = result.current;
    expect(images).toEqual([]);
    expect(loading).toBeTruthy();
  });
});

