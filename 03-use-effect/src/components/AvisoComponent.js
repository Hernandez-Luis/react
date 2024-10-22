import React, { useEffect } from 'react'

export const AvisoComponent = () => {
    useEffect(() =>{
        //Se detecta cuando el componente se monta
        alert('El componente AvisoComponent esta montado')

        //Cuando el componente se desmonta
        return () =>{
            alert('Componente desmontado');
        }
    },[]);// Se ejecuta una vez porque le paso el array vacio

  return (
    <div>
        <hr></hr>
        <h3>Saludos LUIS, que tal estas!</h3>
        <button onClick={e =>{
            alert('Bienvenido')
        }}>Mostrar alerta</button>
    </div>
  )
}
