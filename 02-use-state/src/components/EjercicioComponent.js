import React,{useState} from 'react';
import PropTypes from "prop-types";

export const EjercicioComponent = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => {
        setYearNow(yearNow + 1)
    }

    const anterior = e => {
        setYearNow(yearNow - 1)
    }

    const cambiarYear = e => {
        let dato = e.target.value;

        setYearNow(dato);
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
        <strong className='label-green'>
            {yearNow}
        </strong>
        <p>
        <button onClick={anterior}>ANTERIOR</button>
        &nbsp;
        <button onClick={siguiente}>SIGUIENTE</button>
        </p>
        <p>Cambiar a;o
            <input 
            onChange={cambiarYear}
            type='text' 
            placeholder='Cambia el a;o'></input>
        </p>
        
    </div>
  )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}
