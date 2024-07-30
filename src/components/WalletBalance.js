import React from 'react';

const WalletBalance = ({ balance, addIncome }) => {
  const [income, setIncome] = React.useState('');

  const handleIncomeChange = (e) => setIncome(e.target.value);

  const handleAddIncome = () => {
    if (income) {
      addIncome(Number(income));
      setIncome('');
    }
  };

  return (
    <div className="wallet-balance">
      <h2>Wallet Balance: ${balance}</h2>
      <input
        type="number"
        placeholder="Add Income"
        value={income}
        onChange={handleIncomeChange}
      />
      <button onClick={handleAddIncome}>Add</button>
    </div>
  );
};

export default WalletBalance;
