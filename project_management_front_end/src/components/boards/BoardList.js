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

    // Map board nodes..

    const boardNodes = boards.map((board, index) => {
        return (
            <li key={index} className="board-unordered-list-li">
                <div>
                    <BoardListItem board={board} key={index} onBoardClick={onBoardClick}/>
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="board-list-container">
                <h1>[ Bǒard List ]</h1>
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

