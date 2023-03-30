
const Filter = (props) => {
 
    return (
        <div>
        filter shown with: <input onChange={props.onChange} value={props.input}/>
        </div>
    )
  }
  
  export default Filter