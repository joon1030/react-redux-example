import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchOnUpdate } from '../decorators'
import * as newsListActions from '../actions/newslist'

@fetchOnUpdate(['newsId'], (params, actions) => {
    const { newsId } = params;
    actions.fetchNews({ newsId });
})
@connect(state => ({
    view : state.news.view
}), dispatch => ({
    actions : bindActionCreators(newsListActions, dispatch)
}))
export default class NewsView extends Component {

    static propTypes = {
        view : PropTypes.object
    };

    render () {

        const { view } = this.props;

        return (
            <div >
                <h1>{view.title}</h1>
                <div>{view.content}</div>
            </div>
        );
    }
}
