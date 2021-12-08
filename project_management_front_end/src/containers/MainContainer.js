import React from 'react';

import NavBar from '../components/nav/NavBar';


const MainContainer = () => {

    return (

        <>
            <div className="main-nav-bar-container">
                <NavBar />
            </div>
            <div className="main-container">
                <h1>ABRICÓT</h1>
                <h3>PROJECT MANAGEMENT</h3>
            </div>
        </>
    )

}

export default MainContainer;

