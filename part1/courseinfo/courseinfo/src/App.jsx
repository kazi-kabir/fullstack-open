import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}

// renders out parts themselves
const Part = (props) => {
  return(
    <div>
      {props.part} {props.exercise} <br/>
    </div>
  )    
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
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
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total totalExerciseCount={totalExerciseCount}/>
    </div>
  )
}

export default App
