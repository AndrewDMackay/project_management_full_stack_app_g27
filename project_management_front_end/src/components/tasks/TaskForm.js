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

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value)
    }

    const handleCompletedChange = (event) => {
        event.target.checked ? setCompleted("true") : setComment("false")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTask = {
            date: date,
            time: time,
            comment: comment,
            priority: priority,
            completed: completed
        }
        onNewTaskSubmit(newTask);
    }

    return (
        <>
            <div className="task-form-container">
                <h1 className="main-container-logo-tiny">Ò</h1>
                <h2>New Task</h2>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="form-inputs" type="date" id="date" placeholder="Enter Date.." value={date} onChange={handleDateChange} required />
                    <input className="form-inputs" type="time" id="time" placeholder="Enter Time.." value={time} onChange={handleTimeChange} required />
                    <input className="form-inputs" type="text" id="comment" placeholder="Enter Comment.." value={comment} onChange={handleCommentChange} required />
                    {/* <input className="form-inputs" type="checkbox" id="completed" value="true" onChange={handleCompletedChange} /> */}
                    {/* <label className="form-inputs" for="completed">Completed..</label> */}
                    {/* <input className="form-inputs" type="radio" id="priority-low" name="priority" value="LOW" onChange={handlePriorityChange} required /> */}
                    <label className="form-inputs" for="priority-low">Low..</label>
                    {/* <input className="form-inputs" type="radio" id="priority-medium" name="priority" value="MEDIUM" onChange={handlePriorityChange} required /> */}
                    <label className="form-inputs" for="priority-medium">Medium..</label>
                    {/* <input className="form-inputs" type="radio" id="priority-high" name="priority" value="HIGH" onChange={handlePriorityChange} required /> */}
                    <label className="form-inputs" for="priority-high">High..</label>
                    <input className="form-inputs" type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}

export default TaskForm;

