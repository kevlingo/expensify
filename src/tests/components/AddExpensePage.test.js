import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenes';

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test('should render Add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
