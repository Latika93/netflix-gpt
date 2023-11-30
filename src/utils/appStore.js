import {configureStore} from '@reduxjs/toolkit';
import useReducer  from './userSlice';
import moviesReducer from './movieSlice'
import toggleGpt  from './gptStore';

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: moviesReducer,
        toggle: toggleGpt
    }
})

export default appStore;