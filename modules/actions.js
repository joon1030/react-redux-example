// 어플리케이션에서 스토어로 보내는 데이터 묶음
// 스토어의 유일한 정보원
// store. dispatch()를 통해 이들을 보낼수 있다

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETED_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL : 'SHOW_ALL',
	SHOW_COMPLETED : 'SHOW_COMPLETED',
	SHOW_ACTIVE : 'SHOW_ACTIVE'
};

// 액션 생성자
export function addTodo(text){
	return { type : ADD_TODO, text };
}

export function completeTodo(index){
	return { type : COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter){
	return { type : SET_VISIBILITY_FILTER, filter };
}