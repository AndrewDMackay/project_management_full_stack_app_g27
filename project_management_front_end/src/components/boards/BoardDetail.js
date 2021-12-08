import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import TaskList from '../tasks/TaskList';
import TaskForm from '../tasks/TaskForm';

const BoardDetail = ({ selectedBoard, onHomeClick, onNewTaskSubmit }) => {

    // Loading message..

    if (!selectedBoard) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>
        )
    }

    // Return to boards from board detail..

    const handleClick = function () {
        onHomeClick();
    }

    const handleNewTask = function(task){
        task.board = selectedBoard
        onNewTaskSubmit(task)
    }

    const urlEditBoard = "/boards/" + selectedBoard.id + "/edit"

    return (
        <>
            <div className="board-detail-container">
                <h1>{selectedBoard.name}</h1>
                <p>{selectedBoard.comment}</p>
                <TaskList tasks={selectedBoard.tasks} />
                <TaskForm onNewTaskSubmit={handleNewTask}/>
                <button className="home-button" onClick={handleClick}>Back To Boards..</button>
            </div>
        </>
    )
}


export default BoardDetail;




// Board detail functions..

{/* <div className="board-test">
<Link to={urlEditBoard}><button type="button">Edit Board</button></Link>
<button onClick={handleDeleteBoard}>Delete Board</button>
</div> */}

// const handleDeleteBoard = () => {
//     onDeleteBoard(selectedBoard.id)
// }

// const urlEditBoard = "/boards/" + selectedBoard.id + "/edit"

// const handleDeleteTask = (taskIndex) => {
//     let copiedSelectedBoard = { ...selectedBoard }
//     copiedSelectedBoard.tasks.splice(taskIndex, 1)
//     onUpdateBoard(selectedBoard)
// }

// const boardHasTask = (task) => {
//     return selectedBoard.tasks.some((selectedBoardTask) => {
//         return task.id === selectedBoardTask.id
//     })
// }

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const index = parseInt(event.target.tasks.value)
//     const task = selectedBoard.tasks[index];
//     selectedBoard.tasks.push(task)
//     onUpdateBoard(selectedBoard);
// }

