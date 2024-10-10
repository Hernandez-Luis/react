// Importar moduos de react
import React from "react";


// La funcion
const MiComponente = () =>{

    let nombre = "Wicho"
    let web = "Wicho.web"
    
    let usuario = {
        nombre: " WichoObject",
        apellidos: "ApellidosWicho",
        web: "Wicho.web"
    };

    return (
        
        <div className="mi-componente">
            <hr/>
            <p>Este es mi primer componente</p>
            <h3>Datps de l usuario:</h3>
            <p>Prueba hola Bien 2</p>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p>Este es el segundo parrafo de mi componente</p>
        </div>
    ); 
};

//Export
export default MiComponente;