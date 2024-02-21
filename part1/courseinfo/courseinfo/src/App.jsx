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
      {props.part} {props.exercises} <br/>
    </div>
  )    
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  let totalExerciseCount = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total totalExerciseCount={totalExerciseCount}/>
    </div>
  )
}

export default App
