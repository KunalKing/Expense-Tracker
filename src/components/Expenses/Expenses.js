import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) =>{
const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

   return (<div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    
    {/* code for dynamic output of data from app to expenses 27-05-2023 */}
    {props.items.map((expenses) => (
      <ExpenseItem 
       title = {expenses.title}
       amount = {expenses.amount}
       date = {expenses.date}
      />
    )) }
    {/* end code */}
    
   </Card>
   </div>
   );
}

export default Expenses;