import "./Lesson.css"



const LessonCard=({id,name,time,image})=>{
	
	return( 	
		<div>			
	     <div className='container' key={id}>
		<img src={image} alt="img" />
		<div className="content" key={id}>
		<h2>Lesson Name:<span>{name}</span></h2>
		<h2>Lesson Hour:<span>{time}</span></h2>

			</div>

</div> </div>)}


export default LessonCard;