import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategory tests', () => {
  let addCategory = jest.fn();
  let wrapper = shallow(<AddCategory addCategory={addCategory} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory addCategory={addCategory} />);
  });
  it('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the input text', () => {
    const input = wrapper.find('input');
    const value = 'This is a test';
    input.simulate('change', { target: { value } });
    const inputAfter = wrapper.find('input');
    expect(inputAfter.prop('value')).toBe(value);
  });
  it(`shouldn't post the info when the input is empty`, () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(addCategory).not.toHaveBeenCalled();
  });
  it('should post the info and cleans the text input', () => {
    const input = wrapper.find('input');
    const value = 'This is a test';
    input.simulate('change', { target: { value } });
    const inputFilled = wrapper.find('input');
    expect(inputFilled.prop('value')).toBe(value);
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    const inputCleaned = wrapper.find('input');
    expect(addCategory).toHaveBeenCalled();
    expect(inputCleaned.prop('value')).toBe('');
  });
});
