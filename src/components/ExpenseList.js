import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div>
    {expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      expenses.map(expense => <ExpenseItem key={expense.id} {...expense} />)
    )}
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectedExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);
