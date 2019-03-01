import {
  addExpense,
  editExpense,
  removeExpense,
  setExpenses
} from '../../actions/expenses';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenes';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const result = expensesReducer(
    expenses,
    removeExpense({ id: expenses[1].id })
  );
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const result = expensesReducer(expenses, removeExpense({ id: '123' }));
  expect(result).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '123',
    description: 'test',
    note: '',
    amount: 100000,
    createdAt: 1000
  };
  const result = expensesReducer(expenses, addExpense(expense));
  expect(result).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const result = expensesReducer(expenses, editExpense('1', { amount: -1 }));
  expect(result[0].amount).toBe(-1);
});

test('should not edit an expense if id is not found', () => {
  const result = expensesReducer(expenses, editExpense('123', { amount: -1 }));
  expect(result).toEqual(expenses);
});

test('should set expenes', () => {
  const action = setExpenses([expenses[1]]);
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
