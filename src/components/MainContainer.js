import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";


const MainContainer = () => {
    const movie = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movie) return ; //early return
    
    const randomIndex = Math.floor(Math.random() * movie.length);
    const { title, overview, id } = movie[randomIndex];
    return(
        <div className ="p-4 md:p-8">
          <VideoTitle title={title} overview={overview}/>
          <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;
