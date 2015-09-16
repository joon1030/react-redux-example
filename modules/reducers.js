// 액션은 무언가 일어난다는 사실을 기술
// 어플리케이션 상태가 어떻게 바뀌는지 특정하지 않는다

import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

// state를 변경하지 않는다.
// object assign 을 통해 복사한다.
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action){
	switch(action.type) {
		case SET_VISIBILITY_FILTER : 
			return action.filter;
		default : 
			return state;
	};
}

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO :
			return [...state, {
				text : action.text,
				completed : false
			}];
		case COMPLETE_TODO : 
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					completed : true
				}),
				...state.slice(action.index + 1)
			];
		default : 
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;