import React from 'react';

export default function General(props) {
  let data = props.data;
  function hasLenguas() {
    if (data.lengua_extranjera) {
      return data.lengua_extranjera.map((lengua, index) => {
        return (
          <div key={index} className="custom-control custom-switch">
            <input value="" disabled key={`input${index}`} type="checkbox" className="custom-control-input" id={`lengua${index}`} checked />
            <label key={`label${index}`} className="custom-control-label" htmlFor={`lengua${index}`}>
              {lengua}
            </label>
          </div>
        );
      });
    } else return null;
  }
  function isIndigena() {
    if (data.comunidad_indigena) {
      return (
        <div className="col">
          <h6>Comunidad indígena</h6>
          <div className="custom-control custom-switch">
            <input disabled className="custom-control-input" type="checkbox" id="comunidad" checked />
            <label htmlFor="comunidad" className="custom-control-label">
              {data.comunidad_indigena}
            </label>
          </div>
        </div>
      );
    } else return null;
  }
  return (
    <>
      <div className="card mb-4 shadow-lg p-3 bg-white rounded">
        <h5 className="card-header">General</h5>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="nombres">Nombres</label>
                <input
                  readOnly
                  value={`${data.nombres} ${data.apellido_paterno} ${data.apellido_materno}` || ''}
                  type="text"
                  className="form-control"
                  id="nombres"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  readOnly
                  value={data.correo_electronico || ''}
                  type="text"
                  className="form-control"
                  id="correo"
                  placeholder="Sin correo registrado"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="telefono">Número de control</label>
                <input
                  readOnly
                  value={data.numero_control || ''}
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Número de control no registrado"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  readOnly
                  value={data.telefono || ''}
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Sin teléfono registrado"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                <input
                  readOnly
                  value={data.fecha_nacimiento || ''}
                  type="text"
                  className="form-control"
                  id="fecha_nacimiento"
                  placeholder="fecha_nacimiento no registrada"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="genero">Género</label>
                <input
                  readOnly
                  value={data.genero || ''}
                  type="text"
                  className="form-control"
                  id="genero"
                  placeholder="Género no registrado"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="nacionalidad">Nacionalidad</label>
                <input
                  readOnly
                  value={data.nacionalidad || ''}
                  type="text"
                  className="form-control"
                  id="nacionalidad"
                  placeholder="Fecha de nacimiento no registrada"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="curp">Curp</label>
                <input readOnly value={data.curp || ''} type="text" className="form-control" id="curp" placeholder="curp no registrada" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="estado_civil">Estado Civil</label>
                <input
                  readOnly
                  value={data.estado_civil || ''}
                  type="text"
                  className="form-control"
                  id="estado_civil"
                  placeholder="estado civil no registrado"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="rfc">RFC</label>
                <input readOnly value={data.rfc || ''} type="text" className="form-control" id="rfc" placeholder="RFC no registrada" />
              </div>
              <div className="form-group col">
                <label htmlFor="beca">Beca</label>
                <input readOnly value={data.beca || ''} type="text" className="form-control" id="beca" placeholder="beca no registrada" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="carrera">Carrera</label>
                <input readOnly value={data.carrera || ''} type="text" className="form-control" id="carrera" placeholder="carrera no registrada" />
              </div>
              <div className="form-group col">
                <label htmlFor="estilo_aprendizaje">Estilo de aprendizaje</label>
                <input readOnly value={data.estilo_aprendizaje || ''} type="text" className="form-control" id="estilo_aprendizaje" placeholder="estilo_aprendizaje no registrada" />
              </div>
            </div>
            <div className="form-row">
              {hasLenguas() ? (
                <div className="col">
                  <h6>Lenguas extranjeras: </h6>
                  {hasLenguas()}
                </div>
              ) : (
                ''
              )}
              {isIndigena()}
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
