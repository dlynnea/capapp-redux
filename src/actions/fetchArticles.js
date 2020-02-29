import { getArticlesSuccess, getArticlesError, getArticlesPending } from "../actions/articleActions";

export default function (page=1) {
    return dispatch => {
        // dispatch(getArticlesSuccess(null))
        dispatch(getArticlesPending())
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/articles?per_page=6&page=${page}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(async (res) => {
                return {
                    items: await res.json(),
                    pagination: {
                        total_pages: res.headers.get('X-WP-TotalPages')
                    }
                }
            })
            .then(res => {
                if(res.items.message) {
                    throw(res.items.message);
                } else {
                    dispatch(getArticlesSuccess(res))
                }
                return res
            })
            .catch((error) => {
                dispatch(getArticlesError(error))
            })
    }
}