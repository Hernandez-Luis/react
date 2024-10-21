import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
      alert("Has dado click al boton" + nombre)
    }   

    function hasDadoDobleClick(e){
      alert("Has dado doble click")
    }

    const hasEntrado = (e, accion) => {
      console.log(`Has ${accion} entrado a la caja`)
    }

    const estasDentro = e => {
      console.log("Estas dentro del input, mete tu nombre")
    }

    const estasFuera = e => {
      console.log("Estas fuera de la entrada de texto")
    }

  return (
    <div>
        <h1>Eventos en react</h1>
        
        <p>
          {/* Evento click */}
          <button onClick={e => hasDadoClick (e,"Luis")}>Dame click!</button>
        </p>

        <p>
          {/* Evento doble click */}
          <button onDoubleClick={hasDadoDobleClick}>Dame doble click!</button>
        </p>

        <div id='caja' 
        onMouseEnter={e => hasEntrado(e,"entrado")}
        onMouseLeave = {e => hasEntrado(e,"salido")}
        >
          {/* Evento onMouseEnter */}
        Pasa por encima
        </div>
        
        <p>
          <input type='text' 
                 onFocus={estasDentro} 
                 onBlur={estasFuera}
                 placeholder='Introduce tu nombre'></input>
        </p>
    </div>
  )
}
