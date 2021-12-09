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
                <h4>Ò</h4>
                <h5>{task.date} > {task.time} > {task.comment} [ Priority > {task.priority} ]</h5>
                <form>
                {/* <p>Completed..</p> */}
                <button>DǒNE</button>
                    {/* <input className="form-inputs" type="checkbox" id="completed" value="completed" required /> */}
                </form>
            </div>
        </>
    )

}


export default TaskListItem;

