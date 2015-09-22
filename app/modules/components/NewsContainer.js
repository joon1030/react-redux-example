import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as newsListActions from '../actions/newslist'

@connect(state => ({
    list : state.news.list
}), dispatch => ({
    actions : bindActionCreators(newsListActions, dispatch)
}))
export default class NewsList extends Component {

    static propTypes = {
        list : PropTypes.any,
        actions  : PropTypes.object
    };

    render () {
        return (
            <div>
                <div className="header">
                    <h1>NEWS LIST</h1>
                </div>
                {/* this will render the child routes */}
                {this.props.children &&
                React.cloneElement(this.props.children, { ...this.props })}
            </div>
        )
    }
}
