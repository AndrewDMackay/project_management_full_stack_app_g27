import React, { useState } from 'react'


const BoardForm = ({ board, onDelete, onUpdate }) => {

    // Loading message..

    if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    const handleDelete = () => {
      onDelete(board.id)
    }

    // const deleteTask = (taskIndex) => {
    //   let copiedBoard = {...board}
    //   copiedBoard.tasks.splice(taskIndex, 1)
    //   onUpdate(board)
    // }

    // const boardHasTask = (task) =>{
    //   return board.tasks.some((boardTask) => {
    //     return task.id === boardTask.id
    //   })
    // }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const index = parseInt(event.target.tasks.value)
    //   const task = tasks[index];
    //   board.tasks.push(task)
    //   onUpdate(board);
    // }

    // const boardsTasks = board.tasks.map((task, index) => {
    //   return <li key={index}>
    //   {task.location}<button onClick={() => deleteTask(index)}>Delete</button>
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
            <div className="board-form-container">
                <h1>Board Form</h1>
                <p>I am the Board Form..</p>
            </div>
        </>
    )

}


export default BoardForm;

