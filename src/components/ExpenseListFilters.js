import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  state = {
    calandarFocused: null
  };
  onSortChange = e => {
    e.target.value === 'amount'
      ? this.props.sortByAmount()
      : this.props.sortByDate();
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calandarFocused => {
    this.setState(() => ({ calandarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calandarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});
const mapStateToProps = ({ filters }) => ({
  filters
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
