// react
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';

// redux
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

import rootReducer from './reducers';
import TestRouter from './containers/routes.js'

function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

class Root extends Component {

    render() {
        return (
            <Provider store={configureStore()}>
                <TestRouter />
            </Provider>
        );
    }
}

ReactDOM.render(<Root /> , document.getElementById('root'));
