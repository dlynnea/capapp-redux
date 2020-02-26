import { getArticlesSuccess, getArticlesError, getArticlesPending } from "../actions/articleActions";
// import config from "../../config";

export default function (page=1) {
    return dispatch => {
        dispatch(getArticlesSuccess(null))
        dispatch(getArticlesPending())
        fetch(`http://localhost:3000/articles?per_page=6&page=${page}`)
            .then( async (res) => {
                return {
                    items: await res.json(),
                    pagination: {
                        total_pages: res.headers.get('X-WP-TotalPages')
                    }
                }
            })
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(getArticlesSuccess(res))
                return res
            })
            .catch((error) => {
                dispatch(getArticlesError(error))
            })
    }
}