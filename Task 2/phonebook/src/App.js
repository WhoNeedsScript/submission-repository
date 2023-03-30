import { useState } from 'react'
import Filter from './component/filter'
import Person from './component/person'
import Personform from './component/personform'
import Persons from './component/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPersonHandler = (event)=>{
      event.preventDefault();
     
      if(persons.some(person => person.name === newName))
      {
        alert(`${newName} is already added to phonebook`)
      }
      else{
        const personObject = {
          name: newName,
          id: persons.length + 1,
          number:newNumber
        }
        setPersons(persons.concat(personObject))
      }
      setNewName('')
      setNewNumber('')
  }
  const changeName=(event)=>{
    setNewName(event.target.value)
  }
  const changeNumber=(event)=>{
    setNewNumber(event.target.value)
  }
  const changeFilter=(event)=>{
    setFilter(event.target.value)
  }
  const personxml =  filter === '' ? persons.map(person => <Person key={person.id} person={person}/>) : persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())).map(person => <Person key={person.id} person={person}/>) ;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={changeFilter} input={filter}/>
      <h2>add a new</h2>
      <Personform OnClick={addPersonHandler} InputName={newName} OnChangeName={changeName} inputNumber={newNumber} OnChangeNumber={changeNumber}/>
      <h2>Numbers</h2>
      <Persons persons ={persons} filter={filter}/>
    </div>
  )
}

export default App