import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logoNav.png";

export default class TodosList extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://google.com" target="_blank">
                    <img src={logo} width="100" height="50" alt="Junior Board" />
                </a>
                <Link to="/" className="navbar-brand">MERN Todo App</Link>
                <div className="nav-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Todos</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Todo</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}