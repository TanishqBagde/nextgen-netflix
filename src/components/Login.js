import React from 'react';
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import { API_END_POINT } from '../utils/constants.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName,setFullName]= useState("");
    const [email,setEmail]       =useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate();
    
    const loginHandler = () => {
        setIsLogin (!isLogin);
    }
    const getInputData = async (e) =>{
        e.preventDefault();
        if(isLogin){
            // agar isLogin hai to Login karenge
            const user = {email,password};
            try{
             const res = await axios.post(`${API_END_POINT}/login`,user,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true,
            });
             console.log(res);
             if(res.data.success){
                 toast.success(res.data.message);
             }
             navigate("/browse");
            }catch(err){
                toast.error(err.response.data.message);
                console.log(err);
            }
        }
        else{
            //nhi to register karenge
            const user = {fullName,email,password};
            console.log(user);
            try{
                const res = await axios.post(`${API_END_POINT}/register`,user,{
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
                });     //register done using axios
                console.log(res);
                if (res.data.success){
                    toast.success(res.data.message);
                }
                setIsLogin(true);
            }catch(err){
                toast.error(err.response.data.message);
              console.log(err);
            }
        }
       
        setFullName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div>
            <Header />
            <div className="">
                <img
                    className="w-full h-auto"
                    src="https://e1.pxfuel.com/desktop-wallpaper/400/487/desktop-wallpaper-movie-collage-90s-movie-poster.jpg"
                    //"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
                    alt="banner"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl w-3/4">
                    <h1 className="font-bold text-4xl">Ready to watch? Enter your Details to create or restart your membership</h1>
                    <form onSubmit = {getInputData} className="flex flex-col w-3/12 pr-8 pl-8 my-8 mx-auto items-center justify-center bg-black rounded-lg opacity-85">
                        <h1 className="p-2 ">{isLogin? "Log In":"Sign In"}</h1>
                        <div className="mb-4 flex flex-col items-center">
                            {!isLogin && <input
                                value= {fullName}
                                onChange = {(e) =>setFullName(e.target.value)}
                                placeholder='Full Name'
                                type='text'
                                className="w-60 h-9 px-4 py-1 m-2 border text-lg rounded-md  focus:outline-none focus:border-blue-500 bg-slate-800"
                            />}
                            <input
                                value = {email}
                                onChange = {(e) =>setEmail(e.target.value)}
                                placeholder='Email'
                                type='text'
                                className="w-60 h-9 px-4 py-1 m-2 border text-lg rounded-md focus:outline-none focus:border-blue-500 bg-slate-800"
                            />
                            <input
                                value={password}
                                onChange = {(e) =>setPassword(e.target.value)}
                                placeholder='Password'
                                type="password"
                                className="w-60 h-9 px-4 py-1 m-2 border text-lg rounded-md focus:outline-none focus:border-blue-500 bg-slate-800"
                            />
                            <button className="bg-red-600 text-sm rounded-md w-60 p-2 m-3">{isLogin? "Sign In":"Log In"}</button>
                            <p className="text-sm font-light">{isLogin? "New to Netflix??":"Already have an account?  "}<span onClick={loginHandler} className="text-sm text-red-500 cursor-pointer">{isLogin? "Sign In":"login"}</span></p>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;