const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log(state);
      return [
        ...state,  // <--- this allows stacking object onto state
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
