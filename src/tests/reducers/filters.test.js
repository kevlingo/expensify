import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate
} from '../../actions/filters';
import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, sortByAmount());
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const state = filtersReducer(currentState, sortByDate());
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, setTextFilter('test'));
  expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, setStartDate(moment(0)));
  expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, setEndDate(moment(0)));
  expect(state.endDate).toEqual(moment(0));
});
