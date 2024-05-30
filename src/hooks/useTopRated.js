import axios from "axios";
import { useDispatch } from "react-redux";
import { getTopRated } from "../redux/movieSlice";
import { options, Top_Rated } from "../utils/constants";

const useTopRated = async () => {
    const dispatch = useDispatch();
    try {
       const res = await axios.get(Top_Rated,options);
       console.log(res.data.results);
       dispatch(getTopRated(res.data.results));
       
    } catch (err) {
        console.log(err);
    }
}
export default useTopRated;