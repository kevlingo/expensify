import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenes';

test('should render the expense summary correctly with one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render the expense summary correctly with more than one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expenseTotal={2354432} />
  );
  expect(wrapper).toMatchSnapshot();
});
