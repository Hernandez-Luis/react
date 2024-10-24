import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios,setUsuarios] = useState([]);
  const [cargando,setCargando] = useState(true);
  const [errores,setErrores] = useState("")

  //Generico / basico
  const getUsuariosEstaticos = () =>{
    setUsuarios([
      {
        "id":7,
        "email":"luis@reqres.in",
        "first_name":"Luis",
        "last_name":"Hernandez",
        "avatar":"https://reqres.in/img/faces/7-image.jpg"
      },
      {
        "id":8,
        "email":"Alberto@reqres.in",
        "first_name":"Alberto",
        "last_name":"Ramirez",
        "avatar":"https://reqres.in/img/faces/8-image.jpg"
      },
      {
        "id":9,
        "email":"Luis@reqres.in",
        "first_name":"Luis",
        "last_name":"Perez",
        "avatar":"https://reqres.in/img/faces/9-image.jpg"
      }
    ])
  }

  const getUsuariosAjaxPms = () =>{
    fetch("https://reqres.in/api/users?page=1")
      .then(respuesta => respuesta.json())
      .then(
        resultado_final => {
          setUsuarios(resultado_final.data)
          console.log(usuarios)
      },
      error =>{
        console.log(error);
      }
    )
  }

  const getUsuariosAjaxAW = () => {
    setTimeout( async ()  => {
      try{
        const peticion = await fetch("https://reqres.in/api/users?page=1")
        const {data} = await peticion.json();
  
        setUsuarios(data);
        setCargando(false);
      } catch(error){
        console.log(error)
        setErrores(error.message)
      }
    }, 2000);
  } 

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  },[]);

  if(errores !== ""){
    // Cuando pasa un error
    return(
      <div className='errores'>
          {errores}
      </div>
    )
  } else if(cargando == true){
    //Cuando esta todo cargando
    return(
      <div className='cargando'>
          Cargando datos...
      </div>
    )
  } else if(cargando == false && errores === ""){
 // Cuando todo ha ido bien
    return (
      <div>
        <h1>Listado de usuario via Ajax</h1>  
        <ol className='usuarios'>  
          {
            usuarios.map(usuario =>{
              console.log(usuario)
              return (<li key={usuario.id}>
                <img src={usuario.avatar} width="30"></img>
                &nbsp;
                {usuario.first_name} {usuario.last_name}
                </li>)
            })
          }
        </ol>
      </div>
    )
  }
}


