import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {

    const filteredExpenses = props.expense;
    let expenseContent;

    if (filteredExpenses.length === 0) {

        expenseContent = <h2>No Expense Found</h2>
        return expenseContent;

    } else {

        expenseContent = filteredExpenses.map((expense, index) => {
            return (<ExpenseItem
                key={expense.title + index}
                title={expense.title}
                price={expense.price}
                date={expense.date} />)
        });
    
        return expenseContent;
    }

}

export default ExpenseList;