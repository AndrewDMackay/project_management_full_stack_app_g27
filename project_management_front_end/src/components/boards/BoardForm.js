import React, { useState } from 'react'


const BoardForm = ({ board, onNewBoardSubmit }) => {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    // Loading message..

    if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    // Board form functions.. 

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newBoard = {
            name: name,
            comment: comment
        }
        onNewBoardSubmit(newBoard);
    }

    return (
        <>
            <div className="board-form-container">
                <h2>New Bǒard</h2>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="form-inputs" type="text" id="name" placeholder="Enter Name.." value={name} onChange={handleNameChange} required />
                    <input className="form-inputs" type="text" id="comment" placeholder="Enter Comment.." value={comment} onChange={handleCommentChange} required />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}

export default BoardForm;

