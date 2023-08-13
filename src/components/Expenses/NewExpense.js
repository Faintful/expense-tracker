import React from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const formSubmitHandler = (newExpense) => {
    onAddExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onFormSubmit={formSubmitHandler} />
    </div>
  );
};

export default NewExpense;
