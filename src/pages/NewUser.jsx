import React, { Component } from 'react';
import fetch from 'node-fetch';
import {register} from '../queries/Users'
const url = 'https://api.itistmo.edu.mx/graphql';

export default class NewUser extends Component {
  state = {
    loading: false,
    error: null,
    token: localStorage.getItem('token'),
    form: {
      username: '',
      password: '',
      role: '',
    },
    message: '',
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    const data = this.state.form;
    this.setState({
      loading: true,
      error: null,
    });
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apollographql-client-name': 'React-frontend-pruebas',
        'Authorization': this.state.token,
      },
      body: JSON.stringify({
        query: register,
        variables: {
          username: data.username,
          password: data.password,
          role: data.role,
        }
      }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.errors) {
          this.setState({ loading: false, error: true, message: data.data.errors[0].message });
          console.log(this.state);
        } else {
          this.setState({ loading: false, error: null, message: 'Usuario añadido correctamente' });
          this.props.history.push('/users');
        }
      });
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="card col-12 col-sm-12 col-md-8 col-lg-8 mx-auto table-responsive">
        <h5 className="card-header">Nuevo usuario</h5>
        {this.state.message && (
          <div className="alert alert-danger col-6 mx-auto mb-2 mt-2" role="alert">
            {this.state.message}
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">Rellena los siguientes campos</h5>
          <div className="col">
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" id="username" onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-4 mx-auto">
                  <label htmlFor="role">Tipo de usuario</label>
                  <select defaultValue="otro" id="role" className="form-control" name="role" onChange={this.handleChange}>
                    <option value="otro" disabled>
                      {' '}
                      Escoge un tipo{' '}
                    </option>
                    <option value="Admin"> Administrador </option>
                    <option value="Client"> Cliente </option>
                  </select>
                </div>
              </div>
              <div className="mx-auto text-center">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
