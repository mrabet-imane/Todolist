import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTasks = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTasks;
