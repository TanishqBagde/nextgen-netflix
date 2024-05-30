import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
    console.log(movies);
    return (
        <div >
            <h1 className="text-3xl py-7 ml-4 font-bold text-yellow-200 mt-4">{title}</h1>
            <div className="overflow-x-auto cursor-pointer flex">
                <div className="flex items-center">
                {movies && movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path}></MovieCard> 
                        ))
                    ) : (
                        <p className="text-white">No movies available</p>
                )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
