import React, { useState, useEffect } from 'react'

function Pokemons() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getPokemons() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0');
            const data = await response.json();

            setPokemons(data.results);
        }

        getPokemons();
    },[])

  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <li key={index}>{pokemon.name}</li>
      })}
    </div>
  )
}

export default Pokemons