import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function filterByYear(expenses, year) {
  return expenses.filter((expense) => expense.date.getFullYear() === year);
}

const ExpensesList = ({ expenses, year }) => {
  const filteredList = filterByYear(expenses, year);

  if (filteredList.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {filteredList.map((expense, index) => (
        <li>
          <ExpenseItem key={expenses[index].id} {...expense} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
