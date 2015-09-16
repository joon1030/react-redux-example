// 무엇이 일어날지 = 액션
// 액션에 따라 상태를 수정 = 리듀서
// 스토어는 이 둘을 함께 가져온다
// 어플리케이션 상태를 저장하고 
// getState / dispatch(set) / subscribe(listen)
// 어플리케이션은 하나의 스토어만 가질수 있음
import { createStore } from 'redux';
import todoApp from './reducers'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';

let store = createStore(todoApp, window.STATE_FROM_SERVER);

// init state
console.log(store.getState());

// 상태가 바뀔때마다 기록합니다
let unsubscribe = store.subscribe(() => 
	console.log(store.getState())
);

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
