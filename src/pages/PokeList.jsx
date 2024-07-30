import { useState, useEffect } from "react";
import { PokeCard } from "../components/PokeCard";
import "./PokeList.css";

export const PokeList = () => {
  const [pokeArray, setPokeArray] = useState([]);

  /* 
  // This is going to create an infinite loop of component updates
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((jsonResponse) => setPokeArray(jsonResponse.results))
    .catch(() => console.error("Sorry the fetch didn't work"));

 */

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokeArray(
          jsonResponse.results.map((poke) => {
            return { name: poke.name };
          })
        );
        jsonResponse.results.forEach((eachPokemon, index) => {
          fetch(eachPokemon.url)
            .then((pokeResponse) => pokeResponse.json())
            .then((pokeData) => {
              console.log(pokeData.sprites.other.dream_world.front_default);
              const pokeImage =
                pokeData.sprites.other.dream_world.front_default;

              /* I have to create an array:
                [
                    {
                        name: Blastoise,
                        img: http-..dsadsadsa
                    }
                ]
            */
              setPokeArray((prevPokeArray) => {
                const newPokeArray = [...prevPokeArray];
                newPokeArray[index].img = pokeImage;
                return newPokeArray;
              });
            })
            .catch(() =>
              console.error("Sorry ,the fetch for the pokemon didn't work")
            );
        });
      })
      .catch(() => console.error("Sorry the fetch didn't work"));
  }, []);

  return (
    <ul>
      {pokeArray.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="container-cards">
          {pokeArray.map((eachPokemon, index) => {
            return <PokeCard eachPokemon={eachPokemon} key={index} />;
          })}
        </ul>
      )}
    </ul>
  );
};
