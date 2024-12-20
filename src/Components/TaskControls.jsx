import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllItems, deleteCompletedItems, deleteIncompleteItems, markAllComplete } from '../Redux/ActionsCreators';

const TaskControls = () => {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
  };

  const handleDeleteCompleted = () => {
    dispatch(deleteCompletedItems());
  };

  const handleDeleteIncomplete = () => {
    dispatch(deleteIncompleteItems());
  };

  const handleMarkAllComplete = () => {
    dispatch(markAllComplete());
  };

  return (
    <div>
      <button onClick={handleDeleteAll}>Supprimer toutes les tâches</button>
      <button onClick={handleDeleteCompleted}>Supprimer les tâches complètes</button>
      <button onClick={handleDeleteIncomplete}>Supprimer les tâches non complètes</button>
      <button onClick={handleMarkAllComplete}>Marquer toutes les tâches non complètes comme complètes</button>
    </div>
  );
};

export default TaskControls;
