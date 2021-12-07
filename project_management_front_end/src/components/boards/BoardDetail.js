import React, { useState } from 'react'
import TaskList from '../tasks/TaskList';


const BoardDetail = ({ board, onDelete, onUpdate }) => {

    // Loading message..

    if (!board) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>
        )
    }

    return (
        <>
            <div className="board-list-item-container">
               <TaskList tasks={board.tasks}/>
            </div>
        </>
    )
}




//     const handleDelete = () => {
//         onDelete(board.id)
//     }

//     const deleteTask = (taskIndex) => {
//         let copiedBoard = { ...board }
//         copiedBoard.tasks.splice(taskIndex, 1)
//         onUpdate(board)
//     }

//     const boardHasTask = (task) => {
//         return board.tasks.some((boardTask) => {
//             return task.id === boardTask.id
//         })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const index = parseInt(event.target.tasks.value)
//         const task = tasks[index];
//         board.tasks.push(task)
//         onUpdate(board);
//     }

//     const boardsTasks = board.tasks.map((task, index) => {
//         return <li key={index}>
//             {task.location}<button onClick={() => deleteTask(index)}>Delete</button>
//         </li>
//     })

//     const editUrl = "/boards/" + board.id + "/edit"

//     const taskOptions = tasks.map((task, index) => {
//         if (!boardHasTask(task)) {
//             return (
//                 <option key={index} value={index}>{task.location}</option>
//             )
//         } else {
//             return null
//         }
//     })


//     return (

//         <>
//             <div className="board-detail-container">
//                 <h1>Board Detail</h1>
//                 <p>I am the Board Detail..</p>
//             </div>
//             <div className="board-detail-content">
//                 <BoardDetail board={board} />
//                 <p>Tasks</p>
//                 <ul>
//                     {boardsTasks}
//                 </ul>
//                 <form onSubmit={handleSubmit}>
//                     <select name="tasks" >
//                         {taskOptions}
//                     </select>
//                     <input type="submit" value="Add Task" />
//                 </form>
//                 <button onClick={handleDelete}>Delete {board.firstName}</button>
//                 <Link to={editUrl}><button type="button">Edit {board.firstName}</button></Link>
//             </div>
//         </>
//     )
// }


export default BoardDetail;

