import React, { useState } from 'react'


const BoardList = ({ boards }) => {

    if (boards.length === 0) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>

        )
    }

    const boardsNodes = boards.map((board, index) => {
        return (
            <li key={index} className="board-unordered-list-li">
                <div>
                    <Board board={board} />
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="board-list-container">
                <h1>Board List</h1>
                <p>I am the Board List..</p>
                <div>
                    <ul className="board-unordered-list">
                        {boardsNodes}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default BoardList;

