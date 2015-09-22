import 'whatwg-fetch'
import * as constants from '../constants'

const NEWS_API = '/proxy/api/service/news';

export function fetchNewsList (options) {

    const { cateId } = options;

    return dispatch => {
        fetch(`${NEWS_API}/list/breakingnews/${cateId}.jsonp`)
            .then(res => res.json())
            .then(json => dispatch({
                type : constants.FETCH_NEWS_LIST,
                list : json.simpleNews
            }))
    }
}

export function fetchNews (options) {

    const { newsId } = options;

    return dispatch => {
        fetch(`${NEWS_API}/view.jsonp?newsId=${newsId}`)
            .then(res => res.json())
            .then(json => dispatch({
                type : constants.FETCH_NEWS,
                view : json
            }))
    }
}