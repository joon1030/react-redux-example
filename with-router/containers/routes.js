import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { createHistory } from 'history';
import { App, Parent, Child } from '../components/App';

console.log(createHistory);

const history = createHistory();


export default class TestRouter extends Component {
    render() {
        return (
            <Router history = {history}>
                <Route path="/" component={App}>
                    <Route path="parent" component={Parent}>
                        <Route path="child" component={Child} color={"blue"}/>
                        <Route path="child/:id" component={Child} color={"green"}/>
                    </Route>
                </Route>
            </Router>
        );
    }
}