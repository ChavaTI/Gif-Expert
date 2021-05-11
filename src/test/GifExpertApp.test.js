import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('test in GifExpertApp component', () => {
  const wrapper = shallow(<GifExpertApp />);
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a list of categories', () => {
    const categories = ['Peacky Blinders, Vikings'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
