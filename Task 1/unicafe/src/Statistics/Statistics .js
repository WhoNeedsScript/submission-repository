import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    if(props.all === 0)
    {
        return(

            <p>No feedback given</p>
        );
    }
    return (
        <>
          <h1>Statistics</h1>
          {props.all === 0 ? (
            <p>No feedback given</p>
          ) : (
            <>
              <StatisticLine text="good" value =  {props.good}/>
              <StatisticLine text="neutral" value ={props.neutral} />
              <StatisticLine text="bad" value ={props.bad} />
              <StatisticLine text="all" value =  {props.all}/>
              <StatisticLine text="average" value ={props.avg} />
              <StatisticLine text="positive" value ={props.percentPositiv + " %"} />
            </>
          )}
        </>
      );
};

export default Statistics;