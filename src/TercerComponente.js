import React from 'react'
import PropTypes from "prop-types"

export const TercerComponente = ({nombre,apellido,ficha}) => {
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>            
            <li>{ficha.grupo}</li>            

        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}
TercerComponente.defaultProps = {
    nombre:"Juan",
    apellido:"Martinez"
}