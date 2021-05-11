import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid tests', () => {
  it('should render correctly', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      loading: true
    });
    let category = 'test';
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should show items when useFetchGifs hook load the data', () => {
    useFetchGifs.mockReturnValue({
      images: [
        {
          id: 'vPLWd7f9rDc9a',
          title: 'prince zuko avatar GIF',
          url:
            'https://media4.giphy.com/media/vPLWd7f9rDc9a/giphy.gif?cid=e78c1e51fw1h92p9pqq0zoxh5hafdb0aefh2i1gdskjvfda1&rid=giphy.gif&ct=g'
        }
      ],
      loading: false
    });
    let category = 'test';
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').exists()).toBe(true);
  });
  it('should have the same number of GifGridItem and images downloaded', () => {
    const images = [
      {
        id: 'vPLWd7f9rDc9a',
        title: 'prince zuko avatar GIF',
        url:
          'https://media4.giphy.com/media/vPLWd7f9rDc9a/giphy.gif?cid=e78c1e51fw1h92p9pqq0zoxh5hafdb0aefh2i1gdskjvfda1&rid=giphy.gif&ct=g'
      },
      {
        id: 'vPLWd7f9rDc9a',
        title: 'prince zuko avatar GIF',
        url:
          'https://media4.giphy.com/media/vPLWd7f9rDc9a/giphy.gif?cid=e78c1e51fw1h92p9pqq0zoxh5hafdb0aefh2i1gdskjvfda1&rid=giphy.gif&ct=g'
      }
    ];
    useFetchGifs.mockReturnValue({
      images,
      loading: false
    });
    let category = 'test';
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('GifGridItem').lenght).toBe(images.lenght);
  });
});
