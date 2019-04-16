import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import '../style/navbar.css'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {search: ''}
    }

    handleClick = e => e.target.nextElementSibling.classList.toggle('hidden');
    handleChange = e => this.setState({search: e.target.value});    
    displayNav = e => e.currentTarget.parentElement.nextElementSibling.classList.toggle('hidden')

    render() {
        return (
            <nav className="main-nav">
                <div className="container">
                    <div className="responsive">
                        <Link to="/" className="logo"> <span>#</span> git clone OLX </Link>
                        <button onClick={this.displayNav}><p></p><p></p><p></p></button>
                    </div>
                    <ul className="hidden">
                        <li><NavLink to='/'> Home </NavLink></li>
                        <li className="categories">
                            <button onClick={this.handleClick}>Categories </button>
                            <div className="hidden">
                                <ul>
                                    <li><NavLink to="/categories/books"> Books </NavLink> </li>
                                    <li><NavLink to="/categouries/electronics"> Electronics </NavLink> </li>
                                    <li><NavLink to="/categories/furnitre"> Furniture </NavLink> </li>
                                    <li><NavLink to="/categories/cars"> Cars </NavLink> </li>
                                </ul>
                            </div>
                        </li>
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="/addItem">Add Item</NavLink></li>
                        <li><NavLink to="/signup"> Sign up </NavLink></li>
                    </ul>
                    <label>
                        <input type="search" name="Search-item" placeholder="Search" onChange={this.handleChange}/>
                        <FontAwesomeIcon icon="search" />
                    </label>
                </div>
            </nav>
        )
    }
}