import {configureStore} from '@reduxjs/toolkit';
import useReducer  from './userSlice';
import moviesReducer from './movieSlice'
import toggleGpt  from './gptStore';
import configSlice from './configSlice';

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: moviesReducer,
        toggle: toggleGpt,
        config: configSlice
    }
})

export default appStore;