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
                        <a className="logo-main-nav-bar-text">ABRICǒT.</a>
                        </li>
                        <li>
                            <Link to="/">HOME. ></Link>
                        </li>
                        <li>
                            <Link to="/boards">BǒARDS. ></Link>
                        </li>
                        <li>
                        <a className="dummy-links">RECENT BOARDS. ></a>
                        </li>
                        <li>
                        <a className="dummy-links">ALL TASKS. ></a>
                        </li>
                        <li>
                            <a className="dummy-links">SEARCH. ></a>
                        </li>
                        <li>
                            <a className="dummy-links">FILTER. ></a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
};


export default NavBar

