import React, { useEffect, useState } from 'react'

export const Listados = () => {

    const [listadoState,setListadoState] = useState([]);

    useEffect(() => {
        console.log("Componente del listado de peliculas cargado")
        conseguirPeliculas();
    },[]);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        setListadoState(peliculas);
    }

  return (
    <>
    {listadoState.map(peli => {
        return (
            <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        );
    } )}
    </>
  )
}
