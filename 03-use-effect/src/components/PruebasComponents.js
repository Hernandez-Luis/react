import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponents = () => {

  const [usuario, setUsuario] = useState('Luis Alberto');
  const [fecha,setFecha] = useState('01-01-1998');
  const [contador,setContador] = useState (0);

  const modUsuario = e =>{
    setUsuario(e.target.value)
  };

  const cambiarFecha = e =>{
    setFecha(Date.now())
  }

  //Este solo se ejecuta una vez, solo al cargar el componente
  useEffect(() => {
    console.log('Has cargado el componente PruebasComponent o haz realizado un cambio en un estado')
  }, []);

  //Se ejecuta solo si cambio el usuario
  useEffect(() => {
    setContador(contador + 1)
    console.log('Has modificado el usuario: ' + contador)
  }, [fecha, usuario]); // Dentro de los corchetes se define cual es la constante
  // con la que se va a activar el useEffect

  return (
    <div>
      <p>
        <h1>El efecto useEffect - Hook useEffect</h1>
        <strong>{usuario}</strong>
        <strong className={contador >= 10 ? 'label label-green' : 'label' }>{fecha}</strong>
        <input 
          type='text' 
          onChange={modUsuario} 
          placeholder='Cambia el nombre'></input>
          <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>

      {usuario == 'LUIS' && <AvisoComponent></AvisoComponent>}
    </div>
  )
}
