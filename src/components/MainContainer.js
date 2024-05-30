import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";


const MainContainer = () => {
    const movie = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movie) return ; //early return

    const {title,overview,id} = movie[4];
    return(
        <div>
          <VideoTitle title={title} overview={overview}/>
          <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;
