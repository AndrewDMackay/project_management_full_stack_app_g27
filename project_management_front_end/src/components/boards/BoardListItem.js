import React, { useState, useEffect } from 'react';


const BoardListItem = ({ board, onBoardClick }) => {

    // Loading message..

    if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

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

}


export default BoardListItem;

