export const CharacterCard = ({character}) => {
  return (
    <li className="card">
        <h3>{character.name}</h3>
        <img src={character.img} alt={character.name} />
    </li>
  )
};
