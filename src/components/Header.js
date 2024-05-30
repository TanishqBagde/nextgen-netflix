import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux';
import { API_END_POINT } from '../utils/constants';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from '../redux/userSlice';
import { toast } from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';


const Header = () => {
    const user = useSelector((store) =>store.app.user);
    const toggle = useSelector((store => store.movie.toggle));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user);

   const logOutHandler = async () =>{
       try {
          const res = await axios.get(`${API_END_POINT}/logout`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        });
          console.log(res);
          
           if(res.data.success){
            dispatch(setUser(null));
            toast.success(res.data.message);
            navigate("/");
           }
           else{
               toast.error("Logout failed , Please try again");
           }
       } 
     
       catch (err) {
           console.log(err);
           
       }
   }

   const toggleHandler = () => {
       dispatch(setToggle());
   }
    return (
        <div className="absolute flex w-[100%] items-center justify-between z-50 p-4 bg-opacity-50 ">
            <img className="w-20 ml-4 p-2 z-50" src=//"https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-logo"
            "https://seeklogo.com/images/A/apple-tv-logo-DC5D65EEFE-seeklogo.com.png" alt ="logo"/>
           {
               user &&(
               <div className ='flex ml-auto '>
                   <h1 className = 'text-lg  font-bold py-2 text-yellow-200 '>{user.fullName}</h1>
                   <div className ="ml-4">
                       <button onClick={logOutHandler} className="bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer">Logout</button>
                       <button onClick={toggleHandler} className="bg-yellow-300 text-black px-4 py-2 ml-2 rounded-lg cursor-pointer">{toggle ?"Home":"Search🔎"}</button>
                   </div>
                </div>
               )
           } 
           
           
            <div className="ml-4 z-50">
                <select className="px-3 py-2 mr-4 mb-1 bg-yellow-200 text-black rounded-lg cursor-pointer"name="Language">
                    <option value="English">和 English</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
        </div>
    )
}
export default Header;