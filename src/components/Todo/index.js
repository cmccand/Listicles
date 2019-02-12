import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDoCheckbox from '../ToDoCheckbox';
import styles from './index.module.scss';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classNames from 'classnames';

import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onClick }) => (
  <div className={styles.icon} onClick={onClick} />
);

class Todo extends Component {
  state = {
    showDatePicker: false
  }

  toggleDatePicker = () => {
    this.setState(
      prevState => ({
        showDatePicker: !prevState.showDatePicker
      })
    )
  }

  renderDatePicker = () => (
    <div className={styles.datePicker}>
      <DatePicker
        customInput={ <Calendar /> }
        selected={this.props.due}
        onChange={this.handleChange}
      />
    </div>
  )

  getDateText = due => {
    const today = moment(new Date(), "day");
    const yesterday = moment(today).add(-1, 'days');
    if (moment(due).isSame(today, "day")) {
      return 'Today';
    }
    if (moment(due).isSame(yesterday, 'day')) {
      return 'Yesterday';
    }
    return moment(due).format('MMM D');
  }

  getDateClass = due => {
    const today = moment(new Date(), "day");
    if (moment(due).isSame(today, "day")) {
      return 'warning';
    }
    if (moment(due).isBefore(today, "day")) {
      return 'urgent';
    }
    return null;
  }

  renderDate = due => (
    due
      ? (
        <span className={classNames(styles.date, styles[this.getDateClass(due)])}>
          {this.getDateText(due)}
        </span>
      )
      : false
  )

  handleChange = date => {
    this.props.onDateChange(date);
  }

  render() {
    const { onClick, completed, text, due } = this.props;
    return (
      <li
        className={styles.item}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <ToDoCheckbox onClick={onClick} checked={completed} />
        <span className={styles.text}>{text}</span>
        <div className={styles.dateContainer}>
          { this.renderDate(due) }
          { this.renderDatePicker() }
        </div>
      </li>
    );
  }
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
