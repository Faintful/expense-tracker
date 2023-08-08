import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onSelectYear, initialYear }) => {
  const onSelectHandler = (event) => {
    onSelectYear(parseInt(event.target.value));
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="yearFilter">Filter by year</label>
        <select id="yearFilter" onChange={onSelectHandler}>
          <option value="">Select a Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
