import React, { useState, useEffect } from 'react';
import TaskListItem from './TaskListItem';


const TaskList = ({ tasks }) => {

    // Loading message..

    // if (!tasks) {
    //     return (
    //         <div className="loading-message-container">
    //             <p>Loading..</p>
    //         </div>
    //     )    
    // }

    // Map task nodes..

    const taskNodes = tasks.map((task, index) => {

        return (
            <li key={index} className="task-unordered-list-li">
                <div>
                    <TaskListItem task={task} key={index} />
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="task-list-container">
                <h1>Task List</h1>
                <div>
                    <ul className="task-unordered-list">
                        {taskNodes}
                    </ul>
                </div>
            </div>
        </>
    )

}


export default TaskList;

