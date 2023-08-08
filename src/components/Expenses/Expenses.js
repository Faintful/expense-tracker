import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem key={expenses[index].id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
