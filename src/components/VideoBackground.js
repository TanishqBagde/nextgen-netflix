import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({ movieId, bool }) => {
    useMovieById(movieId);
    const trailerMovie = useSelector(store => store.movie.trailerMovie);

    useEffect(() => {
        console.log("Trailer Movie:", trailerMovie);
    }, [trailerMovie]);

    if (!trailerMovie) {
        return <div>Loading...</div>; // Handle loading state
    }
    return (
        <div className="relative w-full h-full z-20 overflow-hidden">
            <iframe 
                className={`${bool ? "w-full h-full absolute top-0 left-0" : "w-screen aspect-video"}`}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?mute=1&autoplay=1&controls=0&showinfo=0&autohide=1&loop=1`}
                title="YouTube video player"
                frameBorder="0" 
                referrerpolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoBackground;
