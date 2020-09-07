module.exports = {
  login: `
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password){
          username role token id
        }
      }
    `,
  getUsers: `
   {
     getUsers{
       id
       username
       password
       role
     }
   }
   `,
  register: `
   mutation register($username: String!, $password: String!, $role: String) {
    register(username: $username, password: $password, role: $role){
      username password role token
    }
  }
   `,
  getStudents: `
  query getStudents($limite: Int, $anteriores:Int){
    getStudents(limite: $limite, anteriores: $anteriores) {
     _id
     nombres
     apellido_paterno
     apellido_materno
     telefono
     carrera
     numero_control
    }
  }
    `,
    getStudent: `
  query getStudent($id: ID) {
    getStudent(id:$id){
      id
     nombres
     apellido_paterno
     apellido_materno
     fecha_nacimiento
     genero
     nacionalidad
     curp
     rfc
     correo_electronico
     telefono
     estado_civil
     estilo_aprendizaje
     beca
     comunidad_indigena
     lengua_extranjera
     servicio_medico{
       nombre
       clave
       programa_oportunidades
       tipo_sangre
       discapacidad
     }
     vive_con
     depende_de
     familia{
       contacto_emergencia
       vive
       tutor
       nombre
       apellido_paterno
       apellido_materno
       parentesco
         nivel_estudios
       ocupacion
       telefono
       ingresos
       lugar_trabajo{
         nombre
         telefono
       }
     }
     domicilio{
       actual
       tipo_domicilio
       calle
       estado
       municipio
       codigo_postal
       colonia_localidad
       propiedad
       cantidad_cuartos
       cantidad_personas
       cantidad_personas_dependientes
     }
     nivel_estudio
     egreso{
       periodo
       fecha_titulacion
     }
     opciones_ingreso{
       carrera
       numero_ficha
     }
     carrera
     high_school{
       id
       clave
       municipio
       localidad
       nombre
       entidad_federativa
       turno
     }
     status
     username
     numero_control
    }
  }
  `
}