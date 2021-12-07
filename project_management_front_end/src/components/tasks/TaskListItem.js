import React, { useState, useEffect } from 'react';


const TaskListItem = () => {

       // Loading message..

       if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    //  Toggle selected board..

    const handleClick = function () {
        onBoardClick(board);
    }

    const url = "/boards/" + board.id;

    return (
        <>
            <div className="board-list-item-container">
                <div onClick={handleClick}>
                    <h1>Name {board.name}</h1>
                    <p>Comment {board.comment}</p>
                </div>
            </div>
        </>
    )

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

