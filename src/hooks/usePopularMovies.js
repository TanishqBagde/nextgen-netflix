import axios from "axios";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
import { options, Popular_Movies } from "../utils/constants";

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_Movies,options);
        console.log(res.data.results);
        dispatch(getPopularMovies(res.data.results));
    } catch (err) {
        console.log(err);
        
    }
} 
export default usePopularMovies;