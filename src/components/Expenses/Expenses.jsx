import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";

const Expenses = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses not found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expensesList) => (
        <ExpenseItem
          key={Math.random()}
          title={expensesList.title}
          amount={expensesList.amount}
          date={expensesList.date}
        />
      ))}
      ;
    </ul>
  );
};

export default Expenses;
