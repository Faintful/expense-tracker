import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('');

  const selectYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter initialYear={year} onSelectYear={selectYearHandler} />
      {expenses.map((expense, index) => (
        <ExpenseItem key={expenses[index].id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
