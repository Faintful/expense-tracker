import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

var years = [2022, 2021, 2020, 2019];

const Expenses = ({ expenses }) => {
  const [yearState, setYear] = useState(2019);

  const yearsWarning = (yearsArray) => {
    yearsArray = yearsArray.filter((year) => year !== yearState);
    yearsArray = yearsArray.sort();
    return yearsArray;
  };

  const selectYearHandler = (year) => {
    setYear(year);
  };

  function filterByYear(expenses) {
    return expenses.filter(
      (expense) => expense.date.getFullYear() === yearState
    );
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        initialYear={yearState}
        onSelectYear={selectYearHandler}
        years={years}
      />
      <p>{`Data for years ${yearsWarning(years)[0]}, ${
        yearsWarning(years)[1]
      }, and ${yearsWarning(years)[2]} is hidden`}</p>
      {filterByYear(expenses).length > 0 ? (
        filterByYear(expenses).map((expense, index) => (
          <ExpenseItem key={expenses[index].id} {...expense} />
        ))
      ) : (
        <p>No expenses found</p>
      )}
    </Card>
  );
};

export default Expenses;
