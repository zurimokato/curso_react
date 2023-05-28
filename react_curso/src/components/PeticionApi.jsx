import React from "react";

const PeticionApi = () => {
  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(1);

  const cargarDetalles=async()=>{
    const res = await fetch(`https://api.fbi.gov/wanted/v1/list?page=${paginacion}`);
      const  results  = await res.json();
      const data=results.items;
      console.log(data);
      setPersonajes(data);
  }

  const traerPersonajes = async () => {
    try {
        
        const detalles=[];
      
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${paginacion}&limit=20`);
      const  results  = await res.json();
    /*  const data=results.results;
      for(const element of data){
        console.log(element);
        const res = await fetch(element.url);
        const pokemon=await res.json();
        detalles.push(pokemon)
      }
      setPersonajes(detalles);*/
      cargarDetalles()

    } catch (error) {
      console.log(error);
    }
  };
  
  const siguiente = ()=> {
    setPaginacion( paginacion + 20)
    traerPersonajes()
  }

  const atras = () => {
    setPaginacion( paginacion - 20)
    traerPersonajes()
  }

  return (
    <div>
      <h1>FBI MOSTWANTED</h1>
      <button onClick={traerPersonajes}>Traer personajes</button>
      <button onClick={atras}>Atras</button>
      <button onClick={siguiente}>Siguiente</button>
      
      {
        personajes.map(({url,title,description, images}) => (
            <div key={url}>
                <h4> {title}  </h4>
                <img src={images[0].original} alt={title} />
                <p>{description}</p>
            </div>
        ))
      }


      
    </div>
  )
}

export default PeticionApi;