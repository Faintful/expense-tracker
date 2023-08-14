import { useState } from 'react';
import './ExpenseForm.css';

const initialState = {
  title: '',
  amount: '',
  date: '',
};

export default ({ onFormSubmit, onFormCancel }) => {
  const [input, setInput] = useState(initialState);

  const inputChangeHandler = ({ target: { name, value } }) =>
    setInput((prevState) => ({ ...prevState, [name]: value }));

  const submitHandler = (event) => {
    event.preventDefault();
    onFormSubmit(input);
    onFormCancel();
    // setInput(initialState);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            name='title'
            type='text'
            value={input.title}
            onChange={inputChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            name='amount'
            type='number'
            value={input.amount}
            onChange={inputChangeHandler}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            name='date'
            type='date'
            value={input.date}
            onChange={inputChangeHandler}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onFormCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
