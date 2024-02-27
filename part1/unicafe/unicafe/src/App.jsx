import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1);
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodFeedback}>good</button>

      <div>{good}</div>
    </div>
    
    
    
  )
}

export default App