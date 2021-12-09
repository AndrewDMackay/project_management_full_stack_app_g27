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
                <h4>Task List Item</h4>
                <p>{task.date}</p>
                <p>{task.time}</p>
                <p>{task.comment}</p>
                <p>Priority {task.priority}</p>
                <form>
                <p>Completed..</p>
                    <input className="form-inputs" type="checkbox" id="completed" value="completed" required />
                </form>
                {/* <p>Completed {task.completed}</p> */}
            </div>
        </>
    )

}


export default TaskListItem;

