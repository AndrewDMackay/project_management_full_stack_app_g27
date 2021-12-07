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
                <h1>Name {board.name}</h1>
                <p>Comment {board.comment}</p>
            </div>
        </>
    )

}


export default BoardListItem;

