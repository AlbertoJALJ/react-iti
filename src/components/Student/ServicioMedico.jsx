import React from 'react'

export default function ServicioMedico(props) {
  /* const data = props.data */
  console.log('servicio medico')
  return (
    <>
        <div className="card mb-2 shadow-lg p-3 bg-white rounded">
          <h5 className="card-header">Servicio médico</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </>
  )
}
