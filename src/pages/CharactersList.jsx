import { useEffect, useState } from "react";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=200")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCharacters(jsonResponse.items);
      })
      .catch(() => console.error("Sorry the fetch didn't work"));
  }, []);

  return (
    <ul className="container-cards">
      {characters.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        characters.map((character) => {
          return (
            <li key={character.id} className="card character">
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
            </li>
          );
        })
      )}
    </ul>
  );
};
