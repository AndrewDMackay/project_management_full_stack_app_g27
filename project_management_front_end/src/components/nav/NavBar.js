import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

        <>
            <header>
                <div className="main-nav-bar">
                    <ul>
                        <li className="logo-main-nav-bar">
                        ABRICOT
                        {/* <img src={require(img)} alt="abricot logo"></img> */}
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/boards">BOARDS</Link>
                        </li>
                        <li>
                            NEW BOARDS
                        </li>
                        <li>
                            FILTER
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
};


export default NavBar

