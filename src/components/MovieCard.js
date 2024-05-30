import React from "react";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";
import { Banner_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieId }) => {
    const dispatch = useDispatch();
    if (posterPath == null) return null;

    const handleOpen = () => {
        dispatch(getId(movieId));
        dispatch(setOpen(true));
    };

    return (
        <div className="w-48 ml-5 flex" onClick={handleOpen}>
            <img src={`${Banner_URL}/${posterPath}`} alt="movie-Banner" />
        </div>
    );
};

export default MovieCard;
