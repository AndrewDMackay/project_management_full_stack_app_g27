import React, { useState } from 'react'
import BoardListItem from './BoardListItem'


const BoardList = ({ boards, onBoardClick }) => {

    // Loading message..

    if (boards.length === 0) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>
        )
    }

    const boardNodes = boards.map((board, index) => {
        return (
            <li key={index} className="board-unordered-list-li">
                <div>
                    <BoardListItem board={board} index={index} onBoardClick={onBoardClick}/>
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="board-list-container">
                <h1>Board List</h1>
                <div>
                    <ul className="board-unordered-list">
                        {boardNodes}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default BoardList;

