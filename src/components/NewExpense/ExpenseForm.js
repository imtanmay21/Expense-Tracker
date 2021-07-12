import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {

    const [showFormCondition, setShowFormCondition] = useState(false);

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleEnteredHandler = event => {
        setEnteredTitle(event.target.value);
    }

    const priceEnteredHandler = event => {
        setEnteredPrice(parseInt(event.target.value));
    }

    const dateEnteredHandler = event => {
        setEnteredDate(event.target.value)
    }

    const setSubmitHandler = event => {

        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
        setShowFormCondition(false);
    }

    const showFormHandler = () => {
        setShowFormCondition(true);
    }

    const closeFormHandler = () => {
        setShowFormCondition(false);
    }

    if (showFormCondition === false) {
        return (
            <div className="new-expense__open">
                <button onClick={showFormHandler}>Add Expense</button>
            </div>
        )
    } else {
        return (
            <form onSubmit={setSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input value={enteredTitle} type="text" onChange={titleEnteredHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input value={enteredPrice} type="number" min="100" onChange={priceEnteredHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input value={enteredDate} type="date" min="2020-01-01" max="2023-12-31" onChange={dateEnteredHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                    <button onClick={closeFormHandler}>Cancel</button>
                </div>

            </form>
        )
    }

}

export default ExpenseForm;