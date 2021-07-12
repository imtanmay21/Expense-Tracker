import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import './Expenses.css';

const Expenses = props => {

    const expenses = props.data;

    const [filteredYear, setFilteredYear] = useState('2021');

    const pickYearHandler = selectedYear => {

        setFilteredYear(selectedYear);

    };

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onPickYear={pickYearHandler} />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList expense={filteredExpenses} />
        </Card>
    );
}


export default Expenses;