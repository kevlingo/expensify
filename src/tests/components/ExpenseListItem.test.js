import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenes';

test('should render expense list item with supplied data', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
