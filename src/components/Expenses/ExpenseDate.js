import './ExpenseDate.css';

const ExpenseDate = props => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[props.date.getMonth()];
    const year = props.date.getFullYear();
    const date = props.date.getDate();

    return (
        <div className="expense-item__date">
            <div>{monthName}</div>
            <div>{year}</div>
            <div>{date}</div>
        </div>
    );
}

export default ExpenseDate;