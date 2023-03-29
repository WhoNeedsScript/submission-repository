const Total = (props) => {
 
    let i = 0;
    props.exercises.forEach(element => i += element.exercises);
    return (
        <p>Number of exercises {i}</p>
    )
  }
  
  export default Total