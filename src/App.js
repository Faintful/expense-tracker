import ExpenseItem from "./components/ExpenseItem";

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
  new Expense('e4', 'New Desk (Wooden)', 450, new Date(2021, 5, 12))
];

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        {...expenses[0]}
      />
      <ExpenseItem
        {...expenses[1]}
      />
      <ExpenseItem
        {...expenses[2]}
      />
      <ExpenseItem
        {...expenses[3]}
      />
    </div>
  );
}

export default App;
