// action creators
export const addToFavorite = (article) => {
    return {
        type: 'favoriteArticles/addToFavorite',
        payload: article
    }
}

export const removeFromFavorite = (article) => {
    return {
        type: 'favoriteArticles/removeFromFavorite',
        payload: article
    }
}


// initial state
const initialState = [];

// reducer
export const favoriteArticlesReducer = (favoriteArticles = initialState, action) => {
    switch(action.type) {
        case 'favoriteArticles/addToFavorite':
            return [...favoriteArticles, action.payload];
        case 'favoriteArticles/removeFromFavorite':
            return favoriteArticles.filter(article => article.id !== action.payload.id);
        default:
            return favoriteArticles;
    }
}