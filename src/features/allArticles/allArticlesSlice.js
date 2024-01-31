import allArticlesData from "../../data/articlesData";

// actions creator

export const loadData = () => {
    return {
        type: 'allArticles/loadData',
        payload: allArticlesData
    }
};

// initial state

const initialState = [];

// Reducer

export const allArticlesReducer = (allArticles = initialState, action) => {
    switch(action.type) {
        case 'allArticles/loadData':
            return  action.payload;

        default:
            return allArticles;
    }
};

