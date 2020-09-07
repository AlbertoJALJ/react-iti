import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
export default class StudentsTable extends Component {
  data = {
    columns: [
      {
        label: 'Nombre',
        field: 'nombre',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Carrera',
        field: 'carrera',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Teléfono',
        field: 'telefono',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Número de control',
        field: 'numero_control',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Handle',
        field: 'handle',
        sort: 'asc'
      }
    ],
    rows: this.props.data,
  };

  render() {
    return <MDBDataTable striped bordered small data={this.data} />;
  }
}
