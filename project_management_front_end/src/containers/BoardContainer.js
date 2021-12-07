import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Request from '../helpers/request';
import NavBar from '../components/nav/NavBar';
import BoardForm from '../components/boards/BoardForm';
import BoardList from '../components/boards/BoardList';
import BoardListItem from '../components/boards/BoardListItem';
import BoardDetail from '../components/boards/BoardDetail';


const BoardContainer = () => {

    const [boards, setBoards] = useState(null);
    const [selectedBoard, setSelectedBoard] = useState(null);

    const requestAll = function () {
        const request = new Request();
        const boardPromise = request.get('/api/boards')

        Promise.all([boardPromise])
            .then((data) => {
                setBoards(data[0]);
            })
    }

    useEffect(() => {
        requestAll()
    }, [])


    //  Toggle selected board, and set selected board to null, to return home..

    const onBoardClick = function (board) {
        setSelectedBoard(board);
    }

    const onHomeClick = function () {
        setSelectedBoard(null);
    }

    //  Board functions.. 

    const findBoardById = function (id) {
        return boards.find((board) => {
            return board.id === parseInt(id);
        })
    }

    const handleDeleteBoard = function (id) {
        const request = new Request();
        const url = "/api/boards/" + id
        request.delete(url)
            .then(() => window.location = "/boards")
    }

    const handlePostBoard = function (board) {
        const request = new Request();
        request.post("/api/boards", board)
            .then(() => window.location = '/boards')
    }

    const handleUpdateBoard = function (board) {
        const request = new Request();
        request.patch('/api/boards/' + board.id, board)
            .then(() => {
                window.location = '/boards/' + board.id
            })
    }


    //  Task functions.. 

    // const findTaskById = function (id) {
    //     return tasks.find((task) => {
    //         return task.id === parseInt(id);
    //     })
    // }

    // const handleDeleteTask = function (id) {
    //     const request = new Request();
    //     const url = "/api/tasks/" + id
    //     request.delete(url)
    //         .then(() => window.location = "/boards")
    // }

    // const handlePostTask = function (task) {
    //     const request = new Request();
    //     request.post("/api/tasks", task)
    //         .then(() => window.location = '/boards')
    // }

    // const handleUpdateTask = function (task) {
    //     const request = new Request();
    //     request.patch('/api/tasks/' + task.id, task)
    //         .then(() => {
    //             window.location = '/boards/' + task.id
    //         })
    // }


    if (!boards) {
        return null;
    }

    return (
        <>
            <div className="main-nav-bar-container">
                <NavBar />
            </div>
            <div className="board-container">
                <div>
                    <h1>Board Container</h1>
                    {/* {boards && <BoardList boards={boards} onBoardClick={onBoardClick}/>} */}
                    {!selectedBoard ? <BoardList boards={boards} onBoardClick={onBoardClick} /> : null}
                    {selectedBoard ? <BoardDetail selectedBoard={selectedBoard} onHomeClick={onHomeClick} /> : null}
                </div>
                <Routes>
                    <Route exact path='/boards/new' render={() => {
                        return <BoardForm boards={boards} onCreate={handlePostBoard} />
                    }} />

                    <Route exact path="/boards/:id/edit" render={(props) => {
                        const id = props.match.params.id;
                        const board = findBoardById(id);
                        return <BoardForm board={board} boards={boards} onUpdateBoard={handleUpdateBoard} />
                    }} />

                    <Route exact path="/boards/:id" render={(props) => {
                        const id = props.match.params.id;
                        const board = findBoardById(id);
                        return <BoardDetail board={board}
                            onDeleteBoard={handleDeleteBoard}
                            onUpdateBoard={handleUpdateBoard}
                        />
                    }} />

                    <Route render={() => {
                        return <BoardList boards={boards} />
                    }} />
                </Routes>
            </div>
        </>
    )
}


export default BoardContainer;

