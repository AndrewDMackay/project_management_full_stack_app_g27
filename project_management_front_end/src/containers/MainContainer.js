import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom';

const MainContainer = () => {
    // const [boards, setBoards] = useState(null)
    // const [selectedBoard, setSelectedBoard] = useState(null)


    // const onBoardClick = function (board) {
    //     fetch()
    //         .then(res => res.json())
    //         .then(data => setSelectedBoard(data))
    // }


    // const onHomeClick = function () {
    //     setSelectedBoard(null);
    // }


    return (
        <>
            <div className="main-nav-bar-container">
                <NavBar/>
            </div>
            <div className="main-container">
                <h1 className="main-heading">Abricot</h1>
                <div className="main-logo-icon"></div>
                <div className="main-small-logo-icon"></div>
            </div>
        </>
    )

}

export default HomeContainer;

