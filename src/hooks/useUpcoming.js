import axios from "axios";
import { useDispatch } from "react-redux";
import { getUpcoming } from "../redux/movieSlice";
import { options, Upcoming } from "../utils/constants";

const useUpcoming = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming,options);
        console.log(res.data.results);
        dispatch(getUpcoming(res.data.results));
        
    } catch (err) {
        console.log(err);
    }
}
export default useUpcoming;