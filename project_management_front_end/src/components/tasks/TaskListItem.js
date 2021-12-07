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
                <p>I am the Task List Item..</p>
            </div>
        </>
    )

}


export default TaskListItem;

