import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
    />
  );
});

test('should render expense list filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data filters', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', { target: { value: 'test123' } });
  expect(setTextFilter).toHaveBeenLastCalledWith('test123');
});

test('should sort by date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' } });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
  });
  expect(setStartDate).toHaveBeenLastCalledWith(moment(0));
  expect(setEndDate).toHaveBeenLastCalledWith(moment(0).add(3, 'days'));
});

test('should handle date focus changes', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
  expect(wrapper.state('calandarFocused')).toBe('endDate');
});
