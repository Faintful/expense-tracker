import { useState } from 'react';
import './ExpenseForm.css';

const initialState = {
  title: '',
  amount: '',
  date: '',
};

export default () => {
  const [input, setInput] = useState(initialState);

  /*     const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState(''); */

  const inputChangeHandler = ({ target: { name, value } }) =>
    setInput((prevState) => ({ ...prevState, [name]: value }));

  /* const titleChangeHandler = ({ target: { value } }) => setTitleInput(value);
  const amountChangeHandler = ({ target: { value } }) => setAmountInput(value);
  const dateChangeHandler = ({ target: { value } }) => setDateInput(value); */
  //const exampleEventHandler = (event) => console.log(event.target.value);

  return (
    <form className="expense-form">
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label htmlFor="title">Title</label>
          <input id="title" onChange={inputChangeHandler} type="text" />
        </div>
        <div className="expense-form__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            onChange={inputChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            onChange={inputChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
