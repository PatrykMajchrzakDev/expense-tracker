import React from "react";
import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (expenses) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenses.date} />
        <div className="expense-item__description">
          <h2>{expenses.title}</h2>
          <div className="expense-item__price">{expenses.amount}zł</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
