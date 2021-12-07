import React, { useState } from 'react'
import TaskList from '../tasks/TaskList';


const BoardDetail = ({ selectedBoard, onHomeClick, onDeleteBoard, onUpdateBoard }) => {

    // Loading message..

    if (!selectedBoard) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>
        )
    }

    // Return to boards from detail..

    const handleClick = function () {
        onHomeClick();
    }


    const handleDeleteBoard = () => {
        onDeleteBoard(selectedBoard.id)
    }

    const handleHandleDeleteTask = (taskIndex) => {
        let copiedSelectedBoard = { ...selectedBoard }
        copiedSelectedBoard.tasks.splice(taskIndex, 1)
        onUpdateBoard(selectedBoard)
    }

    const boardHasTask = (task) =>{
      return selectedBoard.tasks.some((selectedBoardTask) => {
        return task.id === selectedBoardTask.id
      })
    }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const index = parseInt(event.target.tasks.value)
    //   const task = tasks[index];
    //   board.tasks.push(task)
    //   onUpdate(board);
    // }

    // const boardsTasks = board.tasks.map((task, index) => {
    //   return <li key={index}>
    //   {task.location}<button onClick={() => handleDeleteTask(index)}>Delete</button>
    //   </li>
    // })

    // const editUrl = "/boards/" + board.id + "/edit"

    // const taskOptions = tasks.map((task, index) => {
    //   if (!boardHasTask(task)){
    //     return (
    //       <option key={index} value={index}>{task.location}</option>
    //     )
    //   } else {
    //     return null
    //   }
    // })  

    return (
        <>
            <div className="board-list-item-container">
                <h1>{selectedBoard.name}</h1>
                <p>{selectedBoard.comment}</p>
                <TaskList tasks={selectedBoard.tasks} />
                <button className="home-button" onClick={handleClick}>Home</button>
            </div>
            {/* <div className="board-detail-content">
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
//             </div> */}
        </>
    )
}


export default BoardDetail;

