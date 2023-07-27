import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = ({ expenses }) =>
  expenses.map((expense, index) => (
    <Card className="expenses" key={expenses[index].id}>
      <ExpenseItem {...expense} />
    </Card>
  ));

export default Expenses;