import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import { options, SearchMulti } from "../utils/constants";
import MovieList from "./MovieList";


const SearchMovies = () => {
    const [searchMovies , setSearchMovies] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.app.isLoading);
    const {movieName,searchedMovie} = useSelector(store => store.search);
    console.log(movieName,searchedMovie);

    const submitHandler = async (e) => {
       e.preventDefault();
       dispatch(setLoading(true));
       try {
           const res = await axios.get(`${SearchMulti}${searchMovies}&include_adult=false&language=en-US&page=1`,options);
           const movies = res?.data?.results;
           dispatch(setSearchMovieDetails({searchMovies,movies}));
           console.log(res.data.results);

       } 
       catch (err) {
           console.log(err);
       }
       finally {
        dispatch(setLoading(false));
       }
       setSearchMovies("");
    }
    return (
    <div className="">
        <div className="flex justify-center pt-[20%] w-full">
            <form onSubmit={submitHandler} className="w-full max-w-lg">
                <div className="flex shadow-md border-2 border-gray-300 rounded-lg w-full">
                    <input
                        value ={searchMovies} onChange = {(e) => {setSearchMovies(e.target.value)}}
                        className="flex-grow outline-none rounded-lg text-lg p-2"
                        type="text"
                        placeholder="Search Movies, TV shows, Series...."
                    />
                    <button className="px-4 py-2 bg-yellow-300 rounded-r-lg text-black hover:bg-cyan-400 ml-2">
                        {isLoading ? "Loading...": "Search"}
                    </button>
                </div>
            </form>
        </div>
            <div> 
            <MovieList title={movieName} movies ={searchedMovie}/>
            </div>   
        
     </div>
    );
};

export default SearchMovies;
