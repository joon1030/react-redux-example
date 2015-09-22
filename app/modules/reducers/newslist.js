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
    [constants.FETCH_NEWS_LIST] : (state, action) => ({ list : action.list }),
    [constants.FETCH_NEWS]      : (state, action) => ({ view : action.view })
};


export default createReducer(initialState, actionHandlers)