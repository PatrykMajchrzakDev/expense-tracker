import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterByDate = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectedDate={filterByDate} />
      {filteredExpenses.map((expensesList) => (
        <ExpenseItem
          key={Math.random()}
          title={expensesList.title}
          amount={expensesList.amount}
          date={expensesList.date}
        />
      ))}
    </Card>
  );
};

export default ExpensesList;
