import { shallow } from 'enzyme';
import React from 'react';
import DashboardPage from '../../components/ExpenseDashboardPage';

test('should should render dashboard correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
