import React from 'react'

const PeticionApi = () => {
    const url_api="";
    const [personajes,setPersonajes]=React.useState([]);
    const [paginacion, setPaginacion]=React.useState(0);

    const obtenerPersonajes=async()=>{
        const res=await fetch( `https://rickandmortyapi.com/api/character/?page=${paginacion}`);
        const {results}= await res.json();
        setPersonajes(results);
        console.log(personajes);

    }

    const adelante=()=>{
        setPaginacion(paginacion+1);
        obtenerPersonajes();
    }

    const atras=()=>{
        setPaginacion(paginacion-1);
        obtenerPersonajes();
    }
  return (
    <div>
        <h1>Petición al api de rick and morty</h1>
        <button onClick={obtenerPersonajes}>Traer Personaje</button>
        <button onClick={adelante}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
            personajes.map(({id,name,image})=>(
                <div key={id}>
                    <h4>{id} -  {name}</h4>
                    <img src={image} alt={name} />
                </div>
            ))
        
        }
    </div>
  )
}

export default PeticionApi