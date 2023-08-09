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
      {expenses.map((expense, index) => (
        <ExpenseItem key={expenses[index].id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
