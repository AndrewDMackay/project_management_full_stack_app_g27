import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

        <>
            <header>
                <div className="main-nav-bar">
                    <ul>
                        <li className="logo-main-nav-bar">
                        <a className="dummy-links">ABRICOT</a>
                        {/* <img src={require(img)} alt="abricot logo"></img> */}
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/boards">BOARDS</Link>
                        </li>
                        <li>
                        <a className="dummy-links">NEW BOARDS</a>
                        </li>
                        <li>
                            <a className="dummy-links">FILTER</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
};


export default NavBar

