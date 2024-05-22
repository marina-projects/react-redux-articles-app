import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        clearSearchTerm: (state, action) => {
            return '';
        }
    }
}

const searchTermSlice = createSlice(options);

export const {setSearchTerm, clearSearchTerm} = searchTermSlice.actions;
export default searchTermSlice.reducer;



// // action creators

// export const setSearchTerm = (term) => {
//     return {
//         type: 'searchTerm/setSearchTerm',
//         payload: term
//     }
// }

// export const clearSearchTerm = () => {
//     return {
//         type: 'searchTerm/clearSearchTerm'
//     }
// }

// // initial state
// const initialSearchTerm = '';

// // reducer

// export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
//     switch(action.type) {
//         case 'searchTerm/setSearchTerm':
//             return action.payload;
//         case 'searchTerm/clearSearchTerm':
//             return '';
//         default:
//             return searchTerm; 
//     }
// }