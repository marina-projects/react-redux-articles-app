import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'favoriteArticles',
    initialState: [],
    reducers: {
        addToFavorite: (state, action) => {
            return [...state, action.payload];
        },
        removeFromFavorite: (state, action) => {
            return state.filter(article => article.id !== action.payload.id);
        }
    }
}

const favoriteArticlesSlice = createSlice(options);
export const {addToFavorite, removeFromFavorite} = favoriteArticlesSlice.actions;
export default favoriteArticlesSlice.reducer;

// // action creators
// export const addToFavorite = (article) => {
//     return {
//         type: 'favoriteArticles/addToFavorite',
//         payload: article
//     }
// }

// export const removeFromFavorite = (article) => {
//     return {
//         type: 'favoriteArticles/removeFromFavorite',
//         payload: article
//     }
// }


// // initial state
// const initialState = [];

// // reducer
// export const favoriteArticlesReducer = (favoriteArticles = initialState, action) => {
//     switch(action.type) {
//         case 'favoriteArticles/addToFavorite':
//             return [...favoriteArticles, action.payload];
//         case 'favoriteArticles/removeFromFavorite':
//             return favoriteArticles.filter(article => article.id !== action.payload.id);
//         default:
//             return favoriteArticles;
//     }
// }