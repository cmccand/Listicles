const listName = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_LIST_NAME':
      return action.name
    default:
      return state
  }
}

export default listName;
