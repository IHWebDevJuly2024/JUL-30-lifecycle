import "./PokeCard.css";

export const PokeCard = ({ eachPokemon }) => {
  return (
    <li className="card">
      <img src={eachPokemon.img} alt="" />
      <h3>{eachPokemon.name}</h3>
    </li>
  );
};
