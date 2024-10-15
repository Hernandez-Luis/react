import React,{useState} from 'react';

export const MiPrimerEstado = () => {
    /*let nombre = "Luis Alberto";

    const cambiarNombre = e => {
        nombre = "Hernandez Ramirez"
    }*/

    const [nombre, setNombre] = useState("Luis Alberto");

    const cambiarNombre = (e,nombreFijo) =>{
        setNombre(nombreFijo)
        console.log(e.target)
    }

  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e,"Hernandez Ramirez")}>Cambiar nombre por apellidos</button>
        &nbsp;
        <input type='text' placeholder='Cambia el nombre' onChange={e => cambiarNombre(e,e.target.value)}></input>
    </div>
  )
}

// onChange realiza las modificaciones en tiempo real
// onKeyUp realiza los cambios cada que se levanta el dedo de la tecla
