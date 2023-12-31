import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

var years = [2022, 2021, 2020, 2019];

const Expenses = ({ expenses }) => {
  const [yearState, setYear] = useState(2019);

  function filterByYear(expenses, year) {
    return expenses.filter((expense) => expense.date.getFullYear() === year);
  }

  const filteredList = filterByYear(expenses, yearState);

  const yearsWarning = (yearsArray) => {
    yearsArray = yearsArray.filter((year) => year !== yearState);
    yearsArray = yearsArray.sort();
    return yearsArray;
  };

  const selectYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className='expenses'>
      <ExpensesChart expenses={filteredList}/>
      <ExpensesFilter
        initialYear={yearState}
        onSelectYear={selectYearHandler}
        years={years}
      />
      <p>{`Data for years ${yearsWarning(years)[0]}, ${
        yearsWarning(years)[1]
      }, and ${yearsWarning(years)[2]} is hidden`}</p>
      <ExpensesList expenses={filteredList} />
    </Card>
  );
};

export default Expenses;
