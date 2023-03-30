import Person from "./person";

const Persons = (props) => {
  
    return props.filter === '' ? 
    props.persons.map(person => <Person key={person.id} person={person}/>) : 
    props.persons.filter(person => person.name.toLowerCase().startsWith(props.filter.toLowerCase())).map(person => <Person key={person.id} person={person}/>);
    
  }
  
  export default Persons