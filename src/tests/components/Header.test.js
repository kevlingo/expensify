import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

test('should should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
});
