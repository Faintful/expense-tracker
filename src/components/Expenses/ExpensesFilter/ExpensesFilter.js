import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ onSelectYear, initialYear, years }) => {
  const onSelectHandler = (event) => {
    onSelectYear(parseInt(event.target.value));
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="yearFilter">Filter by year</label>
        <select value={initialYear} id="yearFilter" onChange={onSelectHandler}>
          {years.map((year, index) => (
            <option value={year} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
