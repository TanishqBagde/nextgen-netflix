import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constants";


const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Now_Playing_Movie,options);
        console.log(res.data.results);
        dispatch(getNowPlayingMovies(res.data.results));
    } catch (err) {
       console.log(err); 
    }
    
}
export default useNowPlayingMovies;