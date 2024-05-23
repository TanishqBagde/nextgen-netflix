import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux';
import { API_END_POINT } from '../utils/constants';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from '../redux/userSlice';
import { toast } from 'react-hot-toast';


const Header = () => {
    const user = useSelector((store) =>store.app.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user);

   const logOutHandler = async () =>{
       try {
          const res = await axios.get(`${API_END_POINT}/logout`, user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        });
          console.log(res);
          dispatch(setUser(null));
          navigate("/");
           if(res.data.success){
               toast.success(res.data.message);
           }
       } 
     
       catch (err) {
           console.log(err);
           
       }
   }
    return (
        <div className="absolute flex w-[100%] items-center justify-between ">
            <img className="w-20 ml-4 p-2" src=//"https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-logo"
            "https://seeklogo.com/images/A/apple-tv-logo-DC5D65EEFE-seeklogo.com.png" alt ="logo"/>
           {
               user &&(
               <div className ='flex ml-auto'>
                   <h1 className = 'text-lg  font-bold py-2 text-yellow-200 '>{user.fullName}</h1>
                   <div className ="ml-4">
                       <button onClick={logOutHandler} className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
                       <button className="bg-blue-400 text-white px-4 py-2 ml-2 rounded-lg">Browse Movies</button>
                   </div>
                </div>
               )
           }
           
           
            <div className="ml-4">
                <select className="px-2 py-2 mr-4 bg-green-400 text-white rounded-lg"name="Language">
                    <option value="English">和 English</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
        </div>
    )
}
export default Header;