import React, { useState } from 'react'

export const Crear = () => {

  const tituloComponente = 'Anadir pelicula'
  const [peliState,setPeliState] = useState({
    titulo: '',
    descripcion: ''
  })

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e =>{
    e.preventDefault();
    
    // Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // alert(titulo + descripcion)

    // Crear objeto de la pelicula a guardar

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };
    
    // Guardar estado
    setPeliState(peli);

    // Guardar en el almacenamiento local
    guardarEnStorage(peli);    

  }

  const guardarEnStorage = peli =>{

    // Conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem('pelis'));

    console.log(elementos)

    // Comprobar si es un array

    // Guarda en el localstorage

    // Devolver objeto guardado 

      localStorage.setItem('pelis',JSON.stringify([peli]))
    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>
        {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
        </strong>
        
        <form onSubmit={conseguirDatosForm}>
            <input 
              type="text" 
              id="title" 
              name='titulo'
              placeholder="Titulo" />
            <textarea 
              id="description" 
              name='descripcion'
              placeholder="Descripción"></textarea>
            <input 
              type="submit" 
              id="save" 
              value="Guardar" />
        </form>
    </div>
  )
}
