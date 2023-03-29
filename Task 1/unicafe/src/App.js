import { useState, useEffect } from 'react';
import Statistics from './Statistics/Statistics ';
import Button from './components/button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [percentPositiv, setPercentPositiv] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  useEffect(() => {
    setAll(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    if (all !== 0) {
      setAvg((good - bad) / all);
    } else {
      setAvg(0);
    }
  }, [good, bad, all]);

  useEffect(() => {
    if (good === 0 || all === 0) {
      setPercentPositiv(0);
    } else {
      setPercentPositiv((good / all) * 100);
    }
  }, [good, all]);

  return (
    <>
    <div>
        <h1>give feedback</h1>
        <Button handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick}/>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        percentPositiv={percentPositiv}
      />
    </>
  );
};

export default App;