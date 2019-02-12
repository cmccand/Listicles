import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import ListName from '../ListName';
import styles from './index.module.scss';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Listicles</h3>
      <ListName />
      <form className={styles.form} onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input
          className={styles.input}
          ref={node => input = node}
          placeholder="Add a to-do"
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
