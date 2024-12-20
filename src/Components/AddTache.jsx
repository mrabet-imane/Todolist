import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/ActiondsCreators';

const AddTache = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTache;
