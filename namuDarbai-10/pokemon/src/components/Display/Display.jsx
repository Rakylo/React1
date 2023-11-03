import React, { useEffect, useState } from "react";
import axios from "axios";
// import styles from "./Display.module.css";

export default function Display() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPokemonData = async () => {
      const randomPokemonIds = generateRandomIds(10);
      const pokemonUrls = randomPokemonIds.map(
        (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      const responses = await Promise.all(
        pokemonUrls.map((url) => axios.get(url))
      );

      const data = responses.map((response) => response.data);
      setPokemonData(data);
      setLoading(false);
    };

    fetchRandomPokemonData();
  }, []);

  const generateRandomIds = (count) => {
    const randomIds = [];
    while (randomIds.length < count) {
      const randomId = Math.floor(Math.random() * 898) + 1;
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    return randomIds;
  };

  return (
    <div className="pokemon-container">
      <h1 className="header">Random Pokémon Selection</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-list">
          {pokemonData.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <h2 className="pokemon-name">{pokemon.name}</h2>
              <p className="pokemon-type">
                Types: {pokemon.types.map((type) => type.type.name).join(", ")}
              </p>
              <p className="pokemon-info">
                Height: {pokemon.height} decimetres
              </p>
              <p className="pokemon-info">
                Weight: {pokemon.weight} hectograms
              </p>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
