import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

import '../style/navbar.css'

export default class Navbar extends Component {
    handleClick = e => e.target.nextElementSibling.classList.toggle('hidden');

    render() {
        return (
            <nav className="main-nav">
                <div className="container">
                    <Link to="/" className="logo"> <span>#</span> git clone OLX </Link>
                    <ul>
                        <li><NavLink to='/'> Home </NavLink></li>
                        <li>
                            <button onClick={this.handleClick}>Categories &#9662;</button>
                            <div className="categories hidden">
                                <ul>
                                    <li><NavLink to="/categories/books"> Books </NavLink> </li>
                                    <li><NavLink to="/categouries/electronics"> Electronics </NavLink> </li>
                                    <li><NavLink to="/categories/furnitre"> Furniture </NavLink> </li>
                                    <li><NavLink to="/categories/cars"> Cars </NavLink> </li>
                                </ul>
                            </div>
                        </li>
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="/login"> Login </NavLink></li>
                        <li><NavLink to="/signup"> Sign up </NavLink></li>
                    </ul>
                    <label>
                        <input type="search" name="Search-item" placeholder="Search"/>
                        <i className="fas fa-search"></i>
                    </label>
                </div>
            </nav>
        )
    }
}