import React, { useState, useEffect } from 'react';
import TaskListItem from './TaskListItem';


const TaskList = ( board ) => {

    const taskNodes = board.tasks.map((task, index) => {
        return (
            <li key={index} className="task-unordered-list-li">
                <div>
                    <TaskListItem task={task} />
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="task-list-container">
                <h1>Task List</h1>
                <p>I am the Task List..</p>
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

