
const Person = ({ person, deletePerson }) => {
  const handleDeletePersonClick = (event) => {
    event.preventDefault();
    if (window.confirm(`Delete ${person.name} ?`)) {
      deletePerson(person.id);
    }
  };

  return (
    <div>
      {`${person.name} ${person.number}`}
      <button onClick={handleDeletePersonClick}>delete</button>
    </div>
  );
};

export default Person;