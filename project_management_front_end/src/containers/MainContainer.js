import React, { useState } from 'react'

import NavBar from '../components/nav/NavBar';


const MainContainer = () => {

    return (

        <>
            <div className="main-nav-bar-container">
                <NavBar />
            </div>
            <div className="main-container">
                <h1>Main Container</h1>
                <p>I am the Main Container..</p>
            </div>
        </>
    )

}

export default MainContainer;

