// import React from 'react';
// import {Link} from 'react-router-dom';
// import TaskListItem from './TaskListItem';



// const TaskDetail = ({task, raids, onDelete, onUpdate}) => {

//     if (!task){
//       return <p>Loading...</p>
//     }


//   const handleDelete = () => {
//     onDelete(task.id)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const index = parseInt(event.target.raids.value)
//     const raid = raids[index];
//     task.raids.push(raid)
//     onUpdate(task);
//   }

//   const editUrl = "/tasks/" + task.id + "/edit"

//   return (
//     <div className = "component">
//     <TaskListItem task = {task}/>
//     <button onClick={handleDelete}>Delete {task.firstName}</button>
//     <Link to= {editUrl}><button type="button">Edit {task.firstName}</button></Link>
//     </div>
//   )
// }

// export default TaskDetail;

