import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Input from './Input';

import '../style/home.css';
import image from '../Images/lab1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    handleBlur = e => {}
    changeInput = e => {}

    render() {
        return (
            <div className="home container">
                <main>
                    <nav>
                        <ul>
                            <li> <NavLink to="/">All</NavLink> </li>
                            <li> <NavLink to="/">Books</NavLink> </li>
                            <li> <NavLink to="/">Electronics</NavLink> </li>
                            <li> <NavLink to="/">Furniture</NavLink> </li>
                            <li> <NavLink to="/">Cars</NavLink> </li>
                        </ul>
                    </nav>

                    <section className="card">
                        <img src={image} />
                        <div className="description">
                            <h2>Laptop Dell inspiron n-4050</h2>
                            <p>7800 LE.</p>
                            <p className="city"><FontAwesomeIcon icon="location-arrow" /> Mansoura</p>
                            <Link to="/">Read More...</Link>
                        </div>
                    </section>
                    <section className="card">
                        <img src={image} />
                        <div className="description">
                            <h2>Laptop Dell inspiron n-4050</h2>
                            <p>7800 LE.</p>
                            <p className="city"><FontAwesomeIcon icon="location-arrow" /> Mansoura</p>
                            <Link to="/">Read More...</Link>
                        </div>
                    </section>
                    <section className="card">
                        <img src={image} />
                        <div className="description">
                            <h2>Laptop Dell inspiron n-4050</h2>
                            <p>7800 LE.</p>
                            <p className="city"><FontAwesomeIcon icon="location-arrow" /> Mansoura</p>
                            <Link to="/">Read More...</Link>
                        </div>
                    </section>
                    <section className="card">
                        <img src={image} />
                        <div className="description">
                            <h2>Laptop Dell inspiron n-4050</h2>
                            <p>7800 LE.</p>
                            <p className="city"><FontAwesomeIcon icon="location-arrow" /> Mansoura</p>
                            <Link to="/">Read More...</Link>
                        </div>
                    </section>
                </main>
                <aside>
                    <form>
                        <h1>Join Us Now</h1>
                        <Input name="User"
                                label="User Name"
                                type="text"
                                text="Enter your user name"
                                icon="user"
                                handleBlur={this.handleBlur}
                                changeInput={this.changeInput}/>
                        <Input name="Password"
                                label="Password"
                                type="password"
                                text="Enter your password"
                                icon="key"
                                handleBlur={this.handleBlur}
                                changeInput={this.changeInput}/>
                        <div className="login-links">
                            <Link to="/">Forget your password?</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                        <input type="submit" value="Login"/>
                    </form>
                </aside>
            </div>
        )
    }
}