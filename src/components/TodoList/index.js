import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo'

import styles from './index.module.scss';
const getPrettyFilter = filter => {
  switch (filter) {
    case 'SHOW_ALL':
      return 'All tasks';
    case 'SHOW_COMPLETED':
      return 'Completed tasks';
    case 'SHOW_ACTIVE':
      return 'Active tasks';
    default:
      return '';
  }
};

const TodoList = ({ activeFilter, todos, toggleTodo, setDate }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{getPrettyFilter(activeFilter)}</h4>
      <div className={styles.listContainer}>
        {
          todos && todos.length
            ? (
              <ul className={styles.list}>
                {todos.map(todo =>
                  <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                    onDateChange={(date) => setDate(todo.id, date)}
                  />
                )}
              </ul>
            )
            : <p>No tasks matching filter.</p>
        }
      </div>
    </div>
  );
};

TodoList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired
}

export default TodoList;
