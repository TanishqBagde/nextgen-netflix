import axios from "axios";
import { useDispatch } from "react-redux";
import { getTrailerMovies } from "../redux/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const useMovieById = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
                console.log("Fetched Trailer Data:", res.data.results);
                const trailer = res?.data?.results?.find((item) => item.type === "Trailer");
                dispatch(getTrailerMovies(trailer || res.data.results[0]));
            } catch (err) {
                console.error("Error fetching trailer:", err); 
            }
        };

        if (movieId) {
            fetchTrailer();
        }
    }, [dispatch, movieId]);
}

export default useMovieById;
