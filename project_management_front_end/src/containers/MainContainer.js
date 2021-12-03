import React, { useState } from 'react'


const MainContainer = () => {
    const [boards, setBoards] = useState(null)
}


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

