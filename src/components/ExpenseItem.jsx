import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (expenses) => {

  return (
    <div className='expense-item'>
        <div>{expenses.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenses.title}</h2>
            <div className='expense-item__price'>{expenses.amount}zł</div>
        </div>
    </div>
  )
}

export default ExpenseItem