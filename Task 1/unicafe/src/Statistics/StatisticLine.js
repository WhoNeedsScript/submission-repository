const StatisticLine = (props) => {
    if(props.all === 0)
    {
        return(

            <p>No feedback given</p>
        );
    }
    return (      
    <table>
        <tbody>   
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>   
            </tbody>
        </table>     
      );
};

export default StatisticLine;