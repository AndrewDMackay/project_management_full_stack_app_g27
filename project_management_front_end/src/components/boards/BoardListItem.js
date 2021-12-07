import React, { useState, useEffect } from 'react';


const BoardListItem = ({ board }) => {

    // Loading message..

    if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    const url = "/boards/" + board.id;

    return (
        <>
            <div className="board-list-item-container">
                <h1>Board List Item</h1>
                <p>I am the Board List Item..</p>
                <p>Date {task.date}</p>
                <p>Time {task.time}</p>
                <p>Comment {task.comment}</p>
                <p>Priority {task.priority}</p>
                <p>Completed {task.completed}</p>
            </div>
        </>
    )

}


export default BoardListItem;

