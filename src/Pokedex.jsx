import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async() => {
      const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
      const data = await response.json();
      console.log(data);
      setPokemons(data);
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <h1>Pokédex</h1>
      <ul>
        {pokemons.map((pokemon, index) =>(
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default Pokedex;