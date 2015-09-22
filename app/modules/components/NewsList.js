import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { fetchOnUpdate } from '../decorators'

class News extends Component {

    static propTypes = PropTypes.objectOf({
        title : PropTypes.string.isRequired,
        newsId : PropTypes.string.isRequired
    }).isRequired;

    render() {
        const { news } = this.props;

        return (
            <div>
                <Link to={`/${this.props.cateId}/${news.newsId}`}>{news.title}</Link>
            </div>
        );
    }
}

@fetchOnUpdate(['cateId'], (params, actions) => {
    const { cateId } = params;
    actions.fetchNewsList({ cateId });
})
export default class NewsList extends Component {

    static propTypes = {
        actions : PropTypes.object.isRequired,
        list    : PropTypes.array.isRequired
    };

    render () {

        const { list, params } = this.props;

        return (
            <div>
                {list.map(news =>
                    <News news={news} key={news.newsId} cateId={params.cateId}/>
                )}
            </div>
        );
    }
}
