import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom';

const MainContainer = () => {

    return (
        <>
        <Switch>
            <div className="main-nav-bar-container">
                <NavBar/>
            </div>
            <div className="main-container">
                <h1 className="main-heading">Abricot</h1>
                <div className="main-logo-icon"></div>
                <div className="main-small-logo-icon"></div>
            </div>
        </Switch>
        </>
    )

}

export default MainContainer;


    // May not be needed with a Java back-end.. 

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

