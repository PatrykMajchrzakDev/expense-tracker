import React, { useState } from "react";
import "./styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //Show / hide add expense form
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpenseData(expenseData);
    setShowExpenseForm(false);
  };
  const showAddExpenseFormContainer = () => {
    setShowExpenseForm(true);
  };

  const hideExpenseForm = () => {
    setShowExpenseForm(false);
  };

  return (
    <div>
      {showExpenseForm ? (
        <div>
          <div className="new-expense">
            <ExpenseForm
              onCancel={hideExpenseForm}
              onSaveExpenseData={saveExpenseDataHandler}
            />
          </div>
        </div>
      ) : (
        <div className="new-expense">
          <button onClick={showAddExpenseFormContainer}>Add new expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
