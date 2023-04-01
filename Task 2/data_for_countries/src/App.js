import { useState, useEffect } from 'react'
import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([]) 

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response)
      })
  },[])
 
  return (
    <div>
     
    </div>
  )
}

export default App