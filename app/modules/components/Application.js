import React, { PropTypes, Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group';

export default class Application extends Component {

    static propTypes = {
        children: PropTypes.any
    };

    constructor (props, context) {
        super(props, context);
    }

    render () {

        var key = this.props.location.pathname;

        return (
            <div>
                <h1>APPLICATION</h1>
                <ReactTransitionGroup component="div" transitionName="example">
                    {React.cloneElement(this.props.children || <div />, { key: key })}
                </ReactTransitionGroup>
            </div>
        )
    }
}
