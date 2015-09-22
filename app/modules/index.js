import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect, Router, Route } from 'react-router';
import { Provider, connect } from 'react-redux'
import { IntlProvider } from 'react-intl';
import { createHistory } from 'history';

import configureStore from './utils/configure-store';

import { Application, NewsContainer, NewsList, NewsView } from './components';

const history = createHistory();

function renderRoutes (history) {
    return (
        <Router history={history}>
            <Route component={Application}>
                <Route path="/" component={NewsContainer}>
                    <Route path=":cateId" component={NewsList} />
                    <Route path=":cateId/:newsId" component={NewsView} />
                </Route>
            </Route>
        </Router>
    );
}


function getRootChildren(props) {

    const initialData = {
        data : props.data
    };

    return [
        <IntlProvider key="intl" {...initialData}>
            {renderRoutes.bind(null, props.history)}
        </IntlProvider>
    ];
}


@connect(({ news }) => ({ news }))
class Root extends Component {

    static propTypes = {
        news    : PropTypes.object.isRequired,
        history : PropTypes.object.isRequired
    };

    render () {
        return (
            <div>{getRootChildren(this.props)}</div>
        )
    }
}

const initialState = {
    news : {
        list : [],
        view : {}
    }
};

const store = configureStore(initialState);

ReactDom.render(
    <Provider store={store}>
        <Root history={history} />
    </Provider>
    , document.getElementById('app')
);