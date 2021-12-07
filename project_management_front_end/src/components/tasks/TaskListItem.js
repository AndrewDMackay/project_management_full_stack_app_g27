import React, { useState, useEffect } from 'react';


const TaskListItem = ({ task }) => {

    // Loading message..

    if (!task) {
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
                <p>Date {task.date}</p>
                <p>Time {task.time}</p>
                <p>Comment {task.comment}</p>
                <p>Priority {task.priority}</p>
                <p>Completed {task.completed}</p>
            </div>
        </>
    )

}


export default TaskListItem;

