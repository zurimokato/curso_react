import React from 'react'

const Variables = () => {

    const saludo='Hola mundo'
    const image="https://picsum.photos/1280/720"
    const texto_alt="Esto es una imagen";
  return (
    <div>
        <h1>{saludo}</h1>
        <img src={image} alt={texto_alt} />
    
    </div>
    
  )
}

export default Variables