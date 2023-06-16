import React, { useState } from "react";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import Expenses from "./Expenses";

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
      <Expenses items={filteredExpenses} />
    </Card>
  );
};

export default ExpensesList;
