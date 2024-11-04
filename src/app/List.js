import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    liPerson(person)
  );

  const chemicals = people.filter(person =>
    person.profession === "químico"
  );

  const listChemicals = chemicals.map(person =>
    liPerson(person)
  );

  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
      <h1>Químicos</h1>
      <ul>{listChemicals}</ul>
    </article>
  );
}

function liPerson(person){
  return <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>;
}
