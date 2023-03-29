
import Header from "./components/Header"
import Contant from "./components/contant/Contant"
import Total from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  

  return (
    <div>
      <Header  course={course.name}/>
      <Contant parts = {course.parts} />
      <Total exercises = {course.parts}/>
    </div>
  )
}

export default App