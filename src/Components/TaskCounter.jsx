import React from 'react';
import { useSelector } from 'react-redux';

const TaskCounter = () => {
  const tasks = useSelector(state => state.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div>
      {completedTasks} of {tasks.length} tasks done
    </div>
  );
};

export default TaskCounter;
