import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import styles from './index.module.scss';

const ToDoCheckbox = ({ checked, onClick }) => (
  <div onClick={onClick} className={styles.container}>
    <label htmlFor="toDoInput" />
    <input checked={checked} type="checkbox" className={styles.nativeCheckbox} id="toDoInput" />
    <div className={styles.styledCheckbox} />
  </div>
);

ToDoCheckbox.propTypes = {
  checked: PropTypes.bool
};

ToDoCheckbox.defaultProps = {
  checked: false
};

export default ToDoCheckbox;
