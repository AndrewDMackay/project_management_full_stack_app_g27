import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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

    // Return to boards from board detail..

    const handleClick = function () {
        onHomeClick();
    }

    // Board detail functions..

    const handleDeleteBoard = () => {
        onDeleteBoard(selectedBoard.id)
    }

    const handleDeleteTask = (taskIndex) => {
        let copiedSelectedBoard = { ...selectedBoard }
        copiedSelectedBoard.tasks.splice(taskIndex, 1)
        onUpdateBoard(selectedBoard)
    }

    const boardHasTask = (task) => {
        return selectedBoard.tasks.some((selectedBoardTask) => {
            return task.id === selectedBoardTask.id
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const index = parseInt(event.target.tasks.value)
        const task = selectedBoard.tasks[index];
        selectedBoard.tasks.push(task)
        onUpdateBoard(selectedBoard);
    }

    const editUrl = "/boards/" + selectedBoard.id + "/edit"

    return (
        <>
            <div className="board-list-item-container">
                <h1>{selectedBoard.name}</h1>
                <p>{selectedBoard.comment}</p>
                <TaskList tasks={selectedBoard.tasks} />
                <button className="home-button" onClick={handleClick}>Home</button>
            </div>
            <div className="board-detail-content">
                <form onSubmit={handleSubmit}>
                    <input type="submit" value="Add Task" />
                </form>
                <button onClick={handleDeleteTask}>Delete {selectedBoard.name}</button>
                <Link to={editUrl}><button type="button">Edit {selectedBoard.name}</button></Link>
            </div>
        </>
    )
}


export default BoardDetail;

