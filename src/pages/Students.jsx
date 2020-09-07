import React, { Component } from 'react';
import fetch from 'node-fetch';
import Table from '../components/StudentsTable';
import Skeleton from 'react-loading-skeleton';
import { getStudents } from '../queries/Users';
import { Link } from 'react-router-dom';
import { AccountBoxRounded } from '@material-ui/icons'
const url = 'https://api.itistmo.edu.mx/graphql';

export default class Students extends Component {
  state = {
    loading: false,
    token: localStorage.getItem('token'),
    graph: localStorage.getItem('graphToken'),
    data: [],
  };
  componentDidMount() {
    this.fetchApi();
  }
  fetchApi() {
    this.setState({ loading: true });
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apollographql-client-name': 'React-frontend-pruebas',
        Authorization: this.state.token,
      },
      body: JSON.stringify({
        query: getStudents,
        variables: {
          limite: 100,
          anteriores: 25100,
        },
      }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        let students = data.data.getStudents;
        students = students.map((student, index) => {
          return (students[index] = {
            _id: student._id,
            nombre: `${student.nombres} ${student.apellido_paterno} ${student.apellido_materno}`,
            carrera: student.carrera,
            telefono: student.telefono,
            numero_control: student.numero_control,
            handle: (
              <Link type="button" className="btn btn-small bg-transparent" to={`/student/${student._id}`}>
                <AccountBoxRounded color="primary"/>
              </Link>
            ),
          });
        });
        this.setState({ loading: false, error: null, data: students });
      })
      .catch((error) => this.setState({ loading: false, error: error }));
  }
  render() {
    if (this.state.loading === true) {
      return (
        <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
          <h2 className="text-center d-none d-sm-none d-md-block mb-5">Lista de estudiantes</h2>
          <h4 className="text-center d-block d-sm-block d-md-none">Lista de estudiantes</h4>
          <Skeleton className="m-3" height={50} count={6} duration={2} />
        </div>
      );
    }
    if (this.state.error) {
      return <p>Error: {this.state.error}</p>;
    }
    return (
      <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
        <h2 className="text-center d-none d-sm-none d-md-block">Lista de estudiantes</h2>
        <h4 className="text-center d-block d-sm-block d-md-none">Lista de estudiantes</h4>
        <Table data={this.state.data} />
      </div>
    );
  }
}
