import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

        <>
            <header>
                <div className="main-nav-bar">
                    <ul>
                        <li>
                        <a className="logo-main-nav-bar">Ò.</a>
                        </li>
                        <li>
                        <a className="dummy-links">ABRICǒT</a>
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
                        <a className="dummy-links">ALL TASKS</a>
                        </li>
                        <li>
                            <a className="dummy-links">SEARCH</a>
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

