import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

        <>
            <header>
                <div className="main-nav-bar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/boards">Boards</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
};


export default NavBar

