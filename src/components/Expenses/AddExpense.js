import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import './AddExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [displayState, setDisplayState] = useState(false);

  const formSubmitHandler = (newExpense) => {
    onAddExpense(newExpense);
  };

  const displayHandler = () =>
    displayState === false ? setDisplayState(true) : setDisplayState(false);

  if (displayState === true) {
    return (
      <div className='new-expense'>
        <ExpenseForm
          onFormSubmit={formSubmitHandler}
          onFormCancel={displayHandler}
        />
      </div>
    );
  }

  return (
    <div className='new-expense'>
      <button className='new-expense button' onClick={displayHandler}>
        Add New Expense
      </button>
    </div>
  );
};

export default NewExpense;
