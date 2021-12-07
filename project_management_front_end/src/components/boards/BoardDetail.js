import React, { useState } from 'react'
import TaskList from '../tasks/TaskList';


const BoardDetail = ({ selectedBoard, onHomeClick }) => {

    // Loading message..

    if (!selectedBoard) {
        return (
            <div className="loading-message-container">
                <p>Loading..</p>
            </div>
        )
    }

    const handleClick = function(){
        onHomeClick();
    }

    return (
        <>
            <div className="board-list-item-container">
                <h1>{selectedBoard.name}</h1>
                <p>{selectedBoard.comment}</p>
                <TaskList tasks={selectedBoard.tasks} />
                <button className="home-button" onClick={handleClick}>Home</button>
            </div>
            {/* <div className="board-detail-content">
//                 <BoardDetail board={board} />
//                 <p>Tasks</p>
//                 <ul>
//                     {boardsTasks}
//                 </ul>
//                 <form onSubmit={handleSubmit}>
//                     <select name="tasks" >
//                         {taskOptions}
//                     </select>
//                     <input type="submit" value="Add Task" />
//                 </form>
//                 <button onClick={handleDelete}>Delete {board.firstName}</button>
//                 <Link to={editUrl}><button type="button">Edit {board.firstName}</button></Link>
//             </div> */}
        </>
    )
}


export default BoardDetail;

