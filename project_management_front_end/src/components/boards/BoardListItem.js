import React, { useState, useEffect } from 'react';


const BoardListItem = ({ board, onBoardListItemClick }) => {

    // Loading message..

    if (!board) {
        <div className="loading-message-container">
            <p>Loading..</p>
        </div>
    }

    const url = "/boards/" + board.id;

    const handleClick = function () {
        onBoardListItemClick(board);
      }

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

