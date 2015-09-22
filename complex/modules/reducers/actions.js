import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts( news ) {
    return {
        type : REQUEST_POSTS,
        news
    };
}

function receivePosts( news, json ) {
    return {
        type : RECEIVE_POSTS,
        news,
        posts : json.simpleNews.map(child => child),
        receivedAt : Date.now()
    };
}

function fetchPosts(news) {
    return dispatch => {
        dispatch(requestPosts(news));
        return fetch(`http://media.daum.net/api/service/news/list/breakingnews/${news}.jsonp`)
            .then(req => req.json())
            .then(json => dispatch(receivePosts(news, json)));
    }
}

function shouldFetchPosts(state, reddit) {
    const posts = state.postsByReddit[reddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}


export function fetchPostsIfNeeded(reddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), reddit)) {
            return dispatch(fetchPosts(reddit));
        }
    };
}