export const GuardarEnStorage = (clave,elemento) =>{

    // Conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array

    if(Array.isArray(elementos)){
      // Guardar dentro del array un elemento nuevo
      elementos.push(elemento);
    } else {
      // Crear un array con la nueva peli
      elementos = [elemento];
    }

    // Guarda en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto guardado 
    return elemento;
    }