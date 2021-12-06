import React, { useState, useEffect } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';

import BoardForm from '../components/boards/BoardForm';
import BoardList from '../components/boards/BoardList';
import BoardDetail from '../components/boards/BoardDetail';

const BoardContainer = () => {

    return (
        <>
            <div className="main-nav-bar-container">
                <NavBar />
            </div>
            <div className="Board-container">
                <h1>Board Container</h1>
                <p>I am the Board Container..</p>
            </div>
        </>
    )
}

export default BoardContainer;

// const [boards, setBoards] = useState([]);
// const [tasks, setTasks] = useState([]);

// const requestAll = function(){
//     const request = new Request();
//     const boardPromise = request.get('/api/boards')
//     const taskPromise = request.get('/api/tasks')

//     Promise.all([boardPromise, taskPromise, ])
//     .then((data) => {
//         setBoards(data[0]);
//         setTasks(data[1]);
//     })
// }

// useEffect(()=>{
// requestAll()
// }, [])


//  Board functions.. 

// const findBoardById = function(id){
// return boards.find((board) => {
//     return board.id === parseInt(id);
// })
// }

// const handleDeleteBoard = function(id){
// const request = new Request();
// const url = "/api/boards/" + id
// request.delete(url)
// .then(() => window.location = "/boards")
// }

// const handlePostBoard = function(board){
// const request = new Request();
// request.post("/api/boards", board)
// .then(() => window.location = '/boards')
// }

// const handleUpdateBoard = function(board){
// const request = new Request();
// request.patch('/api/boards/' + board.id, board)
// .then(() => {
//     window.location = '/boards/' + board.id
// })
// }


//  Task functions.. 

// const findTaskById = function(id){
// return tasks.find((task) => {
//     return task.id === parseInt(id);
// })
// }

// const handleDeleteTask = function(id){
// const request = new Request();
// const url = "/api/tasks/" + id
// request.delete(url)
// .then(() => window.location = "/tasks")
// }

// const handlePostTask = function(task){
// const request = new Request();
// request.post("/api/tasks", task)
// .then(() => window.location = '/tasks')
// }

// const handleUpdateTask = function(task){
// const request = new Request();
// request.patch('/api/tasks/' + task.id, task)
// .then(() => {
//     window.location = '/tasks/' + task.id
// })
// }

// if(!boards){
// return null
// }

//     return(

//         <>
//         {/* <Switch> */}
//         <Routes>
//             <Route exact path = '/boards/new' render={() =>{
//             return <BoardForm boards={boards} onCreate={handlePostBoard}/>
//             }}/> 

//             <Route exact path="/boards/:id/edit" render={(props) =>{
//             const id = props.match.params.id;
//             const board = findBoardById(id);
//             return <BoardForm board={board} boards={boards} onUpdate={handleUpdateBoard}/>
//             }}/>  

//             <Route exact path="/boards/:id" render={(props) =>{
//             const id = props.match.params.id;
//             const board = findBoardById(id);
//             return <BoardDetail board={board}
//             onDelete={handleDeleteBoard}
//             onUpdate={handleUpdateBoard} 
//             />
//             }}/>

//             <Route render={() => {
//             return <BoardList boards={boards}/>
//             }} />
//         </Routes>
//         {/* </Switch> */}
//         </>
//     )
//   }


// export default BoardContainer;

