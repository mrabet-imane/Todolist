import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../Redux/ActionsCreators';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  const handleToggle = () => {
    dispatch(toggleItem(item.id));
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3 onClick={handleToggle} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          {item.task}
        </h3>
      </div>
      <div className="card-actions">
        <FaTrash onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Card;
