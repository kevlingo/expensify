import { shallow } from 'enzyme';
import React from 'react';
import NFP from '../../components/NotFoundPage';

test('should should render 404 correctly', () => {
  const wrapper = shallow(<NFP />);
  expect(wrapper).toMatchSnapshot();
});
