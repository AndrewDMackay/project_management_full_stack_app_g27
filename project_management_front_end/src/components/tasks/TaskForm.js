import React, { useState, useEffect } from 'react';


const TaskForm = ({ task, onNewTaskSubmit }) => {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [comment, setComment] = useState("")
    const [priority, setPriority] = useState("")
    const [completed, setCompleted] = useState("")

    // Loading message..

    if (!task) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    // Task form functions.. 

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTask = {
            name: name,
            comment: comment
        }
        onNewTaskSubmit(newTask);
    }

    return (
        <>
            <div className="task-form-container">
                <h1>New Task</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="form-inputs" type="text" id="name" placeholder="Enter Name.." value={name} onChange={handleNameChange} required />
                    <input className="form-inputs" type="text" id="comment" placeholder="Enter Comment.." value={comment} onChange={handleCommentChange} required />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}

export default TaskForm;

