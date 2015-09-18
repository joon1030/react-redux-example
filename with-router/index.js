// react
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router';
import { createHistory } from 'history';

// redux
import { createStore, compose, combineReducers } from 'redux';
import { Provider, connect, applyMiddleware } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';

@connect(state => ({ routerState : state.router }))
class App extends Component {

    static propTypes = {
        children : PropTypes.node
    }

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
                {this.props.children}
            </div>
        );
    }
}

class Parent extends Component {
    static propTypes = {
        children : PropTypes.node
    }

    render() {
        return (
            <div>
                <h2>Parent</h2>
                {this.props.children}
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <h2>Child</h2>
            </div>
        );
    }
}

const reducer = combineReducers({
    router : routerStateReducer
});

const store = compose(
    reduxReactRouter({ createHistory })
)(createStore)(reducer);

class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <ReduxRouter>
                        <Route path="/" component={App}>
                            <Route path="parent" component={Parent}>
                                <Route path="child" component={Child}/>
                                <Route path="child/:id" component={Child}/>
                            </Route>
                        </Route>
                    </ReduxRouter>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<Root /> , document.getElementById('root'));
