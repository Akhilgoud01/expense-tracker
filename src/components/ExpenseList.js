import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.title}</span>
            <span>${expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <button onClick={() => editExpense(index)}><FaEdit /></button>
            <button onClick={() => deleteExpense(index)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
