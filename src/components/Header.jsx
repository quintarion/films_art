import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "../style/header.scss";

const Header = ({tagline}) => {
    return (
        <header className="header" id="wrapper">
            <div className="header--heading">
                <h1><NavLink to="/">ergon.</NavLink></h1>
                <p>{tagline}</p>
            </div>
            <div className="header--menu">
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;