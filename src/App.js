import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ListTasks from './Components/ListTasks';
import AddForm from './Components/AddForm';
import TaskControls from './Components/TaskControls';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To do List</h1>
      
        <AddForm/>
        <ListTasks />
        <TaskControls/>

      </div>
    </Provider>
  );
};

export default App;
