
const Button = (props) => {
 
  return (
    <>
        <button onClick={props.handleGoodClick}>good</button>  
        <button onClick={props.handleNeutralClick}>neutral</button>
        <button onClick={props.handleBadClick}>bad</button>
    </>
  )
}

export default Button