import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
   name:"Search",
   initialState:{
       movieName:null,
       searchedMovie:null,
   },
   reducers: {
     setSearchMovieDetails:(state,action) => {
         const {searchMovies,movies} = action.payload;
         state.movieName = searchMovies;
         state.searchedMovie = movies;
     }
}
});

export const  {setSearchMovieDetails} = searchSlice.actions;
export default searchSlice.reducer;
