import LessonCard from "../Components/lessonCard/LessonCard";
import {data} from "../helper/data"
import "../Components/lessonCard/Lesson.css"

const Lesson = () => {
  return (
	<div className="lesson-container">
		{data.map(({id,name,time,image})=>(        
        <LessonCard key={id} name={name} time={time} image={image} />

      ))}
		
	</div>
  )
}

export default Lesson;