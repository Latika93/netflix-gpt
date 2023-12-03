import { createSlice } from "@reduxjs/toolkit";

const gptStore = createSlice({
    name: 'gpt',
    initialState: {
        toggleValue: false,
        userSearch: '',
        movies: [],
    },
    reducers: {
        toggleGpt: (state) => {
            state.toggleValue = !state.toggleValue;
        },
        addSearchMovies : (state, action) => {
            state.movies = action.payload;
        },
        addUserSearch: (state, action) => {
            state.userSearch = action.payload;
        }
    }
})
export const {toggleGpt, addUserSearch, addSearchMovies} = gptStore.actions;
export default gptStore.reducer;