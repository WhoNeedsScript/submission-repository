import Content from "./content/content"
import Header from "./header"
import TotalExercises from "./totalExercises "

const Course = ({course}) => { 
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <TotalExercises total = {course.parts.reduce((sum, part) => sum + part.exercises, 0)}/>
        </div>  
             )
  }
  
  export default Course