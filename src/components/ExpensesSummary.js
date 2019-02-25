import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selecteExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  return (
    <h1>
      Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'}{' '}
      totalling {numeral(expenseTotal / 100).format('$0,0.00')}
    </h1>
  );
};

const mapStateToProps = state => {
  const visisbleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visisbleExpenses.length,
    exensesTotal: selecteExpensesTotal(visisbleExpenses)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
