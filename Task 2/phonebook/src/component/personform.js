const Personform = (props) => {
 
    return (
        <form onSubmit={props.OnClick}>
        <div>
          name: <input onChange={props.OnChangeName} value={props.InputName}/>
        </div>
        <div>
          number: <input onChange={props.OnChangeNumber} value={props.InputNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }
  
  export default Personform