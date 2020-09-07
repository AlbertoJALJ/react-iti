import React, { Component } from 'react';
import fetch from 'node-fetch';
import Skeleton from 'react-loading-skeleton';
import { getStudent } from '../queries/Users';
import Domicilio from '../components/Student/Domicilio';
import Familia from '../components/Student/Familia';
import General from '../components/Student/General';
import ServicioMedico from '../components/Student/ServicioMedico';
const url = 'https://api.itistmo.edu.mx/graphql';

export default class Student extends Component {
  state = {
    error: null,
    loading: true,
    data: {},
    message: '',
    student: this.props.match.params.studentID,
    token: localStorage.getItem('token'),
  };
  componentDidMount() {
    this.getStudentData();
  }
  getStudentData() {
    this.setState({ loading: true });
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apollographql-client-name': 'React-frontend-pruebas',
        Authorization: this.state.token,
      },
      body: JSON.stringify({
        query: getStudent,
        variables: {
          id: this.state.student,
        },
      }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        let Student = data.data.getStudent;
        let Datos = {};
        if (Student.genero) {
          if (Student.genero === 'M') Student.genero = 'Masculino';
          if (Student.genero === 'F') Student.genero = 'Femenino';
        }
        Datos.Domicilio = {
          actual: Student.domicilio.actual,
          tipo_domicilio: Student.domicilio.tipo_domicilio,
          calle: Student.domicilio.calle,
          estado: Student.domicilio.estado,
          municipio: Student.domicilio.municipio,
          codigo_postal: Student.domicilio.codigo_postal,
          colonia_localidad: Student.domicilio.colonia_localidad,
          propiedad: Student.domicilio.propiedad,
          cantidad_cuartos: Student.domicilio.cantidad_cuartos,
          cantidad_personas: Student.domicilio.cantidad_personas,
          cantidad_personas_dependientes: Student.domicilio.cantidad_personas_dependientes,
        };
        Datos.General = {
          nombres: Student.nombres,
          apellido_paterno: Student.apellido_paterno,
          apellido_materno: Student.apellido_paterno,
          fecha_nacimiento: Student.fecha_nacimiento,
          genero: Student.genero,
          nacionalidad: Student.nacionalidad,
          curp: Student.curp,
          rfc: Student.rfc,
          correo_electronico: Student.correo_electronico,
          telefono: Student.telefono,
          estado_civil: Student.estado_civil,
          beca: Student.beca,
          vive_con: Student.vive_con,
          depende_de: Student.depende_de,
          numero_control: Student.numero_control,
          estilo_aprendizaje: Student.estilo_aprendizaje,
          comunidad_indigena: Student.comunidad_indigena,
          carrera: Student.carrera,
          status: Student.status,
          username: Student.username,
          preparatoria: Student.high_school.nombre,
        };
        if (Student.lengua_extranjera.length > 1) {
          if (Student.lengua_extranjera) Datos.General.lengua_extranjera = Student.lengua_extranjera;
        }

        if (Student.familia.length >= 1) {
          Datos.familia = Student.familia;
        } else Datos.familia = {};
        if (Student.servicio_medico.length >= 1) {
          Datos.servicio_medico = Student.map((student, index) => {
            return (Datos.servicio_medico[index] = {
              nombre: student.servicio_medico.nombre,
              clave: student.servicio_medico.clave,
              programa_oportunidades: student.servicio_medico.programa_oportunidades,
              tipo_sangre: student.servicio_medico.tipo_sangre,
              discapacidad: student.servicio_medico.discapacidad,
            });
          });
        } else Datos.servicio_medico = {};
        this.setState({ loading: false, error: null, data: Datos });
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
          <h2 className="text-center d-none d-sm-none d-md-block mb-5">Lista de estudiantes</h2>
          <h4 className="text-center d-block d-sm-block d-md-none">Lista de estudiantes</h4>
          <Skeleton className="m-3" height={50} count={6} duration={2} />
        </div>
      );
    }
    return (
      <div>
        <h2 className="text-center mb-3">Información de los estudiantes</h2>
        <div className="row">
          <div className="col-3">
            <Domicilio data={this.state.data.Domicilio} />
          </div>
          <div className="col-6">
            <General data={this.state.data.General} />
            <Familia data={this.state.data.Familia} />
          </div>
          <div className="col-3">
            <ServicioMedico data={this.state.data.servicio_medico} />
          </div>
        </div>
      </div>
    );
  }
}
