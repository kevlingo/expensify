import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action generators
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
const exitExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
const setTextFilter = text => ({
  type: 'SET_TEXT_FILTER',
  text
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else return expense;
      });
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = !startDateMatch || expense.createdAt >= startDate;
      const endDateMatch = !endDate || expense.createdAt <= endDate;
      const textMatch =
        !text || expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visisibleExpenses);
});

store.dispatch(addExpense({ description: 'two', amount: 500, createdAt: 2 }));
store.dispatch(addExpense({ description: 'one', amount: 5000, createdAt: 1 }));
store.dispatch(addExpense({ description: 'three', amount: 400, createdAt: 3 }));
store.dispatch(addExpense({ description: 'four', amount: 450, createdAt: 4 }));

// store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(exitExpense(exp2.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('RE'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(223));

const demoState = {
  expenses: [
    {
      id: '23423wefm',
      description: 'Jan rent',
      note: 'final payment',
      amount: 65000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
