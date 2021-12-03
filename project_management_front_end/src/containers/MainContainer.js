import React, { useState } from 'react'
import {Route, Routes, Switch} from 'react-router-dom';

import NavBar from '../components/nav/NavBar';

const MainContainer = () => {

    return (
        <>
        {/* <Switch> */}
        <Routes>
            <div className="main-nav-bar-container">
                <NavBar/>
            </div>
            <div className="main-container">
                <h1 className="main-heading">Abricot</h1>
                <div className="main-logo-icon"></div>
                <div className="main-small-logo-icon"></div>
            </div>
        </Routes>
        {/* </Switch> */}
        </>
    )

}

export default MainContainer;

