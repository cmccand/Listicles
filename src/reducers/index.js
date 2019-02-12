import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import listName from './listName'

export default combineReducers({
  listName,
  todos,
  visibilityFilter
})
