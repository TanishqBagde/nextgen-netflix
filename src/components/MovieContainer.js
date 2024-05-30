import React from "react";
import {useSelector} from "react-redux";
import MovieList from "./MovieList";


const MovieContainer = () =>{
    const movie = useSelector(store =>store.movie);

    return (
        <div className="bg-black py-40 ">
            <div className=" -mt-52  relative z-10 p-5 " >
             <MovieList title={"Now Playing Movies"} movies ={movie.nowPlayingMovies}/>
             <MovieList title={"Popular Movies"} movies ={movie.popularMovies}/>
             <MovieList title={"Top Rated Movies"} movies ={movie.topRated}/>
             <MovieList title={"Upcoming Movies"} movies ={movie.upcoming}/>
            </div>
          
        </div>
    )
}

export default MovieContainer;