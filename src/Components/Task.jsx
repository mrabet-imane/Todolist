import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem, editItem } from '../Redux/ActionsCreators';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  const handleDelete = () => {
    dispatch(deleteItem(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleItem(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editItem(task.id, newTask));
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <h3 onClick={handleToggle} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.task}
        </h3>
      )}
      <div>
        {isEditing ? (
          <FaSave onClick={handleSave} />
        ) : (
          <>
            <FaEdit onClick={handleEdit} />
            <FaTrash onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
