import React from 'react'

export const SegundoComponente = () => {

    // const libros = ["Harry potter 1","Harry potter 2","Harry potter 3"]
    const libros = []
  return (
    <div className='segundo-componente'>
        <p>Listado de los libros</p>
            {
              libros.length >= 1 ? 
                (
                <ul>
                    {
                        libros.map((libro, indice) => {
                            return <li key={indice}>{libro}</li>
                        })
                    }
                </ul>
                )
                : (<p>No hay libros disponibles</p>)
            }
    </div>
  )
}