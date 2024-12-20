const initial_state = {
  lastid: 5,
  tasks: [
    { id: 1, task: "Réaliser le TP React", completed: true },
    { id: 2, task: "Préparer la présentation finale du React", completed: false },
    { id: 3, task: "Réaliser Figma Projet de synthèse", completed: false },
    { id: 4, task: "Préparer le CC1 React", completed: true },
    { id: 5, task: "Réaliser de la conception du Projet de synthèse", completed: false },
  ]
};

const rootReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        lastid: state.lastid + 1,
        tasks: [...state.tasks, { id: state.lastid + 1, task: action.payload, completed: false }]
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'TOGGLE_ITEM':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case 'DELETE_ALL_ITEMS':
      return { ...state, tasks: [] };
    case 'DELETE_COMPLETED_ITEMS':
      return { ...state, tasks: state.tasks.filter(task => !task.completed) };
    case 'DELETE_INCOMPLETE_ITEMS':
      return { ...state, tasks: state.tasks.filter(task => task.completed) };
    case 'MARK_ALL_COMPLETE':
      return { ...state, tasks: state.tasks.map(task => ({ ...task, completed: true })) };
  case 'EDIT_ITEM':
     return { ...state, tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, task: action.payload.newTask } : task ) }; 
    default:
      return state;
  }
};

export default rootReducer;
