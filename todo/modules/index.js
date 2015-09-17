import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

ReactDom.render(
	(<Provider store={store}>
		<App />
	</Provider>),
	rootElement
);