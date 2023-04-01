const FilterCountries = ({countries}) => {
   if(countries.length > 10)
   {
    return (
        <div>
         <p>Too many matches, specify another filter</p>
        </div>
      )
   }
   return (
    countries.map(country=>(
    <div>
        <p>{country}</p>
    </div>
    ))
    
  )
  }
  
  export default FilterCountries