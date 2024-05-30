import React from "react";

const VideoTitle = ({title,overview}) => {
    return(
        <div className="absolute text-cyan-200 pt-[30%] ml-4 text-xl w-screen aspect-video z-40">
           <h1 className="text-5xl font-bold ml-4 mb-3">{title}</h1>
           <p className="ml-4 w-1/2 text-white">{overview}</p>
           <div className="z-50">
               <button className="bg-yellow-200 opacity-85 text-black rounded-lg px-6 py-2 ml-4 hover:bg-opacity-75">Play</button>
               <button className="bg-yellow-200 bg-opacity-85 text-black rounded-lg px-6 py-2 ml-4 mt-6 hover:bg-opacity-75">Watch More</button>
           </div>
        </div>
    )
}

export default VideoTitle;