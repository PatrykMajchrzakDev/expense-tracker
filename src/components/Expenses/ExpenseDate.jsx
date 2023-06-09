import React from "react";
import "./styles/ExpenseDate.css";

const ExpenseDate = (expenses) => {
  const month = expenses.date.toLocaleString("en-GB", { month: "long" });
  const day = expenses.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = expenses.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
