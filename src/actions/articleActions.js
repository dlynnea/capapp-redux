export const GET_ARTICLES_PENDING = 'get-articles-pending';
export const GET_ARTICLES_SUCCESS = 'get-articles-success';
export const GET_ARTICLES_ERROR = 'get-articles-error';

export function getArticlesPending(){
    return {
        type: GET_ARTICLES_PENDING
    }
}

export function getArticlesSuccess(articles) {
    return {
        type: GET_ARTICLES_SUCCESS,
        articles
    }
}

export function getArticlesError(error) {
    return {
        type: GET_ARTICLES_ERROR,
        error
    }
}