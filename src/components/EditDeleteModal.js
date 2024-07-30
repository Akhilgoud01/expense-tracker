import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditDeleteModal = ({ isOpen, onRequestClose, currentExpense, onSave }) => {
  const [title, setTitle] = useState(currentExpense.title);
  const [amount, setAmount] = useState(currentExpense.amount);
  const [category, setCategory] = useState(currentExpense.category);
  const [date, setDate] = useState(currentExpense.date);

  const handleSave = () => {
    onSave({ title, amount: Number(amount), category, date });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
      <h2>Edit Expense</h2>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </Modal>
  );
};

export default EditDeleteModal;
