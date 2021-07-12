import Card from '../UI/Card';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
    }

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </Card>
    )
}

export default NewExpense;