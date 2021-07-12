import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const DUMMMY_EXPENSES = [
//   {
//       title: 'PS5',
//       date: new Date(2021, 7, 1),
//       price: 50000
//   },

//   {
//       title: 'Desk',
//       date: new Date(2021, 7, 12),
//       price: 1000
//   },

//   {
//       title: 'Car',
//       date: new Date(2022, 1, 1),
//       price: 2000000
//   }
// ]; 

const App = () => {

  const [expense, setExpense] = useState([]);

  const addExpenseHandler = newExpense => {
    
      setExpense(prevExpense => [newExpense, ...prevExpense]);

  };


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses data={expense}/>
    </div>
  );

}

export default App;
