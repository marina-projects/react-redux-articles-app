import allArticlesData from "../../data/articlesData";
import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'allArticles',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return allArticlesData;
        }
    }
}

export const allArticlesSlice = createSlice(options);

export const {loadData} = allArticlesSlice.actions;
export default allArticlesSlice.reducer;