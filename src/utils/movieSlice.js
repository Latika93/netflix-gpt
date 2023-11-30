import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies : null,
        upcomingMovies: null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addMovie, addTrailer, addPopularMovie,addTopRatedMovie, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;