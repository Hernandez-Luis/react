import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = () => {
        alert("Has dado click al boton")
    }   

  return (
    <div>
        <h1>Eventos en react</h1>
        
        {/* Evento click */}
        <button onClick={hasDadoClick}>Dame click!</button>
    </div>
  )
}
