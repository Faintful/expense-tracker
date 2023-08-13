import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/Expenses/ExpenseForm/ExpenseForm';
import NewExpense from './components/Expenses/NewExpense';

class Expense {
  constructor(id, title, amount, date) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
  }
}

const expenses = [
  new Expense('e1', 'Toilet Paper', 94.12, new Date(2020, 7, 14)),
  new Expense('e2', 'New TV', 799.49, new Date(2021, 2, 12)),
  new Expense('e3', 'Car Insurance', 294.67, new Date(2021, 2, 28)),
  new Expense('e4', 'New Desk (Wooden)', 450, new Date(2021, 5, 12)),
];

const App = () => {
  const [expensesState, setExpensesState] = useState(expenses);

  const addExpenseHandler = (event) => {
    setExpensesState((prevstate) => {
      return [
        new Expense(Math.random().toString(), event.title, event.amount, new Date(event.date)),
        ...prevstate,
      ];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesState} />
    </div>
  );
};

export default App;
