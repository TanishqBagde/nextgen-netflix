import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRated: null,
        upcoming: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: "",
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        getTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        getUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovies: (state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        getId: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { getNowPlayingMovies, getPopularMovies, getTopRated, getUpcoming, setToggle, getTrailerMovies, setOpen, getId } = movieSlice.actions;

export default movieSlice.reducer;
