import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BoardListItem = ({ board, onBoardClick }) => {

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

    //  Link to board by Id, alternative..

    // const urlBoardById = "/boards/" + board.id;

    return (
        <>
            <div className="board-list-item-container">
                <div onClick={handleClick}>
                    <h4>{board.name}</h4>
                    <h5>{board.comment}</h5>
                </div>
                <button className="delete-button">X</button>
                {/* <Link to={urlBoardById} className="test">
                    <h1>Name {board.name}</h1>
                    <p>Comment {board.comment}</p>
                </Link> */}
            </div>
        </>
    )

}


export default BoardListItem;

