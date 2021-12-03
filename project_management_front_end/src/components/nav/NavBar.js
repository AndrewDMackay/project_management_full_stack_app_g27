
import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = ({ }) => {



    return (

        <>
            <div className="main-nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/boards">Boards</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};


export default NavBar

