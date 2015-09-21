import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(state => ({ routerState : state.router }))
export class App extends Component {

    static propTypes = {
        children : PropTypes.node
    };

    render() {
        const links = [
            '/',
            '/parent?foo=bar',
            '/parent/child/?bar=abc',
            '/parent/child/123?baz=foo'
        ].map((l, idx)=>
                <p key={idx}>
                    <Link to={l}>{l}</Link>
                </p>
        );
        return (
            <div>
                <h1>App Container</h1>
                {links}
                action : {this.props.location.action}
                <br/>
                pathname : {this.props.location.pathname}
                <br/>
                search : {this.props.location.search}
                {this.props.children}
            </div>
        );
    }
}

export class Parent extends Component {
    static propTypes = {
        children : PropTypes.node
    };

    render() {
        return (
            <div>
                <h2>Parent</h2>
                {this.props.children}
            </div>
        );
    }
}

export class Child extends Component {
    render() {
        return (
            <div style={{ backgroundColor : this.props.route.color }}>
                <h2>Child</h2>
            </div>
        );
    }
}