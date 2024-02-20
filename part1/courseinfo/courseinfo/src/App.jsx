import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.part1} {props.exercise1} <br/>
      {props.part2} {props.exercise2} <br/>
      {props.part3} {props.exercise3} <br/>
    </div>
  )  
}

const Total = (props) => {
  return(
    <div>
      {props.totalExerciseCount}
    </div>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let totalExerciseCount = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1={part1} exercise1={exercises1} 
      part2={part2} exercise2={exercises2}  
      part3={part3} exercise3={exercises3} />  
      <Total totalExerciseCount={totalExerciseCount}/>
    </div>
  )
}

export default App
