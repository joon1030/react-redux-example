import { combineReducers } from 'redux';
import { List, Map, Record } from 'immutable';

const initialState = Map({
});

const ACTIONS_MAP = {
};

function actions(state = initialState, action = {}) {
    const { type, payload } = action;
    const reducer = ACTIONS_MAP[type];

    /**
     * If the action corresponds to a handler in ACTIONS_MAP, return a reduction
     * of the state. If no corresponding action is found, simply pass the state
     * through.
     */
    return (reducer) ? reducer(state, payload) : state;
}

const rootReducer = combineReducers({ actions });

export default rootReducer;