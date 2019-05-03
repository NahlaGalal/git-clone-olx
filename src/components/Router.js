import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Layout from './Layout';
import Item from './Item';
import Home from './Home';
import Signup from './Signup';
import Error from './Error';
import AddItem from './AddItem';
import Profile from './Profile';
import Category from './Category';
import About from './About';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/item" component={Item} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/addItem" component={AddItem} />
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/categories/:name" component={Category}/>
                            <Route exact path="/about" component={About} />
                            <Route exact path="/error" component={Error} />
                            <Redirect to="/error" />
                        </Switch>
                    </Layout>
                </Switch>
            </BrowserRouter>
        )
    }
}