import React, { Component } from 'react';
import fetch from 'node-fetch';
import { getUsers } from '../queries/Users';
const url = 'https://api.itistmo.edu.mx/graphql';

export default class Users extends Component {
  state = {
    loading: false,
    error: null,
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user'),
    message: '',
    data: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apollographql-client-name': 'React-frontend-pruebas',
        'Authorization': this.state.token,
      },
      body: JSON.stringify({query:getUsers}),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ loading: false, error: null, data: data.data.getUsers });
      })
      .catch((error) => this.setState({ loading: false, error: error }));
  }

  render() {
    const users_list = this.state.data;
    return (
      <>
        <h2 className="text-center">Lista de usuarios</h2>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 mx-auto table-responsive text-center">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">role</th>
                <th scope="col">id</th>
              </tr>
            </thead>
            <tbody>
              {users_list.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td> {index} </td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>{user.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
