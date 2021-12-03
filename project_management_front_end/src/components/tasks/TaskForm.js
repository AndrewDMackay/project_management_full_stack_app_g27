// import React, {useState, useEffect} from 'react';

// const TaskForm = ({task, boards, onCreate, onUpdate}) => {

// const [stateTask, setStateTask] = useState(
//     {
//         firstName: "",
//         lastName: "",
//         age: 0,
//         board: null
//     }
// )

// const handleChange = function(event){
//     let propertyName = event.target.name;
//     let copiedTask = {...stateTask}
//     copiedTask[propertyName] = event.target.value;
//     setStateTask(copiedTask)
// }

// const handleBoard = function(event){
//     const index = parseInt(event.target.value)
//     const selectedBoard = boards[index]
//     let copiedTask = {...stateTask};
//     copiedTask['board'] = selectedBoard
//     setStateTask(copiedTask)
// }

// const handleSubmit = function(event){
//     event.preventDefault();
//     if(stateTask.id){  
//         onUpdate(stateTask)
//       } else {
//         onCreate(stateTask);
//       }
// }

// const findBoardIndex = function(){
//     if(task){
//       return boards.findIndex(board => task.board.id === board.id)
//     } else {
//       return null;
//     }
//   }

// useEffect(()=>{
//   if(task){
//     let copiedTask = {...task}
//     setStateTask(copiedTask)
// }
//   }, [task])

// const boardOptions = boards.map((board, index) => {
//     return <option key={index} value={index}>{board.name}</option>
// })

// let heading = "";

// if (!task){
//     heading = "Create Task"
//   } else {
//     heading = "Edit " + task.firstName;
//   }

// if (!boards.length === 0){
//     return <p>Loading...</p>
//     }

//   return(
//     <>
//     <p>I am the TaskListItem..</p>
//     </>
//     )
// }

// export default TaskForm;

