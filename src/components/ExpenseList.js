import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {expenses.map(expense => (
      <ExpenseItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectedExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);
