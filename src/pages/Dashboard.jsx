import React, { Component } from 'react';

export default class Dashboard extends Component {
  state = {
    loading: false,
    error: null,
    token: localStorage.getItem('token'),
    message: '',
  };
  render() {
    return (
      <div>
      </div>
    );
  }
}
