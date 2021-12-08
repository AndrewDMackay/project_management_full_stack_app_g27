import React, { useState } from 'react'


const BoardForm = ({ board }) => {

    const [input, setInput] = useState("")

    // Loading message..

    if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    // Board form functions.. 

    const handleNameChange = (event) => {
        setInput(event.target.value)
    }

    const handleCommentChange = (event) => {
        setInput(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const newBoard = {
            name: name,
            comment: comment

        }


        return (
            <>
                <div className="board-form-container">
                    <h1>New Board</h1>
                    <form className="form-container" onSubmit={handleSubmit}>
                        <input className="form-inputs" type="text" id="name" placeholder="Enter Name.." value={name} onChange={handleNameChange} required />
                        <input className="form-inputs" type="text" id="comment" placeholder="Enter Comment.." value={comment} onChange={handleCommentChange} required />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </>
        )
    }
}

export default BoardForm;

