import React, { Component } from 'react';
import fetch from 'node-fetch';
import './styles/Login.css';
const bsLogo = 'https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg';
const url = 'http://localhost:69/users/signin';
export default class Login extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      username: '',
      password: '',
    },
    token: '',
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
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        if (!data.accessToken) this.setState({ loading: false, error: true, message: data.message });
        else {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('userID', data.id);
          localStorage.setItem('graphToken', data.graph);
          this.setState({ loading: false });
          this.props.history.push('/');
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
      <div className="text-center mt-5">
        <form onSubmit={this.handleOnSubmit} className="form-signin">
          <img className="mb-4" src={bsLogo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Inicio de sesión</h1>
          <input name="username" type="text" className="form-control" placeholder="Username / email" onChange={this.handleChange} />
          <input
            name="password"
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
            onChange={this.handleChange}
          />
          <button className="btn btn-lg btn-primary btn-block">Sign in</button>
          {this.state.message && (
            <div className="alert alert-danger" role="alert">
              {this.state.message}
            </div>
          )}
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
      </div>
    );
  }
}
