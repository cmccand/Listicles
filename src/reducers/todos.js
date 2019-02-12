const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          due: null
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'SET_DATE':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, due: action.date}
          : todo
      )
    default:
      return state
  }
}

export default todos
