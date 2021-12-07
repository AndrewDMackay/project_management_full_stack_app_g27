import React, { useState, useEffect } from 'react';


const TaskListItem = ({ selectedBoard }) => {

    // Loading message..

    if (!selectedBoard) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>
        )
    }

    return (
        <>
            <div className="task-list-item-container">
                <h1>Task List Item</h1>
                <p>Date {selectedBoard.task.date}</p>
                <p>Time {selectedBoard.task.time}</p>
                <p>Comment {selectedBoard.task.comment}</p>
                <p>Priority {selectedBoard.task.priority}</p>
                <p>Completed {selectedBoard.task.completed}</p>
            </div>
        </>
    )

}


export default TaskListItem;

