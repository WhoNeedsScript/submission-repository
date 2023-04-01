import { useState, useEffect } from 'react'
import Filter from './component/filter'
import Personform from './component/personform'
import Persons from './component/persons'
import personService from './services/person'
import Notification from './component/notification'
import MessageType from './model/message/messagetype'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message,setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  },[])

  const addPersonHandler = (event)=>{
      event.preventDefault();
      if(newName === '' || newName ==='')
      {
        alert(`Please fill Name and Number`)
        return
      }
      let newMessager = {message:undefined,type:undefined};
      const foundPerson = persons.find(person => person.name === newName);
      if(foundPerson === undefined)
      {
        const personObject = {
          name: newName,
          id: persons.length + 1,
          number:newNumber
        }
        personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
        })
        const newMessager ={
          message:`Added ${personObject.name}`,
          type:MessageType.Success
        }
        setMessage(newMessager)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
      else if(foundPerson.number !== newNumber)
      {
        if (window.confirm(`${foundPerson.name} is already added in your phonebook, replace the old number with the new one?`)) {
          const changedPerson = { ...foundPerson, number: newNumber }
          personService
            .update(foundPerson.id, changedPerson)
            .then(response => {
              setPersons(persons.map(person => person.id !== response.id ? person : response))
              const newMessager ={
                message:`${changedPerson.name} number changed`,
                type:MessageType.Success
              }
              setMessage(newMessager)
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
            .catch(error => {
              setPersons(persons.filter(person => person.id !==  changedPerson.id))
              const newMessager ={
                message:`Informattion of ${changedPerson.name} has already been removed from the server`,
                type:MessageType.Error
              }
              setMessage(newMessager)
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
            
        }
      }
      else
      {
        alert(`${newName} is already added to phonebook`)
      }
     
      setNewName('')
      setNewNumber('')
     
      
  }
  const deletePerson = (id) => {
   personService.deletePerson(id)
  setPersons(persons.filter(n => n.id !== id))
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
 
  return (
    <div>
      <Notification message={message}/>
      <h2>Phonebook</h2>
      <Filter onChange={changeFilter} input={filter}/>
      <h2>add a new</h2>
      <Personform OnClick={addPersonHandler} inputName={newName} OnChangeName={changeName} inputNumber={newNumber} OnChangeNumber={changeNumber}/>
      <h2>Numbers</h2>
      <Persons persons ={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App