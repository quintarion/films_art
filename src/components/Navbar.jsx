import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

class Navbar extends React.Component {
    state = {}

    render() {
        return(
            <nav className="nav">
                <ul>
                    <li><NavLink activeClassName="selected" to="/about">&Agrave; PROPOS</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/service">SERVICES</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/contact">CONTACT</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;