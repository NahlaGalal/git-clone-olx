import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Item from './Item';
import Home from './Home';
import Signup from './Signup';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/item" component={Item} />
                        <Route exact path="/signup" component={Signup} />
                    </Layout>
                </Switch>
            </BrowserRouter>
        )
    }
}