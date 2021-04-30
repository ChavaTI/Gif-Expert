import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem tests', () => {
  let title;
  let url;
  let wrapper;
  beforeEach(() => {
    title = 'Test';
    url = 'test.com';
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });
  it('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a <p> with the title', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe(title);
  });
  it('should have the correct image', () => {
    const img = wrapper.find('img');
    expect( img.props().src ).toBe(url);
    expect( img.props().alt ).toBe(title);
  });
  it('should be a card', () => {
    const root = wrapper.find('div');
    expect(root.props().className.includes('card')).toBe(true);
  });
});
