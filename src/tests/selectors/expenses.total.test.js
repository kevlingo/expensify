import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenes';

test('should return 0 if there are no expenses', () => {
  const total = getExpenseTotal([]);
  expect(total).toBe(0);
});

test('should add up a single expense', () => {
  const total = getExpenseTotal([expenses[0]]);
  expect(total).toBe(195);
});

test('should add up multiple expenses', () => {
  const total = getExpenseTotal(expenses);
  expect(total).toBe(114195);
});
