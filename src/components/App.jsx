import React, { Component } from 'react';

import MainPage from './MainPage.jsx';

import Store from '../store.js';

export default class App extends Component {
  componentDidMount() {
    window.storeUpdated = this.forceUpdate.bind(this);
  }

  render() {
    return (
      <MainPage world={ Store }></MainPage>
    );
  }
};