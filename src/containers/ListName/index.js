import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateListName } from '../../actions'
import styles from './index.module.scss';

const mapStateToProps = state => ({
  listName: state.listName
})

const mapDispatchToProps = dispatch => ({
  updateListName: name => dispatch(updateListName(name))
})

class ListName extends Component {
  state = {
    listName: '',
    isEditing: false
  }

  onChange = e => {
    this.setState({
      listName: e.target.value
    });
  }

  onFocus = () => {
    this.setState({
      isEditing: true
    })
  }

  onSubmit = e => {
    console.log('e', e);
    e.preventDefault();
    if (!this.state.listName.trim()) {
      return;
    }
    this.props.updateListName(this.state.listName);
    this.setState({
      isEditing: false
    })
  }

  renderEditSVG = () => (
    this.state.isEditing
      ? false
      : <div className={styles.pencil} />
  )

  renderSubmitButton = () => (
    this.state.isEditing && this.state.listName
      ? <button className={styles.button} type="submit">Save</button>
      : false
  )

  render() {
    return (
      <form className={styles.form} onSubmit={e => this.onSubmit(e)}>
        <div className={styles.innerContainer}>
          <input
            name="listName"
            className={styles.input}
            placeholder="List name"
            onFocus={this.onFocus}
            onChange={this.onChange}
            onBlur={this.onBlur}
            value={this.state.listName || this.props.listName}
          />
          { this.renderEditSVG() }
          { this.renderSubmitButton() }
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListName)
