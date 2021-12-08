import React from 'react';

import NavBar from '../components/nav/NavBar';


const MainContainer = () => {

    return (

        <>
            <div className="main-nav-bar-container">
                <NavBar />
            </div>
            <div className="main-container">
                <h1>ABRICǒT.</h1>
                <h1 className="main-container-logo">Ò</h1>
                <h4>[ PRǒJECT MANAGEMENT. ]</h4>
            </div>
        </>
    )

}

export default MainContainer;

