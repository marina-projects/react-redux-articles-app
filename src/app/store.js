import { configureStore } from '@reduxjs/toolkit';
import allArticlesReducer from '../features/allArticles/allArticlesSlice';
import favoriteArticlesReducer from '../features/favoriteArticles/favoriteArticlesSlice';
import searchTermReducer from '../features/searchTerm/searchTermSlice';

export const store = configureStore({
    reducer: {
        favoriteArticles: favoriteArticlesReducer,
        searchTerm: searchTermReducer,
        allArticles: allArticlesReducer
    }
})