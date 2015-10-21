import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Actions from '../actions';

export default class AddSong extends Component {
  _add(e) {
    e.preventDefault();

    Actions.addSong(this.refs.name.value);

    this.refs.name.value = '';
  }

  render() {
    return (
      <div className="form-group group-class">
        <form className="input-group" onSubmit={ this._add.bind(this) }>

          <input
            ref="name"
            type="text"
            placeholder="Add youtube URL"
            className="form-control"
            />

          <span className="input-group-btn">
            <Button type="submit">Add</Button>
          </span>

        </form>
      </div>
    );
  }
}