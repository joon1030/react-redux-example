import * as constants from '../constants'
import createReducer from '../utils/create-reducers'

const initialState = {
    list : [],
    view : {
        title : "",
        contents : ""
    }
};

const actionHandlers = {
    [constants.FETCH_NEWS_LIST] : (state, action) => ({
        list : Object.assign([], action.list),
        view : {}
    }),
    [constants.FETCH_NEWS]      : (state, action) => ({
        list : [],
        view :  Object.assign({}, action.view)
    })
};


export default createReducer(initialState, actionHandlers)