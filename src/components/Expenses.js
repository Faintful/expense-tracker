import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const Expenses = ({ expenses }) => expenses.map((expense, index) => <div className="expenses"><ExpenseItem key={index} {...expense} /></div>);

export default Expenses;