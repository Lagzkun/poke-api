import React, { useState, useEffect } from 'react'

function Pokemons() {

    const [pokemons, setPokemons] = useState([]);
    const [before, setBefore] = useState(null);
    const [after, setAfter] = useState(null);
    const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0')

    useEffect(() => {
        async function getPokemons() {
            const response = await fetch(current);
            const data = await response.json();
            console.log(data);
            setPokemons(data.results);
            setBefore(data.previous);
            setAfter(data.next);
        }

        getPokemons();
    },[current])

  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <li key={index}>{pokemon.name}</li>
      })}
      <button onClick={() => before !== null && setCurrent(before)}>Anterior</button>
      <button onClick={() => after !== null && setCurrent(after)}>Siguiente</button>
    </div>
  )
}

export default Pokemons