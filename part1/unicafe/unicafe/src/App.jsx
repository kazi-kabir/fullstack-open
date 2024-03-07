import { useState } from 'react'

// silly outlines 
const Statistics = (props) => {
    <div>{props.total}</div>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = 0;
    
  const goodFeedback = () => {
    setGood(good + 1);
    total++;
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
    total++;
  }

  const badFeedback = () => {
    setBad(neutral + 1);
    total++;
  }
  
  console.log(total);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodFeedback}>good</button>  
      <button onClick={neutralFeedback}>good</button>
      <button onClick={badFeedback}>good</button>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>total: {total}</div>
    </div>
    
    
    
  )
}

export default App
