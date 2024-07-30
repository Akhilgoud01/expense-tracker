import React, { useState, useEffect } from 'react';
import WalletBalance from './components/WalletBalance';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import EditDeleteModal from './components/EditDeleteModal';

import './App.css';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [currentExpenseIndex, setCurrentExpenseIndex] = useState(null);

  useEffect(() => {
    const savedBalance = localStorage.getItem('walletBalance');
    const savedExpenses = localStorage.getItem('expenses');
    if (savedBalance) setWalletBalance(Number(savedBalance));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [walletBalance, expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const editExpense = (index) => {
    setCurrentExpense(expenses[index]);
    setCurrentExpenseIndex(index);
    setIsModalOpen(true);
  };

  const saveEditedExpense = (editedExpense) => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === currentExpenseIndex ? editedExpense : expense
    );
    setExpenses(updatedExpenses);
    setIsModalOpen(false);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setWalletBalance(walletBalance + expenses[index].amount);
    setExpenses(updatedExpenses);
  };

  const addIncome = (income) => {
    setWalletBalance(walletBalance + income);
  };

  return (
    <div className="app">
      <WalletBalance balance={walletBalance} addIncome={addIncome} />
      <AddExpenseForm addExpense={addExpense} balance={walletBalance} />
      <ExpenseList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
      {isModalOpen && (
        <EditDeleteModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          currentExpense={currentExpense}
          onSave={saveEditedExpense}
        />
      )}
    </div>
  );
};

export default App;
