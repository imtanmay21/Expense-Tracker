import './ExpenseFilter.css';

const ExpenseFilter = props => {
    
    const changeYearHandler = event => {
         props.onPickYear(event.target.value);
    }

    return (
        <div className="expense-filter">
            <label>Filter by Year</label>
            <select value={props.selected} className="expense-filter__menu" onChange={changeYearHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    )

}

export default ExpenseFilter;